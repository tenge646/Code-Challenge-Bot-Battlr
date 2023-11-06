// SortBar.js
import React from 'react';

function SortBar(props) {
  return (
    <div>
      <label>Sort by:</label>
      <select onChange={(e) => props.sortBots(e.target.value)}>
        <option value="health">Health</option>
        <option value="damage">Damage</option>
        <option value="armor">Armor</option>
      </select>
    </div>
  );
}

export default SortBar;
