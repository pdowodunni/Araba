import React from "react";

function Execution({ data }: { data: { title: string; text: string }[] }) {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-between gap-10 sm:gap-5 lg:gap-10 xl:gap-25">
        {data.map((itm, idx) => {
          return (
            <div key={idx}>
              <Holder index={`${idx + 1}`} title={itm.title} text={itm.text} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Execution;

const Holder = ({
  index,
  title,
  text,
}: {
  index: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <span className="s-heading w-full border-b-2">0{index}</span>
      <h5>{title}</h5>
      <p className="max-w-[320px]">{text}</p>
    </div>
  );
};
