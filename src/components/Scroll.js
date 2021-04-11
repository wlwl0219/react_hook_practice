import React, { useEffect, useState } from 'react';

const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const onScroll = () => {
    setState({ y: window.scrollY, x: window.scrollX });
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return state;
};

function Scroll() {
  const { y } = useScroll();
  return (
    <div style={{ height: '1000vh' }}>
      <h2>UseScroll</h2>
      <h3 style={{ color: y > 200 ? 'red' : 'blue' }}>Hi</h3>
    </div>
  );
}

export default Scroll;
