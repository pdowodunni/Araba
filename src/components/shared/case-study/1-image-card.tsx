import { useState } from "react";

function OneImgCrd({
  assetLink,
  assetType,
}: {
  assetLink: string;
  assetType: "image" | "video";
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <section>
      <div className="case-container my-sm-pad">
        <div className="w-full aspect-[16/10] overflow-hidden bg-mid-bg">
          {assetType === "image" ? (
            <div
              className="
        w-full aspect-[16/10] rounded-lg
        bg-center
 
        
      "
              style={{
                backgroundImage: `url('${assetLink}')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
          ) : assetType === "video" ? (
            <div
              className="
        w-full aspect-[16/10] rounded-lg
        bg-center
        transition-all
        duration-300
        relative
        overflow-hidden
      "
            >
              {" "}
              <video
                playsInline
                autoPlay
                muted
                loop
                onLoadedData={() => setLoaded(true)}
                className="absolute inset-0 w-full h-full object-cover"
              >
                {/* SWITCH TO VIDEO LINK LATER */}
                <source src={assetLink} type="video/webm" />
              </video>
              {!loaded && (
                <img
                  src="/images/thumb.jpg"
                  alt="background logo"
                  className="opacity-0"
                />
              )}
            </div>
          ) : (
            <div
              className="
        w-full aspect-[16/10] rounded-lg
        bg-center
        bg-[length:100%]
        group-hover:bg-[length:115%]
        transition-all
        duration-300
        
      "
              style={{ backgroundColor: `#e6ecd6` }}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default OneImgCrd;
