import React from 'react';

const BotCollection = ({ bots, deleteBot }) => {
    const handleDelete = (botId) => {
        // Call the deleteBot function passed from the parent component
        deleteBot(botId);
    };

    return( 
        <div>
            <h3>Bots Collection</h3>

            <div className="bot-container">
                {bots.map(bot => (
                    <div key={bot.id} className="bot-group">
                        <h4>Bot Class: {bot.bot_class}</h4>

                        <button onClick={() => handleDelete(bot.id)} className="delete-button">x</button>

                        <ol>
                            <li>
                                {bot.bot_class === 'support' && <h2>{bot.name}</h2>}
                                <p>ID: {bot.id}</p>
                                <p>Health: {bot.health}</p>
                                <p>Armor: {bot.armor}</p>
                                <p>Bot_class: {bot.bot_class}</p>
                                <img src={bot.avatar_url} alt={bot.name} style={{width: '500px', height: '700px'}} />
                            </li>
                        </ol>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BotCollection;
