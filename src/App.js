import React, { useState } from "react";
import "./App.css";
import Tile from "./components/Tile";

function App() {
  const [color, setColor] = useState("#000000");
  const [isDragging, setDragging] = useState(false);
  const [reset, setReset] = useState(false)
  const [grid, setGrid] = useState(Array.from({ length: 30 }, () => Array(30).fill("")));

  const handleColor = (event) => {
    setColor(event.target.value);
  };

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleReset = () => {
    // Reset all tiles to white
    grid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const tile = document.getElementsByClassName(`Tile${rowIndex}${colIndex}`)[0];
        if (tile) {
          tile.style.backgroundColor = "white";
        }
      });
    });
    setReset(false);
  };

  const renderedRows = grid.map((row, rowIndex) => (
    <div key={rowIndex} className="flex">
      {row.map((cell, colIndex) => (
        <Tile
          key={colIndex}
          color={color}
          isDragging={isDragging}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        ></Tile>
      ))}
    </div>
  ));

  return (
    <div className="mt-20">
      <input type="color" onChange={handleColor} />
      <button onClick={handleReset} className="ml-4 border border-black p-2">Reset</button>
      {renderedRows}
    </div>
  );
}

export default App;