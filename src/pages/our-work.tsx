import Header from "../components/our-work/header";
import Portfolio from "../components/our-work/portfolio";
import LogoCarousel from "../components/shared/logo-carousel";
import ScrollReveal from "../components/shared/scrool-reveal";

function OurWork() {
  return (
    <main
      className="p-main"
      style={{
        backgroundImage: "url('/images/n-b.png')",
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />
      <div className="mx-container">
        <ScrollReveal>
          <div className="flex justify-center items-center">
            <LogoCarousel />
          </div>
        </ScrollReveal>
      </div>
      <Portfolio />
    </main>
  );
}

export default OurWork;
