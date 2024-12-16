/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid05RNU83RDJ0NmFzK213WVVZSW1Cdk1xbFVwckhDZU9uaHJhaVFTaysxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUh3ejlnRnFaMkMrR3dPVmZMSzVXYlJjalVTOHgwVXBFT0JKalgzNWZ6OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3Smw4bkRCY0F5dzdHdTlJTE55bU14V0tSTGp1bzdVV1NtbVh4d3ozR1hBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOKytsaGdxSkZpK3dnSnRNaGlGcmpkYlh1ZUhXVFpTOVpEczhMNGxNY0Q0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1QMlRaWDR3cWVkbXgweWhuZUlhUW1ZRDZRMFNlWlRMZlpGVnVFaC9jWEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5TY3pndGdXb0t4SEhIdGI5TnpJRHkxcU1ad0JUT0NJMktkUk9nMHlZR0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU5jT2FBVml3NEVUUnNTMzhuSVVTU0ZQYWQ4V1lCN3hYTzM0aE9iN2Rubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmNXbUFTa0l3NFJzc01DK3BmWXNRU0tTQ2RSMlovKzRhVFQ4cnZ2eXV4VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9vKzBjL1A5SWU4d2s3R3pQZVZhTVpReXYvU2lFU0RCY3prQ0I1ZldLTUxwMmVLM3VENkVNZ1l6c1dQTVZHWlBaVVhSWUs2eHRqQWxQODNOL0o5RmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NiwiYWR2U2VjcmV0S2V5IjoiMXhydGJiNENORXYrVnkyQVIvRXZ4NE5WYkR5OGJvYkx1V1I0N214cUhTTT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MDIxNTA2MDM2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjAzODRENTRCRTUzOEVDRkY5QTg4MzdEQjk0Q0E5MkM5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzQzNTUwNjJ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IktnVzl2ZTNXUW51elZhd2psVUIzV3ciLCJwaG9uZUlkIjoiZDcyYTZmYmYtMzg5Ny00OGMyLWJjNDEtZGM5MzllYjRiMDU2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkEraVlMdTV1b0hvK1EvcFlLSmJldjZ5czRZUT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqRmRjd2t1UU81amRybTBmd3ZhcytTaExra009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNkRYWExLM1kiLCJtZSI6eyJpZCI6IjIzNDkwMjE1MDYwMzY6NjBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1AvQWl0d0hFT1RRZ0xzR0dBc2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImY3YklMc0twTFVicGFSbU5pNlhWRWlpUUFtN01SVm1MdjZuSzNYNVFVRU09IiwiYWNjb3VudFNpZ25hdHVyZSI6InAzMndxU0YzR0I4UDNVSS9UeFZ2Mk1tbk50Y211MUJWUWpJdk1EU2JiWnRFZkQ1M3dEQW1RMFBmcjgxdElBZGw3WUVrMXA4c1NVVnRQUExOY0ZQRERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtZzV6OXFoUDM1VEtvbG81NnpWNEROSVVhcUFPczhjY1ZIUXg3YTVON054NDJhNmlpUVdjLzFRQmVmMnJLTEdvY0hTbUR1OWZYMTc0KzdoZk1KaERpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMjE1MDYwMzY6NjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWCsyeUM3Q3FTMUc2V2taall1bDFSSW9rQUp1ekVWWmk3K3B5dDErVUZCRCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDM1NTA1OCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDeWsifQ=='; // your session id here

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "234";
const author = process.env.STICKER_AUTHOR || 'mxgamecoder';
const packname = process.env.PACKNAME || 'Vortex-X';
const dev = process.env.DEV || '2349021506036';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'Vortex-X';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const cookies = JSON.parse(process.env.COOKIE || '[{"domain":".youtube.com","expirationDate":1764463277.409877,"hostOnly":false,"httpOnly":false,"name":"__Secure-1PAPISID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"UoBcKfo0_FSAxQ5D/A5ZClpB2xVLQJQGUx","id":1},{"domain":".youtube.com","expirationDate":1764463277.412158,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"g.a000pghxevPjwTr5Un_D-PS1UxiaEdymANhc_5NWNQgaApthzLU0MOFGGamQ5yqi2vrAqKldbgACgYKASoSARUSFQHGX2MiB0PtUQYJy2_oQLkmMPXgfRoVAUF8yKpuqWya_M2xRHe_6e9o_6TK0076","id":2},{"domain":".youtube.com","expirationDate":1762941611.655441,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSIDCC","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"AKEyXzWtrmvqerXnEweUSkGiFKAn57TBnvoAEBDi6B33Sg4gpMOANgVFwDBU_JtKQXLpisy_","id":3}]');
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'false';
const autolike = process.env.AUTOLIKE_STATUS || 'false';
const autoread = process.env.AUTOREAD || 'false';
const autobio = process.env.AUTOBIO || 'false';

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
