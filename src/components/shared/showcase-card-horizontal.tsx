import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export interface ShowcaseCardHorizontalProps {
  span: number;
  assetLink: string;
  assetType: "image" | "video";
  title: string;
  desc: string;
  href: string;
  poster?: string;
}

export function ShowCaseCardHorizontal({
  span,
  assetLink,
  assetType,
  title,
  desc,
  href,
  poster,
}: ShowcaseCardHorizontalProps) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      data-cursor-target
      data-cursor-text="VISIT PAGE"
      style={{ gridColumn: `span ${span} / span ${span}` }}
    >
      <Link to={href}>
        <div className="group w-full flex flex-col cursor-pointer gap-6 mb-12 md:mb-0">
          {assetType === "image" ? (
            <div
              className="
                  w-full h-[180px] xl:h-[396px] rounded-lg
                  bg-center
                  bg-[length:100%]
                  group-hover:bg-[length:115%]
                  transition-all
                  duration-300
                "
              style={{ backgroundImage: `url('${assetLink}')` }}
            />
          ) : assetType === "video" ? (
            <div
              className="
                w-full h-[180px] xl:h-[396px] rounded-lg
                bg-center
                transition-all
                duration-300
                relative
                overflow-hidden
              "
            >
              {" "}
              <video
                playsInline
                autoPlay
                muted
                loop
                onLoadedData={() => setLoaded(true)}
                poster={poster}
                className="absolute inset-0 w-full h-full object-cover"
              >
                {/* SWITCH TO VIDEO LINK LATER */}
                <source src={assetLink} type="video/mp4" />
              </video>
              {!loaded && (
                <img
                  src="/images/thumb.jpg"
                  alt="background logo"
                  className="opacity-0"
                />
              )}
            </div>
          ) : (
            <div
              className="
        w-full h-[180px] xl:h-[396px] rounded-lg
        bg-center
        bg-[length:100%]
        group-hover:bg-[length:115%]
        transition-all
        duration-300
        
      "
              style={{ backgroundColor: `#e6ecd6` }}
            />
          )}

          <div>
            <div className="flex items-center gap-1">
              <h5 className="font-instrumental-serif m-0">{title}</h5>
              <span className="transform xl:-translate-x-2 xl:translate-y-2 scale-100 xl:scale-0 opacity-100 xl:opacity-0 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                <ArrowUpRight strokeWidth={1} size={24} />
              </span>
            </div>
            <p className="m-0">{desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
