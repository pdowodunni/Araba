import React, { useState } from "react";

function CaseDetails({
  assetType,
  assetLink,
}: {
  assetType: string;
  assetLink: string;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <section>
      <div className="mx-container">
        <div className="flex justify-between gap-6">
          {/* WORD COLUMN */}
          <div className="flex flex-col justify-center gap-12 w-[700px] py-sm-pad">
            <div className="flex flex-col gap-1">
              <span className="s-heading">Project Summary</span>
              <h4 className="font-interTight-regular leading-tight">
                <span>
                  The New is passionate about Jesus encounters and life
                  transformation.
                </span>
              </h4>
              <div className="">
                <p className="">
                  Scale your in-house creative team with top global talent
                  powered by industry-leading AI workflows, delivering anything
                  you can imagine fast and affordably.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-10">
                <InfoHelper title="Client" text="The New" />
                <InfoHelper title="Year" text="2024" />
              </div>
              <div>
                <InfoHelper
                  title="Industry"
                  text="Faith Culture & Experimental Events"
                />
              </div>
              <div>
                <InfoHelper
                  title="Industry"
                  text="Scriptwriting & Concept Development • Voice Casting • Voice Acting • Sound Design • Creative Direction"
                />
              </div>
            </div>
          </div>

          {/* VIDEO COLUMN */}
          <div className="max-w-[680px] w-full relative min-h-full bg-amber-600 overflow-hidden rounded-lg">
            {assetType === "image" ? (
              <div
                className="
                    w-full h-full rounded-lg
                    bg-center
                    bg-[length:100%]
                    group-hover:bg-[length:115%]
                    transition-all
                    duration-300
                    
                  "
                style={{ backgroundImage: `url('${assetLink}')` }}
              />
            ) : assetType === "video" ? (
              <div
                className="
                    w-full h-full rounded-lg
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
