import React from 'react';

function BotCollection(props) {
  const addToArmy = (bot) => {
    // Check if the bot is not already in the army
    if (!props.army.find((b) => b.id === bot.id)) {
      // Implement the logic to add the bot to the army
      props.addToArmy(bot);
    } else {
      // Display a message or disable the button to prevent adding the same bot again
      alert('This bot is already in your army.');
    }
  };

  return (
    <div>
      <h2>Available Bots</h2>
      <ul>
        {props.bots.map((bot) => (
          <li key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} width="100" height="100" />
            <div>
              <div>{bot.name}</div>
              {/* Add other bot details if needed */}
            </div>
            <button onClick={() => addToArmy(bot)}>Add to Army</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BotCollection;
