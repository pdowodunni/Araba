import { type ReactNode } from "react";

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

export default function HoverContainer({
  children,
  color,
}: {
  children: ReactNode;
  color: string;
}) {
  return (
    <div className="relative group">
      <span className="absolute left-0 top-1/2 -translate-y-1/2">
        <div
          ref={null}
          style={{ backgroundColor: color }}
          className="
            w-[5px] h-[5px] rounded-full
            opacity-0 transition-opacity duration-150 ease-out
            group-hover:opacity-100
          "
        />
      </span>
      <div
        className="
        transition-transform duration-150 ease-out
        group-hover:translate-x-[13px]
      "
      >
        {children}
      </div>
    </div>
  );
}
