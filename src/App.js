
import './App.css';
import React,{ useEffect,useState } from 'react';  
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
function App() {

const [bots,setBots]= useState([]);
const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() =>{
    fetch('http://localhost:3000/bots')
    .then(response => response.json())
    .then((data) =>{
      setBots(data);
    })
    .catch((error)=>{
      console.error('Error fetching data:',error);
    })
  },[]);

//add bot to army
const addToYourBotArmy = (botId) => {
  const selectedBot = bots.find(bot => bot.id === botId);
  if (selectedBot && !yourBotArmy.includes(selectedBot)) {
      setYourBotArmy([...yourBotArmy, selectedBot]);
  }
};


  return (
    <div className="App">
      <h1>TEAM MAMIO </h1>
      <BotCollection bots={bots} addToYourBotArmy={addToYourBotArmy} />
      <YourBotArmy bots={yourBotArmy} />
    </div>
  );
}

export default App;
