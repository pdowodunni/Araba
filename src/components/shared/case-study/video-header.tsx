import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import ReactPlayer from "react-player";

// ==========================
// I am using react-player for it
// ==========================

function CaseStudyVideoHeader({
  videoUrl,
  poster,
}: {
  videoUrl: string;
  videoFormat?: string;
  poster?: string;
}) {
  const [muted, setMuted] = useState(true);
  const [loaded, setLoaded] = useState(false);
  return (
    <section>
      <div className="max-w-[1680px] mx-auto px-0 lg:px-8">
        <div className="py-sm-pad">
          <div className="w-full relative aspect-video bg-mid-bg lg:rounded-lg overflow-hidden">
            {!loaded && (
              <img src={poster} alt="background logo" className="opacity-0" />
            )}
            <ReactPlayer
              src={videoUrl}
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
        </div>
      </div>
    </section>
  );
}

export default CaseStudyVideoHeader;
