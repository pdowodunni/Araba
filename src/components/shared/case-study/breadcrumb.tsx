import React from "react";

function BreadCrumb({ pages }: { pages: string[] }) {
  return (
    <div>
      {pages.map((p, idx) => {
        return (
          <span key={idx}>
            <em>{p}</em>
          </span>
        );
      })}
    </div>
  );
}

export default BreadCrumb;
