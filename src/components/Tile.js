import React, { useState } from "react";

function Tile({color, isDragging, onMouseDown, onMouseUp }) {
  const [isBlack, setBlack] = useState(false);
  const [colors, setColors] = useState("#000000");

  const handleSquareClick = () => {
    setBlack(true);
    setColors(color);
  };

  const handleMouseOver = () => {
    if (isDragging) {
      setBlack(true);
      setColors(color);
    }
  };

  return (
    <div
      onClick={handleSquareClick}
      onMouseOver={handleMouseOver}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      style={{ backgroundColor: isBlack ? colors : "white" }}
      className="w-6 h-6 border border-neutral-950"
    ></div>
  );
}

export default Tile;