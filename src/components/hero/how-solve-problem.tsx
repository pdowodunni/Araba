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
          <h3 className="m-0 p-0">
            We help businesses{" "}
            <em className="font-instrumental-serif">
              be seen, heard, and felt
            </em>{" "}
            through three core pillars of storytelling
          </h3>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {FEATURES.map(({ title, text, img, bg }, idx) => (
              <div
                key={idx}
                className="group grid h-[720px] grid-rows-[1fr_150px] overflow-hidden rounded-xl transition-all duration-300 hover:grid-rows-[1fr_200px]"
              >
                <div className="h-full w-full">
                  <img
                    src={img}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className={`${bg} p-[40px] pb-[16px]`}>
                  {title}
                  <div className="mt-2 opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                    <p>{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
