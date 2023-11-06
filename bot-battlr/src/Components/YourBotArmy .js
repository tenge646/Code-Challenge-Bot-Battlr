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

function YourBotArmy(props) {
  const handleDelete = (bot) => {
    props.releaseFromArmy(bot);
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
      <div className='bg-secondary'>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {icon} <strong style={{ fontSize: '1.2em' }}>{bot.name}</strong>
        </div>
        <p>{bot.catchphrase}</p>
        <div className="bot-details">
          <hr />
          <i className="fa-solid fa-heart-crack"></i> Health: {bot.health}
          <i className="fa-solid fa-shield-halved"></i> Armor: {bot.armor}
          <i className="fa-solid fa-bolt"></i> Damage: {bot.damage}
        </div>
      </div>
    );
  };

  return (
    <div className='container'>
      <div className='army bg-white'>
        <h2>Your Bot Army</h2>
      </div>
      <div className='row'>
        {props.army.map((bot) => (
          <div
            className='card col-md-3 bg-secondary'
            key={bot.id}
            onClick={() => handleDelete(bot)}
          >
            <img src={bot.avatar_url} alt={bot.name} width='300' height='300' />
            {renderBotName(bot)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
