import { useEffect, useRef } from "react";

const useGradientUpdater = () => {
  const gradientRefs = useRef([]);

  useEffect(() => {
    const updateGradients = () => {
      gradientRefs.current.forEach((html, index) => {
        if (html) {
          const angle = (performance.now() / 10 + index * 120) % 360;
          html.style.backgroundImage = `linear-gradient(${angle}deg, rgba(241, 178, 168, 1) 0%, rgb(236, 87, 168, 1) 49%, rgba(91, 90, 247, 1) 100%)`;
        }
      });
      requestAnimationFrame(updateGradients);
    };
    requestAnimationFrame(updateGradients);
    return () => {};
  }, []);
  return gradientRefs;
};

export default useGradientUpdater;
