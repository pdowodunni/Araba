import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({
  behavior = "auto",
  rootId,
}: {
  behavior?: ScrollBehavior;
  rootId?: string;
}) {
  const { pathname, search, hash } = useLocation();

  // Scroll on initial mount and on route/search changes (but let #hash anchors work).
  useLayoutEffect(() => {
    if (hash) return;

    const opts: ScrollToOptions = { top: 0, left: 0, behavior };
    const el = rootId ? document.getElementById(rootId) : null;

    if (el) {
      el.scrollTo(opts);
      // hard reset as a fallback for quirky containers
      el.scrollTop = 0;
    } else {
      window.scrollTo(opts);
      // hard reset fallbacks
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [pathname, search, hash, behavior, rootId]);

  // Make the *next* reload also start at top (helps certain browsers)
  useEffect(() => {
    const handler = () => window.scrollTo(0, 0);
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, []);

  return null;
}
