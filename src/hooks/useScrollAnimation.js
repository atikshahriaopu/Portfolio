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
          
          // When scrolling down into view → animate
          if (scrollingDown) {
            setAnimationState("visible");
            hasAnimatedRef.current = true;
          } else {
            // When scrolling up into view → appear static (no animation)
            setAnimationState("static");
          }
        } else {
          // When scrolling away from element → fade out
          if (isInViewRef.current) {
            setAnimationState("fadeOut");
            isInViewRef.current = false;
          }
          // Reset the animation flag so it can replay next time when scrolling down
          hasAnimatedRef.current = false;
        }
      },
      { 
        threshold,
        rootMargin: "-50px 0px -50px 0px"
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
