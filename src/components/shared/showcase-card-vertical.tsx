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
    <div className="group grid w-[328px] h-[525px] xl:w-[390px] xl:h-[588px] 2xl:h-[760px] 2xl:w-[525px] grid-rows-[1fr_160px] overflow-hidden rounded-lg transition-all duration-300 hover:grid-rows-[1fr_200px]">
      <div className="h-full w-full bg-mid-bg overflow-hidden">
        <img src={img} alt="" className="h-full w-full object-cover" />
      </div>
      <div className={`${bg} p-[20px] pb-[16px] leading-tight`}>
        <div className="w-full h-[90px] flex items-center"> {title}</div>

        <div className="mt-2 opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default ShowcaseCardVertical;
