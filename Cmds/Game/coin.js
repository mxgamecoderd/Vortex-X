const axios = require('axios');

module.exports = async (context) => {
    const { client, m } = context;

    try {
        const response = await axios.get('https://game3-eyk6.onrender.com/api/coinflip');
        await client.sendMessage(m.chat, { text: response.data.message }, { quoted: m });
    } catch (error) {
        console.error('Error in Coin Flip:', error);
        await client.sendMessage(m.chat, { text: "An error occurred while processing your coin flip request." }, { quoted: m });
    }
};
