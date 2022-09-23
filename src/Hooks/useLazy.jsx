import { useState, useRef, useEffect } from "react";

export const useLazy = () => {
  const [show, setShow] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const intersection = new IntersectionObserver(change, {
      rootMargin: "100px",
    });

    intersection.observe(elementRef.current);
  }, []);

  const change = (entries, intersection) => {
    const { isIntersecting } = entries[0];

    if (isIntersecting) {
      setShow(true);
      intersection.disconnect();
    }
  };

  return { show, elementRef };
};
