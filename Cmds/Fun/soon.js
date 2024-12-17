module.exports = async (context) => {
    const { client, m, prefix } = context;

const botname = process.env.BOTNAME || "Vortex-X";

 await client.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/BsrFTze.jpeg' }, caption: `Hello ${m.pushName}, Vortex-X Fun menu coming soon.\n\nType ${prefix}menu to see my command list.. );`, fileLength: "9999999999898989899999999" }, { quoted: m }); 

}
