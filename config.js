const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349020619432";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_23_58_09_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDc4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNixcbiAgICAgICAgMjQzLFxuICAgICAgICA1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDkyLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM2LFxuICAgICAgICA5MixcbiAgICAgICAgMTE5LFxuICAgICAgICA4MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDYsXG4gICAgICAgIDUzLFxuICAgICAgICA3MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc1LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ1LFxuICAgICAgICAyMixcbiAgICAgICAgNTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAzNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA4OSxcbiAgICAgICAgMjIzLFxuICAgICAgICA1OSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDk0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA5MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA3LFxuICAgICAgICAzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjMxLFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMixcbiAgICAgICAgMjE1LFxuICAgICAgICA2MixcbiAgICAgICAgMjUsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5OSxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxNixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDQ4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE4NixcbiAgICAgICAgNTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzksXG4gICAgICAgIDg2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDUxLFxuICAgICAgICA1MCxcbiAgICAgICAgOTksXG4gICAgICAgIDU3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOSxcbiAgICAgICAgODUsXG4gICAgICAgIDUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0NixcbiAgICAgICAgNzEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxODMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0LFxuICAgICAgICA4MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSm1wMnl1ZnhsOS9sbzFSRWUrbDB4L01DVHNmOTRRamhvUWZKSFlaa0xJVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTGctdDlYaDJTNFdKNVMzSUdMRGZMd1wiLFxuICBcInBob25lSWRcIjogXCJhMmM0ODllZS1mMmViLTRjNjEtYTg4Mi1mMjUyOWU3MWJhZDJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA0LFxuICAgICAgMzcsXG4gICAgICAxMjksXG4gICAgICA1OSxcbiAgICAgIDgsXG4gICAgICAxMCxcbiAgICAgIDE4NSxcbiAgICAgIDI1LFxuICAgICAgMjE2LFxuICAgICAgMjExLFxuICAgICAgMjIzLFxuICAgICAgMTMwLFxuICAgICAgMTg4LFxuICAgICAgMTgwLFxuICAgICAgMTEzLFxuICAgICAgNzMsXG4gICAgICAxODUsXG4gICAgICAyMTksXG4gICAgICAyNDMsXG4gICAgICAxMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ4LFxuICAgICAgMTU5LFxuICAgICAgMTk0LFxuICAgICAgMTM4LFxuICAgICAgNjgsXG4gICAgICAyMTMsXG4gICAgICAzNCxcbiAgICAgIDEyMCxcbiAgICAgIDMxLFxuICAgICAgOTksXG4gICAgICA2MixcbiAgICAgIDE1MyxcbiAgICAgIDE1MixcbiAgICAgIDEzNyxcbiAgICAgIDI3LFxuICAgICAgOTMsXG4gICAgICAxNTgsXG4gICAgICAyMDMsXG4gICAgICAxMixcbiAgICAgIDI1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRTTJFUTE5NVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyMDYxOTQzMjoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODQyMjUzMTU2Nzc5NzoyMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNUGxtWklCRUluRjNyWUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlAyYWhPVHFSdVorR0JIQnY3bHRUUU1tUExtQXBBdlFFL3VyRUVDRVpPRGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWjIyWUZNczVzNThaclRMaWt4ODdBZEVCYkgzT0JhSWJVcGp1OXpNeDJ4ZTMzWlRCcitUV01SWmUyZElMb25CblNZSUtUZk0zYU5iWkx0V0dUVG02RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUkVpWjZMSEszWDJ1VktoaFpZLzJHak1ibUNST21ZQzZEa2VocHJ4Z0VhMytkZ1JHSWdqMEc1cXRsYmJzZWJaVDdoeG9SRkpOZlJ2MHVTdXBZMTh6aGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyMDYxOTQzMjoyMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjU0MDc4ODRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
