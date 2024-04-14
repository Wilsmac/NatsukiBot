import sock from '@whiskeysockets/baileys'
let handler = async (m, { text, conn, usedPrefix, command }) => {
let why = `*responda el mensaje que quiera anclar*\n${usedPrefix + command} @${m.sender.split("@")[0]}`
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
if (!who) conn.reply(m.chat, why, m, { mentions: [m.sender] })
let res = [];
console.log(command)

switch (command) {
case "anclar":
case "anclar":
case "desanclar":                
if (who) await sock.chatModify({
  pin: true 
},
'123456@s.whatsapp.net')(who, "anclar").then(() => {
res.push(who);
})
else conn.reply(m.chat, why, m, { mentions: [m.sender] })
break

case "desanclar":
case "desanclar":
case "desanclar":
if (who) await sock.chatModify({
  pin: `false`
},
'123456@s.whatsapp.net')(who, "desanclar").then(() => {
res.push(who);
})
else conn.reply(m.chat, why, m, { mentions: [m.sender] })
break
}
if (res[0]) conn.reply(m.chat, `*Éxito`, m, { mentions: res })
}
handler.help = ["anclar", "desanclar"]
handler.tags = ["owner"]
handler.command = /^(anclar|desanclar)$/i
handler.owner = true

export default handler