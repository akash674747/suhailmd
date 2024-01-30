const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "923184474176"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="samsamsun789@gmail.com"
global.location="Lahore,Punjab,Pakistan"
global.mongodb= process.env.MONGODB_URI || ""
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan = "https://suhail-md-g1y0.onrender.com/";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl = process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website =process.env.GURL|| "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE|| "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 




global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,923184474176";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917872324809";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7",
  caption:process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),

 
  author: process.env.PACK_AUTHER || "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  sessionName:process.env.SESSION_ID|| "SUHAIL_07_25_01_30_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiTUF1emhZakVaMmdvVTBHN1Q4eUpBdmpTeXFJcWVuMlBybzZjTlR4QjQwQT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjhMVENJR1pXR01xV0RxNGMzMy8zNTJ5UXJxVzM4Y1d6dmp2aGpHa3RGUnM9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQ0RIN2k5alYzYXNlcEVoaW43eDhxS3c1M3NpVG01YUtaV0QzMk9saDVGcz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm5SSHltWFFxUVExQm42bTBhU0FjL2dtMmFkbFlLZlRqQzBXMG9jNDZiVFU9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwidU9qdkZwNmV6a01ic3RXN2FXWHh1N1RWVUYzbWs0QTJuZjNUL3hrbWcyST1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIm9XMFZ4WUJPMVVYSjlJVjFkOGFLZWpCakNFSldzaGFGd1Jza0puMit5M2M9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCI0RnY3Yy9JSCtreVFxLytLU3RLZW5MYmtTWXV1OVhnckx5VytzeUh2TTNBPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiQTh2RncvY0pWbnZwb0NiSXN4azNQekcvNU53Y2tqOUZmSFlvUFIzb1dRND1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJDZGJpUkxhREQrbW16NUxOU3ZldDR0akEwV2tWclVGU1dyTENuNFpRY3REZFB4ZUJQOW5qTjZwMitBcllwUEt6RmFVdE1vOTEvM3ZkN0Ntdkw1ZWRDUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MTc0LFwiYWR2U2VjcmV0S2V5XCI6XCJ4eDk4bWJFQW0rWkFyajVETUxKT0E5a05jOFhjbXdUVi9uaEFxOURCYXhFPVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTE3ODcyMzI0ODA5QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjdGNzlDQUExNEU4MjlFQjQ0OTU0OThCRUVFRTkxNzc2XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDY1OTk1MDZ9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTE3ODcyMzI0ODA5QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkE3OEFCQkI0NURBRjVCMTA5MDU4NzE1RUQ5NDIyMkRBXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDY1OTk1MDd9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTE3ODcyMzI0ODA5QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjM1MEFEOTRDMDdGNjY3Q0FENEZDRUE3NkQ2Nzg4NEY1XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MDY1OTk1MTB9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJjZTdxRnhpX1F2bTZrVDB3RGVuSUh3XCIsXCJwaG9uZUlkXCI6XCIxYzY4YjkxNC0wM2Y4LTQ3MTktOWEwYy0xNGIwNDA5ZWJjZTFcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIk8rZXhrMzVsaHR5TGh5c3JlMHBYWkd2bW5Ybz1cIn0sXCJyZWdpc3RlcmVkXCI6ZmFsc2UsXCJiYWNrdXBUb2tlblwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwieS9pS1ROODNmL2VLRUVNbGNpQllBTWw5TThVPVwifSxcInJlZ2lzdHJhdGlvblwiOnt9LFwiYWNjb3VudFwiOntcImRldGFpbHNcIjpcIkNOeWU3ZU1IRU16STRxMEdHQUVnQUNnQVwiLFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOlwiZW9uSnFlenMxcXVwa0VMcXNRZStvSldlSzJoR0JKampKaXJ0RCsvTjVIMD1cIixcImFjY291bnRTaWduYXR1cmVcIjpcIlVmWHF2UjlsaW91d2lmNTRtWFJqS3AxTUw5NnpudW1OTW1hbDJoQ3NRWllpWWhvWHlaWnJET0FqQVlJeGZWbWxtM0tCaklvTndRT2szUDM5TU9hM0NBPT1cIixcImRldmljZVNpZ25hdHVyZVwiOlwicmFjNG5jckdIMEZnUTd2bnJ0YnorVkVHUnVJV3VBRWQxbmNVVXpJSnFpYktnOG50Y28xRXBzSzUyUElEUnhJVHorUXpWMlExdWYyTUFNT29kOHFMQlE9PVwifSxcIm1lXCI6e1wiaWRcIjpcIjkxNzg3MjMyNDgwOToxQHMud2hhdHNhcHAubmV0XCIsXCJsaWRcIjpcIjExMTgzNzA1NjExNDY5NjoxQGxpZFwiLFwibmFtZVwiOlwiLi5cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5MTc4NzIzMjQ4MDk6MUBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJYcUp5YW5zN05hcnFaQkM2ckVIdnFDVm5pdG9SZ1NZNHlZcTdRL3Z6ZVI5XCJ9fV0sXCJwbGF0Zm9ybVwiOlwiYW5kcm9pZFwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcwNjU5OTUwMyxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFHdm5cIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHdm4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ5K09oM3NheG8wT3R3L2RYZUtIZ2hMQk9uNU5ZNlZuTGtKWWN6MjBTMklJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwODg0NTYwMjgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcwNjU5OTUwNTM3N1wifSIKfQ==",  // PUT SESSION ID HERE 
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
 

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "false",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
