import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

// Swap with real content
const CARDS = [
  {
    id: 1,
    title: "Enterprise Analytics",
    subtitle: "Dashboards, dbt & pipelines",
    img: "https://picsum.photos/seed/algora1/1280/720",
  },
  {
    id: 2,
    title: "Credit Risk Models",
    subtitle: "AUC, KS, ECL, staging",
    img: "https://picsum.photos/seed/algora2/1280/720",
  },
  {
    id: 3,
    title: "Training Programs",
    subtitle: "Excel, SQL, Power BI, Python",
    img: "https://picsum.photos/seed/algora3/1280/720",
  },
  {
    id: 4,
    title: "Virtual Internships",
    subtitle: "Real-world data projects",
    img: "https://picsum.photos/seed/algora4/1280/720",
  },
  {
    id: 5,
    title: "AI Assistants",
    subtitle: "Streamlit, LangChain, OpenAI",
    img: "https://picsum.photos/seed/algora5/1280/720",
  },
];

function Card({ item }: { item: (typeof CARDS)[number] }) {
  return (
    <div className="min-w-[260px] sm:min-w-[320px] md:min-w-[380px] lg:min-w-[440px] xl:min-w-[520px] shrink-0">
      <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white/70 backdrop-blur">
        <div className="aspect-[16/9]">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <h3 className="text-base md:text-lg font-semibold text-gray-900">
            {item.title}
          </h3>
          <p className="text-sm md:text-base text-gray-600 mt-1">
            {item.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function InfiniteCardSlider() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Tween | null>(null);

  const build = () => {
    if (!trackRef.current) return;

    // Kill existing timeline cleanly
    if (tlRef.current) {
      tlRef.current.kill();
      tlRef.current = null;
    }

    const track = trackRef.current;

    // Ensure content is duplicated exactly once for seamless wrap
    const unique = CARDS;
    const items = [...unique, ...unique];

    // Inject children
    track.innerHTML = "";
    items.forEach((item, idx) => {
      const wrapper = document.createElement("div");
      wrapper.className = "card-wrapper";
      // React not used here for performance of measuring; we inject minimal HTML
      wrapper.innerHTML = `
        <div class=''>
            <div class='w-[550px] aspect-[9/12]'>
              <img src='${item.img}' alt='${item.title}' class='w-full h-full object-cover rounded-2xl' loading='lazy' />
            </div>
        </div>`;
      track.appendChild(wrapper);
    });
    //   wrapper.innerHTML = `
    //     <div class='min-w-[260px] sm:min-w-[320px] md:min-w-[380px] lg:min-w-[440px] xl:min-w-[520px] shrink-0'>
    //       <div class='rounded-2xl overflow-hidden border border-gray-200 bg-white/70 backdrop-blur'>
    //         <div class='aspect-[16/9]'>
    //           <img src='${item.img}' alt='${item.title}' class='w-full h-full object-cover' loading='lazy' />
    //         </div>
    //         <div class='p-4'>
    //           <h3 class='text-base md:text-lg font-semibold text-gray-900'>${item.title}</h3>
    //           <p class='text-sm md:text-base text-gray-600 mt-1'>${item.subtitle}</p>
    //         </div>
    //       </div>
    //     </div>`;
    //   track.appendChild(wrapper);
    // });

    // Measure width of the first half precisely (including CSS gap)
    const children = Array.from(track.children) as HTMLElement[];
    const half = children.length / 2;
    const firstHalf = children.slice(0, half);
    const gapPx = parseFloat(
      getComputedStyle(track).columnGap || getComputedStyle(track).gap || "16"
    );
    const totalCardsWidth = firstHalf.reduce(
      (acc, el) => acc + el.firstElementChild!.clientWidth,
      0
    );
    const distance = totalCardsWidth + gapPx * (half - 1);

    // Start at x = 0; translate left continuously and wrap using modifiers for a no-jump loop
    gsap.set(track, { x: 0 });
    const wrapX = gsap.utils.wrap(-distance, 0);

    // Duration proportional to distance to keep constant speed across breakpoints
    const BASE_SPEED_PX_PER_SEC = 120; // tune global speed here
    const duration = Math.max(4, distance / BASE_SPEED_PX_PER_SEC);

    tlRef.current = gsap.to(track, {
      x: -distance,
      duration,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => `${wrapX(parseFloat(x))}px`,
      },
    });
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => build(), rootRef);

    const onResize = () => {
      // Rebuild after layout settles to avoid flicker
      requestAnimationFrame(() => requestAnimationFrame(build));
    };

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      if (tlRef.current) tlRef.current.kill();
      ctx.revert();
    };
  }, []);

  const slowDown = () => {
    if (tlRef.current) tlRef.current.timeScale(0.35); // slower on hover
  };
  const speedUp = () => {
    if (tlRef.current) tlRef.current.timeScale(1);
  };

  return (
    <div ref={rootRef} className="w-screen overflow-hidden">
      <section
        className="w-screen overflow-hidden"
        onMouseEnter={slowDown}
        onMouseLeave={speedUp}
        onTouchStart={slowDown}
        onTouchEnd={speedUp}
      >
        <div className="relative overflow-hidden">
          {/* Full-bleed track */}
          <div
            ref={trackRef}
            className="flex gap-4 md:gap-4 items-stretch will-change-transform select-none px-4 md:px-6 py-6"
            aria-hidden
          />
        </div>
      </section>
    </div>
  );
}
