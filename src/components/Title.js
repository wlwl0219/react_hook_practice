import React, { useState, useEffect } from 'react';

const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerHTML = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

function Title() {
  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('setTitle'), 5000);
  return (
    <div>
      <h2>UseTitle</h2>
    </div>
  );
}

export default Title;
