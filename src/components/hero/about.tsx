import { useState } from "react";
import SlideUpButton from "../shared/slide-up-button";

export default function About() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-container">
        <div className="mx-auto grid gap-12 lg:grid-cols-2 pt-sm-pad pb-md-pad">
          <div className="flex flex-col justify-between gap-2">
            <div className="flex flex-col gap-8 mb-4">
              <span className="block w-full pb-3 uppercase tracking-wide border-b border-primary font-interTight-regular">
                Who we are
              </span>
              <h3 className="text-3xl font-medium leading-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                The support your creative team{" "}
                <em className="font-instrumental-serif">has been asking for</em>
              </h3>
            </div>

            <div className="flex flex-col gap-8">
              <h5>
                Araba Collective is{" "}
                <em className="font-instrumental-serif">
                  Pan-African Storytelling and Communications Company helping
                </em>{" "}
                brands across{" "}
                <em className="font-instrumental-serif">
                  Africa and the Global South
                </em>{" "}
                connect with people through{" "}
                <em className="font-instrumental-serif">
                  Emotionally Intelligent, Culturally Grounded,
                </em>{" "}
                and{" "}
                <em className="font-instrumental-serif">
                  Tech-Enhanced storytelling.
                </em>
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

          <div className="flex flex-1 items-center justify-center">
            <div
              className="relative w-full bg-primary aspect-video rounded-lg overflow-hidden flex items-center justify-center"
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
    </section>
  );
}
