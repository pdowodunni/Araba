import { useRef, useLayoutEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
{
  /* 
    ============================= 
    Logic for that revealing stuff using scrollTrigger

    Would tweak it later, It's too slow as at now.
    ============================= 
  */
}

const ScrollReveal = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    gsap.fromTo(
      el,
      { opacity: 0, filter: "blur(4px)" },
      {
        opacity: 1,
        delay: 0.2,
        filter: "blur(0px)",
        ease: "power2.out",
        duration: 0.7,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default ScrollReveal;
