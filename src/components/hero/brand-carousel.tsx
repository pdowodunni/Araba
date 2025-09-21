import AnimatedNumber from "../animate-counter";
import LogoCarousel from "../shared/logo-carousel";
import ScrollReveal from "../shared/scrool-reveal";

function BrandCarousel() {
  return (
    <section>
      <ScrollReveal>
        <div className="mx-container">
          <div className="flex flex-col items-center justify-center gap-14 py-sm-pad">
            <div className="max-w-[530px] mx-auto">
              <div className="md:text-[1.75rem] text-[1.2rem] items-center font-interTight-regular text-center flex gap-1.5">
                Trusted by <AnimatedNumber />
                of the world's top brands
              </div>
            </div>
            <LogoCarousel />
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default BrandCarousel;
