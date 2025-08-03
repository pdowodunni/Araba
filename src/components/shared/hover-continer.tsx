import gsap from "gsap";
import { useRef, type ReactNode } from "react";

{
  /* 
    ============================= 
    Logic for the general text hover effect 

     Props:
      - children (ReactNode): The content to be wrapped by the container.
      - color (string): The color used for the hover animation effect.
    ============================= 
  */
}

function HoverContainer({
  children,
  color,
}: {
  children: ReactNode;
  color: string;
}) {
  const dotRef = useRef(null);
  const textRef = useRef(null);

  const handleMouseEnter = () => {
    const tEl = textRef.current;
    const dEl = dotRef.current;

    const tl = gsap.timeline();

    tl.to(tEl, {
      x: 13,
      duration: 0.15,
    }).to(
      dEl,
      {
        opacity: 1,
      },
      "-=0.2"
    );
  };

  const handleMouseLeave = () => {
    const tEl = textRef.current;
    const dEl = dotRef.current;

    const tl = gsap.timeline();

    tl.to(dEl, {
      opacity: 0,
    }).to(
      tEl,
      {
        x: 0,
        duration: 0.15,
      },
      "-=0.4"
    );
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <span className="top-1/2 -translate-y-1/2 absolute">
        <div
          className="w-[5px] aspect-square rounded-full"
          style={{
            backgroundColor: color,
            opacity: 0,
          }}
          ref={dotRef}
        />
      </span>
      <div ref={textRef}>{children}</div>
    </div>
  );
}

export default HoverContainer;
