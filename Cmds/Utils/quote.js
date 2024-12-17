const API_URL = 'https://favqs.com/api/qotd';

module.exports = async (context) => {
    const { client, m } = context;

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch data');

        const { quote } = await response.json();
        const quoteMessage = `
  ┏━━━ *Vortex-X-QUOTES* ━━━◆                     
  ┃
*◇* _${quote.body}_
  ┃   
  ┃     *◇* *AUTHOR:* ${quote.author}
  ┃      
  ╭──────────────◆
  │ *_Powered by Vortex-X._*
  ╰──────────────◆
        `;

        await client.sendMessage(m.chat, { text: quoteMessage }, { quoted: m });
    } catch (error) {
        console.error('Error fetching data:', error);
        await client.sendMessage(m.chat, { text: 'An error occurred while fetching the fact.' }, { quoted: m });
    }
};
