import React from "react";

function TwoImgCrdRow({ imagesUrl }: { imagesUrl: [string, string] }) {
  return (
    <section>
      <div className="case-container my-sm-pad">
        <div className="w-full gap-8 flex flex-row justify-between">
          <div
            style={{
              backgroundImage: `url('${imagesUrl[0]}')`,
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
            className="w-full aspect-[1/1.3] bg-mid-bg rounded-lg"
          />
          <div
            style={{
              backgroundImage: `url('${imagesUrl[1]}')`,
              backgroundPosition: "center",
            }}
            className="w-full aspect-[1/1.3] bg-mid-bg rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default TwoImgCrdRow;
