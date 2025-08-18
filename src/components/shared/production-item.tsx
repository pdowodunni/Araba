// components/AiProductionGrid.tsx
import React from "react";

type GridItem = {
  id?: string | number;
  col: number; // 1–12
  row: number; // row span in auto-rows units
  image: string;
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  dark?: boolean;
};

export function ProductionGrid({
  items,
  baseRow = 200,
}: {
  items: GridItem[];
  baseRow?: number;
}) {
  return (
    <section className="bg-light-bg">
      <div className="mx-container py-12 md:py-16">
        <div
          className="
            grid gap-4 md:gap-6
            grid-cols-1 sm:grid-cols-2 md:grid-cols-6 xl:grid-cols-12
          "
          style={{ gridAutoRows: `${baseRow}px` }}
        >
          {items.map((it, i) => (
            <Card key={it.id ?? i} {...it} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  col,
  row,
  image,
  eyebrow,
  title,
  description,
  href,
  dark = true,
}: GridItem) {
  const wrapperStyle: React.CSSProperties = {
    gridColumn: `span ${col} / span ${col}`,
    gridRow: `span ${row} / span ${row}`,
  };

  const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) =>
    href ? (
      <a
        href={href}
        style={wrapperStyle}
        className="group relative block w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-light-bg rounded-xl overflow-hidden"
      >
        {children}
      </a>
    ) : (
      <div
        style={wrapperStyle}
        className="group relative w-full h-full rounded-xl overflow-hidden"
      >
        {children}
      </div>
    );

  return (
    <Wrapper>
      {/* Image */}
      <img
        src={image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 transition-colors duration-300 ${
          dark
            ? "bg-black/45 group-hover:bg-black/35"
            : "bg-black/20 group-hover:bg-black/15"
        }`}
      />

      {/* Text */}
      <div
        className="relative z-[1] flex h-full flex-col p-5 md:p-6 text-light-bg"
        style={{
          justifyContent: row === 4 ? "space-between" : "",
        }}
      >
        <div>
          {eyebrow && (
            <span className="flex w-full pb-0 uppercase tracking-[2px]">
              {eyebrow}
            </span>
          )}
          <h5 className="">{title}</h5>
        </div>
        {description && (
          <p
            className=""
            style={{
              marginTop: row === 4 ? "" : "10px",
            }}
          >
            {description}
          </p>
        )}
      </div>
    </Wrapper>
  );
}
