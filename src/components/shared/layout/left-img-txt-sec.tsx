import type { ReactNode } from "react";

function LeftImgTextSec({
  heading,
  subheading,
  text,
  bgImage = "/images/111.jpg",
  bgColor = "#dcf0e3",
}: {
  heading: string;
  subheading: ReactNode;
  text: ReactNode;
  bgImage?: string;
  bgColor?: string;
}) {
  return (
    <section
      className="flex flex-col gap-12"
      style={{ backgroundColor: bgColor }}
    >
      <div className="w-full relative max-w-[1680px] mx-auto px-0 sm:px-0 lg:px-8">
        <div className="grid items-stretch gap-0 xl:grid-cols-[1fr_1fr]">
          {/* IMAGE */}

          <div className="relative aspect-[1/1.3] xl:aspect-auto xl:min-h-[560px] order-2 xl:order-1 bg-red-500">
            <div className="absolute inset-y-0 right-0 xl:left-[calc(100%-50vw)] w-full xl:w-auto">
              <div
                className="h-full w-full max-w-[1500px] bg-cover bg-center"
                style={{ backgroundImage: `url('${bgImage}')` }}
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="w-full flex xl:pl-12 items-center py-sm-pad order-1 xl:order-2 mr-assist">
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
          {/* /CONTENT */}
        </div>
      </div>
    </section>
  );
}

export default LeftImgTextSec;
