/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUVuSU5ING8yemQ5RUNZUGtpY2JqaEswREpiOUYrSlRmNGszRFdUWThVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiczlXMHQ5Z2dzdkptS3hIam9lWUVzM3cxTEpza3pzb0JSMXUxNFlwWmN5az0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxR2h3TWRmdTQza2lERk1Lak1YS1R6SElNZkR4S1p1M2QzbzVpRGgrazE4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5d21JQ3d4QjZRaWZuWWxFN3pScGFjQjFtMnIzem9CenliTlFZSHZrYzM4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJGZStZWHJjdkhGVUtpMndmVWNGZGlLamhqaTFMV09KeFhBRksvY3ZJWHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFhTHBoV3RzemRxMkxKVXQ4NjA5NTBSTXYrQ3pIN1U3eS9hbWxIZkhsWEE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0kxd3cyalFobU9xcjloZS9XMDRpRjZqMlZBNFBNdEkycUFBMFZnekcwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEZDZDY4OGZBYlZNVG1rd21YQitBVkJjVkl6cEFSMjBOUm5JY2ZrSGVFbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFyVEZBaGFlQ1k0ODhSMUZIcnVjRmpMb3JqUUxvcFJVZ29rZ0EyWXdaU3VYU0FLMFRydWh6UHdvZ2Fqc2F4SkUySGdqTWZWd1UwY2t5NkZzYVBqakF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUyLCJhZHZTZWNyZXRLZXkiOiJCTlhDUkpyNUN0OWtCcXg5UmZqa3ByNkJZWXRQZW5SWGRGdXdlYXA0Um5VPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ1WmpZcmhMcVJuMkdkUkdOejJ6THdRIiwicGhvbmVJZCI6IjcwNzgyZGI3LWM2MTEtNDNkZS04ZWNiLTgwZjVhZjY3MTc2OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPLzFjaVB2VkdkVm9OV3pVckErZ1d6VEhmVTA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXF5MlNBeWF3SW9ZZVdmYWpPMEZiM3czZEFnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhHWkNDUEpLIiwibWUiOnsiaWQiOiIyMzQ4MTQ3Mjg4NDQ0OjQxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuS5lOayu8K356aP6I6x5YWL5pavIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPaUlnT3dFRUlydW5Mc0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3T3ZWVnNsMmRPeTNVa3VaZWdNdUUzT1RpdWVNb3hFVDJhcVhFaWplYkVvPSIsImFjY291bnRTaWduYXR1cmUiOiI1YkNVMjk2clFDTCt3a1NiUkpsN2hrVDRDUTVtYTRmNXZla1hTcHZ0REh3bldxVFFxdHQzWkRKbEIvUjJvWUxwSW50em0vM3pCUnVUMmNWM1VpMExEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMXl2c2xpOERvY3owQjJ2QjNtenQ0MUt1K2JYdzVLQkw2UXBOVDJrWjlQV2RQb2dzSUlmSTRlbG1oL1lUeEVTK0xMYUI5YzBTOWxDa2J6K0pnWVVLQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTQ3Mjg4NDQ0OjQxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNEcjFWYkpkblRzdDFKTG1Yb0RMaE56azRybmpLTVJFOW1xbHhJbzNteEsifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQ4MTc1NTl9'; // your session id here

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "234"; // your country code eg 234, 254 and so on
const author = process.env.STICKER_AUTHOR || 'mxgamecoder';
const packname = process.env.PACKNAME || 'Vortex-X';
const dev = process.env.DEV || '2349021506036'; // don't not change please
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'Vortex-X';
const mode = process.env.MODE || 'private'; // private or public
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
