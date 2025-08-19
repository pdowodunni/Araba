import { useState } from "react";
import ReactPlayer from "react-player";
import { Volume2, VolumeX } from "lucide-react";

function OneImgCrd({
  assetLink,
  assetType,
}: {
  assetLink: string;
  assetType: "image" | "video";
}) {
  const [muted, setMuted] = useState(true);
  const [loaded, setLoaded] = useState(false);

  return (
    <section>
      <div className="case-container my-sm-pad">
        <div className="w-full aspect-[16/10] overflow-hidden bg-mid-bg">
          {assetType === "image" ? (
            <div
              className=" w-full aspect-[16/10] rounded-lg bg-center "
              style={{
                backgroundImage: `url('${assetLink}')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
          ) : assetType === "video" ? (
            <div className="w-full aspect-[16/10] h-full bg-center transition-all duration-300 relative overflow-hidden">
              <ReactPlayer
                src={assetLink}
                width="100%"
                height="100%"
                playing={true}
                muted={muted}
                loop={true}
                playsInline={true}
                config={{
                  youtube: {
                    playerVars: { autoplay: 1, playsinline: 1, rel: 0 },
                  },
                  file: {
                    attributes: {
                      muted,
                      playsInline: true,
                    },
                  },
                }}
                onReady={() => setLoaded(true)}
                className="absolute top-0 left-0 w-full h-full"
              />
              <button
                type="button"
                onClick={() => setMuted((m) => !m)}
                className="absolute bottom-4 right-4 z-10 rounded-full bg-black/60 text-white px-2 py-2 text-sm"
                aria-pressed={!muted}
                aria-label={muted ? "Unmute video" : "Mute video"}
              >
                {muted ? <Volume2 /> : <VolumeX />}
              </button>
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
              className="w-full aspect-[16/10] rounded-lg bg-center bg-[length:100%] group-hover:bg-[length:115%] transition-all duration-300"
              style={{ backgroundColor: `#e6ecd6` }}
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default OneImgCrd;
