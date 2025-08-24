// components/ProductionGrid.tsx
import React from "react";

type GridItem = {
  id?: string | number;
  col: number; // 1–12 (used from lg and up)
  row: number; // row span units (used from lg and up)
  image: string;
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  dark?: boolean;
};

export function ProductionGrid({ items }: { items: GridItem[] }) {
  return (
    <section className="bg-light-bg">
      <div className="mx-container py-12 md:py-16">
        <div
          className="
            grid gap-4 md:gap-6
            grid-cols-1 lg:grid-cols-12
            auto-rows-[minmax(240px,42vh)]
            lg:auto-rows-[150px] 2xl:auto-rows-[200px]
          "
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
  const spanVars = {
    ["--col" as any]: col,
    ["--row" as any]: row,
  } as React.CSSProperties;

  const baseClasses =
    "group relative w-full h-full rounded-xl overflow-hidden lg:[grid-column:span_var(--col)_/_span_var(--col)] lg:[grid-row:span_var(--row)_/_span_var(--row)]";

  const Wrapper: React.FC<React.PropsWithChildren> = ({ children }) =>
    href ? (
      <a
        href={href}
        style={spanVars}
        className={`${baseClasses} focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-light-bg block`}
      >
        {children}
      </a>
    ) : (
      <div style={spanVars} className={baseClasses}>
        {children}
      </div>
    );

  return (
    <Wrapper>
      <img
        src={image}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div
        className={`absolute inset-0 transition-colors duration-300 ${
          dark
            ? "bg-black/45 group-hover:bg-black/35"
            : "bg-black/20 group-hover:bg-black/15"
        }`}
      />

      <div
        className="relative z-[1] flex h-full flex-col p-5 md:p-6 text-light-bg"
        style={{ justifyContent: row === 4 ? "space-between" : undefined }}
      >
        <div>
          {eyebrow && (
            <span className="flex w-full pb-0 uppercase tracking-[2px]">
              {eyebrow}
            </span>
          )}
          <h5>{title}</h5>
        </div>
        {description && (
          <p className={row === 4 ? "" : "mt-2"}>{description}</p>
        )}
      </div>
    </Wrapper>
  );
}
