// FilterBar.js
import React from 'react';

function FilterBar(props) {
  return (
    <div className='text-center'>
      <label>Filter by Class:</label>
      {props.botClasses.map((botClass) => (
        <label key={botClass}>
          <input
            type="checkbox"
            value={botClass}
            checked={props.selectedClasses.includes(botClass)}
            onChange={() => props.toggleClassFilter(botClass)}
          />
          {botClass}
        </label>
      ))}
    </div>
  );
}

export default FilterBar;
