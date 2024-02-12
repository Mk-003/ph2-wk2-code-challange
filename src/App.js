

import './App.css';
import React,{ useEffect,useState } from 'react';  
import BotForm from './BotForm';
import Bot from './Bot';
function App() {
 const [selectedCategory, setSelectedCategory] = useState("All");
const [bots,setBots]= useState([]);
const [shoppingCart, setShoppingCart] = useState([]);

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

  function handleDeleteBot(deletedBot) {
   // console.log("In ShoppingCart:", deletedBot);
   const updatedBots = bots.filter((bot) => bot.id !== deletedBot.id);
  setBots(updatedBots);
  }

  function handleUpdateBot(updatedBot) {
   // console.log("In ShoppingCart:", updatedBot);
   const updatedBots = bots.map((bot) => {
    if (bot.id === updatedBot.id) {
      return updatedBot;
    } else {
      return bot;
    }
  });
  setBots(updatedBots);
  }

  function handleAddBot(newBot) {
    setBots([...bots, newBot])  ;
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const botsToDisplay = bots.filter((bot) => {
    if (selectedCategory === "All") return true;

    return bot.category === selectedCategory;
  });
  


  return (
    <div className="ShoppingList">
    {/* add the onAddItem prop! */}
    <BotForm onAddBot={handleAddBot} />
   
    <h1>MAWOWO GAMERS</h1>
    <ul className="Bots">
      {botsToDisplay.map((bot) => (
        <Bot key={bot.id} 
        bot={bot} 
        shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
        onUpdateBot={handleUpdateBot} 
        onDeleteBot={handleDeleteBot}/>
      ))}
    </ul>
  </div>
  );
}

export default App;

