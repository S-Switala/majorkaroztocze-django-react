import { useRef, useEffect } from "react";
import { createRoot } from "react-dom/client";
import MyCarousel from "./MyCarousel";

const ShadowCarousel = ({ images }) => {
  const shadowRef = useRef(null);

  useEffect(() => {
    if (shadowRef.current && !shadowRef.current.shadowRoot) {
      const shadow = shadowRef.current.attachShadow({ mode: "open" });

      // Stwórz nowy kontener dla React w Shadow DOM
      const mountPoint = document.createElement("div");
      shadow.appendChild(mountPoint);

      // Stworzenie osobnego <style> dla Bootstrapa wewnątrz Shadow DOM
      const styleEl = document.createElement("style");
      styleEl.textContent = `
        @import url("https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css");
      `;
      shadow.appendChild(styleEl);

      // Osadzamy komponent React w Shadow DOM
      const root = createRoot(mountPoint);
      root.render(<MyCarousel images={images} />);
    }
  }, [images]);

  return <div ref={shadowRef} />;
};

export default ShadowCarousel;
