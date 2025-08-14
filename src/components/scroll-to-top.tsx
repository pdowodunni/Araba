// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({
  behavior = "auto",
  rootId,
}: {
  behavior?: ScrollBehavior;
  rootId?: string;
}) {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    // let anchor links work normally
    if (hash) return;

    const el = rootId ? document.getElementById(rootId) : null;
    const opts: ScrollToOptions = { top: 0, left: 0, behavior };

    if (el) el.scrollTo(opts);
    else window.scrollTo(opts);
  }, [pathname, search, hash, behavior, rootId]);

  return null;
}
