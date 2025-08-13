import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Item = {
  img: string;
  title: React.ReactNode | string;
  text: string;
  bg?: string;
};

export default function StickyStackCards({
  items,
  topOffset = 0,
}: {
  items: Item[];
  topOffset?: number;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".sticky-card");

      cards.forEach((card, i) => {
        const next = (cards[i + 1] as HTMLElement) || null;

        // stack order (later cards on top)
        card.style.zIndex = String(i + 1);

        ScrollTrigger.create({
          trigger: card,
          start: `top+=${topOffset} top`,
          endTrigger: next ?? rootRef.current!, // until next card hits, else container end
          end: next ? `top+=${topOffset} top` : "bottom bottom",
          pin: true,
          pinSpacing: false, // overlap without adding space
          anticipatePin: 1,
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, [items, topOffset]);

  return (
    <section className="w-full">
      <div ref={rootRef} className="mx-container">
        {items.map((it, i) => {
          return (
            <article
              key={i}
              className="sticky-card w-full h-[490px] rounded-xl overflow-hidden mb-6"
            >
              <div className="relative h-full w-full">
                <img
                  src={it.img}
                  alt={""}
                  className="absolute inset-0 w-full h-full object-cover block"
                  loading="eager"
                  decoding="async"
                />
                <div
                  className={`absolute inset-x-0 bottom-0 p-5 md:p-8 ${it.bg}`}
                >
                  <h4 className="m-0 text-[22px] md:text-[26px] leading-snug">
                    {it.title}
                  </h4>
                  <p className="m-0 mt-2 text-[15px] md:text-[16px] leading-relaxed">
                    {it.text}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
