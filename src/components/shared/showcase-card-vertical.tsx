import { type ReactElement } from "react";

function ShowcaseCardVertical({
  title,
  text,
  img,
  bg,
}: {
  title: ReactElement;
  text: string;
  img: string;
  bg: string;
}) {
  return (
    <div className="group grid h-[760px] grid-rows-[1fr_150px] overflow-hidden rounded-lg transition-all duration-300 hover:grid-rows-[1fr_200px]">
      <div className="h-full w-full">
        <img src={img} alt="" className="h-full w-full object-cover" />
      </div>
      <div className={`${bg} p-[40px] pb-[16px] leading-tight`}>
        {title}
        <div className="mt-2 opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default ShowcaseCardVertical;
