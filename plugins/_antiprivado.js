const comandos = /piedra|papel|tijera|estado|verificar|code|jadibot --code|--code|creadora|bottemporal|grupos|instalarbot|términos|bots|deletebot|eliminarsesion|serbot|verify|register|registrar|reg|reg1|nombre|name|nombre2|name2|edad|age|edad2|age2|genero|género|gender|identidad|pasatiempo|hobby|identify|finalizar|pas2|pas3|pas4|pas5|registroc|deletesesion|registror|jadibot/i
export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner, usedPrefix, command }) {
if (m.isBaileys && m.fromMe) return !0
if (m.isGroup) return !1
if (!m.message) return !0
const regex = new RegExp(`^${comandos.source}$`, 'i')
if (regex.test(m.text.toLowerCase().trim())) return !0

let chat, user, bot, mensaje
chat = global.db.data.chats[m.chat]
user = global.db.data.users[m.sender]
bot = global.db.data.settings[this.user.jid] || {}

if (bot.antiPrivate && !isOwner && !isROwner) {
if (user.counterPrivate === 0) {
mensaje = `*@${m.sender.split`@`[0]} 𝐄𝐒𝐓𝐀 𝐏𝐑𝐎𝐇𝐈𝐁𝐈𝐃𝐎 𝐄𝐒𝐂𝐑𝐈𝐁𝐈𝐑 𝐀𝐋 𝐏𝐑𝐈𝐁𝐀𝐃𝐎 𝐃𝐄 𝐄𝐒𝐓𝐄 𝐁𝐎𝐓.*\n\ \`𝐏𝐑𝐈𝐌𝐄𝐑𝐀 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀\` `
  
} else if (user.counterPrivate === 1) {
let grupos = [ nn, nnn, nnnt, nnntt, nnnttt ].getRandom()
mensaje = `*@${m.sender.split`@`[0]} 𝐒𝐄 𝐀 𝐌𝐄𝐍𝐂𝐈𝐎𝐍𝐀𝐃𝐎 𝐐𝐔𝐄 𝐍𝐎 𝐒𝐄 𝐏𝐔𝐄𝐃𝐄 𝐄𝐒𝐂𝐑𝐈𝐁𝐈𝐑 𝐀𝐋 𝐏𝐑𝐈𝐕𝐀𝐃𝐎. 𝐒𝐈 𝐄𝐒𝐂𝐑𝐈𝐁𝐄𝐒 𝐍𝐔𝐄𝐕𝐀𝐌𝐄𝐍𝐓𝐄 𝐀 𝐄𝐒𝐓𝐄 𝐁𝐎𝐓 𝐒𝐄𝐑𝐀𝐒 𝐁𝐋𝐎𝐐𝐔𝐄𝐀𝐃𝐎 \n\n \`𝐒𝐄𝐆𝐔𝐍𝐃𝐀 𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀\` `
  
} else if (user.counterPrivate === 2) {
mensaje = `*@${m.sender.split`@`[0]} 𝐏𝐀𝐑𝐀 𝐔𝐒𝐀𝐑 𝐄𝐋 𝐁𝐎𝐓 𝐔𝐍𝐄𝐓𝐄 𝐀 𝐄𝐒𝐓𝐄 𝐆𝐑𝐔𝐏𝐎: ${grupos}\n\n \`𝐄𝐍 𝐄𝐒𝐓𝐄 𝐌𝐎𝐌𝐄𝐍𝐓𝐎 𝐒𝐄𝐑𝐀𝐒 𝐁𝐋𝐎𝐐𝐔𝐄𝐀𝐃𝐎\` `
  
user.counterPrivate = -1
await this.updateBlockStatus(m.sender, 'block')
}
user.counterPrivate++
}
return !1
}

