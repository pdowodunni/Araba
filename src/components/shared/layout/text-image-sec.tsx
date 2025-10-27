import type { ReactNode } from "react";

function TxtImgSec({
  heading,
  subheading,
  text,
  bgImage = "/images/17.jpg",
}: {
  heading: string;
  subheading: ReactNode;
  text: ReactNode;
  bgImage?: string;
}) {
  return (
    <section className="flex flex-col gap-12 pt-sm-pad pb-0 xl:pb-sm-pad">
      <div className="mx-container w-full">
        <div className="grid gap-12 xl:grid-cols-2">
          <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-4 mb-4">
                <span className="s-heading border-b border-primary">
                  {heading}
                </span>
                <div>{subheading}</div>
              </div>

              <div className="max-w-[720px]">{text}</div>
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center">
            <div
              className="relative w-full xl:w-[36rem] 2xl:w-[48.25rem] bg-primary aspect-square xl:rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url('${bgImage}')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TxtImgSec;
