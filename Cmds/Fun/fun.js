const axios = require('axios'); // Import axios to make HTTP requests

module.exports = async (context) => {
    const { client, m, prefix } = context;

    // Fetch a random fun fact from your API
    try {
        const funResponse = await axios.get('https://fun-api-k6u4.onrender.com/api/funfact');
        const funFact = funResponse.data.fact; // Extract the fun fact

        // Prepare the fun fact message
        const message = `Fun fact: ${funFact}`;

        // Fetch a random image URL (you can replace with your image source)
        const imageUrl = 'https://i.imgur.com/BsrFTze.jpeg'; // Use any image URL here

        // Send the message with the fun fact and image
        await client.sendMessage(m.chat, { 
            image: { url: imageUrl }, 
            caption: message,
            fileLength: "9999999999898989899999999" 
        }, { quoted: m });

    } catch (error) {
        console.error('Error fetching fun fact:', error);
        await client.sendMessage(m.chat, { text: 'Sorry, I couldn\'t fetch a fun fact at the moment.' });
    }
};
