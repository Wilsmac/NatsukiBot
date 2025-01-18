const OWNER1 = "50250101139@s.whatsapp.net
const ACTIVE_CONVERSATIONS = {};

let handler = async (m, { conn, text, command }) => {
let activeConversation = Object.entries(ACTIVE_CONVERSATIONS).find(([id, convo]) => convo.active && convo.userId === m.sender && convo.chatId === m.chat);

if (activeConversation) {
let [reportId, conversation] = activeConversation;

await conn.sendMessage(OWNER1, {text: `📩 *Mensaje del usuario @${m.sender.split("@")[0]} (ID: ${reportId}):*\n${text}`, mentions: [m.sender]}, { quoted: m });
await delay(1000)
return; 
}

if (command === 'report' || command === 'reporte') {
if (!text && !m.quoted) return m.reply(`${mg}*𝙀𝙨𝙘𝙧𝙞𝙗𝙖 𝙚𝙡 𝙧𝙚𝙥𝙤𝙧𝙩𝙚*\n\n*𝙀𝙅𝙀𝙈𝙋𝙇𝙊:*\n*${usedPrefix + command} el comando ${usedPrefix}infobot no funka.*`);
if (text.length < 8) throw `*Mínimo 10 caracteres para hacer El Reporte.*`
if (text.length > 1000) throw `*Máximo 1000 caracteres para hacer El Reporte.*`

let reportId = Math.floor(Math.random() * 901);

ACTIVE_CONVERSATIONS[reportId] = {
userId: m.sender,
userName: m.pushName || 'Usuario desconocido',
active: true,
chatId: m.chat };

let reportText = text || (m.quoted && m.quoted.text);
let ownerMessage = `*╭━━[ 𝙍𝙀𝙋𝙊𝙍𝙏𝙀 ]━━━⬣*\n*┃*\n*┃* *𝙉𝙐𝙈𝙀𝙍𝙊*\n┃ ✦ Wa.me/${m.sender.split("@")[0]}\n*┃*\n*┃* *𝙈𝙀𝙉𝙎𝘼𝙅𝙀*\n*┃* ✦ ${reportText}\n*┃*\n*╰━━━━━━━━━━━━━━━━━━⬣*\n\n> Responde al mensaje con: *"responder ${reportId} [mensaje]"* para interactuar con el usuarios.\n> Usa *.fin ${reportId}* para finalizar la conversación.`;

await conn.sendMessage(OWNER1, { text: ownerMessage, mentions: [m.sender] }, { quoted: m });
await delay(1000)
await conn.reply(m.chat, `╰⊱ *𝙀́𝙓𝙄𝙏𝙊*\n\n*El reporte ha sido enviado a mí Creadora. Tendrá una respuesta pronto. De ser Falso será Ignorado el reporte.*`);
return;
}};

handler.before = async (m, { conn }) => {
let activeConversation = Object.entries(ACTIVE_CONVERSATIONS).find(([id, convo]) => convo.active && convo.userId === m.sender && convo.chatId === m.chat );

if (activeConversation && m.text) {
let [reportId] = activeConversation;

await conn.sendMessage(OWNER1, { text: `*📩 Respuesta del usuario @${m.sender.split("@")[0]} (ID: ${reportId}):*\n${m.text}`, mentions: [m.sender] }, { quoted: m });
await delay(1000)
return false; 
}

let matchResponder = m.text.match(/^responder (\S+) (.+)/i);
if (matchResponder) {
let [_, reportId, ownerMessage] = matchResponder;

if (!ACTIVE_CONVERSATIONS[reportId] || !ACTIVE_CONVERSATIONS[reportId].active) return await conn.reply(m.chat, `No se encontró ninguna conversación activa con ese ID.`, m);

let { userId } = ACTIVE_CONVERSATIONS[reportId];
await conn.reply(userId, `*Respuesta de mi propietario:*\n${ownerMessage}`);
return;
}

if (m.quoted && m.quoted.text) {
let quotedTextMatch = m.quoted.text.match(/ID: (\d+)/); 
if (quotedTextMatch) {
let reportId = quotedTextMatch[1];
if (ACTIVE_CONVERSATIONS[reportId] && ACTIVE_CONVERSATIONS[reportId].active) {
let { userId } = ACTIVE_CONVERSATIONS[reportId];
await conn.reply(userId, `*Respuesta de Mi propietario:*\n${m.text}`);
return;
}}}

let matchFin = m.text.match(/^\.fin (\S+)/i);
if (matchFin) {
let [_, reportId] = matchFin;

if (!ACTIVE_CONVERSATIONS[reportId]) return await conn.reply(m.chat, `No se encontró ninguna conversación activa con ese ID.`, m);

let { userId } = ACTIVE_CONVERSATIONS[reportId];
ACTIVE_CONVERSATIONS[reportId].active = false;
await conn.reply(userId, `🔒 *La conversación ha sido cerrada por el propietario.*`);
await conn.reply(m.chat, `✔️ Conversación ${reportId} cerrada.`);
return;
}};

handler.help = ['reporte', 'request'].map(v => v + ' <teks>')
handler.tags = ['info']
handler.exp = 25 
handler.command = /^(report|request|reporte|bugs|bug|report-owner|reportes|reportar)$/i 
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))




















/*let handler = async (m, { conn, text, usedPrefix, command }) => {
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
export default handler*/
