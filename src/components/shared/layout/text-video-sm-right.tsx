import type { ReactNode } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import SoundButton from "../sound-button";

function TxtVidSecSmRight({
  heading,
  subheading,
  text,
  videoLink,
}: {
  heading: string;
  subheading: ReactNode;
  text: ReactNode;
  videoLink: string;
}) {
  const [muted, setMuted] = useState(true);
  return (
    <section className="flex flex-col gap-12 pt-sm-pad pb-0 xl:pb-sm-pad">
      <div className="mx-container w-full">
        <div className="grid gap-12 xl:grid-cols-2">
          <div className="w-full h-full flex items-center">
            <div className="flex flex-col gap-2 w-full">
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
            <div className="w-full h-full aspect-[16/9] bg-red-500 flex items-center justify-center bg-center rounded-2xl transition-all duration-300 relative overflow-hidden">
              {/* <div className="relative aspect-[16/9] bg-green-600 w-full"> */}
              <ReactPlayer
                src={videoLink}
                width="100%"
                height="100%"
                playing={true}
                muted={muted}
                loop={true}
                playsInline={false}
                config={{
                  youtube: {
                    playerVars: { autoplay: 1, playsinline: 1, rel: 0 },
                  },
                  file: {
                    attributes: {
                      playsInline: true,
                    },
                  },
                }}
                className="absolute top-0 left-0 scale-150 w-full h-full pointer-events-none"
              />
              {/* </div> */}

              <SoundButton muted={muted} setMuted={setMuted} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TxtVidSecSmRight;
