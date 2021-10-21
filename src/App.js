import React, { useState, useRef } from "react";
import "./index.css";

const App = () => {
  const draggingItem = useRef();
  const dragOverItem = useRef();

  const [list, setList] = useState([
    "Study",
    "Morning Walk",
    "Breakfast",
    "Nap",
    "Television ",
    "Sleep",
  ]);

  const handleDragStart = (e, position) => {
    draggingItem.current = position;
    // console.log(e.target.innerHTML);
  };

  const handleDragEnter = (e, position) => {
    dragOverItem.current = position;
    // console.log(e.target.innerHTML);
    const newList = [...list];
    console.log(draggingItem.current, dragOverItem.current);
    const draggingItemContent = newList[draggingItem.current];
    newList.splice(draggingItem.current, 1);
    newList.splice(dragOverItem.current, 0, draggingItemContent);

    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;
    setList(newList);
  };

  return (
    <main>
      <section>
        {list &&
          list.map((item, index) => (
            <div
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={(e) => handleDragEnter(e, index)}
              key={index}
              draggable
              className="itemBox"
            >
              <h1>{item}</h1>
            </div>
          ))}
      </section>
    </main>
  );
};

export default App;
