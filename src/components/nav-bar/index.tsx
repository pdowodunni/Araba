import { NAV_LINKS } from "../../config/navigator";
import { Link, useLocation } from "react-router-dom";
import SlideUpButton from "../shared/slide-up-button";
import {
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
  useEffect,
} from "react";
import HoverContainer from "../shared/hover-continer";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";

type DropRenderable = ReactNode | (() => JSX.Element);

/* Page style map */
const PAGE_STYLES: Record<
  string,
  {
    bg: string;
    text: string;
    initialText: string;
    initailLogo: string;
    logo: string;
  }
> = {
  "/": {
    bg: "bg-primary",
    text: "text-white",
    initialText: "text-light-bg",
    logo: "/images/logo.webp",
    initailLogo: "/images/logo.webp",
  }, // landing
  "/our-work": {
    bg: "bg-light-bg",
    text: "text-primary",
    initialText: "bg-transparent text-primary",
    logo: "/images/logo-color.webp",
    initailLogo: "/images/logo-color.webp",
  },
  "/service/music-sound-design": {
    bg: "bg-light-bg",
    text: "text-primary",
    initialText: "text-light-bg",
    logo: "/images/logo-color.webp",
    initailLogo: "/images/logo.webp",
  },
};

const DEFAULT_STYLE = {
  bg: "bg-light-bg",
  text: "text-primary",
  initialText: "text-primary",
};

function NavigationBar() {
  const location = useLocation();
  const {
    bg: pageBg,
    text: textClass,
    initialText: initialText,
    initailLogo,
    logo,
  } = PAGE_STYLES[location.pathname] ?? DEFAULT_STYLE;

  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);
  const [solidBG, setSolidBG] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const atOrPast = window.scrollY >= 200;
      setSolidBG(atOrPast);
    };
    onScroll(); // set initial
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overLink = useRef(false);
  const overPanel = useRef(false);

  const openTimer = useRef<number | null>(null);
  const closeTimer = useRef<number | null>(null);

  const clearOpenTimer = () => {
    if (openTimer.current) {
      window.clearTimeout(openTimer.current);
      openTimer.current = null;
    }
  };
  const clearCloseTimer = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const closePanelNow = () => {
    clearOpenTimer();
    clearCloseTimer();
    setPanelOpen(false);
    setActiveIdx(null);
  };

  const scheduleOpen = (idx: number) => {
    clearOpenTimer();
    clearCloseTimer();
    openTimer.current = window.setTimeout(() => {
      setActiveIdx(idx);
      setPanelOpen(true);
    }, 500); // 0.5s delay
  };

  const maybeClose = () => {
    clearOpenTimer();
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => {
      if (!overLink.current && !overPanel.current) {
        closePanelNow();
      }
    }, 80);
  };

  useEffect(() => {
    return () => {
      clearOpenTimer();
      clearCloseTimer();
    };
  }, []);

  const rawDrop: DropRenderable | null =
    activeIdx != null
      ? (NAV_LINKS[activeIdx]?.dropDown as DropRenderable | undefined) ?? null
      : null;

  const renderDrop = (d: DropRenderable | null): ReactNode => {
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
        className={`${
          solidBG ? pageBg : `bg-transparent ${initialText}`
        } w-screen fixed top-0 z-50 transform duration-400`}
        /* no transition classes -> instantaneous swap at 200px */
      >
        {panelOpen && (
          <div className="top-[74px] absolute left-0 w-screen h-screen inset-0 bg-black/10 backdrop-blur-md" />
        )}

        <div className="mx-container h-[78px] flex items-center justify-between">
          <div>
            <Link to={"/"}>
              <img
                src={solidBG ? logo : initailLogo}
                alt="araba's logo"
                className="w-[90px] select-none pointer-events-none"
              />
            </Link>
          </div>

          <nav>
            <ul className="flex gap-10 justify-center items-center">
              {NAV_LINKS.map((i, idx) => {
                const hasDD = Boolean(i.dropDown);
                return (
                  <li
                    key={idx}
                    onMouseEnter={() => {
                      overLink.current = true;
                      if (hasDD) scheduleOpen(idx);
                      else {
                        closePanelNow();
                      }
                    }}
                    onMouseLeave={() => {
                      overLink.current = false;
                      maybeClose();
                    }}
                  >
                    <Link
                      to={i.href}
                      className={`${textClass} text-sm px-4 py-2 hover:bg-secondary transition-colors font-interTight-regular`}
                    >
                      <HoverContainer
                        color={
                          textClass === "text-white"
                            ? "white"
                            : "var(--color-primary)"
                        }
                      >
                        <div
                          className={`flex items-center gap-1 h-[60px]  ${
                            solidBG ? textClass : initialText
                          }`}
                        >
                          {i.label}
                          {hasDD && (
                            <span className={textClass}>
                              <ChevronDown size={16} strokeWidth={1} />
                            </span>
                          )}
                        </div>
                      </HoverContainer>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex gap-4 justify-center items-center">
            <SlideUpButton
              type="fill"
              bgColor="var(--color-green-accent"
              textColor="var(--color-primary)"
            >
              Let's talk
            </SlideUpButton>
          </div>
        </div>

        {panelOpen && rawDrop && (
          <DropDownHolder
            open={panelOpen}
            onEnter={() => {
              overPanel.current = true;
              clearCloseTimer();
            }}
            onLeave={() => {
              overPanel.current = false;
              maybeClose();
            }}
            onRequestClose={closePanelNow}
          >
            {renderDrop(rawDrop)}
          </DropDownHolder>
        )}
      </div>
    </>
  );
}

export default NavigationBar;

/* ----------------------------- */

function DropDownHolder({
  children,
  open,
  onEnter,
  onLeave,
  onRequestClose,
}: {
  children: ReactNode;
  open: boolean;
  onEnter: () => void;
  onLeave: () => void;
  onRequestClose: () => void;
}) {
  const menuRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = menuRef.current;
    if (!el) return;
    if (open) {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 60 },
        { autoAlpha: 1, y: 0, duration: 0.3, ease: "power1.out" }
      );
    } else {
      gsap.fromTo(
        el,
        { autoAlpha: 1, y: 0 },
        { autoAlpha: 0, y: 60, duration: 0.3, ease: "power1.out" }
      );
    }
  }, [open]);

  // Close on any anchor (or explicit marker) click inside the dropdown
  const onClickCapture: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    const anchor = target.closest('a, [data-close-dropdown="true"]');
    if (anchor) onRequestClose();
  };

  return (
    <div
      ref={menuRef}
      className="fixed top-[75px] bg-light-bg shadow z-10 w-screen"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClickCapture={onClickCapture}
    >
      {children}
    </div>
  );
}
