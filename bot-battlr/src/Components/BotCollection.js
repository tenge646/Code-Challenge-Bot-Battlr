import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BotCollection() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    // Fetch bot data from your JSON server
    axios.get(' http://localhost:4444/bots')
      .then((response) => {
        setBots(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  // Implement rendering the list of bots and adding bots to your army here

  return (
    <div className="BotCollection">
      {/* Render your bot list here */}
    </div>
  );
}

export default BotCollection;
