"use client";
import { useEffect, useRef, useState } from "react";

export type NavScrollState = "top" | "visible" | "hidden";

/**
 * Tracks scroll position and direction to drive a hide-on-scroll nav bar.
 *
 * Returns one of:
 *  - "top"     : scrollY is within `topThreshold` of the page top
 *  - "hidden"  : user scrolled down past `hideThreshold`
 *  - "visible" : user scrolled up (nav should reappear)
 */
export function useScrollDirection(
  hideThreshold = 80,
  topThreshold = 10,
): NavScrollState {
  const [state, setState] = useState<NavScrollState>("top");
  const lastYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    lastYRef.current = window.scrollY;
    if (window.scrollY < topThreshold) setState("top");

    const update = () => {
      const y = Math.max(0, window.scrollY);
      const last = lastYRef.current;
      const delta = y - last;

      if (y < topThreshold) {
        setState("top");
      } else if (delta > 2 && y > hideThreshold) {
        setState("hidden");
      } else if (delta < -2) {
        setState("visible");
      }

      lastYRef.current = y;
      tickingRef.current = false;
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideThreshold, topThreshold]);

  return state;
}
