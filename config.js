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

  sessionName:process.env.SESSION_ID || "SUHAIL_18_50_09_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQwLFxuICAgICAgICA0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDc3LFxuICAgICAgICAzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDksXG4gICAgICAgIDg3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzksXG4gICAgICAgIDkxLFxuICAgICAgICA2MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI2LFxuICAgICAgICA3NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTczLFxuICAgICAgICA5NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1LFxuICAgICAgICA1OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjAzLFxuICAgICAgICA2LFxuICAgICAgICAxMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDYwLFxuICAgICAgICA0NixcbiAgICAgICAgMTgwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE0LFxuICAgICAgICA4OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDczLFxuICAgICAgICAzNSxcbiAgICAgICAgMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjI0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAzNixcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA0MixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMjJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICA5NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE2LFxuICAgICAgICA3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDUyLFxuICAgICAgICAzLFxuICAgICAgICAxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDg0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDc0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNixcbiAgICAgICAgOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDk2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHcjA2S0xyU3NCaHNodWpqcVN4VTNQMjlTekdBKy91bjlRSDNYTE5Sa1ZBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJOb0k3M2NmVlEwNl94RG4yaGtGdDZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjA1MTE1OTkwLTc1NmUtNDU4Mi05YTg3LTA4Yzg3NjAzMWNkNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjEsXG4gICAgICA0MSxcbiAgICAgIDUwLFxuICAgICAgODIsXG4gICAgICA4OCxcbiAgICAgIDE1MyxcbiAgICAgIDExOCxcbiAgICAgIDcwLFxuICAgICAgMTQ0LFxuICAgICAgNDgsXG4gICAgICA5MSxcbiAgICAgIDIzMCxcbiAgICAgIDkyLFxuICAgICAgOTQsXG4gICAgICAxMDcsXG4gICAgICAxMTAsXG4gICAgICAxMDksXG4gICAgICAyMjQsXG4gICAgICAxNzgsXG4gICAgICA1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzQsXG4gICAgICAyMzcsXG4gICAgICA1NCxcbiAgICAgIDkyLFxuICAgICAgMTMxLFxuICAgICAgOSxcbiAgICAgIDk2LFxuICAgICAgMTI1LFxuICAgICAgMTY1LFxuICAgICAgMjA3LFxuICAgICAgNDQsXG4gICAgICAyMTYsXG4gICAgICAxMTEsXG4gICAgICAyMyxcbiAgICAgIDEsXG4gICAgICA4OCxcbiAgICAgIDI5LFxuICAgICAgMTQ5LFxuICAgICAgMCxcbiAgICAgIDIzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWN0pTWFkzN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAyMDYxOTQzMjoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiODQyMjUzMTU2Nzc5NzoyNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNWGxtWklCRVBqNjU3WUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlAyYWhPVHFSdVorR0JIQnY3bHRUUU1tUExtQXBBdlFFL3VyRUVDRVpPRGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMmZTTWdmUzJXU2U0YlhqdnRtZFcvMlpPUEJhVklQeGpPUnhKdmJ5QmJoc3pjbEMxUldVeWhVeW9EYldSNnBjTmlKeEpJR1FtaG43aDl3V2ZNaCtZQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZnF0ci9mUUdEdWNuRkxDbFNuYjg0SkUyZk1OajNqb3BMYTVxTkF2RWtDaXVOL291eUtZZ1JUUmRRMG94RjZScDdqdE1GNXdjQUtaQnkzSGlNTlprQnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyMDYxOTQzMjoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA5NixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjU1NjIyMzZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9",  // PUT SESSION ID HERE 
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
 
