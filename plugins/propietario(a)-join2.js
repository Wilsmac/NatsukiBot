const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
let enviando;
const handler = async (m, {conn, text, isMods, isOwner, isPrems}) => {
 if (enviando) return;
     enviando = true 
  try {
    const link = text //(m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text;
    if (!link || !link.match(linkRegex)) throw '*[❗] Link erroneo o faltante, ingrese el enlace de un grupo de WhatsApp.*\n\n*—◉ Ejemplo:*\n*◉ #join https://chat.whatsapp.com/FwEUGxkvZD85fIIp0gKyFC*';
    const [_, code] = link.match(linkRegex) || [];
    if ( isPrems || isMods || isOwner || m.fromMe) {
      const res = await conn.groupAcceptInvite(code);
      await conn.sendMessage(m.chat, {text: '*[ ✔️ ] El Bot ha ingresado con éxito al grupo.*'}, {quoted: m})
      enviando = false 
    } else {
      conn.sendMessage(m.chat, {text: 'mensaje '}, {quoted: m});
      const data = global.owner.filter(([id]) => id)[0];
      const dataArray = Array.isArray(data) ? data : [data];
      for (const entry of dataArray) await conn.sendMessage(entry + '@s.whatsapp.net', {text: '*[❗] NUEVA SOLICITUD DE UN BOT PARA UN GRUPO [❗]*\n\n*—◉ Solicitante:* ' + '@' + m.sender.split('@')[0] + '\n*—◉ Link del grupo:* ' + link, mentions: [m.sender], contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [m.sender], "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": `${link}`, "sourceUrl": `${link}`}}}, {quoted: m});
      enviando = false 
    }
  } catch {
    enviando = false 
    throw '*[❗] Lo sentimos, algo salio mal por favor reportelo o vuelva a intentarlo.*';
  }
};
handler.help = ['join [chat.whatsapp.com]'];
handler.tags = ['premium'];
handler.command = /^join|nuevogrupo$/i;
handler.private = true;
export default handler;