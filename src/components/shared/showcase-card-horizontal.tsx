import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function ShowCaseCardHorizontal({
  span,
  img,
  title,
  desc,
  href,
}: {
  span: number;
  img: string;
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <div
      data-cursor-target
      data-cursor-text="VISIT PAGE"
      style={{ gridColumn: `span ${span} / span ${span}` }}
    >
      <Link to={href}>
        <div className="group w-full flex flex-col cursor-pointer gap-6 mb-8 md:mb-0">
          <div
            className="
        w-full h-[180px] xl:h-[396px] rounded-lg
        bg-center
        bg-[length:100%]
        group-hover:bg-[length:115%]
        transition-all
        duration-300
        
      "
            style={{ backgroundImage: `url('${img}')` }}
          />
          <div>
            <div className="flex items-center gap-1">
              <h5 className="font-instrumental-serif m-0">{title}</h5>
              <span className="transform xl:-translate-x-2 xl:translate-y-2 scale-100 xl:scale-0 opacity-100 xl:opacity-0 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-in-out">
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
