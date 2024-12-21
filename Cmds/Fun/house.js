const axios = require('axios'); // Import axios to make HTTP requests

module.exports = async (context) => {
    const { client, m, prefix } = context;

    const botname = process.env.BOTNAME || "Vortex-X";

    try {
        // Fetch images from the "Naruto" category
        const imageResponse = await axios.get('https://ip2.onrender.com/api/images/house');
        
        // Check if there are any images in the response
        if (imageResponse.data.images && imageResponse.data.images.length > 0) {
            // Select a random image from the Naruto category
            const randomImage = imageResponse.data.images[Math.floor(Math.random() * imageResponse.data.images.length)];

            // Prepare the message
            const message = `
                Hello ${m.pushName}, here is a random House image for you! 🖼️\n\n
                Category: House\n\n
                POWERED BY MXGAMECODER.
            `;

            // Send the message with the random Naruto image
            await client.sendMessage(m.chat, { 
                image: { url: randomImage }, 
                caption: message,
                fileLength: "9999999999898989899999999" 
            }, { quoted: m });
        } else {
            // If no images are found
            throw new Error('No images found for house');
        }

    } catch (error) {
        console.error('Error fetching Naruto image:', error);
        await client.sendMessage(m.chat, { text: 'Sorry, I couldn\'t fetch a house image at the moment.' });
    }
};
