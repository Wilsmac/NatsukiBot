import ws from 'ws';
async function handler(m, { conn: _envio, usedPrefix }) {
const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
function convertirMsADiasHorasMinutosSegundos(ms) {
var segundos = Math.floor(ms / 1000);
var minutos = Math.floor(segundos / 60);
var horas = Math.floor(minutos / 60);
var días = Math.floor(horas / 24);
segundos %= 60;
minutos %= 60;
horas %= 24;
var resultado = "";
if (días !== 0) {
resultado += días + " días, ";
}
if (horas !== 0) {
resultado += horas + " horas, ";
}
if (minutos !== 0) {
resultado += minutos + " minutos, ";
}
if (segundos !== 0) {
resultado += segundos + " segundos";
}
return resultado;
}
const message = users.map((v, index) => `(${index + 1})\n🌹 wa.me/${v.user.jid.replace(/[^0-9]/g, '')}?text=${usedPrefix}estado\n* 𝙽𝙾𝙼𝙱𝚁𝙴 :* *${v.user.name || '-'}*\n*𝚃𝙸𝙴𝙼𝙿𝙾 𝙰𝙲𝚃𝙸𝚅𝙾 :* ${ v.uptime ? convertirMsADiasHorasMinutosSegundos(Date.now() - v.uptime) : "Desconocido"}`).join('\n\n••••••••••••••••••••••••••••••••••••\n\n');
  const replyMessage = message.length === 0 ? '*NO HAY SUB BOTS DISPONIBLE. VERIFIQUE MÁS TARDE.*' : message;
const totalUsers = users.length;
const responseMessage = `🌺 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝚂𝚄𝙱 𝙱𝙾𝚃𝚂 𝙰𝙲𝚃𝙸𝚅𝙾𝚂\n\n𝙿𝚄𝙴𝙳𝙴𝚂 𝙿𝙴𝙳𝙸𝚁𝙻𝙴 𝙰𝙻 𝙱𝙾𝚃 𝚀𝚄𝙴 𝚂𝙴 𝚄𝙽𝙰 𝙰 𝚃𝚄 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙴 𝚁𝙴𝚂𝙿𝙴𝚃𝚄𝙾𝚂𝙾\n\n 𝚂𝙸 𝙴𝙻 𝚃𝙴𝚇𝚃𝙾 𝙴𝚂𝚃𝙰 𝙴𝙽 𝙱𝙻𝙰𝙽𝙲𝙾 𝙴𝚂 𝙿𝙾𝚁𝚀𝚄𝙴 𝙽𝙾 𝙷𝙰𝚈 𝚂𝚄𝙱 𝙱𝙾𝚃𝚂 𝙰𝙲𝚃𝙸𝚅𝙾𝚂\n\n𝙲𝙰𝙳𝙰 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝚂𝚄𝙱 𝙱𝙾𝚃 𝙼𝙰𝙽𝙴𝙹𝙰 𝙻𝙰 𝙵𝚄𝙽𝙲𝙸𝙾𝙽 𝙲𝙾𝙼𝙾 𝚀𝚄𝙸𝙴𝚁𝙰, 𝙴𝙻 𝙽𝚄́𝙼𝙴𝚁𝙾 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 𝙽𝙾 𝚂𝙴 𝙷𝙰𝙲𝙴 𝚁𝙴𝚂𝙿𝙾𝙽𝚂𝙰𝙱𝙻𝙴\n\n𝚂𝚄𝙱 𝙱𝙾𝚃𝚂 𝙰𝙲𝚃𝙸𝚅𝙾𝚂 : ${totalUsers || '0'}\n\n${replyMessage.trim()}`.trim();
await _envio.sendMessage(m.chat, {text: responseMessage, mentions: _envio.parseMention(responseMessage)}, {quoted: m})}
handler.command = handler.help = ['listjadibot', 'bots', 'subsbots'];
handler.tags = ['jadibot'];
export default handler;
