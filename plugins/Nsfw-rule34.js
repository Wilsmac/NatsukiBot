import teamnatsuki from "@teamnastuki/scraper"

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!global.db.data.chats[m.chat].modohorny) return conn.reply(m.chat, `El grupo no admite contenido *Nsfw.*\n\n> Para activarlo un *Administrador* debe usar el comando /enable modohorny`, m, canalofc)
if (!text) return m.reply('🚩 Ingresa el nombre de la imágen que estas buscando.')
await m.react('🕓')
try {
let { dl_url } = await teamnatsuki.rule34(text)
await conn.sendFile(m.chat, dl_url, 'thumbnail.jpg', `*» Resultado* : ${text}`, m, null, canalofc)
await m.react('✅')
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





/*let handler = async (m, { conn, participants, groupMetadata }) => {

    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.png'

    let text =`_Hola, sean todos bienvenidos a:_\n *${groupMetadata.subject}*

${groupMetadata.desc?.toString() || 'desconocido'}
`.trim()
const mentionedJid = groupMetadata.participants.map(v => v.id);
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, true, { mentions: mentionedJid})
}

handler.command = ['welcome','bienvenidos','bienbenidos'] 
handler.group = true
handler.admin = true

export default handler*/