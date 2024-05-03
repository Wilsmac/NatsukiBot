import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { mentionedJid: [m.sender], isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelWL.id, newsletterName: channelWL.name, serverMessageId: -1 }, forwardingScore: 200, externalAdReply: { title: packname, body: author, thumbnailUrl: fantasyMenu.getRandom(), sourceUrl: canalofc, mediaType: 1, renderLargerThumbnail: false }

//contextInfo: { externalAdReply: { title: '𝑭𝒂𝒏𝒕𝒂𝒔𝒚𝑩𝒐𝒕-𝑴𝑫', body: '𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄', sourceUrl: `https://github.com/Wilsmac/FantasyBot-MD-v1`, thumbnail: imagen2}}})}
    
return !0 }
export default handler
