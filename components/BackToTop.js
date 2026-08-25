"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    // Small fixed threshold (not viewport-relative) so it appears almost as
    // soon as you start scrolling, regardless of screen height.
    function update() {
      setVisible(window.scrollY > 200);
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      // Inline style is the source of truth for visibility (not dependent on
      // Tailwind's generated CSS for the conditional classes), transition
      // classes still handle the fade/slide animation.
      style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
      className={`fixed bottom-6 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-md bg-brand-amber text-white shadow-lg transition-all duration-200 hover:bg-brand-amber-dark ${
        visible ? "translate-y-0" : "translate-y-3"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
