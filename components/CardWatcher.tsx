"use client";

import { useEffect } from "react";

export default function CardWatcher() {
  useEffect(() => {
    // Only run on touch / portrait devices
    const isTouch =
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(pointer: coarse)").matches;

    if (!isTouch) return;

    const cards = document.querySelectorAll<HTMLElement>(".card-wrapper");
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("hover");
          } else {
            entry.target.classList.remove("hover");
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        // rootMargin: "0px",
        // threshold: 0.9,
        threshold: 0,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
