{
  /* 
    ============================= 
    Logic for that green thingy when you hover on certain elements


    TO APPLY:

    - add data-cursor-target
    - add data-cursor-text="WHAT TEXT SHOULD BE DISPLAYED"

    DO NOT TOUCH ANYTHING HERE
    This component is dangerously optimized.
    Even the gods dare not refactor it.
    ============================= 
  */
}

import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

declare global {
  interface Window {
    refreshCursor?: () => void;
  }
}

const DreamyCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const location = useLocation();

  useEffect(() => {
    const cursor = cursorRef.current;
    const text = textRef.current;
    if (!cursor || !text) return;

    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.4,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.4,
      ease: "power3.out",
    });

    let initialized = false;

    const updatePosition = (e: MouseEvent) => {
      if (!initialized) {
        gsap.set(cursor, { x: e.clientX - 56, y: e.clientY - 56 });
        initialized = true;
      }
      xTo(e.clientX - 56);
      yTo(e.clientY - 56);
    };

    const showCursor = (e: Event) => {
      const target = e.currentTarget as HTMLElement;
      const hoverText = target.getAttribute("data-cursor-text") || "View";
      text.innerText = hoverText;

      gsap.to(cursor, {
        scale: 1,
        autoAlpha: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const hideCursor = () => {
      gsap.to(cursor, {
        scale: 0,
        autoAlpha: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    };

    const attachCursorListeners = () => {
      const targets = document.querySelectorAll("[data-cursor-target]");
      targets.forEach((el) => {
        el.addEventListener("mouseenter", showCursor);
        el.addEventListener("mouseleave", hideCursor);
      });
    };

    window.addEventListener("mousemove", updatePosition);

    attachCursorListeners();

    window.refreshCursor = attachCursorListeners;

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, [location]);

  return (
    <div
      ref={cursorRef}
      className="hidden fixed z-[999] pointer-events-none w-fit px-8 h-12 rounded-full bg-[#D8FF85] sm:flex items-center justify-center opacity-0 scale-0"
    >
      <span ref={textRef} className=" tracking-widest text-primary" />
    </div>
  );
};

export default DreamyCursor;
