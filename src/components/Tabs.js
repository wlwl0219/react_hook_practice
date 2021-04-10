import React, { useState } from 'react';

const content = [
  {
    tab: 'Section 1',
    content: "I'm the content of the Section 1",
  },
  {
    tab: 'Section 2',
    content: "I'm the content of the Section 2",
  },
];

const useTabs = (initialTabs, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTabs);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex };
};

function Tabs() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      <h2>UseTabs</h2>
      {content.map((ele, inx) => (
        <button onClick={() => changeItem(inx)}>{ele.tab}</button>
      ))}
      <p>{currentItem.content}</p>
    </div>
  );
}

export default Tabs;
