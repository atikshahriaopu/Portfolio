import { useState, useEffect, useRef } from "react";

export const useScrollAnimation = (threshold = 0.1) => {
  const [animationState, setAnimationState] = useState("hidden");
  const sectionRef = useRef(null);
  const hasAnimatedRef = useRef(false);
  const lastScrollYRef = useRef(0);
  const isInViewRef = useRef(false);

  useEffect(() => {
    let rafId = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY >= lastScrollYRef.current;
        lastScrollYRef.current = currentScrollY;

        if (entry.isIntersecting) {
          isInViewRef.current = true;

          // Only animate if this section has never been animated before
          if (!hasAnimatedRef.current) {
            setAnimationState("visible");
            hasAnimatedRef.current = true;
          } else {
            // If already animated, keep it static (no animation)
            setAnimationState("static");
          }
        } else {
          // When scrolling away from element, keep it in its current state
          // Don't fade out or reset, just mark as not in view
          isInViewRef.current = false;
          // Keep hasAnimatedRef.current as true - never reset until page refresh
        }
      },
      {
        threshold,
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        lastScrollYRef.current = window.scrollY;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [threshold]);

  return { animationState, sectionRef };
};
