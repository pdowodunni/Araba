import { useState } from "react";

function CaseStudyVideoHeader({ videoUrl }: { videoUrl: string }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <section>
      <div className="max-w-[1680px] mx-auto px-0 lg:px-8">
        <div className="py-sm-pad">
          <div className="w-full relative aspect-video bg-mid-bg lg:rounded-lg overflow-hidden">
            <video
              playsInline
              autoPlay
              muted
              loop
              onLoadedData={() => setLoaded(true)}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
            {!loaded && (
              <img
                src="/images/thumb.jpg"
                alt="background logo"
                className="opacity-0"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudyVideoHeader;
