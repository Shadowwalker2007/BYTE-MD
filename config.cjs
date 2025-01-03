const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

module.exports = {
  "SESSION_ID": process.env.SESSION_ID || "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0RNaGZ1a1FGNk9sWXpuVCsyVlVWalF4V0pLOW1TZ1QwMG5lWlRWeFNYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjd6V3JDTE5haXhKQXJsMitmWmdnS0psY3VUL1FjcUlxNjJ0czdyWHVIdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDUHlCWHlKR2dBK0hYUGgyaWNiRGNTU3lSd3ZWS0RDdGdvMTQ0RldValZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0NS9nSmtyWlN1RUhVdmtzU3VmT1NXWW1seHduaXUxN3FRRGdQWm5FK0c0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtEdVNnOHVpdEFqL0dOQ013M3pOUGhOSWhaQ21NOUpDaXZ3eW9yenNJSGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpOdUNYOGhjZWRRaXpOYk5JbTdQdEZEQW8zRk9zeHVjeEdDdkVFNk02bmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUZXQmNkRFIwQkZsMDgwRXcwRFdtRkN2RGdodTBKZjI3OFhGZG1DSTVrST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0RIRm84eGVhMjA5b2hDNkwxRGx0Y1hrUUc2NzhuOUNOVzA2N2tiWDhVcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVyQzNvTmVDdDZtcVBPcVllK2hwemRaYi9pV0UzUnhCU1N3M08wcWlFcWQyaGdUK1dCSkdBc2YrL2l5cFpaeTNQb2xwRHJvQTRRTVdZQ0kwQXp6bGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg1LCJhZHZTZWNyZXRLZXkiOiJrYjZmZ1ZFcHNsU3RsNktCMDJxamdnUzZLNHluUW1KbkwxNGVwVktPU3RJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI2Mzc4NTU2OTU4MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4RUJCNDVDRDgzMzA0OEY3QTgyNEZCNzg2MUIwNjYzNyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM1OTA2MTE3fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNjM3ODU1Njk1ODJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRUUyNDRBNzZDNEU0M0I1MEUxRkVFMDMxQTRCNjZEREYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNTkwNjExN31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiLVBDMExNUnlRd0c5Y3ZzcDE4bWhrZyIsInBob25lSWQiOiI2YmVkYjJhZS05Yzg0LTQyNDctODU1NS1jMTQwOTZmYjRmZjMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHppMVc1WDdoRGNsUjM3cU5kdnAwcG0rSVc0PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3VklSaVBQVWNvSElCZ2QzcXVwTzFoZXVBMk09In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNKM1F1LzhERUxPbTM3c0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXVzVNelFsUEZmaE4vSnJMR05LZFdQTER1QktMWStCRWZkM0YrdjZQRUJzPSIsImFjY291bnRTaWduYXR1cmUiOiI5RmxiT0l0MDEydW9CWWxiK3Z1d2xpYzE2K3BJVjA3dkFycmZvNklhVEJFanMvVDNFSWNJSUR4TWNIVVd2eHRoUUt2NWpVTnJYdUVZcnlKb2RtTXhDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOCtWY1pTT0xVemRkbFFLcnl5eXFLS2JsMzUvbG1TZHFPNjdCTVNLdUh1K2htUGdkU1dWN1p4OTg2TmJBcHlhOUUrR2RLTXJYVlBEU21FUEtyd3pMZ3c9PSJ9LCJtZSI6eyJpZCI6IjI2Mzc4NTU2OTU4MjoyQHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc4NTU2OTU4MjoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZsdVRNMEpUeFg0VGZ5YXl4alNuVmp5dzdnU2kyUGdSSDNkeGZyK2p4QWIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU5MDYxMTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQlg2In0=",
  "ALIVE_IMG": process.env.ALIVE_IMG || "https://raw.githubusercontent.com/HyHamza/HyHamza/refs/heads/main/Images/logo.jpg",
  "PREFIX": process.env.PREFIX || ".",
  "AUTO_READ_STATUS": process.env.AUTO_READ_STATUS === 'true',
  "MODE": process.env.MODE || "private",
  "OWNER_NUMBER": process.env.OWNER_NUMBER || "263785569582",
  "OWNER_NAME": process.env.OWNER_NAME || "Tinaye Mhike",
  "ALWAYS_ONLINE": process.env.ALWAYS_ONLINE === 'true',
  "PRESENCE": process.env.PRESENCE || "online",
  "OMDB_API_KEY": process.env.OMDB_API_KEY || "76cb7f39",
  "READ_CMD": process.env.READ_CMD === 'true',
  "AUTO_VOICE": process.env.AUTO_VOICE === 'true',
  "AUTO_STICKER": process.env.AUTO_STICKER === 'true',
  "AUTO_REPLY": process.env.AUTO_REPLY === 'true',
  "AUTO_REACT": process.env.AUTO_REACT === 'true',
  "WELCOME": process.env.WELCOME === 'true',
  "ANTI_BAD": process.env.ANTI_BAD === 'true',
  "ANTI_LINK": process.env.ANTI_LINK === 'true',
  "ANTI_GROUP_LINK": process.env.ANTI_GROUP_LINK === 'true',
  "ANTI_DELETE": process.env.ANTI_DELETE === 'true',
  "ANTI_VIEW_ONCE": process.env.ANTI_VIEW_ONCE === 'true',
  "ANTI_BOT": process.env.ANTI_BOT === 'true',
  "PREMIUM_USERS": process.env.PREMIUM_USERS || "263785569582",
  "COUNTRY_BLOCK": process.env.COUNTRY_BLOCK === 'true',
  "COUNTRY_BLOCK_CODE": process.env.COUNTRY_BLOCK_CODE || "972",
  "EMOJI": process.env.EMOJI || "🙄",
  "AUTO_TYPING": process.env.AUTO_TYPING === 'true'
};
