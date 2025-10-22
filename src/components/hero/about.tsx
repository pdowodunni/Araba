import { useState } from "react";
import SlideUpButton from "../shared/slide-up-button";
import ReactPlayer from "react-player";
import SoundButton from "../shared/sound-button";

export default function About() {
  const [loaded, setLoaded] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoLink = "https://youtu.be/j85n9WHF-1w?si=-FtT22fJDOtDevwx";

  return (
    <section className="flex flex-col gap-12 pt-sm-pad pb-0 xl:pb-md-pad">
      <div className="mx-container w-full">
        <div className="grid gap-12 xl:grid-cols-2">
          <div className="flex flex-col xl:justify-between gap-2 ">
            <div className="flex flex-col gap-4 mb-4">
              <span className="s-heading border-b border-primary font-interTight-regular">
                Who we are
              </span>
              <h5 className="font-medium leading-tight text-gray-900">
                <em className="font-interTight-medium">Araba Collective</em> is
                a{" "}
                <em className="font-interTight-medium">
                  Pan-African Storytelling and Communications Company
                </em>{" "}
                that helps brands become{" "}
                <em className="font-interTight-medium">
                  memorable, meaningful, and strategically sound.
                </em>
              </h5>
            </div>

            <div className="flex flex-col gap-1.5 md:gap-1 max-w-[760px]">
              <p className="p-lg">
                We craft emotionally intelligent, culturally grounded, and
                tech-enhanced storytelling that{" "}
                <em className="inline font-instrumental-serif md:text-2xl lg:text-3xl font-bold">
                  connects, resonates, and moves people to action.
                </em>
              </p>
              <p className="p-lg">
                Through{" "}
                <em className="inline font-instrumental-serif text-lg md:text-2xl lg:text-3xl font-bold">
                  strategy, sound, and screen,
                </em>{" "}
                we design high-impact, story-led experiences that scale{" "}
                <em className="inline font-instrumental-serif md:text-2xl lg:text-3xl font-bold">
                  trust, visibility,
                </em>{" "}
                and{" "}
                <em className="inline font-instrumental-serif md:text-2xl lg:text-3xl font-bold">
                  loyalty.
                </em>
              </p>
              <p className="p-lg">
                Our purpose is simple: to build meaningful systems that outlive
                campaigns and outlast trends.
              </p>
              <p className="">
                …because emotions move money, and communities drive change.
              </p>
              <div className="flex gap-4 mt-4">
                <SlideUpButton
                  type="fill"
                  bgColor="var(--color-primary)"
                  textColor="white"
                  // to="mailto:hello@arabacollective"
                   to="/lets-talk"
                >
                  Let's talk
                </SlideUpButton>
              </div>
            </div>
          </div>

          <div className="hidden xl:flex flex-1 items-center justify-center relative">
            <div className="w-full rounded-2xl aspect-[16/10] h-full bg-center transition-all duration-300 relative overflow-hidden">
              <ReactPlayer
                src={videoLink}
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
                      playsInline: true,
                    },
                  },
                }}
                onReady={() => setLoaded(true)}
                className="absolute top-0 left-0 w-full h-full scale-120"
              />
            </div>
            <SoundButton muted={muted} setMuted={setMuted} />
          </div>
        </div>
      </div>
      <div className="flex xl:hidden flex-1 items-center justify-center">
        <div className="w-full rounded-0 aspect-[16/10] h-full bg-center transition-all duration-300 relative overflow-hidden">
          <ReactPlayer
            src={videoLink}
            width="100%"
            height="100%"
            playing={true}
            muted={true}
            loop={true}
            playsInline={true}
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
            onReady={() => setLoaded(true)}
            className="absolute top-0 left-0 w-full h-full scale-120"
          />

          <SoundButton muted={muted} setMuted={setMuted} />
        </div>
      </div>
    </section>
  );
}
