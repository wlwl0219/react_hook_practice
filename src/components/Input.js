import React, { useState } from 'react';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: { value },
    } = event;

    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }

    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

function Input() {
  const maxLen = value => value.length < 10;
  const name = useInput('Mr.', maxLen);
  return (
    <div>
      <h2>UseInput</h2>
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default Input;
