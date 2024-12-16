module.exports = async (context) => {
  const { client, m } = context;


  const messageCaption = `
   Follow my channels and join my  groups for more updates
   
 ╭━━〔 MX-GΔMΞCØDΞR🪀 〕━━┈⊷
│▸      ──────────
│▸ Group
│▸https://chat.whatsapp.com/E7wrmf4i8dy04nPyCVibtI
│▸ 
│▸ Channel
│▸ https://whatsapp.com/channel/0029Vavz0e6E50Ugp30Z6z0W
│▸ 
│▸ Instagram 
│▸ https://Instagram.com/@mxgamecoder
│▸ 
│▸ Telegram 
│▸ https://t.me/mxgamecoder
│▸ 
│▸ YouTube
│▸ https://youtube.com/@mxgamecoder
╰──────────────┈⊷
  `;

  // Prepare the image URL
  const image = {
    url: "https://i.imgur.com/BsrFTze.jpeg"
  };

  // Prepare the message object
  const message = {
    image: image,
    caption: messageCaption
  };

  // Send the message
  await client.sendMessage(m.chat, message, { quoted: m });
};
