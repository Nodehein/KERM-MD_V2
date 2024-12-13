//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/aqel3b.jpeg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "237650564445";
global.owner = process.env.OWNER_NUMBER || "237673278970";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/kbc224.mp4,https://files.catbox.moe/dhii42.mp4,https://files.catbox.moe/lgj91g.mp4,https://files.catbox.moe/hvjoe6.mp4,https://files.catbox.moe/4ogeum.mp4,https://files.catbox.moe/0cmaxl.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kgtech-v2-session.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid09EbXl4ODNzQVZsTFNxTWJNbUhkaE40NUxod3Z4U2tDWUVLQ0NCQ2QzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicE43K0toRldMTVpVNXlMd2lLMHoxUkZNdXFmVkthc1dRVWJrdG9nR1VEND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTQ3lZRlFzVDBvZDJNOGFHUm9BK0RmN1NxQ3BaNk5BWGJvL0ZISUNKQUhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNUDdhdTBwV1BQQ0tBa0lVdiszK3NjQ1hHazFFcGxwdm5OV2xBQUtYVnlFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVHcXhublptUnYySkEvb3JmamhlTUU3QXdrQ2I4V0tIbTBtZ0JsblVjR0k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjMvbzJvMnBraHJUN0w3VlRZZjU1OUEvMVNMZzJJR1FSVTJTNWpFQVVmaGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV05FMDlsN05KVTlrQm9ncjZjNnMzV3laemV1bGlETDBpbTlRVWRjTldVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUHZYT0JpUTBjWFZnZk5XdkxaNXB3THo0cWw4UzM5WjBqQ25BdU9TOXlCcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRJUS9RdHA3QkV6dVpUL2UzdnBnWHlNYWxJWjh6RGlVeVNhQUViNFhkMEZRWldib3FGQTV2elRBQ3FNazVPaTRTY3hQUjhSWlB0dTJISlFiSms1VkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzEsImFkdlNlY3JldEtleSI6Ik0rTFV2VTdjMC9nSXhCcE5TWGprUlhsQ2lIWFpIYXdRU0IrUXlOYjE1c289IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkRpdWxDRjQ0U2ptVWRQUlMyWllEd3ciLCJwaG9uZUlkIjoiNzE5ZjJkYmEtYWU3OC00ODhiLTlhZTItNGQwN2Y0MWZmZjg3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhRU3psS3dlb04vcGlhelBwdjZJVzkvaW10RT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKMk9zYUVON0F5R3gxaUxDRzBzcXdBR1dqTFk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSDNMS0hON1YiLCJtZSI6eyJpZCI6IjIzNzY3MzI3ODk3MDoyOEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLgvITwnZCE8J2Qk/CdkITwnZCR8J2QjfCdkIDwnZCL25178J2Qti7wnZGFLvCdm6ou8J2brS7wnZGGLvCdm6ku8J2brn3igKI64oGg5b2hKERvcGVsKSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFAxMSs0R0VPYkU4Ym9HR0FrZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZm5UWTZxRHZ6ZXo5aVRCaDQ1cStRc1BobkNpclB6ZEhYejAxVEJCMU9oQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYTZRYU1OM3ZhR3lJaVFnbUJYUGFyRHVtaUdaRFNYOGk5dFVTMndqSzRvQnNERzBPS0kvMmVhVWdYQTd0SERIZ3pUM1hVT1dlRThiMFJzTUNDOVJqQUE9PSIsImRldmljZVNpZ25hdHVyZSI6IndIclFjaHIyRVNYNFdva0gwYVhMODNJa0Z6TVhUc24rQ3BMbWpHNXk2SzdlMlhZRmxybGVrbjRxbFhLeGxlN2RXMmo2WFNOWHE4NnZHYnpiaHA5MERBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM3NjczMjc4OTcwOjI4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlg1MDJPcWc3ODNzL1lrd1llT2F2a0xENFp3b3F6ODNSMTg5TlV3UWRUb1EifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzQxMDc3NjN9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  AUTO_LIKE_STATUS: LIKE_EMOJI || "😻",// put random emoji
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH𝐇𝐈𝐍𝐔𝐆𝐄𝐑𝐀",
  packname: process.env.PACK_NAME || "𝕹𝖆𝖓𝖆𝖔 𝖞𝖔𝖟𝖆𝖐𝖚𝖗𝖆×𝐒𝐡𝐢𝐧𝐢𝐠𝐚𝐦𝐢ˢʰⁱᵏᵃ ʰⁱⁿᵘᵍᵉʳᵃ{𝐶.𝑅.𝛪.𝛭.𝑆.𝛩.𝛮}•",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜𝐇𝐈𝐍𝐔𝐆𝐄𝐑𝐀",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "KERM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
