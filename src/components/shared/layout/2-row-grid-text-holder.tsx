import type { ReactNode } from "react";

function TwoRowGrdTxtHolder({
  data,
}: {
  data: { head: string; text: ReactNode }[];
}) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-10 sm:gap-5 lg:gap-10 xl:gap-25">
        {data.map((itm, idx) => {
          return (
            <div key={idx}>
              <Holder head={itm.head} text={itm.text} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TwoRowGrdTxtHolder;

const Holder = ({ text, head }: { head: string; text: ReactNode }) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="s-heading w-full border-b-2 border-[#D9D9D9]">
        {head}
      </span>
      <div className="">{text}</div>
    </div>
  );
};
