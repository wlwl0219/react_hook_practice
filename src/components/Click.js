import React, { useEffect, useRef } from 'react';

const useClick = onClick => {
  const element = useRef();
  useEffect(() => {
    const eleCur = element.current;
    if (eleCur) {
      eleCur.addEventListener('click', onClick);
    }
    return () => {
      if (eleCur) {
        eleCur.removeEventListener('click', onClick);
      }
    };
  }, []);
  return element;
};

function Click() {
  const sayHello = () => console.log('say hello');
  const title = useClick(sayHello);
  return (
    <div>
      <h2 ref={title}>UseClick</h2>
    </div>
  );
}

export default Click;
