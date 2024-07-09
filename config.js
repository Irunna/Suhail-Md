const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348020592111";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_33_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQxLFxuICAgICAgICA0NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzMsXG4gICAgICAgIDI5LFxuICAgICAgICA5NixcbiAgICAgICAgMTAyLFxuICAgICAgICAwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQyLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDk4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDI4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxODksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE2LFxuICAgICAgICAyNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI3LFxuICAgICAgICAwLFxuICAgICAgICA5LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMTc5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg1LFxuICAgICAgICA5OCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMixcbiAgICAgICAgODYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQzLFxuICAgICAgICA5NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA2OCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDcwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNixcbiAgICAgICAgMTkwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxOCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgyLFxuICAgICAgICA0NixcbiAgICAgICAgMTg4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAyLFxuICAgICAgICA4MixcbiAgICAgICAgOTQsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDczLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDc2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxODQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVVWXpyWmlzYm5ORGRRQjNPSmdnVnRZbDgzcDBYUDdvKzMycnVDSnhwODA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkc5aDBVc2g4VHVXcklDeEFmLWtYREFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTA4MmZhMWUtYzUzOS00ZDM0LWJlYTgtODc0MDcxYzg2YmUxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMyxcbiAgICAgIDIzMCxcbiAgICAgIDQ4LFxuICAgICAgNjgsXG4gICAgICA0NixcbiAgICAgIDIyNixcbiAgICAgIDc2LFxuICAgICAgMTQ2LFxuICAgICAgMjQyLFxuICAgICAgMTY1LFxuICAgICAgMjQ5LFxuICAgICAgMTEzLFxuICAgICAgMzIsXG4gICAgICA4NixcbiAgICAgIDI1NCxcbiAgICAgIDgwLFxuICAgICAgMTgyLFxuICAgICAgMjQ1LFxuICAgICAgMjI4LFxuICAgICAgNzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjAsXG4gICAgICA1MSxcbiAgICAgIDk4LFxuICAgICAgNDAsXG4gICAgICAxMDMsXG4gICAgICAxNjUsXG4gICAgICAyMTksXG4gICAgICAyMTUsXG4gICAgICAyNSxcbiAgICAgIDExNixcbiAgICAgIDIyMCxcbiAgICAgIDIyOCxcbiAgICAgIDEwMixcbiAgICAgIDE3MixcbiAgICAgIDExNixcbiAgICAgIDU4LFxuICAgICAgMTA0LFxuICAgICAgMTQwLFxuICAgICAgODgsXG4gICAgICAxODBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUUQ5QjM5OVlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwMjA1OTIxMTE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTY2NjM2MTQxMTk1NDk4OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDZ1enN3RkVPbS90TFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKRDRRQjJQQkg5R0ZmWHhoY244TVFpMVhLSHZ4bEZpK3N4VmliZUpISFdrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm9uTEJ1aDduVEhiV2kzSC9TKzNvZThDUmR3VndQbHlKdHpsaGRYTDRiRWlRTHhRWjFJVTc3SGl4b3F5NzNPaXN6d3NKYXRqN29Qd2xjTFZXMktGcmpRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjMvWHc0d2JoK0Z6R2JIV0w2d0NYY0lhM2NtL1lVSlplMXUxYWZsZDh3L2tzZHVLRjdXRStBNVlyT2s0VWg1N2FXNFZ5ZHByZ3pWakpYZml3cExaaUN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwMjA1OTIxMTE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNTI0NzgwXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
