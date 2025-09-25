import type { ReactNode } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";

function TxtVidSecSmLeft({
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
  const [loaded, setLoaded] = useState(false);
  return (
    <section className="flex flex-col gap-12 pt-sm-pad pb-0 xl:pb-sm-pad">
      <div className="mx-container w-full">
        <div className="grid gap-12 xl:grid-cols-2">
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full aspect-[16/10] h-full bg-center transition-all duration-300 relative overflow-hidden">
              <ReactPlayer
                src={videoLink}
                width="100%"
                height="100%"
                playing={true}
                muted={true}
                loop={true}
                playsInline={false}
                config={{
                  youtube: {
                    playerVars: { autoplay: 1, playsinline: 1, rel: 0 },
                  },
                  file: {
                    attributes: {
                      playsInline: false,
                    },
                  },
                }}
                onReady={() => setLoaded(true)}
                className="absolute top-0 left-0 w-full h-full"
              />

              {!loaded && (
                <img
                  src="/images/thumb.jpg"
                  alt="background logo"
                  className="opacity-0"
                />
              )}
            </div>
          </div>
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
        </div>
      </div>
    </section>
  );
}

export default TxtVidSecSmLeft;
