const axios = require('axios');

module.exports = async (context) => {
    const { client, m, args } = context;

    try {
        if (!args[0] || !['rock', 'paper', 'scissors'].includes(args[0].toLowerCase())) {
            await client.sendMessage(m.chat, { text: 'Please choose rock, paper, or scissors.' }, { quoted: m });
            return;
        }

        const userChoice = args[0].toLowerCase();
        const response = await axios.get(`https://game2-ngpk.onrender.com/api/rps/${userChoice}`);
        await client.sendMessage(m.chat, { text: response.data.message }, { quoted: m });
    } catch (error) {
        console.error('Error in Rock Paper Scissors:', error);
        await client.sendMessage(m.chat, { text: "An error occurred while processing your request." }, { quoted: m });
    }
};
