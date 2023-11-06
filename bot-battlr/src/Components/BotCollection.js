import React from 'react';

function BotCollection(props) {
  const addToArmy = (bot) => {
    // Check if the bot is not already in the army
    if (!props.army.find((b) => b.id === bot.id)) {
      // Clone the bot object to avoid any side effects
      const botClone = { ...bot };
      props.addToArmy(botClone);
    } else {
      // Display a message or disable the button to prevent adding the same bot again
      alert('This bot is already in your army.');
    }
  };

  return (
    <div>
      <h2>Available Bots</h2>
      <div className='row'>
        {props.bots.map((bot) => (
          <button
            onClick={() => addToArmy(bot)}
            className='card col-md-2'
            key={bot.id}
          >
            <img src={bot.avatar_url} alt={bot.name} width="100" height="100" />
            <div>
              <div><strong>{bot.name}</strong></div> {/* Apply the 'strong' tag to make the name bold */}
              {/* Add other bot details if needed */}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
