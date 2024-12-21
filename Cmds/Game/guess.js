const axios = require('axios');

module.exports = async (context) => {
    const { client, m, args } = context;

    try {
        if (!args[0]) {
            // Start a new game
            const response = await axios.get('https://game-yl6h.onrender.com/api/guess-number');
            await client.sendMessage(m.chat, { text: response.data.message }, { quoted: m });
        } else {
            // Check the user's guess
            const guess = args[0];
            const response = await axios.get(`https://game-yl6h.onrender.com/api/guess-number/${guess}`);
            await client.sendMessage(m.chat, { text: response.data.message }, { quoted: m });
        }
    } catch (error) {
        console.error('Error in Guess the Number:', error);
        await client.sendMessage(m.chat, { text: "An error occurred while processing your request." }, { quoted: m });
    }
};
