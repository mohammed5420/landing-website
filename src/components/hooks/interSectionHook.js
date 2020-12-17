import { useEffect } from "react";

const InterSectionHook = (ref, state, setState) => {
  const options = { threshold: 0.1 };
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        setState(entry.isIntersecting);
    });
  }, options);
  useEffect( () => {
    observer.observe(ref.current);
  } , []);

  return state
};

export default InterSectionHook;
