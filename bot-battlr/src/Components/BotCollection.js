import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruckMedical,
  faShieldHalved,
  faHatCowboy,
  faBroom,
  faHandshakeAngle,
  faPersonRifle,
} from '@fortawesome/free-solid-svg-icons';

function BotCollection(props) {
  const addToArmy = (bot) => {
    if (!props.army.find((b) => b.id === bot.id)) {
      props.addToArmy(bot);
    }
  };

  const renderBotName = (bot) => {
    let icon = null;

    switch (bot.bot_class) {
      case 'Medic':
        icon = <FontAwesomeIcon icon={faTruckMedical} />;
        break;
      case 'Defender':
        icon = <FontAwesomeIcon icon={faShieldHalved} />;
        break;
      case 'Captain':
        icon = <FontAwesomeIcon icon={faHatCowboy} />;
        break;
      case 'Witch':
        icon = <FontAwesomeIcon icon={faBroom} />;
        break;
      case 'Support':
        icon = <FontAwesomeIcon icon={faHandshakeAngle} />;
        break;
      case 'Assault':
        icon = <FontAwesomeIcon icon={faPersonRifle} />;
        break;
      default:
        icon = null;
    }

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {icon} <strong style={{ fontSize: '1.2em' }}>{bot.name}</strong>
        </div>
        <p>{bot.catchphrase}</p>
        <div className="bot-details">
          <hr />
          <i className="fa-solid fa-heart-crack"></i> :{bot.health}:
          <i className="fa-solid fa-shield-halved"></i> :{bot.armor}:
          <i className="fa-solid fa-bolt"></i> :{bot.damage}.
        </div>
      </div>
    );
  };

  const filteredBots = props.bots.filter((bot) => {
    if (props.selectedClasses.length === 0) {
      return true;
    }
    return props.selectedClasses.includes(bot.bot_class);
  });

  return (
    <div className='container'>
   
        
      <h2 className=' text-center'>Available Bots</h2>
   
      
      <div className="row">
        {filteredBots.map((bot) => (
          <button
            className="card col-md-3 bg-secondary" 
            key={bot.id}
            onClick={() => addToArmy(bot)}
          >
            <img src={bot.avatar_url} alt={bot.name} width="300" height="300" />
            {renderBotName(bot)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
