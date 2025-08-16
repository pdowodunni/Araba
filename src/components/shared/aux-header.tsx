import SlideUpButton from "../shared/slide-up-button";

function AuxHeader() {
  return (
    <header
      style={{
        backgroundImage: "url('/images/2.webp')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex h-fit  mt-[78px]">
        <div className="mx-container w-full">
          <div className="flex pt-md-pad pb-sm-pad">
            <div className="flex flex-col gap-10">
              <div className="max-w-[560px] xl:max-w-[820px] text-white">
                <span className="s-heading mb-2">Creative Design Service</span>
                <h1 className=" font-instrumental-regular leading-[80px] text-center xl:text-start text-[100px]">
                  <span>Music & Sound Design</span>
                </h1>
              </div>
              <div className="flex flex-col gap-5 max-w-[560px]">
                <p className="text-white font-instrumental-serif text-center xl:text-start text-xl">
                  “Because people forget what they saw. But they’ll remember how
                  you made them feel.”
                </p>
                <p className="text-white text-center xl:text-start text-xl">
                  The sound of your story matters. Whether it’s a jingle that
                  gets stuck in your head (for all the right reasons), ambient
                  layers for your short film, or subtle audio exist to make your
                  project feel alive.
                </p>
              </div>
              <div className="flex">
                <SlideUpButton
                  type="fill"
                  bgColor="var(--color-green-accent)"
                  textColor="var(--color-primary)"
                >
                  Book a demo
                </SlideUpButton>
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AuxHeader;
