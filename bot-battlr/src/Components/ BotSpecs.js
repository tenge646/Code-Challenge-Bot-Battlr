// BotSpecs.js
import React from 'react';

function BotSpecs(props) {
  return (
    <div>
      <h2>Bot Details</h2>
      <div>
        <h3>{props.bot.name}</h3>
        <p>Health: {props.bot.health}</p>
        <p>Damage: {props.bot.damage}</p>
        <p>Armor: {props.bot.armor}</p>
        <p>Class: {props.bot.bot_class}</p>
        <button onClick={() => props.goBackToList()}>Back to List</button>
        <button onClick={() => props.enlistBot(props.bot)}>Enlist</button>
      </div>
    </div>
  );
}

export default BotSpecs;

