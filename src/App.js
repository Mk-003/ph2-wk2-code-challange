
import './App.css';
import React,{ useEffect,useState } from 'react';  
import BotCollection from './BotCollection';
function App() {

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
  return (
    <div className="App">
      <h1>TEAM MAMIO </h1>
      <BotCollection bots={bots}/>
    </div>
  );
}

export default App;
