let MessageType = (await import(global.baileys)).default
let pajak = 0
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}𝙳𝙴𝙱𝙴 𝙰𝙶𝚁𝙴𝙶𝙰𝚁 𝙴𝙻 𝚃𝙰𝙶 𝙳𝙴 𝙰𝙻𝙶𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙻𝙰 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝙳𝙴 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂.`
if (isNaN(txt)) throw `${mg}𝚂𝙸𝙽 𝚂𝙸𝙼𝙱𝙾𝙻𝙾𝚂, 𝚂𝙾𝙻𝙾 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁.`
let dmt = parseInt(txt)
let limit = dmt
let pjk = Math.ceil(dmt * pajak)
limit += pjk
if (limit < 1) throw `${mg}𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙼𝙸𝙽𝙸𝙼𝙾 𝙿𝙰𝚁𝙰 𝙰𝙽̃𝙰𝙳𝙸𝚁 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 𝙴𝚂 1`
let users = global.db.data.users
users[who].limit += dmt
m.reply(`𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄𝐒\n┃\n┃ *PARA:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ 𝐒𝐄 𝐋𝐄 𝐀𝐍̃𝐀𝐃𝐈𝐎\n┃ღ *${dmt} Diamante(s)*\n----------------`)}
handler.help = ['adddi <@user>']
handler.tags = ['xp']
handler.command = ['añadirdiamantes', 'dardiamantes', 'dardiamante'] 
handler.group = true
handler.rowner = true
export default handler
