import BreadCrumb, {
  type BreadcrumbPagesProps,
} from "../../components/shared/case-study/breadcrumb";
import CaseStudyVideoHeader from "../../components/shared/case-study/video-header";

function Ina() {
  const BREADCRUMB_PAGES: BreadcrumbPagesProps[] = [
    {
      page: "OUR WORK",
      href: "/our-work",
    },
    {
      page: "INA",
      href: "",
    },
  ];
  return (
    <main className="p-main">
      <BreadCrumb pages={BREADCRUMB_PAGES} />
      <CaseStudyVideoHeader videoUrl={"/video/ina-disp.mp4"} />
    </main>
  );
}

export default Ina;
