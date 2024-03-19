let media = './media/menus/Menuvid3.mp4'
let handler = async (m, { conn, command }) => {
let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": '𝐅𝐚𝐧𝐭𝐚𝐬𝐲𝐁𝐨𝐭-𝐌𝐃', 'jpegThumbnail': null}}}
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `*BIENVENID@S ALOS GRUPOS OFICIAL DE FantasyBot-MD estos son los únicos grupos oficiales de fantasy, espero que te la pases muy bien.*

 𝙂𝙍𝙐𝙋𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇 ${gt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 *Informate de las Novedades!!!*
 *${canalofc}*\n
⏤͟͟͞͞★꙲⃝͟🌻 ─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝟓
*${nnnttt}*\n
⏤͟͟͞͞★꙲⃝͟🌻 ─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
 𝑭𝒂𝒏𝒕𝒂𝒔𝒚𝑩𝒐𝒕-𝑴𝑫 
*${nnnttt1}*\n
⏤͟͟͞͞★꙲⃝͟🌻 ─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
 𝑭𝒂𝒏𝒕𝒂𝒔𝒚𝑩𝒐𝒕-𝑴𝑫 
⏤͟͟͞͞★꙲⃝͟🌻 *${nnnttt2}*\n
─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
*hola :D*`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fakemek)}

handler.command = /^linkgc|grupos|gruposfantasy|groupofc$/i
handler.exp = 33

export default handler
