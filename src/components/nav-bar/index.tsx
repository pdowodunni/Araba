import { NAV_LINKS } from "../../config/navigator";
import { Link } from "react-router-dom";
import SlideUpButton from "../shared/slide-up-button";
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import HoverContainer from "../shared/hover-continer";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";

function NavigationBar() {
  const [ActiveDropDown, setActiveDropDown] = useState<ReactNode | null>(null);

  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-primary w-screen fixed top-0 z-50">
        {open && (
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
                return (
                  <>
                    <li
                      key={idx}
                      onMouseEnter={() => {
                        setActiveDropDown(i.dropDown ?? null);
                        if (i.dropDown) setOpen(true);
                      }}
                      onMouseLeave={() => {
                        // setActiveDropDown(null);
                        setOpen(false);
                      }}
                    >
                      <Link
                        to={i.href}
                        className="text-white  text-sm px-4 py-2 hover:bg-secondary transition-colors font-interTight-regular"
                      >
                        <HoverContainer color="white">
                          <div className="flex items-center gap-1 h-[60px]">
                            {i.label}{" "}
                            {i.dropDown && (
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
                    {i.dropDown && ActiveDropDown && (
                      <DropDownholder
                        DropDown={ActiveDropDown}
                        open={open}
                        setOpen={setOpen}
                        // setActiveDropDown={setActiveDropDown}
                      />
                    )}
                  </>
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
      </div>
    </>
  );
}

export default NavigationBar;

const DropDownholder = ({
  DropDown,
  open,
  setOpen,
}: // setActiveDropDown,
{
  DropDown: ReactNode;
  open: boolean;
  setOpen: any;
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const el = menuRef.current;
    if (!el) return;
    if (open) {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.2,
          ease: "power1.out",
        }
      );
    } else {
      gsap.fromTo(
        el,
        { autoAlpha: 1, y: 0 },
        {
          autoAlpha: 0,
          y: 20,
          duration: 0.1,
          ease: "power1.out",
        }
      );
    }
  }, [open]);

  return (
    <div
      className="fixed top-[78px] bg-light-bg shadow z-10 w-screen"
      ref={menuRef}
      onMouseEnter={() => {
        console.log("Entered");
        setOpen(true);
      }}
      onMouseLeave={() => {
        setOpen(false);
      }}
    >
      {DropDown}
    </div>
  );
};
