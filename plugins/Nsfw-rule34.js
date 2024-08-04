import Natsukiteam from "@NatsukiTeam/Scraper"

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny*';
if if (!db.data.chats[m.chat].modohorny && m.isGroup) return conn.reply(m.chat, `El grupo no admite contenido *modohorny.*\n\n> Para activarlo un Administrador debe usar el comando ${usedPrefix}on modohorny*`, m, canalofc)
if (!text) return m.reply('Ingresa el nombre de la imágen que estas buscando.')
try {
let { dl_url } = await Natsukiteam.rule34(text)
await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', `*» Resultado* : ${text}`, m, null, canalofc)
} catch {
await m.react('✖️')
}}
handler.help = ['rule34 *<búsqueda>*']
handler.tags = ['nsfw']
handler.command = ['rule34', 'r34']
//handler.register = true 
//handler.limit = 20
handler.group = true 
export default handler