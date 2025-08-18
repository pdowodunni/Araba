import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TESTIMONIAL_IMAGES, TESTIMONIALS } from "../../config/hero";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";

type Props = {
  showGuides?: boolean;
  /** px offset from the true center: + moves RIGHT on <xl, + moves DOWN on ≥xl */
  centerOffsetSm?: number;
  centerOffsetLg?: number;
};

export default function VerticalSnapCarousel({
  showGuides = false,
  centerOffsetSm = 0,
  centerOffsetLg,
}: Props) {
  const smWrapRef = useRef<HTMLDivElement | null>(null); // < xl (horizontal track)
  const lgWrapRef = useRef<HTMLDivElement | null>(null); // ≥ xl (vertical track)
  const smItemsRef = useRef<HTMLDivElement[]>([]);
  const lgItemsRef = useRef<HTMLDivElement[]>([]);

  const detailsRefSm = useRef<HTMLDivElement | null>(null);
  const detailsRefLg = useRef<HTMLDivElement | null>(null);

  const [previewIdx, setPreviewIdx] = useState(0); // item nearest/overlapping the guide
  const [detailIdx, setDetailIdx] = useState(0); // content index after snap

  // sizes
  const GAP_SM = 12;
  const ITEM_W_SM = 96;
  const GAP_LG = 12;
  const ITEM_H_LG = 250;
  const REPEATS = 5;

  centerOffsetLg = ITEM_H_LG / 0.9;
  centerOffsetSm = ITEM_W_SM / 1;

  // state
  const posSm = useRef(0);
  const posLg = useRef(0);
  const dragging = useRef(false);
  const dragStart = useRef(0);
  const posStart = useRef(0);
  const rafId = useRef<number | null>(null);
  const isSnapping = useRef(false);

  const isXL = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 1280px)").matches;

  function setupLane(
    axis: "x" | "y",
    wrapper: HTMLDivElement,
    items: HTMLDivElement[],
    itemSize: number,
    gap: number,
    posRef: React.MutableRefObject<number>,
    guideOffsetPx: number
  ) {
    const setters = items.map((el) => gsap.quickSetter(el, axis, "px"));
    const stride = itemSize + gap;
    const baseLen = TESTIMONIAL_IMAGES.length;
    const loopLen = baseLen * REPEATS;
    const total = stride * loopLen;

    const half =
      axis === "x" ? wrapper.clientWidth / 2 : wrapper.clientHeight / 2;

    const centerOffset = half - itemSize / 2;
    const bases = Array.from({ length: loopLen }, (_, i) => i * stride);

    const render = () => {
      let p = posRef.current;
      const wrapBound = total / 2;
      if (p <= -wrapBound) p += total;
      if (p > wrapBound) p -= total;
      posRef.current = p;

      for (let i = 0; i < loopLen; i++) {
        let v = (bases[i] + p) % total;
        if (v < 0) v += total;
        setters[i](v - centerOffset);
      }
    };

    const nearestBaseIndex = () => {
      const adjPos = posRef.current - guideOffsetPx;
      const idxFloat = (-adjPos + centerOffset) / stride;
      const idxBase = ((Math.round(idxFloat) % baseLen) + baseLen) % baseLen;
      return idxBase;
    };

    const targetPosForIndex = (baseIndex: number) => {
      const midRepeat = Math.floor(REPEATS / 2);
      const targetAtTrueCenter =
        -(baseIndex + midRepeat * baseLen) * stride + centerOffset;
      const ideal = targetAtTrueCenter + guideOffsetPx;

      const loopStride = baseLen * stride;
      let best = ideal;
      let bestDist = Math.abs(ideal - posRef.current);
      for (let k = -REPEATS; k <= REPEATS; k++) {
        const cand = ideal + k * loopStride;
        const d = Math.abs(cand - posRef.current);
        if (d < bestDist) {
          best = cand;
          bestDist = d;
        }
      }
      return best;
    };

    const snapToNearest = (onComplete?: () => void) => {
      if (isSnapping.current) return;
      isSnapping.current = true;
      const toIdx = nearestBaseIndex();
      const target = targetPosForIndex(toIdx);
      setPreviewIdx(toIdx);
      gsap.to(posRef, {
        current: target,
        duration: 0.45,
        ease: "power2.out",
        onComplete: () => {
          setDetailIdx(toIdx);
          isSnapping.current = false;
          onComplete?.();
        },
      });
    };

    const stepBy = (dir: 1 | -1) => {
      if (isSnapping.current) return;
      const curr = nearestBaseIndex();
      const next = (((curr + dir) % baseLen) + baseLen) % baseLen;
      const target = targetPosForIndex(next);
      setPreviewIdx(next);
      isSnapping.current = true;
      gsap.to(posRef, {
        current: target,
        duration: 0.45,
        ease: "power2.out",
        onComplete: () => {
          setDetailIdx(next);
          isSnapping.current = false;
        },
      });
    };

    return {
      render,
      nearestBaseIndex,
      targetPosForIndex,
      snapToNearest,
      stepBy,
      centerOffset,
      half,
    };
  }

  const smLane = useRef<ReturnType<typeof setupLane> | null>(null);
  const lgLane = useRef<ReturnType<typeof setupLane> | null>(null);

  useLayoutEffect(() => {
    const smWrap = smWrapRef.current;
    const lgWrap = lgWrapRef.current;
    if (!smWrap || !lgWrap) return;

    const build = (wrap: HTMLDivElement, key: "sm" | "lg", count: number) => {
      const nodes: HTMLDivElement[] = [];
      wrap.innerHTML = "";
      for (let r = 0; r < REPEATS; r++) {
        for (let i = 0; i < count; i++) {
          const box = document.createElement("div");
          box.dataset.itm = key;
          box.className =
            key === "sm"
              ? "absolute top-1/2 -translate-y-1/2 w-[96px] h-[96px] grid place-items-center will-change-transform"
              : "absolute left-1/2 -translate-x-1/2 h-[250px] w-[250px] grid place-items-center will-change-transform";
          const img = document.createElement("img");
          img.src = TESTIMONIAL_IMAGES[i];
          img.alt = "";
          img.draggable = false;
          img.className =
            key === "sm"
              ? "rounded-full h-24 w-24 object-cover pointer-events-none"
              : "rounded-full h-60 w-60 object-cover pointer-events-none";
          box.appendChild(img);
          wrap.appendChild(box);
          nodes.push(box);
        }
      }
      return nodes;
    };

    smItemsRef.current = build(smWrap, "sm", TESTIMONIAL_IMAGES.length);
    lgItemsRef.current = build(lgWrap, "lg", TESTIMONIAL_IMAGES.length);

    smLane.current = setupLane(
      "x",
      smWrap,
      smItemsRef.current,
      ITEM_W_SM,
      GAP_SM,
      posSm,
      centerOffsetSm
    );
    lgLane.current = setupLane(
      "y",
      lgWrap,
      lgItemsRef.current,
      ITEM_H_LG,
      GAP_LG,
      posLg,
      centerOffsetLg as number
    );

    posSm.current = smLane.current.targetPosForIndex(0);
    posLg.current = lgLane.current.targetPosForIndex(0);
    setPreviewIdx(0);
    setDetailIdx(0);

    const loop = () => {
      smLane.current?.render();
      lgLane.current?.render();
      rafId.current = requestAnimationFrame(loop);
    };
    rafId.current = requestAnimationFrame(loop);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [centerOffsetSm, centerOffsetLg]);

  useLayoutEffect(() => {
    const len = TESTIMONIAL_IMAGES.length;
    const anim = (items: HTMLDivElement[], isSm: boolean) => {
      items.forEach((el, i) => {
        const active = i % len === previewIdx;
        gsap.to(el, {
          opacity: active ? 1 : isSm ? 0.3 : 0.2,
          scale: active ? 1 : isSm ? 0.9 : 0.95,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    };
    anim(smItemsRef.current, true);
    anim(lgItemsRef.current, false);
  }, [previewIdx]);

  useLayoutEffect(() => {
    const els = [detailsRefSm.current, detailsRefLg.current].filter(
      Boolean
    ) as HTMLDivElement[];
    els.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, filter: "blur(8px)" },
        { opacity: 1, filter: "blur(0px)", duration: 0.35, ease: "power2.out" }
      );
    });
  }, [detailIdx]);

  // POINTER (mouse/touch/pen)
  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    if (isXL()) {
      dragStart.current = e.clientY;
      posStart.current = posLg.current;
    } else {
      dragStart.current = e.clientX;
      posStart.current = posSm.current;
    }
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    e.preventDefault();
    const xl = isXL();
    const coord = xl ? e.clientY : e.clientX;
    const d = coord - dragStart.current;

    if (xl) {
      posLg.current = posStart.current + d;
      setPreviewIdx(lgLane.current!.nearestBaseIndex());
    } else {
      posSm.current = posStart.current + d;
      setPreviewIdx(smLane.current!.nearestBaseIndex());
    }
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    dragging.current = false;
    (isXL() ? lgLane.current : smLane.current)?.snapToNearest();
  };

  const prev = () =>
    isXL() ? lgLane.current?.stepBy(-1) : smLane.current?.stepBy(-1);
  const next = () =>
    isXL() ? lgLane.current?.stepBy(1) : smLane.current?.stepBy(1);

  const data = TESTIMONIALS[detailIdx];

  return (
    <div className="bg-mid-bg">
      <div className="mx-container min-h-[680px] flex justify-center items-center">
        {/* < xl (horizontal) */}
        <div className="flex xl:hidden flex-col items-center gap-6 pt-12 pb-10 text-center select-none">
          <div
            className="relative w-[260px] h-[120px] overflow-hidden touch-none"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onContextMenu={(e) => e.preventDefault()}
          >
            {/* side fades to make edges flush */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-10 z-10 bg-mid-bg"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, black, transparent)",
                maskImage: "linear-gradient(to right, black, transparent)",
              }}
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-10 z-10 bg-mid-bg"
              style={{
                WebkitMaskImage: "linear-gradient(to left, black, transparent)",
                maskImage: "linear-gradient(to left, black, transparent)",
              }}
            />

            {showGuides && (
              <div
                className="pointer-events-none absolute inset-y-0 w-px bg-white/60 z-20"
                style={{ left: `calc(50% + ${centerOffsetSm}px)` }}
              />
            )}

            <div ref={smWrapRef} className="absolute inset-0 z-0" />
          </div>

          <div
            ref={detailsRefSm}
            className="max-w-3xl min-h-[360px] mx-auto flex flex-col gap-6 items-center"
          >
            <div className="scale-120 flex items-center justify-center">
              <data.Logo />
            </div>
            {data.quote}
            <p>
              {data.author}, {data.role}
            </p>
          </div>

          <div className="flex gap-4">
            <button
              className="p-2.5 border border-primary rounded-full"
              onClick={prev}
            >
              <ArrowLeft size={16} />
            </button>
            <button
              className="p-2.5 border border-primary rounded-full"
              onClick={next}
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* ≥ xl (vertical) */}
        <div className="hidden xl:block w-full select-none">
          <div className="h-[680px] w-full flex items-center justify-between gap-8">
            <div
              className="relative h-[750px] w-[300px] overflow-hidden touch-none"
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              onContextMenu={(e) => e.preventDefault()}
            >
              {showGuides && (
                <div
                  className="pointer-events-none absolute inset-x-0 h-px bg-white/60 z-20"
                  style={{ top: `calc(50% + ${centerOffsetLg}px)` }}
                />
              )}
              <div ref={lgWrapRef} className="absolute inset-0" />
            </div>

            <div
              ref={detailsRefLg}
              className="max-w-4xl mx-auto flex-1 flex flex-col gap-16"
            >
              <div className="flex flex-col gap-10">
                <div className="flex items-center justify-start w-40">
                  <data.Logo />
                </div>
                {data.quote}
                <p>
                  {data.author}, {data.role}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button
                className="p-4 border border-primary rounded-full"
                onClick={prev}
              >
                <ArrowUp />
              </button>
              <button
                className="p-4 border border-primary rounded-full"
                onClick={next}
              >
                <ArrowDown />
              </button>
            </div>
          </div>
        </div>
        {/* / ≥ xl */}
      </div>
    </div>
  );
}
