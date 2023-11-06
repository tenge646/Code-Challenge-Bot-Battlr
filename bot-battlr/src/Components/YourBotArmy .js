import React from 'react';

function YourBotArmy(props) {
  return (
    <div className='container'>
      <div className='army bg-white'>
        <h2>Your Bot Army</h2>
      </div>

      <div className='row'>
        {props.army.map((bot) => (
          <div className='card col-md-2' key={bot.id}>
            <img src={bot.avatar_url} alt={bot.name} width="160" height="160" />
            <div>
              <div><strong>{bot.name}</strong></div> {/* Apply the 'strong' tag to make the name bold */}
              {/* Add other bot details if needed */}
            </div>
            <button onClick={() => props.releaseFromArmy(bot)}>Release</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
