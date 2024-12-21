const axios = require('axios');

module.exports = async (context) => {
    const { client, m } = context;

    try {
        // Fetch a random truth question
        const response = await axios.get('https://truth-bz3f.onrender.com/api/truth');
        const truthQuestion = response.data.truth;

        // Send the truth question as a message
        await client.sendMessage(m.chat, { 
            text: `🧐 *Truth Question*\n\n${truthQuestion}`
        }, { quoted: m });
    } catch (error) {
        console.error('Error fetching truth:', error);
        await client.sendMessage(m.chat, { text: 'Sorry, I couldn\'t fetch a truth question at the moment.' });
    }
};
