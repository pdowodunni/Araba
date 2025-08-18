import { ProductionGrid } from "../production-item";
function ProdGrdSec() {
  const items = [
    {
      col: 4,
      row: 2,
      image: "/images/14.jpg",
      eyebrow: "No stock, no shoot",
      title: "Jingle Writing & Production",
      description:
        "Catchy, clever, branded earworms that get stuck in people's heads (and build recall like crazy).",
      dark: false,
    },
    {
      col: 4,
      row: 4,
      image: "/images/two.jpg",
      eyebrow: "The face of your brand",
      title: "Original Music Composition",
      description:
        "Need a sound that's truly yours? Score your film, ad, or brand anthem with music made just for you. Nothing generic. Everything is intentional. We compose music from scratch to match your story, mood, and message.",
      dark: false,
    },
    {
      col: 4,
      row: 4,
      image: "/images/11.jpg",
      eyebrow: "Get every angle",
      title: "Sonic Logo / Audio Branding",
      description:
        "Your brand deserves a sound signature. Think Netflix “ta-dum.” or Intel “bong” We craft your brand's signature sound—one that people instantly remember.",
      dark: true,
    },
    {
      col: 4,
      row: 2,
      image: "/images/15.jpg",
      eyebrow: "Upscale at scale",
      title: "Audio Mixing & Mastering",
      description:
        "We polish your sound till it shines—balancing every layer so it hits just right across all devices.",
      dark: false,
    },
    {
      col: 4,
      row: 2,
      image: "/images/19.jpg",
      eyebrow: "Speak their language",
      title: "Dialogue Cleanup & Noise Reduction",
      description:
        "Got hums, hisses, or messy audio? We clean up your vocals so your message cuts through loud and clear.",
      dark: true,
    },

    {
      col: 8,
      row: 2,
      image: "/images/112.jpg",
      eyebrow: "Scale with consistency",
      title: "Sound Design for Film/Video",
      description:
        "From whisper to whoosh, we create the textures that make every scene feel real. Every footstep, whisper, or door creak that makes a scene feel real? That's us. We add depth, drama, and texture.",
      dark: true,
    },
  ];

  return (
    <section className="">
      <div className="pt-md-pad pb-md-pad flex flex-col gap-10 md:gap-15">
        <div className="flex flex-col gap-8 mb-4 items-center max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8">
          <h4 className="m-0 p-0 max-w-[520px] leading-tight text-center">
            Here's What We Bring to{" "}
            <em className="font-instrumental-serif">the Table</em>
          </h4>
        </div>
        <div>
          <ProductionGrid items={items} baseRow={200} />
        </div>
      </div>
    </section>
  );
}

export default ProdGrdSec;
