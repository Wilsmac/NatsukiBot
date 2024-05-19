let media = './media/menus/Menuvid3.mp4'
let handler = async (m, { conn, command }) => {
let uwu = `𝙴𝚂𝚃𝙾𝚂 𝚂𝙾𝙽 𝙻𝙾𝚂 𝙶𝚁𝚄𝙿𝙾𝚂 𝙾𝙵𝙸𝙲𝙸𝙰𝙻𝙴𝚂 𝙳𝙴𝙻 𝙱𝙾𝚃\n\n${gt}`
let fkontak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': uwu, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${uwu},;;;\nFN:${uwu},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}}
let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": '𝐅𝐚𝐧𝐭𝐚𝐬𝐲𝐁𝐨𝐭-𝐌𝐃', 'jpegThumbnail': null}}}
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `*ESTOS SON LOS GRUPOS OFICIALES*
 𝐌𝐢 𝐂𝐚𝐧𝐚𝐥 𝐨𝐟𝐢𝐜𝐢𝐚𝐥
 *${canalofc}*\n
⏤͟͟͞͞★꙲⃝͟🌹 ─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝟓
*${nnnttt}*\n
⏤͟͟͞͞★꙲⃝͟🌹 ─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
 𝑭𝒂𝒏𝒕𝒂𝒔𝒚𝑩𝒐𝒕-𝑴𝑫 
*${nnnttt1}*\n
⏤͟͟͞͞★꙲⃝͟🌹 ─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
 𝑭𝒂𝒏𝒕𝒂𝒔𝒚𝑩𝒐𝒕-𝑴𝑫 
⏤͟͟͞͞★꙲⃝͟🌹 *${nnnttt2}*\n
─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
*hola :D*`
await conn.sendFile(m.chat, media, 'fantasy.mp4', str, fkontak)}

handler.command = /^linkgc|grupos|gruposfantasy|groupofc$/i
handler.exp = 33

export default handler
