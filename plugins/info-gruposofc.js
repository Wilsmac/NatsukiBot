let media = './media/menus/Menuvid3.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `*BIENVENID@S ALOS GRUPOS OFICIAL DE FantasyBot-MD estos son los únicos grupos oficiales de fantasy, espero que te la pases muy bien.*
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 *Versión de ${gt}*
➥ ${vs}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✅ 𝙂𝙍𝙐𝙋𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇 ${gt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 *Informate de las Novedades!!!*
 *${channel1}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 *${channel2}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 *${channel3}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 𝐒𝐨𝐩𝐨𝐫𝐭𝐞 𝐆𝐚𝐭𝐚𝐁𝐨𝐭
*${nna2}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝟏
*${nn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝟐
*${nnn}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝟑
*${nnnt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝟒
*${nnntt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 𝐆𝐫𝐮𝐩𝐨 𝐎𝐟𝐢𝐜𝐢𝐚𝐥 𝟓
*${nnnttt}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 *COLABORACIÓN CON* ${gt}
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 𝑭𝒂𝒏𝒕𝒂𝒔𝒚𝑩𝒐𝒕-𝑴𝑫 
*${nnnttt1}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 𝑭𝒂𝒏𝒕𝒂𝒔𝒚𝑩𝒐𝒕-𝑴𝑫 
*${nnnttt2}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 𝑭𝒂𝒏𝒕𝒂𝒔𝒚𝑩𝒐𝒕-𝑴𝑫 
*${nnnttt3}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 𝑭𝒂𝒏𝒕𝒂𝒔𝒚𝑩𝒐𝒕-𝑴𝑫 
*${nnnttt4}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 𝑭𝒂𝒏𝒕𝒂𝒔𝒚𝑩𝒐𝒕-𝑴𝑫 
*${nnnttt5}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
✓
*${nnnttt6}*\n
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
*Por favor, no ingresar con números de Bots, y mantener el respeto.*\n
*Please, do not enter with Bot numbers, and maintain respect.*`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}
/*conn.sendHydrated(m.chat, str, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n${asistencia}\n\n` + wm, media, 'https://github.com/GataNina-Li/GataBot-MD', '𝙂𝙖𝙩𝙖𝘽𝙤𝙩-𝙈𝘿', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentasgb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/

handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
handler.exp = 33

export default handler
