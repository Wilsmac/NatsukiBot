//import MessageType from '@adiwajshing/baileys'
let MessageType = (await import(global.baileys)).default
let pajak = 0 
let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw `${ag}𝘿𝙀𝘽𝙀 𝘿𝙀 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙍 𝘼𝙇 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 *@tag*\n\n𝙔𝙊𝙐 𝙈𝙐𝙎𝙏 𝙏𝘼𝙂 𝙏𝙃𝙀 𝙐𝙎𝙀𝙍 *@tag*`
let txt = text.replace('@' + who.split`@`[0], '').trim()
if (!txt) throw `${ag}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙇𝘼 𝘾𝘼𝙉𝙏𝙄𝘿𝘼𝘿 𝘿𝙀 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎\n\n𝙀𝙉𝙏𝙀𝙍 𝙏𝙃𝙀 𝙉𝙐𝙈𝘽𝙀𝙍 𝙊𝙁 𝘿𝙄𝘼𝙈𝙊𝙉𝘿𝙎`
if (isNaN(txt)) throw `${mg}𝙎𝙄𝙉 𝙎𝙄𝙈𝘽𝙊𝙇𝙊𝙎, 𝙎𝙊𝙇𝙊 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙉𝙐𝙈𝙀𝙍𝙊𝙎\n\n𝙉𝙊 𝙎𝙔𝙈𝘽𝙊𝙇𝙎, 𝙅𝙐𝙎𝙏 𝙀𝙉𝙏𝙀𝙍 𝙉𝙐𝙈𝘽𝙀𝙍𝙎`
let fantasycoins = parseInt(txt)
let money = fantasycoins
let pjk = Math.ceil(fantasycoins * pajak)
money -= pjk
if (money < 1) throw `${mg}𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙈𝙄𝙉𝙄𝙈𝙊 𝘿𝙀 𝘾𝙊𝙄𝙉𝙎 𝙀𝙎 *1*`
let users = global.db.data.users
users[who].money -= fantasycoins
m.reply(`╭━━━[ 𝘾𝙊𝙄𝙉𝙎 ]━━━⬣\n┃\n┃ღ *PARA | FOR:*\n┃ღ *${text}*\n┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n┃ღ *SE ELIMINÓ | WAS REMOVED*\n┃ღ *${fantasycoins} Coin(s)*\n┃\n╰━━━━━━━━━━━━━━⬣`)}
handler.help = ['addgb <@user>']
handler.tags = ['gatacoins']
handler.command = ['eliminarfantasycoins', 'eliminarfantasy', 'eliminarcoins', 'quitarcoins', 'delcoins'] 
handler.group = true
handler.rowner = true
export default handler 
