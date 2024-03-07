const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
let enviando;
const handler = async (m, {conn, text, isMods, isOwner, isPrems}) => {
 if (enviando) return;
     enviando = true 
  try {
    const link = text //(m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text;
    if (!link || !link.match(linkRegex)) throw '${mg}🙌 𝘿𝙀𝘽𝙀 𝙄𝙉𝙂𝙍𝙀𝙎𝘼𝙍 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 *Ingrese el enlace de un grupo.*\n\n*𝙀𝙅𝙀𝙈𝙋𝙇𝙊 *\n*#unete ${nn}*\n\n*#join ${nnn}*';
    const [_, code] = link.match(linkRegex) || [];
    if ( isPrems || isMods || isOwner || m.fromMe) {
      const res = await conn.groupAcceptInvite(code);
      await conn.sendMessage(m.chat, {text: '𝙎𝙀 𝙃𝘼 𝙐𝙉𝙄𝘿𝙊 𝘼𝙇 𝙂𝙍𝙐𝙋𝙊!! ✅*


‼️ 𝙎𝙄 𝘿𝙀 𝙇𝙊 𝘾𝙊𝙉𝙏𝙍𝘼𝙍𝙄𝙊 𝙉𝙊 𝙎𝙀 𝘼 𝙐𝙉𝙄𝘿𝙊 𝘼 𝙏𝙐 𝙂𝙍𝙐𝙋𝙊, 𝙑𝙀𝙍𝙄𝙁𝙄𝘾𝘼 𝙌𝙐𝙀 𝙉𝙊 𝙎𝙀 𝙃𝘼𝙇𝙇𝘼 𝙀𝙇𝙄𝙈𝙄𝙉𝘼𝘿𝙊 𝙊 𝙎𝘼𝙇𝙄𝘿𝙊 𝙍𝙀𝘾𝙄𝙀𝙉𝙏𝙀𝙈𝙀𝙉𝙏𝙀 𝙀𝙇 𝘽𝙊𝙏'}, {quoted: m})
      enviando = false 
    } else {
      conn.sendMessage(m.chat, {text: '${ag}*✅ Su enlace se envió a Mí Propietario(a).*\n*Your link was sent to My Owner.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n⚠️ *Su Grupo será Evaluado y Quedará a decisión de Mí Propietario(a) si ${gt} se une o no al Grupo.*\n*Your Group will be Evaluated and it will be up to My Owner if ${gt} joins the Group or not.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n❕ *Es posible que su Solicitud sea Rechazada por las siguientes Causas:*\n*Your Application may be Rejected for the following Reasons:*\n*1️⃣ El Bot está Saturado.*\n*The Bot is Saturated.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2️⃣ *El Bot fue eliminado del Grupo.*\n*The Bot was removed from the Group.*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n3️⃣ *El Grupo no cumple con las Normativas de ${gt}*\n*The Group does not comply with the Regulations of ${gt}*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4️⃣ *El enlace del grupo se restableció.* *La solicitud puede tardar Horas en ser Respondida. Por favor Tener Paciencia. Gracias*'}, {quoted: m});
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