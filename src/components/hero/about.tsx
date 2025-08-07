import { useState } from "react";
import SlideUpButton from "../shared/slide-up-button";

export default function About() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="flex flex-col gap-12 pt-sm-pad pb-0 xl:pb-md-pad">
      <div className="mx-container w-full">
        <div className="grid gap-12 xl:grid-cols-2">
          <div className="flex flex-col xl:justify-between gap-2 ">
            <div className="flex flex-col gap-8 mb-4">
              <span className="block w-full pb-3 uppercase tracking-wide border-b border-primary font-interTight-regular">
                Who we are
              </span>
              <h3 className="font-medium leading-tight text-gray-900">
                Your brand's{" "}
                <em className="font-instrumental-serif">storytelling engine</em>
              </h3>
            </div>

            <div className="flex flex-col gap-8 max-w-[760px]">
              <h5>
                Araba Collective is{" "}
                {/* <em className="font-instrumental-serif"> */}
                {/* Pan-African Storytelling and Communications Company helping */}
                {/* </em>{" "} */}
                brands across {/* <em className="font-instrumental-serif"> */}
                Africa and the Global South
                {/* </em>{" "} */}
                connect with people through{" "}
                {/* <em className="font-instrumental-serif"> */}
                Emotionally Intelligent, Culturally Grounded, {/* </em>{" "} */}
                and {/* <em className="font-instrumental-serif"> */}
                Tech-Enhanced storytelling.
                {/* </em> */}
              </h5>
              <p>
                We specialize in High-Impact, Story-led experiences delivered
                across three formats: Strategy, Sound, and Screen.
              </p>
              <div className="flex gap-4">
                <SlideUpButton
                  type="fill"
                  bgColor="var(--color-primary)"
                  textColor="white"
                >
                  Book a demo
                </SlideUpButton>
              </div>
            </div>
          </div>

          <div className="hidden xl:flex flex-1 items-center justify-center">
            <div
              className="relative w-full xl:w-[36rem] 2xl:w-[48.25rem] bg-primary aspect-video xl:rounded-lg overflow-hidden flex items-center justify-center"
              data-cursor-target
              data-cursor-text="PLAY VIDEO"
            >
              <video
                playsInline
                autoPlay
                muted
                loop
                onLoadedData={() => setLoaded(true)}
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/video/video.mp4" type="video/mp4" />
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
      </div>
      <div className="flex xl:hidden flex-1 items-center justify-center">
        <div
          className="relative w-screen xl:w-[36rem] 2xl:w-[48.25rem] bg-primary aspect-video xl:rounded-lg overflow-hidden flex items-center justify-center"
          data-cursor-target
          data-cursor-text="PLAY VIDEO"
        >
          <video
            playsInline
            autoPlay
            muted
            loop
            onLoadedData={() => setLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video/video.mp4" type="video/mp4" />
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
    </section>
  );
}
