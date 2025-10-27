import type { ReactNode } from "react";

function RightImgTextSec({
  heading,
  subheading,
  text,
  bgImage = "/images/18.jpg",
  bgColor = "#dceaf0",
}: {
  heading: string;
  subheading: ReactNode;
  text: ReactNode;
  bgImage?: string;
  bgColor?: string;
}) {
  return (
    <section
      className="flex flex-col gap-12 "
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-full relative max-w-[1680px] mx-auto px-0 sm:px-0 xl:px-8">
        <div className="grid items-stretch gap-0 xl:grid-cols-[1fr_1fr]">
          {/* CONTENT */}
          <div className="w-full flex items-center xl:pr-12 py-sm-pad ml-assist">
            <div className="flex flex-col gap-2 px-4 sm:px-6 xl:px-0">
              <div className="flex flex-col gap-4 mb-4">
                <span className="s-heading border-b border-primary">
                  {heading}
                </span>
                <div>{subheading}</div>
              </div>
              <div>{text}</div>
            </div>
          </div>

          {/* IMAGE*/}
          <div className="relative aspect-[1/1.3] xl:aspect-auto xl:min-h-[560px]">
            <div className="absolute inset-y-0 left-0 right-0 xl:right-[calc(100%-50vw)] w-full xl:w-auto">
              <div
                className="h-full w-full lg:max-w-[1500px] bg-cover bg-center"
                style={{ backgroundImage: `url('${bgImage}')` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RightImgTextSec;
