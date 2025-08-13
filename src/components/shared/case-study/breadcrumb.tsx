import React from "react";
import { Link } from "react-router-dom";

export interface BreadcrumbPagesProps {
  page: string;
  href: string;
}
function BreadCrumb({ pages }: { pages: BreadcrumbPagesProps[] }) {
  return (
    <div className="max-w-[1800px] mx-auto pt-sm-pad px-4 sm:px-6 lg:px-8">
      <div className="flex gap-2">
        {pages.map((p, idx) => {
          return (
            <span key={idx} className="flex gap-2 ">
              <Link to={p.href}>
                <em className="s-heading">{p.page}</em>
              </Link>

              {idx < pages.length - 1 && (
                <span className="tracking-[2px] text-sm font-interTight-semibold">
                  /
                </span>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default BreadCrumb;
