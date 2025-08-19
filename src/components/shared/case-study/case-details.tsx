import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Volume2, VolumeX } from "lucide-react";

function CaseDetails({
  assetType,
  assetLink,
  client,
  year,
  industry,
  service,
  aboutHead,
  aboutBody,
}: {
  assetType: string;
  assetLink: string;
  client: string;
  year: string;
  industry: string;
  service: string;
  aboutHead: string;
  aboutBody: string;
}) {
  const [muted, setMuted] = useState(true);
  const [loaded, setLoaded] = useState(false);
  return (
    <section>
      <div className="mx-container">
        <div className="flex justify-between gap-6 flex-col lg:flex-row">
          {/* WORD COLUMN */}
          <div className="flex flex-col justify-center gap-12 max-w-[700px] w-full py-sm-pad">
            <div className="flex flex-col gap-1">
              <span className="s-heading">Project Summary</span>
              <h4 className=" font-interTight-regular leading-tight">
                <span>{aboutHead}</span>
              </h4>
              <div className="">
                <p className="">{aboutBody}</p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-10">
                <InfoHelper title="Client" text={client} />
                <InfoHelper title="Year" text={year} />
              </div>
              <div>
                <InfoHelper title="Industry" text={industry} />
              </div>
              <div>
                <InfoHelper title="Service" text={service} />
              </div>
            </div>
          </div>

          {/* VIDEO COLUMN */}
          <div className="2xl:w-[680px] lg:w-[40%] w-full aspect-[9/10] relative lg:min-h-full bg-[#e6ecd6] overflow-hidden rounded-lg">
            {assetType === "image" ? (
              <div
                className="
                    w-full h-full rounded-lg
                    transition-all
                    duration-300
                    
                  "
                style={{
                  backgroundImage: `url('${assetLink}')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              />
            ) : assetType === "video" ? (
              <div
                className="w-full h-full rounded-lg bg-center
                    transition-all
                    duration-300
                    relative
                    overflow-hidden
                  "
              >
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
              </div>
            ) : (
              <div
                className="
                    w-full h-full rounded-lg
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
      </div>
    </section>
  );
}

export default CaseDetails;

const InfoHelper = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="flex flex-col">
      <span className="s-heading mb-0">{title}</span>
      <div>
        <h5>{text}</h5>
      </div>
    </div>
  );
};
