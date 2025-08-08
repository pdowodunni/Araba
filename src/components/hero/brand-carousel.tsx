import LogoCarousel from "../shared/logo-carousel";
import ScrollReveal from "../shared/scrool-reveal";

function BrandCarousel() {
  return (
    <section>
      <div className="mx-container">
        <div className="flex flex-col items-center justify-center gap-5 py-sm-pad">
          <div className="max-w-[530px] mx-auto">
            <h5 className="font-interTight-regular text-center">
              Trusted by 500+ of the world's top brands
            </h5>
          </div>
          {/* ============================= Carousel ============================= */}
          <ScrollReveal>
            <LogoCarousel />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default BrandCarousel;
