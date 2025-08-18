import { useRef, useState, useEffect } from "react";
import { TESTIMONIAL_IMAGES, TESTIMONIALS } from "../../config/hero";
import gsap from "gsap";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";

const REPEAT = 3; // triple the list for seamless looping
const IMAGES = TESTIMONIAL_IMAGES;
const N = IMAGES.length;
const LOOP = Array.from({ length: REPEAT }, () => IMAGES).flat();

const mod = (n: number, m: number) => ((n % m) + m) % m;

export default function VerticalSnapCarousel() {
  // refs for scrollers
  const smallRef = useRef<HTMLDivElement | null>(null); // < xl (horizontal)
  const largeRef = useRef<HTMLDivElement | null>(null); // >= xl (vertical)

  // details fade
  const DETAIL_DELAY = 0.2;
  const detailsTl = useRef<gsap.core.Timeline | null>(null);

  // drag
  const isDragging = useRef(false);
  const startCoord = useRef(0);
  const scrollStart = useRef(0);

  // state
  const [activeIndex, setActiveIndex] = useState(0); // 0..N-1
  const [bp, setBp] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 1280px)").matches
  );
  const isXL = useRef<boolean>(bp);
  const isAnimating = useRef(false);
  const pendingIndex = useRef<number>(0);
  const DRAG_FACTOR = 2;

  useEffect(() => {
    isXL.current = bp;
  }, [bp]);

  // breakpoint
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1280px)");
    const onChange = () => setBp(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // helpers for layout geometry
  const getContainer = () =>
    (isXL.current ? largeRef.current : smallRef.current)!;

  const getGapPx = (c: HTMLDivElement) => {
    const cs = getComputedStyle(c);
    const g = isXL.current ? cs.rowGap : cs.columnGap || cs.gap;
    const val = parseFloat(g || "0");
    return Number.isFinite(val) ? val : 0;
  };
  const getItemSizePx = (c: HTMLDivElement) => {
    const el = c.firstElementChild as HTMLElement | null;
    if (!el) return 1;
    const rect = el.getBoundingClientRect();
    return isXL.current ? rect.height : rect.width;
  };
  const getStridePx = (c: HTMLDivElement) => getItemSizePx(c) + getGapPx(c);

  const getScroll = (c: HTMLDivElement) =>
    isXL.current ? c.scrollTop : c.scrollLeft;
  const setScroll = (c: HTMLDivElement, v: number) =>
    isXL.current ? (c.scrollTop = v) : (c.scrollLeft = v);

  const centerOffset = (c: HTMLDivElement) =>
    c.clientWidth / 2 - getItemSizePx(c) / 2;

  // convert scroll -> raw index in LOOP (0..LOOP.length-1)
  const rawIndexFromScroll = (c: HTMLDivElement) => {
    const stride = getStridePx(c);
    if (isXL.current) {
      return Math.round(getScroll(c) / stride);
    } else {
      return Math.round((getScroll(c) + centerOffset(c)) / stride);
    }
  };

  // convert raw index -> scroll position
  const scrollForRawIndex = (c: HTMLDivElement, raw: number) => {
    const stride = getStridePx(c);
    if (isXL.current) {
      return raw * stride;
    } else {
      return raw * stride - centerOffset(c);
    }
  };

  // keep user in the middle block [N, 2N) to avoid hitting ends
  const recenterIfNeeded = (c: HTMLDivElement) => {
    const raw = rawIndexFromScroll(c);
    if (raw < N || raw >= 2 * N) {
      const normalized = mod(raw, N);
      const targetRaw = N + normalized;
      const prev = c.style.scrollSnapType;
      c.style.scrollSnapType = "none";
      setScroll(c, scrollForRawIndex(c, targetRaw));
      c.style.scrollSnapType = prev;
      return targetRaw;
    }
    return raw;
  };

  // initial positioning into middle block
  useEffect(() => {
    const c = getContainer();
    if (!c) return;
    // wait a frame so sizes are correct
    const id = requestAnimationFrame(() => {
      const prev = c.style.scrollSnapType;
      c.style.scrollSnapType = "none";
      setScroll(c, scrollForRawIndex(c, N + activeIndex));
      c.style.scrollSnapType = prev;
    });
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bp]);

  // SCROLL -> INDEX (ignore while animating)
  const handleScroll = () => {
    if (isAnimating.current) return;
    const c = getContainer();
    if (!c) return;

    const raw = recenterIfNeeded(c);
    const normalized = mod(raw, N);
    setActiveIndex(normalized);
  };

  // DRAG
  const handleMouseDown = (e: React.MouseEvent) => {
    const c = getContainer();
    isDragging.current = true;
    startCoord.current = isXL.current
      ? e.pageY - c.offsetTop
      : e.pageX - c.offsetLeft;
    scrollStart.current = getScroll(c);
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const c = getContainer();
    const coord = isXL.current ? e.pageY - c.offsetTop : e.pageX - c.offsetLeft;
    const d = coord - startCoord.current;
    setScroll(c, scrollStart.current - d * DRAG_FACTOR);
  };
  const stopDrag = () => {
    isDragging.current = false;
  };

  // bind scroll to visible scroller
  useEffect(() => {
    const c = getContainer();
    if (!c) return;
    c.addEventListener("scroll", handleScroll, { passive: true });
    return () => c.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bp]);

  // ---- ARROWS: animate within middle block and update details after tween ----
  const animateToRawIndex = (targetRaw: number) => {
    const c = getContainer();
    const prevSnap = c.style.scrollSnapType;
    c.style.scrollSnapType = "none";
    isAnimating.current = true;
    pendingIndex.current = mod(targetRaw, N);

    gsap.killTweensOf(c);

    const props = isXL.current
      ? { scrollTop: scrollForRawIndex(c, targetRaw) }
      : { scrollLeft: scrollForRawIndex(c, targetRaw) };

    gsap.to(c, {
      ...props,
      duration: 0.45,
      ease: "power2.out",
      onComplete: () => {
        // keep in middle block after anim
        const normalized = mod(targetRaw, N);
        const midRaw = N + normalized;
        setScroll(c, scrollForRawIndex(c, midRaw));
        c.style.scrollSnapType = prevSnap;
        isAnimating.current = false;
        setActiveIndex(pendingIndex.current);
      },
    });
  };

  const changeIndex = (delta: number) => {
    const c = getContainer();
    const currentRaw = recenterIfNeeded(c);
    animateToRawIndex(currentRaw + delta);
  };

  const handlePrev = () => changeIndex(-1);
  const handleNext = () => changeIndex(1);

  // CONTENT FADE (fires once when activeIndex is updated after tween completes)
  const contentRefInline = useRef<HTMLDivElement | null>(null);
  const contentRefXL = useRef<HTMLDivElement | null>(null);
  const [data, setData] = useState(TESTIMONIALS[0]);

  useEffect(() => {
    const el = (bp && contentRefXL.current) || contentRefInline.current;
    if (!el) return;

    detailsTl.current?.kill();
    const tl = gsap.timeline();
    detailsTl.current = tl;

    tl.to(el, { opacity: 0, duration: 0.5, ease: "power2.out" })
      .to({}, { duration: DETAIL_DELAY })
      .add(() => setData(TESTIMONIALS[activeIndex]))
      .to(el, { opacity: 1, duration: 0.5, ease: "power2.out" });

    return () => {
      tl.kill();
    };
  }, [activeIndex, bp]);

  return (
    <div className="bg-mid-bg">
      <div className="mx-container min-h-[750px] flex justify-center items-center">
        {/* -------- BELOW XL (horizontal, infinite) -------- */}
        <div className="flex xl:hidden flex-col items-center gap-5 pt-12 pb-8 text-center ">
          <div
            ref={smallRef}
            className="w-[260px] h-[160px] overflow-x-scroll snap-x snap-mandatory scroll-smooth cursor-grab scrollbar-hide flex items-center gap-3 px-2"
            style={{
              scrollPaddingLeft: "calc(50% - 60px)",
              scrollPaddingRight: "calc(50% - 60px)",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
          >
            {LOOP.map((src, i) => (
              <div
                key={`sm-loop-${i}`}
                className={`snap-center flex-shrink-0 w-[120px] h-full flex justify-center items-center transition-all duration-200 ${
                  mod(i, N) === activeIndex
                    ? "opacity-100 scale-100"
                    : "opacity-30 scale-90"
                }`}
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-full h-24 w-24 object-cover"
                  draggable={false}
                />
              </div>
            ))}
          </div>

          <div
            ref={contentRefInline}
            className="max-w-3xl min-h-[400px] justify-center mx-auto flex flex-col gap-6 items-center"
            style={{ opacity: 0 }}
          >
            <div className="scale-120 flex items-center justify-center">
              <data.Logo color="--color-primary" />
            </div>
            {data.quote}
            <p>
              {data.author}, {data.role}
            </p>
          </div>

          <div className="flex gap-4 justify-center items-center">
            <button
              type="button"
              className="p-2.5 border border-primary rounded-full"
              onClick={handlePrev}
            >
              <ArrowLeft size={16} />
            </button>
            <button
              type="button"
              className="p-2.5 border border-primary rounded-full"
              onClick={handleNext}
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* -------- XL & UP (vertical, infinite) -------- */}
        <div className="hidden xl:block w-full">
          <div className="h-[750px] w-full flex items-center justify-between gap-8">
            <div
              ref={largeRef}
              className="h-[750px] w-[300px] overflow-y-scroll snap-y snap-mandatory scroll-smooth cursor-grab scrollbar-hide py-55"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={stopDrag}
              onMouseLeave={stopDrag}
            >
              {LOOP.map((src, i) => (
                <div
                  key={`lg-loop-${i}`}
                  className={`snap-center pointer-events-none select-none flex justify-center items-center h-[250px] transition-all duration-200 ${
                    mod(i, N) === activeIndex
                      ? "scale-100 opacity-100"
                      : "scale-85 opacity-20"
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    className="rounded-full h-60 w-60 object-cover"
                    draggable={false}
                  />
                </div>
              ))}
            </div>

            <div
              ref={contentRefXL}
              className="max-w-4xl mx-auto flex-1 flex flex-col gap-16"
              style={{ opacity: 0 }}
            >
              <div className="flex flex-col gap-10">
                <div className="flex items-center justify-start w-40">
                  <data.Logo color="--color-primary" />
                </div>
                {data.quote}
                <p>
                  {data.author}, {data.role}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 justify-center items-center">
              <button
                type="button"
                className="p-4 border border-primary rounded-full"
                onClick={handlePrev}
              >
                <ArrowUp />
              </button>
              <button
                type="button"
                className="p-4 border border-primary rounded-full"
                onClick={handleNext}
              >
                <ArrowDown />
              </button>
            </div>
          </div>
        </div>
        {/* -------- / XL & UP -------- */}
      </div>
    </div>
  );
}
