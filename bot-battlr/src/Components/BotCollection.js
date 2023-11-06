import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    // Fetch bot data from your JSON server
    axios.get('http://localhost:4444/bots')
      .then((response) => {
        setBots(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  // Function to render a list of bots with complete profiles
  const renderBots = () => {
    return bots.map((bot) => (
      <div key={bot.id} className="bot-profile">
        <img src={bot.avatar_url} alt={bot.name} />
        <h3>{bot.name}</h3>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        <button>Add to Army</button>
      </div>
    ));
  };

  return (
    <div className="BotCollection">
      <h2>Available Bots</h2>
      <div className="bot-list">
        {renderBots()}
      </div>
    </div>
  );
}


export default BotCollection;
