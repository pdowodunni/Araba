import React from "react";

function Header() {
  return (
    <section>
      <div className="mx-container">
        <div className="pt-md-pad pb-md-pad flex flex-col gap-20">
          <div className="flex flex-col gap-4 mb-4 items-center">
            <span className="s-heading flex justify-center">Our work</span>
            <h1 className="m-0 p-0 max-w-[820px] leading-tight text-center">
              Creative that <em className="font-instrumental-serif">works</em>{" "}
            </h1>
            <div className="max-w-[600px]">
              <p className="md:text-2xl text-xl text-center">
                We help the world's leading brands create standout ads and
                campaigns at speed—from concept to execution to results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
