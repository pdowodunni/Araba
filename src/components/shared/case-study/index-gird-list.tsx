import type { ReactNode } from "react";

function IndxGrdLt({ data }: { data: { text: ReactNode }[] }) {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between gap-10 sm:gap-5 lg:gap-10 xl:gap-25">
        {data.map((itm, idx) => {
          return (
            <div key={idx}>
              <Holder index={`${idx + 1}`} text={itm.text} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default IndxGrdLt;

const Holder = ({ index, text }: { index: string; text: ReactNode }) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="s-heading w-full border-b-2 border-[#D9D9D9]">
        0{index}
      </span>
      <div className="max-w-[320px]">{text}</div>
    </div>
  );
};
