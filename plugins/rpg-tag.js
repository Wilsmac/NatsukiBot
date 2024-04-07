var handler = async (m, { conn, text }) => {

let user = `> ¡Hola! @${m.sender.replace(/@.+/, '')}`
let mentionedJid = [m.sender]
conn.reply(m.chat, user, m, { contextInfo: { mentionedJid }})

}
handler.help = ['tagme']
handler.tags = ['rg']
handler.command = /^tagme$/i
handler.group = false

export default handler