import AuxHeader from "../components/shared/aux-header";
import LogoCarousel from "../components/shared/logo-carousel";
import TxtImgSec from "../components/shared/text-image-sec";

function MusicSoundDesign() {
  return (
    <main>
      <AuxHeader />
      <div className="mx-container py-sm-pad flex flex-col gap-12">
        <span className="s-heading flex justify-center text-sm">
          Trusted by 50+ of the world's biggest brands
        </span>
        <LogoCarousel />
      </div>
      <TxtImgSec />
    </main>
  );
}

export default MusicSoundDesign;
