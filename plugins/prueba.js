/*let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `𝙻𝙾 𝙰𝙷 𝚄𝚂𝙰𝙳𝙾 𝙳𝙴 𝙼𝙰𝙽𝙴𝚁𝙰 𝙸𝙽𝙲𝙾𝚁𝙴𝙲𝚃𝙰\n*\nHola.*`
if (text.length < 8) throw `*h`
if (text.length > 1000) throw `*Máximo 1000 caracteres*`
let teks = `╭━━[ 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 ]━━━
┃𝙴𝚜𝚝𝚊 𝚒𝚗𝚏𝚘𝚛𝚖𝚊𝚌𝚒𝚘𝚗 𝚎𝚜 𝚋𝚛𝚒𝚗𝚍𝚊𝚍𝚊 ┃ 𝚙𝚘𝚛 𝚎𝚕 𝚊𝚌𝚝𝚞𝚊𝚕 𝚘𝚠𝚗𝚠𝚎𝚛 𝚢 
┃ 𝚙𝚛𝚘𝚙𝚒𝚎𝚝𝚊𝚛𝚒𝚘 𝚍𝚎𝚕 𝚋𝚘𝚝.
┃ *𝙼𝙴𝙽𝚂𝙰𝙹𝙴*
┃ ✦ ${text}
╰━━━━━━━━━━━━━━━━━━`
conn.reply('@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
contextInfo: {
mentionedJid: [m.sender]
}})
  m.reply(`𝙴𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙰𝙷 𝚂𝙸𝙳𝙾 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴`)

}

handler.help = ['enviarsms', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(enviarsms)$/i 
export default handler*/