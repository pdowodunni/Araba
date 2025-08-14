import React from "react";

function ThreeImgCrdRow({
  imagesUrl,
}: {
  imagesUrl: [string, string, string];
}) {
  return (
    <section>
      <div className="case-container my-sm-pad">
        <div className="w-full xl:gap-8 md:gap-4 gap-6 flex flex-col md:flex-row justify-between">
          <div
            style={{
              backgroundImage: `url('${imagesUrl[0]}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full aspect-[1/1.05] bg-mid-bg rounded-lg"
          />
          <div
            style={{
              backgroundImage: `url('${imagesUrl[1]}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full aspect-[1/1.05] bg-mid-bg rounded-lg"
          />
          <div
            style={{
              backgroundImage: `url('${imagesUrl[2]}')`,
              backgroundSize: "cover",
            }}
            className="w-full aspect-[1/1.05] bg-mid-bg rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default ThreeImgCrdRow;
