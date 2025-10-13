import gsap from "gsap";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

{
  /* 
    ============================= 
    Logic fthe sliding button animation, basic GSAP stuff

     Props:
      - Self explanatory
    ============================= 
  */
}

interface SlideUpButtonProps {
  type: "fill" | "outline";
  bgColor: string;
  textColor: string;
  children?: React.ReactNode;
  to?: string;
}

function SlideUpButton({
  type,
  bgColor,
  textColor,
  children,
  to,
}: SlideUpButtonProps) {
  const buttonText = useRef<HTMLDivElement>(null);
  const hamburgerTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    buttonText.current?.addEventListener("mouseenter", () => {
      gsap.to(hamburgerTextRef.current, {
        y: -21,
        transition: "all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
        duration: 0.01,
        delay: 0.15,
        ease: "power1.inOut",
      });
    });
    buttonText.current?.addEventListener("mouseleave", () => {
      gsap.to(hamburgerTextRef.current, {
        y: 0,
        transition: "all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
        delay: 0.15,
        duration: 0.01,
        ease: "power1.inOut",
      });
    });
  });

  return (
    <Link to={to || "mailto:hello@arabacollective"}>
      <div
        className={`flex justify-center items-center text-sm py-[16px] px-[24px] relative rounded-full cursor-pointer`}
        style={{
          backgroundColor: `${type === "fill" ? bgColor : "transparent"}`,
          border: type === "outline" ? `1px solid ${bgColor}` : "none",
        }}
        ref={buttonText}
      >
        <div className="h-[18px] relative overflow-y-hidden">
          <div
            ref={hamburgerTextRef}
            className="relative right-0 w-full h-[40px] flex flex-col justify-between items-center font-interTight-semibold pointer-none:"
            style={{ color: textColor }}
          >
            {Array.from({ length: 2 }).map((_, idx) => (
              <span
                key={idx}
                className={`relative 
                `}
                // className={`relative
                //   ${idx === 1 && "font-instrumental-serif text-[18px]"}
                // `}
              >
                {children}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SlideUpButton;
