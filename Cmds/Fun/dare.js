const axios = require('axios');

module.exports = async (context) => {
    const { client, m } = context;

    try {
        // Fetch a random dare challenge
        const response = await axios.get('https://truth-bz3f.onrender.com/api/dare');
        const dareChallenge = response.data.dare;

        // Send the dare challenge as a message
        await client.sendMessage(m.chat, { 
            text: `😈 *Dare Challenge*\n\n${dareChallenge}`
        }, { quoted: m });
    } catch (error) {
        console.error('Error fetching dare:', error);
        await client.sendMessage(m.chat, { text: 'Sorry, I couldn\'t fetch a dare challenge at the moment.' });
    }
};
