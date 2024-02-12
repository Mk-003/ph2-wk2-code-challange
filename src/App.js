
import './App.css';
import React,{ useEffect,useState } from 'react';  
import BotCollection from './BotCollection';

function App() {
 const [selectedCategory, setSelectedCategory] = useState("All");
const [bots,setBots]= useState([]);


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

  function handleUpdateItem(updatedItem) {
    console.log("In ShoppingCart:", updatedItem);
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
    <Filter
      category={selectedCategory}
      onCategoryChange={handleCategoryChange}
    />
    <ul className="Bots">
      {botsToDisplay.map((bot) => (
        <BOT key={bot.id} item={bot} onUpdateItem={handleUpdateItem} />
      ))}
    </ul>
  </div>
  );
}

export default App;
