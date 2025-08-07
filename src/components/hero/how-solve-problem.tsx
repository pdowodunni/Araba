import ShowcaseCardVertical from "../shared/showcase-card-vertical";

{
  /* 
    ============================= 
    Move all these to the config folder later.
    ============================= 
  */
}

const FEATURES = [
  {
    title: (
      <h5>
        Strategic <em className="font-instrumental-serif">Storytelling</em>
      </h5>
    ),
    text: "We shape narratives that spark emotion, drive clarity, and move your audience to action.",
    img: "/images/placeholder.jpg",
    bg: "bg-green-accent-dark text-[#8DFDBA]",
  },
  {
    title: (
      <h5>
        <em className="font-instrumental-serif">Audio Experiences</em> by The
        Soundbaking Company
      </h5>
    ),
    text: "From cinematic voiceovers to textured soundscapes, Soundbaking Company.",
    img: "/images/placeholder.jpg",
    bg: "bg-mid-bg text-primary",
  },
  {
    title: (
      <h5>
        <em className="font-instrumental-serif">Visual</em> Storytelling
      </h5>
    ),
    text: "We remix your raw moments, missions, or memories into films that feel.",
    img: "/images/placeholder.jpg",
    bg: "bg-green-accent text-primary",
  },
];

export default function HowWeSolveProblem() {
  return (
    <section>
      <div className="mx-container">
        <div className="pt-md-pad pb-md-pad flex flex-col gap-20">
          <div className="flex flex-col gap-8 mb-4 items-center">
            <span className="flex justify-center w-full pb-3 uppercase tracking-wide font-interTight-regular">
              How we solve problems
            </span>
            <h4 className="m-0 p-0 max-w-[820px] leading-tight text-center">
              We help businesses{" "}
              <em className="font-instrumental-serif">
                be seen, heard, and felt
              </em>{" "}
              through three core pillars of storytelling
            </h4>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {FEATURES.map(({ title, text, img, bg }, idx) => (
              <div key={idx}>
                <ShowcaseCardVertical
                  title={title}
                  text={text}
                  img={img}
                  bg={bg}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
