import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '𝙻𝙾 𝙰𝙷 𝚄𝚂𝙰𝙳𝙾 𝙳𝙴 𝙼𝙰𝙽𝙴𝚁𝙰 𝙸𝙽𝙲𝙾𝚁𝙴𝙲𝚃𝙰\n\n𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙲𝙰𝙼𝙱𝙸𝙰𝚁 𝙴𝙻 𝙿𝙰𝚀𝚄𝙴𝚃𝙴 𝚈 𝙴𝙻 𝙰𝚄𝚃𝙷𝙾𝚁'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '𝙻𝙾 𝙰𝙷 𝚄𝚂𝙰𝙳𝙾 𝙳𝙴 𝙼𝙰𝙽𝙴𝚁𝙰 𝙸𝙽𝙲𝙾𝚁𝙴𝙲𝚃𝙰\n\n𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙲𝙰𝙼𝙱𝙸𝙰𝚁 𝙴𝙻 𝙿𝙰𝚀𝚄𝙴𝚃𝙴 𝚈 𝙴𝙻 𝙰𝚄𝚃𝙷𝙾𝚁'
let img = await m.quoted.download()
if (!img) throw '𝙻𝙾 𝙰𝙷 𝚄𝚂𝙰𝙳𝙾 𝙳𝙴 𝙼𝙰𝙽𝙴𝚁𝙰 𝙸𝙽𝙲𝙾𝚁𝙴𝙲𝚃𝙰\n\n𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙰 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙲𝙰𝙼𝙱𝙸𝙰𝚁 𝙴𝙻 𝙿𝙰𝚀𝚄𝙴𝚃𝙴 𝚈 𝙴𝙻 𝙰𝚄𝚃𝙷𝙾𝚁'
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
else throw '𝙻𝙾 𝙰𝙷 𝚄𝚂𝙰𝙳𝙾 𝙳𝙴 𝙼𝙰𝙽𝙴𝚁𝙰 𝙸𝙽𝙲𝙾𝚁𝙴𝙲𝚃𝙰\n\n𝐄𝐑𝐑𝐎𝐑 𝐀𝐋𝐆𝐎 𝐒𝐀𝐋𝐈𝐎 𝐌𝐀𝐋, 𝐈𝐍𝐓𝐄𝐍𝐓𝐄 𝐍𝐔𝐄𝐕𝐀𝐌𝐄𝐍𝐓𝐄.'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^robar|wm$/i
//handler.rowner = true
export default handler