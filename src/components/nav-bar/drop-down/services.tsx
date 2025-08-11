import { type ReactNode } from "react";
import HoverContainer from "../../shared/hover-continer";
import { Link } from "react-router-dom";

export default function ServicesDropDown() {
  {
    /* 
    ============================= 
    Move all these to the config folder later.
    ============================= 
  */
  }

  const AUDIO_EXPERIENCE_SERVICES = [
    {
      mainText: "Voiceover Services",
      subText: "Eye-catching designs that perform",
      href: "#",
    },
    {
      mainText: "Music & Sound design",
      subText: "Engaging assets for all platforms",
      href: "#",
    },
    {
      mainText: "PImmersive & Experiential Audio",
      subText: "Captivating slides that tell your story",
      href: "#",
    },
  ];

  const SPECIALIZED_SERVICES = [
    {
      mainText: "Phygital Storytelling",
      subText: "Effortless video production at scale",
      href: "#",
    },
    {
      mainText: "Podcast Production",
      subText: "For websites, ads, and presentations",
      href: "#",
    },
    {
      mainText: "Audiobook Production",
      subText: "Innovative solutions for 3D design services",
      href: "#",
    },
    {
      mainText: "Storytelling Sprint",
      subText: "Innovative solutions for 3D design services",
      href: "#",
    },
  ];

  const STRATEGIC_STORYTELLING_SERVICES = [
    {
      mainText: "Marketing Strategy",
      subText: "Human brilliance powered by AI",
      href: "#",
    },
  ];

  const VISUAL_STORYTELLING_SERVICES = [
    {
      mainText: "Video Production",
      subText: "Grow your brand with expert consultants",
      href: "#",
    },
    {
      mainText: "Motion Graphics & Animation",
      subText: "Grow your brand with expert consultants",
      href: "#",
    },
    {
      mainText: "AI-Storytelling",
      subText: "Grow your brand with expert consultants",
      href: "#",
    },
  ];

  return (
    <div className="relative z-5">
      <div className="pointer-events-auto relative top-full left-0 w-screen bg-light-bg shadow-lg pt-12">
        <div className="grid grid-cols-3 gap-8 mx-container h-fit">
          {/* Column 1 */}
          <div>
            <HeaderBadge textColor="#0A221F" bgColor="#D8FF85">
              Creative design services
            </HeaderBadge>
            <ul className="flex flex-col gap-7">
              {AUDIO_EXPERIENCE_SERVICES.map((it, idx) => {
                return (
                  <li key={idx} className="cursor-pointer">
                    <Link to={it.href}>
                      <div className="relative group">
                        <HoverContainer color="#0a211f">
                          <p className="text-[#0a211f] ">{it.mainText}</p>
                        </HoverContainer>
                        <p className="text-sm text-[#0a211f] mt-2">
                          {it.subText}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <HeaderBadge bgColor="#2A4E45" textColor="#8dfdba">
              Specilaized production services
            </HeaderBadge>
            <ul className="flex flex-col gap-7">
              {SPECIALIZED_SERVICES.map((it, idx) => {
                return (
                  <li key={idx}>
                    <Link to={it.href}>
                      <div className="relative group">
                        <HoverContainer color="#0a211f">
                          <p className="text-[#0a211f] ">{it.mainText}</p>
                        </HoverContainer>
                        <p className="text-sm text-[#0a211f] mt-2">
                          {it.subText}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <HeaderBadge textColor="#F6F9F2" bgColor="#18546D">
              AI services
            </HeaderBadge>
            <ul className="flex flex-col gap-7 mb-10">
              {STRATEGIC_STORYTELLING_SERVICES.map((it, idx) => {
                return (
                  <li key={idx}>
                    <Link to={it.href}>
                      <div className="relative group">
                        <HoverContainer color="#0a211f">
                          <p className="text-[#0a211f] ">{it.mainText}</p>
                        </HoverContainer>
                        <p className="text-sm text-[#0a211f] mt-2">
                          {it.subText}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <HeaderBadge textColor="#0A221F" bgColor="#E6D3B0">
              Marketing services
            </HeaderBadge>
            <ul className="flex flex-col gap-7 mb-10">
              {VISUAL_STORYTELLING_SERVICES.map((it, idx) => {
                return (
                  <li key={idx}>
                    <Link to={it.href}>
                      <div className="relative group">
                        <HoverContainer color="#0a211f">
                          <p className="text-[#0a211f] ">{it.mainText}</p>
                        </HoverContainer>
                        <p className="text-sm text-[#0a211f] mt-2">
                          {it.subText}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}

const HeaderBadge = ({
  children,
  bgColor,
  textColor,
}: {
  children: ReactNode;
  bgColor: string;
  textColor: string;
}) => {
  return (
    <div
      className={`font-instrumental-regular w-fit text-2xl px-2 py-1 rounded-lg mb-6`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {children}
    </div>
  );
};
