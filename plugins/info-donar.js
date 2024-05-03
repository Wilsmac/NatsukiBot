let media = './media/menus/Menu1.jpg'
let handler = async (m, { conn, command }) => {
let user = db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `💖 𝙃𝙤𝙡𝙖!! 𝘼𝙜𝙧𝙖𝙙𝙚𝙯𝙘𝙤 𝙨𝙞 𝙢𝙚 𝘼𝙥𝙤𝙮𝙖𝙨 𝘿𝙤𝙣𝙖𝙣𝙙𝙤. 🎁 𝙈𝙚 𝙖𝙜𝙧𝙖𝙙𝙖 𝙚𝙡 𝙏𝙧𝙖𝙗𝙖𝙟𝙤 𝙦𝙪𝙚 𝙝𝙚 𝙇𝙤𝙜𝙧𝙖𝙙𝙤 𝙮 𝙡𝙤 𝘾𝙤𝙢𝙥𝙖𝙧𝙩𝙤 𝙘𝙤𝙣 𝙐𝙨𝙩𝙚𝙙𝙚𝙨. 𝙂𝙧𝙖𝙘𝙞𝙖𝙨!
-----------------
𝙋𝙖𝙮𝙋𝙖𝙡 
*https://paypal.me/wilmermacu1*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
await conn.sendButton(m.chat, str, `𝙰𝚂𝙸𝚂𝚃𝙴𝙽𝙲𝙸𝙰\n${asistencia}\n\n` + wm, media, [
['𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂 🔰', '.grupos'],
['𝙲𝚁𝙴𝙰𝙳𝙾𝚁 💗', '#owner'],
['𝚅𝙾𝙻𝚅𝙴𝚁 𝙰𝙻 𝙼𝙴𝙽𝚄 ☘️', '/menu']], null, [
['𝙳𝙾𝙽𝙰𝚁 🌺', `https://paypal.me/wilmermacu1`]], fkontak)}
/*conn.sendMessage(m.chat, { 
text: str, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": imagen1, 
"title": `𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼`, 
body: ig, 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": paypal, 
"sourceUrl": paypal, 
}}}, { quoted: fkontak })}*/
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 80
export default handler










/*let media = './media/menus/Menu4paypal.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let user = db.data.users[m.sender]
let str = `💖 𝙃𝙤𝙡𝙖!! 𝘼𝙜𝙧𝙖𝙙𝙚𝙯𝙘𝙤 𝙨𝙞 𝙢𝙚 𝘼𝙥𝙤𝙮𝙖𝙨 𝘿𝙤𝙣𝙖𝙣𝙙𝙤. 🎁 𝙈𝙚 𝙖𝙜𝙧𝙖𝙙𝙖 𝙚𝙡 𝙏𝙧𝙖𝙗𝙖𝙟𝙤 𝙦𝙪𝙚 𝙝𝙚 𝙇𝙤𝙜𝙧𝙖𝙙𝙤 𝙮 𝙡𝙤 𝘾𝙤𝙢𝙥𝙖𝙧𝙩𝙤 𝙘𝙤𝙣 𝙐𝙨𝙩𝙚𝙙𝙚𝙨. 𝙂𝙧𝙖𝙘𝙞𝙖𝙨!
💖 𝙃𝙚𝙡𝙡𝙤!! 𝙄 𝙖𝙥𝙥𝙧𝙚𝙘𝙞𝙖𝙩𝙚 𝙞𝙛 𝙮𝙤𝙪 𝙨𝙪𝙥𝙥𝙤𝙧𝙩 𝙢𝙚 𝙗𝙮 𝙙𝙤𝙣𝙖𝙩𝙞𝙣𝙜. 🎁 𝙄 𝙡𝙞𝙠𝙚 𝙩𝙝𝙚 𝙬𝙤𝙧𝙠 𝙄 𝙝𝙖𝙫𝙚 𝙖𝙘𝙝𝙞𝙚𝙫𝙚𝙙 𝙖𝙣𝙙 𝙨𝙝𝙖𝙧𝙚 𝙬𝙞𝙩𝙝 𝙮𝙤𝙪. 𝙏𝙝𝙖𝙣𝙠 𝙮𝙤𝙪!
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
𝙋𝙖𝙮𝙋𝙖𝙡 
*https://paypal.me/wilmermacu1*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈`
await conn.sendMessage(m.chat, { 
text: str, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": imagen1, 
"title": `${asistencia}`, 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": paypal, 
"sourceUrl": paypal, 
}
}
}, { quoted: fkontak })}
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating$/i
handler.exp = 80
export default handler
*/