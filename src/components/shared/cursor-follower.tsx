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
  const targetsRef = useRef<HTMLElement[]>([]);
  const location = useLocation();

  useEffect(() => {
    const cursor = cursorRef.current;
    const text = textRef.current;
    if (!cursor || !text) return;

    // always start hidden on route changes
    gsap.set(cursor, { scale: 0, autoAlpha: 0 });

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
      text.innerText = target.getAttribute("data-cursor-text") || "View";
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

    const detachListeners = () => {
      targetsRef.current.forEach((el) => {
        el.removeEventListener("mouseenter", showCursor);
        el.removeEventListener("mouseleave", hideCursor);
      });
      targetsRef.current = [];
    };

    const attachListeners = () => {
      detachListeners();
      targetsRef.current = Array.from(
        document.querySelectorAll<HTMLElement>("[data-cursor-target]")
      );
      targetsRef.current.forEach((el) => {
        el.addEventListener("mouseenter", showCursor);
        el.addEventListener("mouseleave", hideCursor);
      });
    };

    window.addEventListener("mousemove", updatePosition);
    attachListeners();

    // expose manual refresh for dynamically added nodes
    window.refreshCursor = attachListeners;

    // hide on click navigation too
    document.addEventListener("click", hideCursor, { capture: true });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("click", hideCursor, {
        capture: true,
      } as any);
      detachListeners();
      window.refreshCursor = undefined;
      gsap.set(cursor, { scale: 0, autoAlpha: 0 }); // force-hide on unmount/route change
    };
  }, [location]);

  return (
    <div
      ref={cursorRef}
      className="hidden fixed z-[999] pointer-events-none w-fit px-8 h-12 rounded-full bg-[#D8FF85] sm:flex items-center justify-center opacity-0 scale-0"
    >
      <span ref={textRef} className="tracking-widest text-primary" />
    </div>
  );
};

export default DreamyCursor;
