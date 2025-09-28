// src/index.tsx (or App.tsx, anywhere global)
import { useEffect } from "react";

function ScrollRestorationFix() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  return null;
}

export default ScrollRestorationFix;
