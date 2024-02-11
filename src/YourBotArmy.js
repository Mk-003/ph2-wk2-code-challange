import React from 'react';

const YourBotArmy = ({ bots }) => {
    return (
        <div>
            <h3>Your Bot Army</h3>
            <div className="bot-container">
                {bots.map(bot => (
                    <div key={bot.id} className="bot">
                        <h2>{bot.name}</h2>
                        <p>ID: {bot.id}</p>
                        <p>Health: {bot.health}</p>
                        <p>Armor: {bot.armor}</p>
                        <p>Bot Class: {bot.bot_class}</p>
                        <img src={bot.avatar_url} alt={bot.name} style={{ width: '100px', height: '200px' }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YourBotArmy;
