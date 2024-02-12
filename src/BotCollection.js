

    const BotCollection = ({ bots }) => {

//DELETE BOTS COMPLETELY
const [bots, setBots] = useState([...]); // Initial bot state

const deleteBot = (botId) => {
    // Make an API call to delete the bot from the backend
    fetch(`/api/bots/${botId}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            // If successful, update the state to remove the deleted bot
            setBots(bots.filter(bot => bot.id !== botId));
        } else {
            // Handle error
            console.error('Failed to delete bot');
        }
    })
    .catch(error => {
        // Handle error
        console.error('Error:', error);
    });
};

        const groupedBots = bots.reduce((acc, bot) => {
          if (!acc[bot.bot_class]) {
            acc[bot.bot_class] = [];
          }
          acc[bot.bot_class].push(bot);
          return acc;
        }, {});

    return( 
        <div>
            <h3>Bots Collection</h3>
            <div className="bot-container">
            {Object.entries(groupedBots).map(([bot_class, botsGroup]) => (
        <div key={bot_class}  className="bot-group">
          <h4>Bot Class: {bot_class}</h4>

            <ol>
                {botsGroup.map(bot=>(
                    <li key={bot.id} >
                        <h2>{bot.title}</h2>
                        <p>ID:{bot.id}</p>
<p>Name: {bot.name}</p>
<p>Health: {bot.health}</p>
<p>Armor: {bot.armor}</p>
<p>Bot_class: {bot.bot_class}</p>
<img src={bot.avatar_url} alt={bot.name} style={{width: '100px', height: '200px'}} />
                    </li>
                ))}
            </ol>
        </div>
             ) )}
             </div>
             </div>
    );
};
export default BotCollection;