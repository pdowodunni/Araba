import { ShowCaseCardHorizontal } from "../shared/showcase-card-horizontal";
import { PROJECT_LIST } from "../../config/case-study";

function Portfolio() {
  return (
    <section>
      <div className="mx-container">
        <div className="pt-lg-pad pb-md-pad flex flex-col gap-10 md:gap-20">
          <div className="flex flex-col gap-0 md:gap-20">
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

export default Portfolio;
