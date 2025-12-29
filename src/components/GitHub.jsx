import { useState, useEffect } from "react";
import { Github, Users, GitFork, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const GitHub = () => {
  const { animationState, sectionRef } = useScrollAnimation();
  const username = "atikshahriaopu";
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN; // Load from environment variable
  const CACHE_KEY = `github_data_${username}`;
  const CACHE_DURATION = 1000 * 60 * 60; // 1 hour

  const [contributionData, setContributionData] = useState({});
  const [userData, setUserData] = useState(null);
  const [repoCount, setRepoCount] = useState(0);
  const [publicRepos, setPublicRepos] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchGitHubData = async (forceRefresh = false) => {
    try {
      setLoading(true);
      setError(null);

      // Check if GitHub token is available
      if (!GITHUB_TOKEN) {
        throw new Error(
          "GitHub token is required. Please add VITE_GITHUB_TOKEN to your .env file"
        );
      }

      // Fetch user data from REST API
      const userRes = await fetch(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        },
      });
      if (!userRes.ok) {
        throw new Error(`Failed to fetch user data: ${userRes.status}`);
      }
      const userData = await userRes.json();
      setUserData(userData);

      // Get total repo count
      const totalRepos =
        (userData.public_repos || 0) + (userData.total_private_repos || 0);
      setRepoCount(totalRepos);
      setPublicRepos(userData.public_repos || 0);

      // Calculate 12 months range (ending with current month)
      const now = new Date();
      const currentYear = now.getFullYear();
      const currentMonth = now.getMonth(); // 0-11

      // Calculate start date (12 months ago from current month)
      const startDate = new Date(currentYear, currentMonth - 11, 1);
      const endDate = new Date(currentYear, currentMonth + 1, 0); // Last day of current month

      const fromDate = startDate.toISOString().split("T")[0] + "T00:00:00Z";
      const toDate = endDate.toISOString().split("T")[0] + "T23:59:59Z";

      // Check cache first
      const cacheKey = `${CACHE_KEY}_12months_${fromDate}`;
      const cachedData = localStorage.getItem(cacheKey);
      if (cachedData && !forceRefresh) {
        const { data, timestamp } = JSON.parse(cachedData);
        if (Date.now() - timestamp < CACHE_DURATION) {
          console.log(`Using cached GitHub data for 12 months`);
          setContributionData({ current: data.contributionData });
          setLoading(false);
          return;
        }
      }

      // Fetch contribution data using GitHub GraphQL API
      const graphqlQuery = {
        query: `
            query($username: String!, $from: DateTime!, $to: DateTime!) {
              user(login: $username) {
                contributionsCollection(from: $from, to: $to) {
                  contributionCalendar {
                    totalContributions
                    weeks {
                      contributionDays {
                        contributionCount
                        date
                        contributionLevel
                      }
                    }
                  }
                }
              }
            }
          `,
        variables: {
          username,
          from: fromDate,
          to: toDate,
        },
      };

      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      };

      const graphqlRes = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers,
        body: JSON.stringify(graphqlQuery),
      });

      if (!graphqlRes.ok) {
        throw new Error(`GraphQL API error: ${graphqlRes.status}`);
      }

      const graphqlData = await graphqlRes.json();

      if (graphqlData.errors) {
        console.error("GraphQL errors:", graphqlData.errors);
        throw new Error(
          graphqlData.errors[0]?.message || "GraphQL query failed"
        );
      }

      const contributionCalendar =
        graphqlData.data?.user?.contributionsCollection?.contributionCalendar;

      if (!contributionCalendar) {
        throw new Error("No contribution data available");
      }

      setContributionData({ current: contributionCalendar });

      // Cache the data
      const cacheData = {
        data: {
          userData,
          repoCount: totalRepos,
          contributionData: contributionCalendar,
        },
        timestamp: Date.now(),
        dateRange: { fromDate, toDate },
      };
      localStorage.setItem(cacheKey, JSON.stringify(cacheData));

      setLoading(false);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    setError(null);
    await fetchGitHubData(true);
    setRefreshing(false);
  };

  const getContributionColor = (level) => {
    const levelColors = {
      NONE: "bg-solarized-base02/30",
      FIRST_QUARTILE: "bg-solarized-green/40",
      SECOND_QUARTILE: "bg-solarized-cyan/50",
      THIRD_QUARTILE: "bg-solarized-blue/60",
      FOURTH_QUARTILE: "bg-solarized-violet/70",
    };
    return levelColors[level] || levelColors.NONE;
  };

  const getMonthLabels = (weeks) => {
    if (!weeks) return [];

    const monthLabels = [];
    let currentMonth = -1;

    weeks.forEach((week, weekIndex) => {
      if (week.contributionDays && week.contributionDays.length > 0) {
        const firstDay = week.contributionDays[0];
        const date = new Date(firstDay.date);
        const month = date.getMonth();

        if (month !== currentMonth && weekIndex > 0) {
          const monthNames = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];
          monthLabels.push({
            name: monthNames[month],
            weekIndex: weekIndex,
          });
          currentMonth = month;
        }
      }
    });

    return monthLabels;
  };

  const getTotalContributions = () => {
    const yearData = contributionData.current;
    return yearData?.totalContributions || 0;
  };

  return (
    <section
      ref={sectionRef}
      id="github"
      className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-green-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            animationState === "visible"
              ? { opacity: 1, y: 0 }
              : animationState === "fadeOut"
              ? { opacity: 0, y: -20 }
              : animationState === "static"
              ? { opacity: 1, y: 0 }
              : {}
          }
          transition={{ duration: 0.6 }}
          className="text-center mb-4 sm:mb-6"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <Github className="w-5 h-5 sm:w-6 sm:h-6 text-solarized-cyan" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-solarized-cyan via-solarized-blue to-solarized-violet bg-clip-text text-transparent">
              GitHub Contributions
            </h2>
            <button
              onClick={handleRefresh}
              disabled={loading || refreshing}
              className="ml-2 p-1.5 sm:p-2 rounded-lg bg-solarized-cyan/10 hover:bg-solarized-cyan/20 border border-solarized-cyan/30 hover:border-solarized-cyan/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
              title="Refresh GitHub data"
            >
              <RefreshCw
                className={`w-4 h-4 sm:w-5 sm:h-5 text-solarized-cyan ${
                  refreshing
                    ? "animate-spin"
                    : "group-hover:rotate-180 transition-transform duration-500"
                }`}
              />
            </button>
          </div>
          <p className="text-solarized-base01 text-xs sm:text-sm">
            My coding journey visualized through contributions and achievements
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-solarized-cyan"></div>
          </div>
        ) : error ? (
          <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-xl p-8 text-center">
            <p className="text-red-400 mb-2 font-semibold">
              Failed to load GitHub data
            </p>
            <p className="text-solarized-base1 text-sm mb-4">{error}</p>
            {!GITHUB_TOKEN && (
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 mt-4">
                <p className="text-yellow-400 text-sm font-semibold mb-2">
                  🔑 GitHub Token Required
                </p>
                <p className="text-solarized-base1 text-xs mb-3">
                  Create a .env file in your project root and add:
                </p>
                <code className="block bg-black/50 text-solarized-cyan text-xs p-2 rounded border border-solarized-cyan/30">
                  VITE_GITHUB_TOKEN=your_github_token_here
                </code>
                <a
                  href="https://github.com/settings/tokens"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-solarized-cyan hover:text-solarized-blue text-xs underline"
                >
                  Get your GitHub token here →
                </a>
              </div>
            )}
            <button
              onClick={handleRefresh}
              className="mt-4 px-4 py-2 bg-solarized-cyan/20 hover:bg-solarized-cyan/30 border border-solarized-cyan/40 rounded-lg text-solarized-cyan text-sm transition-all"
            >
              Try Again
            </button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              animationState === "visible"
                ? { opacity: 1 }
                : animationState === "fadeOut"
                ? { opacity: 0 }
                : animationState === "static"
                ? { opacity: 1 }
                : {}
            }
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={
                animationState === "visible"
                  ? { opacity: 1, y: 0 }
                  : animationState === "fadeOut"
                  ? { opacity: 0, y: 20 }
                  : animationState === "static"
                  ? { opacity: 1, y: 0 }
                  : {}
              }
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 max-w-2xl mx-auto"
            >
              <div className="group relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-5 md:p-6 hover:border-solarized-cyan/40 hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-solarized-blue/10 to-solarized-cyan/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                <div className="relative z-10 flex flex-col items-center justify-center space-y-1 sm:space-y-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-solarized-cyan" />
                  <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm">
                    Followers
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-solarized-base2">
                    {userData?.followers || 0}
                  </p>
                </div>
              </div>

              <div className="group relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-5 md:p-6 hover:border-solarized-green/40 hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-solarized-green/10 to-solarized-cyan/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                <div className="relative z-10 flex flex-col items-center justify-center space-y-1 sm:space-y-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-solarized-green" />
                  <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm">
                    Following
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-solarized-base2">
                    {userData?.following || 0}
                  </p>
                </div>
              </div>

              <div className="group relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-5 md:p-6 hover:border-solarized-violet/40 hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-solarized-violet/10 to-solarized-magenta/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                <div className="relative z-10 flex flex-col items-center justify-center space-y-1 sm:space-y-2">
                  <GitFork className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-solarized-violet" />
                  <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm">
                    Public Repos
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-solarized-base2">
                    {publicRepos}
                  </p>
                </div>
              </div>

              <div className="group relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-5 md:p-6 hover:border-solarized-orange/40 hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-solarized-orange/10 to-solarized-red/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                <div className="relative z-10 flex flex-col items-center justify-center space-y-1 sm:space-y-2">
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-solarized-orange" />
                  <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm">
                    Total Repos
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-solarized-base2">
                    {repoCount}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contribution Calendar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                animationState === "visible"
                  ? { opacity: 1, y: 0 }
                  : animationState === "fadeOut"
                  ? { opacity: 0, y: 20 }
                  : animationState === "static"
                  ? { opacity: 1, y: 0 }
                  : {}
              }
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative bg-gradient-to-br from-solarized-base02/80 to-solarized-base03/80 backdrop-blur-sm border border-solarized-blue/20 rounded-lg p-3 sm:p-4"
            >
              {/* Title and Legend */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-solarized-base2">
                  {getTotalContributions().toLocaleString()} contributions in
                  the last 12 months
                </h3>

                {/* Legend */}
                <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] text-solarized-base01">
                  <span>Less</span>
                  <div className="flex gap-0.5">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-[1px] bg-solarized-base02/30"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-[1px] bg-solarized-green/40"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-[1px] bg-solarized-cyan/50"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-[1px] bg-solarized-blue/60"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-[1px] bg-solarized-violet/70"></div>
                  </div>
                  <span>More</span>
                </div>
              </div>

              {/* Calendar Grid with Horizontal Scroll */}
              <div className="calendar__scroll-container overflow-x-auto pb-2 sm:pb-3">
                {contributionData.current && (
                  <div className="w-full">
                    {/* Month Labels */}
                    <div className="relative h-5 mb-1 w-full">
                      {getMonthLabels(contributionData.current.weeks).map(
                        (month, index) => (
                          <div
                            key={index}
                            className="absolute text-[10px] md:text-xs text-solarized-base01 font-medium"
                            style={{
                              left: `${
                                (month.weekIndex /
                                  contributionData.current.weeks.length) *
                                100
                              }%`,
                            }}
                          >
                            {month.name}
                          </div>
                        )
                      )}
                    </div>

                    {/* Contribution Grid */}
                    <div className="flex gap-0.5 sm:gap-1 w-full justify-between">
                      {contributionData.current.weeks.map((week, weekIndex) => (
                        <div
                          key={weekIndex}
                          className="flex flex-col gap-0.5 sm:gap-1"
                        >
                          {week.contributionDays.map((day) => (
                            <div
                              key={day.date}
                              className={`w-[8px] h-[8px] sm:w-[10px] sm:h-[10px] rounded-[1px] ${getContributionColor(
                                day.contributionLevel
                              )} hover:ring-1 hover:ring-solarized-cyan/50 transition-all cursor-pointer group relative`}
                              title={`${
                                day.contributionCount
                              } contributions on ${new Date(
                                day.date
                              ).toLocaleDateString()}`}
                            >
                              {/* Tooltip */}
                              <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-solarized-base03 border border-solarized-blue/30 text-solarized-base2 text-xs rounded whitespace-nowrap pointer-events-none z-20 shadow-lg">
                                <div className="font-semibold">
                                  {day.contributionCount} contributions
                                </div>
                                <div className="text-solarized-base00">
                                  {new Date(day.date).toLocaleDateString(
                                    "en-US",
                                    {
                                      weekday: "short",
                                      month: "short",
                                      day: "numeric",
                                      year: "numeric",
                                    }
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>

      <style>{`
        .calendar__scroll-container {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: #586e75 #073642;
        }
        
        .calendar__scroll-container::-webkit-scrollbar {
          height: 10px;
        }
        
        .calendar__scroll-container::-webkit-scrollbar-track {
          background: #073642;
          border-radius: 5px;
        }
        
        .calendar__scroll-container::-webkit-scrollbar-thumb {
          background: #586e75;
          border-radius: 5px;
        }
        
        .calendar__scroll-container::-webkit-scrollbar-thumb:hover {
          background: #839496;
        }
      `}</style>
    </section>
  );
};

export default GitHub;
