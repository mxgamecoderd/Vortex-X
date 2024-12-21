const axios = require('axios'); // Import axios to make HTTP requests

module.exports = async (context) => {
    const { client, m, prefix } = context;

    try {
        // Fetch a random joke from your API
        const jokeResponse = await axios.get('https://fun-api-k6u4.onrender.com/api/joke');
        const randomJoke = jokeResponse.data.joke; // Extract the joke

        // Prepare the joke message
        const message = `Joke of the day: ${randomJoke}`;

        // Fetch a random image URL (you can replace with your image source)
        const imageUrl = 'https://i.imgur.com/BsrFTze.jpeg'; // Replace with any image URL

        // Send the message with the joke and image
        await client.sendMessage(m.chat, { 
            image: { url: imageUrl }, 
            caption: message,
            fileLength: "9999999999898989899999999" 
        }, { quoted: m });

    } catch (error) {
        console.error('Error fetching joke:', error);
        await client.sendMessage(m.chat, { text: 'Sorry, I couldn\'t fetch a joke at the moment.' });
    }
};
