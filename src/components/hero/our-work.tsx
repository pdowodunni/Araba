import SlideUpButton from "../shared/slide-up-button";
import { ShowCaseCardHorizontal } from "../shared/showcase-card-horizontal";
import { PROJECT_LIST } from "../../config/case-study";

export default function WorkShowcase() {
  return (
    <section className="text-light-bg bg-primary">
      <div className="mx-container">
        <div className="pt-lg-pad pb-5 md:pb-md-pad flex flex-col gap-10 md:gap-20">
          <div className="flex justify-between flex-col gap-4 xl:flex-row">
            <div className="flex flex-col gap-3 md:gap-8">
              <p className="s-heading flex">Our Work</p>
              <h3 className="m-0 p-0">
                See how <em className="font-instrumental-serif">top brands</em>{" "}
                use Araba Collective
              </h3>
            </div>
            <div className="flex items-end">
              <div className="w-fit h-fit">
                <SlideUpButton
                  type="outline"
                  bgColor="var(--color-light-bg)"
                  textColor="var(--color-light-bg)"
                  to="/our-work"
                >
                  Explore all our work
                </SlideUpButton>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-20">
            {PROJECT_LIST.map((row, i) => (
              <div key={i} className="mx-auto w-full flex justify-center">
                <div className="block md:grid w-full grid-cols-8 md:gap-4">
                  {row.map((item, idx) => (
                    <ShowCaseCardHorizontal key={idx} {...item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
