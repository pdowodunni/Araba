// components/nav/mobile-nav-panel.tsx
import {
  useLayoutEffect,
  useRef,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import gsap from "gsap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import HoverContainer from "../shared/hover-continer";
import { ChevronDown, X } from "lucide-react";
import { NAV_LINKS } from "../../config/navigator";

type DropRenderable = ReactNode | (() => JSX.Element);

type Props = {
  open: boolean;
  onClosed?: () => void;
  textClass: string;
  initialText: string; // (kept for API parity, unused here)
  pageBg: string;
  logo: string;
};

export default function MobileNavPanel({
  open,
  onClosed,
  textClass,
  pageBg,
  logo,
}: Props) {
  const panelRef = useRef<HTMLDivElement>(null);
  const blurRef = useRef<HTMLDivElement>(null);

  // dropdown state (single open at a time; null => none)
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  // per-item dropdown content refs
  const ddRefs = useRef<(HTMLDivElement | null)[]>([]);
  ddRefs.current = [];

  const navigate = useNavigate();
  const location = useLocation();

  // Close panel when route changes
  useEffect(() => {
    onClosed?.();
    setOpenIdx(null);
  }, [location.pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  // Panel show/hide animation
  useLayoutEffect(() => {
    const el = panelRef.current;
    const blurEl = blurRef.current;
    if (!el) return;
    gsap.killTweensOf([el, blurEl]);

    if (open) {
      gsap.set(el, { display: "block", pointerEvents: "auto" });
      gsap.set(blurEl, { "--ov-blur": "0px" as any });
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: -20 },
        { autoAlpha: 1, y: 0, duration: 0.25, ease: "power2.out" }
      );
      gsap.fromTo(
        blurEl,
        { "--ov-blur": "0px" as any },
        { "--ov-blur": "12px" as any, duration: 0.4, ease: "power1.in" }
      );
    } else {
      gsap.to(el, {
        autoAlpha: 0,
        y: -20,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(el, { display: "none", pointerEvents: "none" });
        },
      });
      gsap.to(blurEl, {
        "--ov-blur": "0px" as any,
        duration: 0.25,
        ease: "power2.in",
      });
    }
  }, [open]);

  // Helpers: open/close a specific dropdown container by index
  const openDD = (idx: number) => {
    const el = ddRefs.current[idx];
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.set(el, { display: "block", overflow: "hidden" });
    gsap.fromTo(
      el,
      { height: 0, autoAlpha: 0, y: -8 },
      { height: "auto", autoAlpha: 1, y: 0, duration: 0.25, ease: "power2.out" }
    );
  };

  const closeDD = (idx: number) => {
    const el = ddRefs.current[idx];
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.to(el, {
      height: 0,
      autoAlpha: 0,
      y: -8,
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => gsap.set(el, { display: "none" }),
    });
  };

  // Toggle logic on item click (click == trigger dropdown if present)
  const handleItemClick = (idx: number, hasDD: boolean, href: string) => {
    if (!hasDD) {
      if (href !== "#") {
        navigate(href);
      }
      onClosed?.();
      return;
    }

    // Accordion behavior: close previous, open new (or toggle same)
    if (openIdx === idx) {
      closeDD(idx);
      setOpenIdx(null);
    } else {
      if (openIdx !== null) closeDD(openIdx);
      openDD(idx);
      setOpenIdx(idx);
    }
  };

  // Render drop content (node or factory)
  const renderDrop = (d: DropRenderable | undefined): ReactNode => {
    if (!d) return null;
    if (typeof d === "function") {
      const Comp = d as () => JSX.Element;
      return <Comp />;
    }
    return d;
  };

  return (
    <>
      <div
        ref={panelRef}
        style={{ display: "none", opacity: 0, transform: "translateY(-20px)" }}
        aria-hidden={!open}
        className="fixed inset-x-0 top-0 z-50 text-white will-change-transform"
      >
        <div className="h-[90vh] overflow-y-scroll scrollbar-hide">
          {/* Header */}
          <div
            className="px-4 py-4 flex justify-between items-center"
            style={{
              backgroundColor:
                pageBg === "bg-light-bg"
                  ? "var(--color-light-bg)"
                  : "var(--color-primary)",
            }}
          >
            <Link to={"/"}>
              <img
                src={logo}
                alt="araba's logo"
                className="w-[90px] select-none pointer-events-none"
              />
            </Link>
            <span
              onClick={() => onClosed?.()}
              className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-lg select-none"
            >
              <X size={32} className={textClass} />
            </span>
          </div>

          {/* List */}
          <div
            className="px-4 py-4"
            style={{
              backgroundColor:
                pageBg === "bg-light-bg"
                  ? "var(--color-light-bg)"
                  : "var(--color-primary)",
            }}
          >
            <nav className="md:hidden">
              <ul className="flex gap-2 flex-col">
                {NAV_LINKS.map((i, idx) => {
                  const hasDD = Boolean(i.dropDown);
                  const isOpen = openIdx === idx;
                  return (
                    <li key={idx} className="w-full">
                      {/* Row (click target) */}
                      <div
                        onClick={() => handleItemClick(idx, hasDD, i.href)}
                        className="w-full flex items-center justify-between cursor-pointer select-none"
                      >
                        <HoverContainer
                          color={
                            textClass === "text-white"
                              ? "white"
                              : "var(--color-primary)"
                          }
                        >
                          <div
                            className={`flex items-center gap-2 h-[56px] ${textClass}`}
                          >
                            <span className="text-base">{i.label}</span>
                          </div>
                        </HoverContainer>
                        {hasDD && (
                          <ChevronDown
                            className={textClass}
                            size={28}
                            strokeWidth={1}
                            style={{
                              transition: "transform 200ms ease",
                              transform: isOpen
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                            }}
                          />
                        )}
                      </div>

                      {/* Dropdown content */}
                      {hasDD && (
                        <div
                          ref={(el) => {
                            ddRefs.current[idx] = el;
                            if (el) {
                              // ensure correct initial state on mount/update
                              if (openIdx === idx) {
                                gsap.set(el, {
                                  display: "block",
                                  height: "auto",
                                  autoAlpha: 1,
                                  y: 0,
                                });
                              } else {
                                gsap.set(el, {
                                  display: "none",
                                  height: 0,
                                  autoAlpha: 0,
                                  y: -8,
                                });
                              }
                            }
                          }}
                          className="overflow-hidden"
                          onClickCapture={(e) => {
                            // Close the panel if any link inside dropdown is clicked
                            const target = e.target as HTMLElement | null;
                            const anchor = target?.closest("a");
                            if (anchor) onClosed?.();
                          }}
                        >
                          {/* Inner padding for dropdown content */}
                          <div className="pl-2 pr-1 pb-2 pt-1">
                            {renderDrop(i.dropDown as DropRenderable)}
                          </div>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>

        {/* Backdrop */}
        <div
          ref={blurRef}
          className="top-[74px] z-[-1] absolute left-0 w-screen h-screen inset-0 bg-black/10 backdrop-blur-0"
          style={
            {
              ["--ov-blur" as any]: "0px",
              backdropFilter: "blur(var(--ov-blur))",
              WebkitBackdropFilter: "blur(var(--ov-blur))",
            } as React.CSSProperties
          }
          onClick={() => onClosed?.()}
        />
      </div>
    </>
  );
}
