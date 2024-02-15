import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '𝑭𝒂𝒏𝒕𝒂𝒔𝒚𝑩𝒐𝒕-𝑴𝑫', body: '𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄', sourceUrl: `https://github.com/GataNina-Li/GataBot-MD`, thumbnail: imagen2}}})}
    
return !0 }
export default handler
