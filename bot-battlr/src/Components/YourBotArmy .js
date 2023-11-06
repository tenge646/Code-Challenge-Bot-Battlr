import React from 'react';

function YourBotArmy(props) {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <ul>
        {props.army.map((bot) => (
          <li key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} width="100" height="100" />
            <div>
              <div>{bot.name}</div>
              {/* Add other bot details if needed */}
            </div>
            <button onClick={() => props.releaseFromArmy(bot)}>Release</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default YourBotArmy;
