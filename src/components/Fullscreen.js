import React, { useRef } from 'react';

const useFullscreen = () => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
  };

  return { element, triggerFull, exitFull };
};

function Fullscreen() {
  const { element, triggerFull, exitFull } = useFullscreen();
  return (
    <div>
      <h2>UseFullscreen</h2>
      <div ref={element}>
        <img src="https://i.stack.imgur.com/nTmNe.jpg" alt="사진" />
        <button onClick={triggerFull}>Make Fullscreen</button>
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
    </div>
  );
}

export default Fullscreen;
