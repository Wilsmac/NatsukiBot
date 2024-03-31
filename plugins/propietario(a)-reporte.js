let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `𝙻𝙾 𝙰𝙷 𝚄𝚂𝙰𝙳𝙾 𝙳𝙴 𝙼𝙰𝙽𝙴𝚁𝙰 𝙸𝙽𝙲𝙾𝚁𝙴𝙲𝚃𝙰\n\n*𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙴𝙻 𝚁𝙴𝙿𝙾𝚁𝚃𝙴*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} el comando ${usedPrefix}play no funka.*`
if (text.length < 8) throw `*Mínimo 10 caracteres para hacer El Reporte.*`
if (text.length > 1000) throw `*Máximo 1000 caracteres para hacer El Reporte.*`
let teks = `╭━━[ 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 ]━━━\n*┃*\n*┃* *𝙽𝚄𝙼𝙴𝚁𝙾*\n┃ ✦ Wa.me/${m.sender.split`@`[0]}\n*┃*\n*┃* *𝙼𝙴𝙽𝚂𝙰𝙹𝙴*\n*┃* ✦ ${text}\n*┃*\n╰━━━━━━━━━━━━━━━━━━`
//conn.reply('50101139@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
//contextInfo: {
//mentionedJid: [m.sender]
//}})
conn.reply('50250101139@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
  m.reply(`𝙴𝙻 𝚁𝙴𝙿𝙾𝚁𝚃𝚁 𝙰𝙷 𝚂𝙸𝙳𝙾 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙰 𝙼𝙸 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾(𝙰) 𝙰 𝙳𝙴 𝚂𝙴𝚁 𝙵𝙰𝙻𝚂𝙾 𝚂𝙾𝙻𝙾 𝚂𝙴𝚁𝙰 𝙸𝙶𝙽𝙾𝚁𝙰𝙳𝙾 𝙴𝙻 𝚁𝙴𝙿𝙾𝚁𝚃𝙴.`)

}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(report|request|reporte|report-owner|reportes|reportar)$/i 
export default handler
