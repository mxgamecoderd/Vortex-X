module.exports = async (context) => {
  const { client, m } = context;

  try {
    // Fetch repository data from GitHub
    const response = await fetch("https://api.github.com/repos/mxgamecoder/Vortex-X");
    const repoData = await response.json();

    // Extract relevant information
    const repoInfo = {
      stars: repoData.stargazers_count,
      forks: repoData.forks_count,
      lastUpdate: repoData.updated_at,
      owner: repoData.owner.login,
      createdAt: repoData.created_at,
      url: repoData.html_url
    };

    // Format dates
    const createdDate = new Date(repoInfo.createdAt).toLocaleDateString("en-GB");
    const lastUpdateDate = new Date(repoInfo.lastUpdate).toLocaleDateString("en-GB");

    // Construct message caption
    const messageCaption = `
 Hello ,,,👋This is Vortex-X
 the best bot in the universe developed by mxgamecoder 🪀,,fork and give a star 🌟 to my repo 
  ╭────────────────
  │✨ Stars: ${repoInfo.stars}    
  │🧧 Forks: ${repoInfo.forks}   
  │📆 Release Date: ${createdDate}   
  │⏰ Last Update: ${lastUpdateDate}    
  │🥰 Owner: ${repoInfo.owner}
  │📚 Repository: ${repoInfo.url}
  ╰─────────────────── 
    `;

    // Send the generated message to the user
    await client.sendMessage(m.chat, {
      text: messageCaption,
      contextInfo: {
        mentionedJid: [m.sender], // Mention the sender
        externalAdReply: {
          title: "🌟 Vortex-X✨",
          body: "> 𝐫𝐞𝐠𝐚𝐫𝐝𝐬 mxgamecoder",
          sourceUrl: "https://whatsapp.com/channel/0029Vavz0e6E50Ugp30Z6z0W",
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });

  } catch (error) {
    console.error("Error:", error);
    m.reply('An unexpected error occurred while generating the repo information.');
  }
};
