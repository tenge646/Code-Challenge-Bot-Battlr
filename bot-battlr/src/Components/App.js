import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy ';
import BotSpecs from './BotSpecs';
import SortBar from './SortBar';
import FilterBar from './FilterBar';

function App() {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [army, setArmy] = useState([]);
  const [sortType, setSortType] = useState('health');
  const [selectedClasses, setSelectedClasses] = useState([]);

  useEffect(() => {
   
    fetch('http://localhost:4444/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addToArmy = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseFromArmy = (bot) => {
    const updatedArmy = army.filter((b) => b.id !== bot.id);
    setArmy(updatedArmy);
  };

  const sortBots = (type) => {
    const sortedBots = [...bots];

    sortedBots.sort((botA, botB) => {
      switch (type) {
        case 'health':
          return botB.health - botA.health;
        case 'damage':
          return botB.damage - botA.damage;
        case 'armor':
          return botB.armor - botA.armor;
        default:
          return 0;
      }
    });

    setBots(sortedBots);
  };

  const toggleClassFilter = (botClass) => {
    if (selectedClasses.includes(botClass)) {
      setSelectedClasses(selectedClasses.filter((selectedClass) => selectedClass !== botClass));
    } else {
      setSelectedClasses([...selectedClasses, botClass]);
    }
  };

  const goBackToList = () => {
    setSelectedBot(null);
  };

  return (
    <div className="App">
      <h1 className='text-center'>Bot Battlr</h1>
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          goBackToList={goBackToList}
          enlistBot={addToArmy}
        />
      ) : (
        <>
          <SortBar sortBots={sortBots} />
          <FilterBar
            botClasses={["Support", "Medic", "Assault", "Defender", "Captain", "Witch"]}
            selectedClasses={selectedClasses}
            toggleClassFilter={toggleClassFilter}
          />
          <YourBotArmy army={army} releaseFromArmy={releaseFromArmy} />
          <BotCollection
            bots={bots}
            addToArmy={addToArmy}
            setSelectedBot={setSelectedBot}
            selectedClasses={selectedClasses} // Pass the selectedClasses for filtering
            army={army}
          />
        </>
      )}
    </div>
  );
}

export default App;
