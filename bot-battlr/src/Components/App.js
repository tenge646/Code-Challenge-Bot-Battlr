//App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy ';
import BotSpecs from './ BotSpecs';
import SortBar from './SortBar';
import FilterBar from './FilterBar';

function App() {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [army, setArmy] = useState([]); // Initialize 'army' as an empty array
  const [sortType, setSortType] = useState('health');
  const [selectedClasses, setSelectedClasses] = useState([]);

  useEffect(() => {
    // Fetch data from the server (http://localhost:4444/bots)
    fetch('http://localhost:4444/bots')
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addToArmy = (bot) => {
    // Check if the bot is not already in the army
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const releaseFromArmy = (bot) => {
    const updatedArmy = army.filter((b) => b.id !== bot.id);
    setArmy(updatedArmy);
  };

  const sortBots = (type) => {
    // Create a copy of the 'bots' array to avoid mutating the state directly
    const sortedBots = [...bots];

    // Define a sorting function based on the selected 'type'
    switch (type) {
      // ...
    }

    // Update the 'bots' state with the sorted array
    setBots(sortedBots);
  };

  const toggleClassFilter = (botClass) => {
    // Check if the selected class is already in the 'selectedClasses' array
    if (selectedClasses.includes(botClass)) {
      // If it's already selected, remove it
      const updatedSelectedClasses = selectedClasses.filter(
        (selectedClass) => selectedClass !== botClass
      );
      setSelectedClasses(updatedSelectedClasses);
    } else {
      // If it's not selected, add it
      setSelectedClasses([...selectedClasses, botClass]);
    }
  };

  const goBackToList = () => {
    setSelectedBot(null);
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
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
          <div className='bots bg-success'> 
          <YourBotArmy army={army} releaseFromArmy={releaseFromArmy} /></div>
          
          
          <BotCollection
            bots={bots}
            addToArmy={addToArmy}
            setSelectedBot={setSelectedBot}
            army={army}
          />
        </>
      )}
    </div>
  );
}

export default App;
