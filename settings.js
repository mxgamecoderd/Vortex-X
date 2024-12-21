/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNERaaTI0aHdDaU1PMUdrT2dsa0FxblNvUm4xRlZ1bUVtaHFORWhpUmRsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWVQcnhUQjBMaFFoZ0loZHJ4RTJVNUxQVUxrNkNTYWUzanRxbGhMUWZ3Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBQnhKb3JQTE83NmxEQkx4TGpocVdOVnVnSHRldjRUeWF6TGlaOVAzNVZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5UmcrN3IvVVNsTWNFclFJMVN6WDMzazRoRlVRWWNidCtoV2plNUFKTEdZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklGNEI3ZGF2VndyWGFvc3J2NG5JQWhHQlBBSXFkc0RBWG1LT3FsS0hjME09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImkxWHFYS0lxbWJzMk5SNHh6N3dNVnQvTC84emFNR2ZTdFFTRENjQXhSUUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUxqQjBMdlk5L0tBNmVkSGd1c1AwRHBKRmJFRWZHdWtrRGZOK0dlY2NGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTG0wZGlXTDFBdEdMYWJmT21rQzdteSs3ejFJS3BGby9QS0Ivb3MvYmNsbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdKT0pFNlpnNmIxR0IrVUplSmJRb3N1K2FwQW9UZllHODhFKzdCeTBSanpYem1abmxLbGYyUUhyOWRMa0xHQ212VHBOR20zRWpkckMvUDRibHl1M0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEsImFkdlNlY3JldEtleSI6Iktwc0cxdHJCdmJBUDNkTHBBS0FqVFEvTU0rSWdTcU5zZ2tBT3hjWTdFaU09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkdZVXl1bWZYUTZxZlVVcG02SFd6R1EiLCJwaG9uZUlkIjoiZDYyY2VmNjktZDA4Yy00OTY1LThlNjEtYzI4ZDY5MTU3OTk3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdjMHBKWEJOTnZBbnM5TWtUYnFtNWJ0Wk9LRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZZXRGVU53OUVFc3BIazgxeno2Yk9jZTlvZ009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQloyVllEREUiLCJtZSI6eyJpZCI6IjIzNDgxNDcyODg0NDQ6NDJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi5LmU5rK7wrfnpo/ojrHlhYvmlq8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09tSWdPd0VFSzMybkxzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IndPdlZWc2wyZE95M1VrdVplZ011RTNPVGl1ZU1veEVUMmFxWEVpamViRW89IiwiYWNjb3VudFNpZ25hdHVyZSI6IkU5Um5iZmlNNFhHMThkOE5Sb3dLM010Y0NsMzFTbjNUeFduY1VuU0pWQjZRMXZWRHZKc0x5dGh2bEc1bmVxNTVYa21KL2I1d3o3TFovUVdjR2tLbUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJEbmNsWWpQcjd1TkRSYkxEekdwQnhqZ09NUDl2bzEvblJxSzZ5VHdkZXVkY2hxbVFwQnZPaDVrNGhJejFOeHpKTXN4K3kyQkdYWmxVbTJMaWw4eTRDZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNDcyODg0NDQ6NDJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY0RyMVZiSmRuVHN0MUpMbVhvRExoTnprNHJuaktNUkU5bXFseElvM214SyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDgxODYxN30='; // your session id here

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "234"; // your country code eg 234, 254 and so on
const author = process.env.STICKER_AUTHOR || 'mxgamecoder';
const packname = process.env.PACKNAME || 'Vortex-X';
const dev = process.env.DEV || '2349021506036'; // don't not change please
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'Vortex-X';
const mode = process.env.MODE || 'public'; // private or public
const gcpresence = process.env.GC_PRESENCE || 'false'; // true or false
const antionce = process.env.ANTIVIEWONCE || 'true'; // true or false
const sessionName = "session";
const cookies = JSON.parse(process.env.COOKIE || '[{"domain":".youtube.com","expirationDate":1764463277.409877,"hostOnly":false,"httpOnly":false,"name":"__Secure-1PAPISID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"UoBcKfo0_FSAxQ5D/A5ZClpB2xVLQJQGUx","id":1},{"domain":".youtube.com","expirationDate":1764463277.412158,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"g.a000pghxevPjwTr5Un_D-PS1UxiaEdymANhc_5NWNQgaApthzLU0MOFGGamQ5yqi2vrAqKldbgACgYKASoSARUSFQHGX2MiB0PtUQYJy2_oQLkmMPXgfRoVAUF8yKpuqWya_M2xRHe_6e9o_6TK0076","id":2},{"domain":".youtube.com","expirationDate":1762941611.655441,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSIDCC","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"AKEyXzWtrmvqerXnEweUSkGiFKAn57TBnvoAEBDi6B33Sg4gpMOANgVFwDBU_JtKQXLpisy_","id":3}]');
const presence = process.env.WA_PRESENCE || 'online'; // online, recording and typing

const antitag = process.env.ANTITAG || 'true'; // true or false
const antidelete = process.env.ANTIDELETE || 'true'; // true or false
const autoview = process.env.AUTOVIEW_STATUS || 'false'; // true or false
const autolike = process.env.AUTOLIKE_STATUS || 'false'; // true or false
const autoread = process.env.AUTOREAD || 'false'; // true or false
const autobio = process.env.AUTOBIO || 'false'; // true or false

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  cookies,
  autobio,
  mode,
autolike,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
