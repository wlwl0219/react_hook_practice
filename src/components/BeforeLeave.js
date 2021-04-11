import React, { useEffect } from 'react';

const useBeforeLeave = onBefore => {
  const handle = event => {
    // const { clientY } = event;
    // if (clientY <= 0) {
    //   onBefore();
    // }
    onBefore();
  };

  useEffect(() => {
    if (typeof onBefore === 'function') {
      document.addEventListener('mouseleave', handle);
      return () => document.removeEventListener('mouseleave', handle);
    } else {
      return;
    }
  }, []);
};

function BeforeLeave() {
  const begForLife = () => console.log('Pls dont leave');
  useBeforeLeave(begForLife);
  return (
    <div>
      <h2>UseBeforeLeave</h2>
    </div>
  );
}

export default BeforeLeave;
