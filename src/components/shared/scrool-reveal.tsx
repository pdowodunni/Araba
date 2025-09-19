import { useRef, useLayoutEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = ref.current!;
      gsap.set(el, { opacity: 0, filter: "blur(8px)" });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            // markers: true,
            toggleActions: "play none none none",
          },
        })
        .to(el, { opacity: 1, duration: 0.6, ease: "power2.out" })
        .to({}, { duration: 0.4 })
        .to(el, { filter: "blur(0px)", duration: 0.7, ease: "power2.out" });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} style={{ willChange: "opacity, filter" }}>
      {children}
    </div>
  );
};

export default ScrollReveal;
