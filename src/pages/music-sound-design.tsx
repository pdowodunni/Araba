import AuxHeader from "../components/shared/aux-header";
import LogoCarousel from "../components/shared/logo-carousel";
import TxtImgSec from "../components/shared/layout/text-image-sec";
import RightImgTextSec from "../components/shared/layout/rght-Img-tex-sec";
import ProdGrdSec from "../components/shared/layout/producion-grid-sec";
import LeftImgTextSec from "../components/shared/layout/left-img-txt-sec";

function MusicSoundDesign() {
  return (
    <main className="z-[-1]">
      <AuxHeader />
      <div className="mx-container py-sm-pad flex flex-col gap-12">
        <span className="s-heading flex justify-center text-sm">
          Trusted by 50+ of the world's biggest brands
        </span>
        <LogoCarousel />
      </div>
      <LeftImgTextSec />
      <TxtImgSec />
      <RightImgTextSec />
      <ProdGrdSec />
    </main>
  );
}

export default MusicSoundDesign;
