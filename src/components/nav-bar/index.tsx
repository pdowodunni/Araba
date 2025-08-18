import { NAV_LINKS } from "../../config/navigator";
import { Link } from "react-router-dom";
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

function NavigationBar() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [panelOpen, setPanelOpen] = useState(false);

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
    }, 350);
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
      <div className="bg-primary w-screen fixed top-0 z-50">
        {panelOpen && (
          <div className="top-[74px] absolute left-0 w-screen h-screen inset-0 bg-black/10 backdrop-blur-md" />
        )}

        <div className="mx-container h-[78px] flex items-center justify-between">
          <div>
            <Link to={"/"}>
              <img
                src="/images/logo.webp"
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
                      className="text-white text-sm px-4 py-2 hover:bg-secondary transition-colors font-interTight-regular"
                    >
                      <HoverContainer color="white">
                        <div className="flex items-center gap-1 h-[60px]">
                          {i.label}
                          {hasDD && (
                            <span>
                              <ChevronDown
                                color="white"
                                size={16}
                                strokeWidth={1}
                              />
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
        { autoAlpha: 0, y: 70 },
        { autoAlpha: 1, y: 0, duration: 0.3, ease: "power1.out" }
      );
    } else {
      gsap.fromTo(
        el,
        { autoAlpha: 1, y: 0 },
        { autoAlpha: 0, y: 70, duration: 0.3, ease: "power1.out" }
      );
    }
  }, [open]);

  // Event delegation: close when any <a> (or element marked with data-close-dropdown) is clicked
  const onClickCapture: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    const anchor = target.closest('a, [data-close-dropdown="true"]');
    if (anchor) onRequestClose();
  };

  return (
    <div
      ref={menuRef}
      className="fixed top-[78px] bg-light-bg shadow z-10 w-screen"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClickCapture={onClickCapture}
    >
      {children}
    </div>
  );
}
