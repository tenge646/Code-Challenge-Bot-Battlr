import React from 'react';
import { Link } from 'react-router-dom';

function BotSpecs() {
  // Implement showing the details of a bot and allowing enlistment here

  return (
    <div className="BotSpecs">
      {/* Render bot details and enlist button */}
      <Link to="/">Go back to bot list</Link>
    </div>
  );
}

export default BotSpecs;
