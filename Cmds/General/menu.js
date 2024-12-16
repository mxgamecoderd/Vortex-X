const { DateTime } = require('luxon');
const fs = require('fs');

module.exports = async (context) => {
    const { client, m, totalCommands, mode, botname, prefix} = context;

    try {
        const categories = [
            { name: 'AI', emoji: '🤖' },
            { name: 'General', emoji: '✍️' },
            { name: 'Media', emoji: '🎥' },
{ name: 'Search', emoji: '🔍' },
            { name: 'Editting', emoji: '✂️' },
            { name: 'Groups', emoji: '👥' },
            { name: 'Owner', emoji: '👑' },
            { name: 'Coding', emoji: '💻' },
{ name: 'Utils', emoji: '🎭' }
        ];

        
        const getGreeting = () => {
            const currentHour = DateTime.now().setZone('Africa/Lagos').hour;

            if (currentHour >= 5 && currentHour < 12) {
                return 'Good morning 🌄, How was your night? hope you slept well.';
            } else if (currentHour >= 12 && currentHour < 18) {
                return 'Good afternoon ☀️, How is everything going hope it not stressful.';
            } else if (currentHour >= 18 && currentHour < 22) {
                return 'Good evening 🌆, How was your day?';
            } else {
                return 'Good night 😴, I will miss you, Have a great sleep.';
            }
        };

       
        const getCurrentTimeInLagos = () => {
            return DateTime.now().setZone('Africa/Lagos').toLocaleString(DateTime.TIME_SIMPLE);
        };

let menuText = `🌟 **Welcome ${m.pushName}, ${getGreeting()}!**\n\n`;

menuText += `📝 **Version**: 1.0.0\n`;
menuText += `👥 **User**: ${m.pushName}\n`;
menuText += `🤖 **Bot Name**: ${botname}\n`;
menuText += `🔧 **Commands**: ${totalCommands}\n`;
menuText += `⏰ **Time (Nairobi)**: ${getCurrentTimeInLagos()}\n`;
menuText += `📌 **Prefix**: ${prefix}\n`;
menuText += `🛠️ **Mode**: ${mode}\n`;
menuText += `📚 **Library**: Baileys\n`;

menuText += '\n';
menuText += '━━━━━━━━━━━━━━━━━━━━━\n';
menuText += '━━━━━━━━━━━━━━━━━━━━━\n';
menuText += '━━━━━━━━━━━━━━━━━━━━━\n\n';


        const toFancyUppercaseFont = (text) => {
            const fonts = {
                'A': '𝐀', 'B': '𝐁', 'C': '𝐂', 'D': '𝐃', 'E': '𝐄', 'F': '𝐅', 'G': '𝐆', 'H': '𝐇', 'I': '𝐈', 'J': '𝐉', 'K': '𝐊', 'L': '𝐋', 'M': '𝐌',
                'N': '𝐍', 'O': '𝐎', 'P': '𝐏', 'Q': '𝐐', 'R': '𝐑', 'S': '𝐒', 'T': '𝐓', 'U': '𝐔', 'V': '𝐕', 'W': '𝐖', 'X': '𝐗', 'Y': '𝐘', 'Z': '𝐙'
            };
            return text.split('').map(char => fonts[char] || char).join('');
        };

        const toFancyLowercaseFont = (text) => {
            const fonts = {
                'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ', 'i': '𝑖', 'j': '𝑗', 'k': '𝑘', 'l': '𝑙', 'm': '𝑚',
                'n': '𝑛', 'o': '𝑜', 'p': '𝑝', 'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡', 'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥', 'y': '𝑦', 'z': '𝑧'
            };
            return text.split('').map(char => fonts[char] || char).join('');
        };

        for (const category of categories) {
            const commandFiles = fs.readdirSync(`./Cmds/${category.name}`).filter((file) => file.endsWith('.js'));

            const fancyCategory = toFancyUppercaseFont(category.name.toUpperCase());

            menuText += `*${fancyCategory} ${category.emoji}:* \n`;
            for (const file of commandFiles) {
                const commandName = file.replace('.js', '');
                const fancyCommandName = toFancyLowercaseFont(commandName);
                menuText += `  • ${fancyCommandName}\n`;
            }

            menuText += '\n';
        }

        await client.sendMessage(m.chat, {
            video: { url: "https://i.imgur.com/9y1iqOH.mp4" },
            caption: menuText,
            gifPlayback: true
        }, {
            quoted: m
        });

    } catch (error) {
        console.error(error);
        m.reply('An error occurred while fetching the menu.');
    }
};
