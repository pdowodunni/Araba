// src/components/project/ProjectPager.tsx
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PROJECT_LIST } from "../../../config/case-study";

type ShowcaseCardHorizontalProps = {
  span: number;
  assetLink: string;
  assetType: "image" | "video";
  title: string;
  desc: string;
  href: string;
};

type Props = {
  // rows: ShowcaseCardHorizontalProps[][];
  backHref?: string; // route to the work listing page
  className?: string;
};

export default function ProjectPager({
  backHref = "/our-work",
  className = "",
}: Props) {
  const { pathname } = useLocation();
  const projects = PROJECT_LIST.flat();

  const idx = projects.findIndex(
    (p) => p.href === pathname || pathname.startsWith(p.href + "/")
  );

  const isKnown = idx !== -1;
  const prev = isKnown && idx > 0 ? projects[idx - 1] : null;
  const next = isKnown && idx < projects.length - 1 ? projects[idx + 1] : null;

  const leftTo = prev ? prev.href : backHref;
  const leftLabel = prev ? "Previous Project" : "Back to Our Work";

  const rightTo = next ? next.href : backHref;
  const rightLabel = next ? "Next Project" : "Back to Our Work";

  const baseBtn =
    "inline-flex items-center gap-0 text-primary font-interTight-regular";
  const arrowBtn = "w-9 h-9 rounded-full  flex items-center justify-center";

  return (
    <nav
      className={`w-full border-t border-primary/0 bg-light-bg  ${className}`}
      aria-label="Project pagination"
    >
      <div className="mx-container py-8 sm:py-10">
        <div className="flex items-center justify-between">
          {/* Left button */}
          <Link to={leftTo} className={baseBtn} rel={prev ? "prev" : undefined}>
            <span className={arrowBtn}>
              <ChevronLeft size={25} strokeWidth={1.5} />
            </span>
            <span className="">{leftLabel}</span>
          </Link>

          {/* Right button */}
          <Link
            to={rightTo}
            className={baseBtn}
            rel={next ? "next" : undefined}
          >
            <span className="">{rightLabel}</span>
            <span className={arrowBtn}>
              <ChevronRight size={25} strokeWidth={1.5} />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
