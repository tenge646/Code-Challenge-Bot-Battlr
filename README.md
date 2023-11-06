# Bot Battlr Web Application

Bot Battlr is a web application that allows users to assemble and manage their army of bots. This README provides an overview of the application's features and code updates made during its development.

## Features

### Bot Collection

- **View Bot Profiles:** Users can view profiles of all available bots in the "Bot Collection" section.

- **Add to Army:** Users can add bots to their army by clicking on the bot's container in the collection.

- **Filter Bots:** Users can filter bots by class, including Support, Medic, Assault, Defender, Captain, and Witch.

- **Sort Bots:** Bots in the collection can be sorted by health, damage, or armor.

- **Styling:** Bot names are displayed in bold with class icons for easy identification.

### Your Bot Army

- **View Enlisted Bots:** Enlisted bots are displayed in the "Your Bot Army" section.

- **Release Bots:** Users can release bots from their army by clicking on the respective bot's container.

- **Delete Bots (App Only):** Users can delete bots from their army (app only) without affecting the database.

- **Styling:** Bot profiles in the army section are styled similarly to those in the collection.

## Getting Started

To get started with the Bot Battlr web application:

1. Clone the repository to your local machine. (use the master branch)

2. clone ito the app. `cd bot-battlr`
3. Install the required dependencies:
   ```shell
   npm install
` npm install react-router-dom@latest`

` npm install -g json-server  `

`npm install bootstrap  `

4. Getting started
- launch json server
`json-server --watch db. json -p 4444  `

- start the app
`npm start`
# BotCollection.js
Improved the user experience by allowing bots to be added to the army by clicking on their container.

Added FontAwesome icons to bot profiles based on their class (Medic, Defender, Captain, Witch, Support, Assault).

# YourBotArmy.js
Enhanced the functionality by allowing users to release or delete bots from their army.

Introduced styling for bot profiles in the army section, ensuring a consistent look with the Bot Collection.

# App.js
Enabled data retrieval from the server (http://localhost:4444/bots) to populate the Bot Collection.

Refined the bot sorting and class filtering mechanisms for better usability.

Improved error handling for a more robust user experience.



