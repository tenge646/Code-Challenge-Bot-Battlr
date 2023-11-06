import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import BotSpecs from './ BotSpecs' // Update the import path if needed

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/bot/:id" element={<BotSpecs />} />
          <Route path="/your-bot-army" element={<YourBotArmy />} />
          <Route path="/" element={<BotCollection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

