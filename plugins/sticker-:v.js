import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙀𝙎𝙏𝘼𝙉 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊𝙎 𝙐𝙎𝙀 *#on stickers* 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍`
if (!db.data.chats[m.chat].stickers && m.isGroup) throw 0
 
let nombre = 'paquete de stickers de'
let nombre2 = 'undefined'
 
const s = [
'https://telegra.ph/file/f306e80961abf1e4e7893.jpg',
'https://telegra.ph/file/f306e80961abf1e4e7893.jpg',
'https://telegra.ph/file/f306e80961abf1e4e7893.jpg'
];  
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
await delay(5 * 5000)
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: canalofc, thumbnail: fantasyImg.getRandom()}}}, { quoted: m })
}
handler.customPrefix = /:v|:'v/i 
handler.command = new RegExp
handler.exp = 10
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))