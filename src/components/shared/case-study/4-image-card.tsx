import React from "react";

function FourimgCrd({
  imagesUrl,
}: {
  imagesUrl: [string, string, string, string];
}) {
  return (
    <section>
      <div className="case-container my-sm-pad">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div
            style={{
              backgroundImage: `url('${imagesUrl[0]}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full aspect-[1/0.65] bg-mid-bg"
          />
          <div
            style={{
              backgroundImage: `url('${imagesUrl[1]}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full aspect-[1/0.65] bg-mid-bg"
          />
          <div
            style={{
              backgroundImage: `url('${imagesUrl[2]}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full aspect-[1/0.65] bg-mid-bg"
          />
          <div
            style={{
              backgroundImage: `url('${imagesUrl[3]}')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full aspect-[1/0.65] bg-mid-bg"
          />
        </div>
      </div>
    </section>
  );
}

export default FourimgCrd;
