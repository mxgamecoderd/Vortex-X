/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || ''; // your session id here

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
