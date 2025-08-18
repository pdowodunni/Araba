import SlideUpButton from "../slide-up-button";

function TxtImgSec() {
  return (
    <section className="flex flex-col gap-12 pt-sm-pad pb-0 xl:pb-sm-pad">
      <div className="mx-container w-full">
        <div className="grid gap-12 xl:grid-cols-2">
          <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-4 mb-4">
                <span className="s-heading border-b border-primary">
                  SONIC STORIES, POWERFULLY TOLD
                </span>
                <h4 className="font-medium leading-tight text-gray-900">
                  Bring your narrative to life with{" "}
                  <em className="font-instrumental-serif">
                    Unforgettable audio.
                  </em>
                </h4>
              </div>

              <div className="flex flex-col gap-6 max-w-[720px]">
                <p className="p-lg">
                  We understand the role of sound in shaping how people feel,
                  think, and connect. In today's crowded content landscape,
                  sonic identity is no longer optional; it's everything.
                </p>
                <p>
                  Our end-to-end music and sound design services are built for
                  storytellers, filmmakers, content teams, and brands who want
                  to move people with more than visuals. From subtle ambient
                  textures to unforgettable theme music, we deliver audio that
                  resonates, lingers, and elevates your story.
                </p>
                <div>
                  <ul className="mt-2 p-lg flex flex-col gap-2 list-disc pl-10">
                    <li>
                      Collaborate with world-class composers and sound artists
                    </li>
                    <li>
                      Create custom scores, stingers, themes, and ambient beds
                    </li>
                    <li>
                      Design immersive SFX and audio signatures that stand out
                    </li>
                  </ul>
                </div>
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
          </div>

          <div className="flex flex-1 items-center justify-center">
            <div
              className="relative w-full xl:w-[36rem] 2xl:w-[48.25rem] bg-primary aspect-square xl:rounded-lg overflow-hidden"
              style={{
                backgroundImage: `url('/images/17.jpg')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TxtImgSec;
