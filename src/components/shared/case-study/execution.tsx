import React from "react";

function Execution({ data }: { data: { title: string; text: string }[] }) {
  return (
    <section>
      <div className="case-container">
        <div className="grid grid-cols-3 gap-10">
          {data.map((itm, idx) => {
            return (
              <div key={idx}>
                <Holder
                  index={`${idx + 1}`}
                  title={itm.title}
                  text={itm.text}
                />
              </div>
            );
          })}
        </div>
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
      <p>{text}</p>
    </div>
  );
};
