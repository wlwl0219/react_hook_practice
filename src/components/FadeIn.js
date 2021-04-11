import React, { useRef, useEffect } from 'react';

const useFadeIn = (duration = 1) => {
  const element = useRef();

  useEffect(() => {
    if (typeof duration === 'number') {
      if (element.current) {
        const { current } = element;
        current.style.transition = `opacity ${duration}s`;
        current.style.opacity = 1;
      }
    } else {
      return;
    }
  }, []);

  return { ref: element, style: { opacity: 0 } };
};

function FadeIn() {
  const eleH1 = useFadeIn();
  const eleP = useFadeIn(10);
  return (
    <div>
      <h2>UseFadeIn</h2>
      <h1 {...eleH1}>Action</h1>
      <p {...eleP}>lalalalalala</p>
    </div>
  );
}

export default FadeIn;
