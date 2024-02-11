

    const BotCollection = ({ bots }) => {
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

            {Object.entries(groupedBots).map(([bot_class, botsGroup]) => (
        <div key={bot_class}>
          <h4>Bot Class: {bot_class}</h4>

            <ol>
                {botsGroup.map(bot=>(
                    <li key={bots.id} >
                        <h2>{bot.title}</h2>
                        <p>ID:{bot.id}</p>
<p>Name: {bot.name}</p>
<p>Health: {bot.health}</p>
<p>Armor: {bot.armor}</p>
<p>Bot_class: {bot.bot_class}</p>
<img src={bot.avatar_url} alt={bot.name} style={{width: '500px', height: '700px'}} />
                    </li>
                ))}
            </ol>
        </div>
             ) )}
             </div>
    );
};
export default BotCollection;