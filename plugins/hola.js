const handler = async (m, {conn, usedPrefix}) => {
  const datas = global

  const doc = ['pdf', 'zip'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const texto = `¡HOLA! 👋🏻`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/Wilsmac/FantasyBot-MD-v1`},
    'mimetype': `application/${document}`,
    'fileName': `¡Hola!`,
    'fileLength': 999999,
    'pageCount': 50,
    'contextInfo': {
      'forwardingScore': 40,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/Wilsmac/FantasyBot-MD-v1',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': fantasy,
        'body': wm,
        'thumbnail': fs.readFileSync("./media/menus/Menu1.jpg"),
        'sourceUrl': 'https://whatsapp.com/channel/0029VaCUlPX0LKZAlP10pC43'}},
    'caption': texto,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['hoka'];
handler.tags = ['info'];
handler.command = /^(hoka)$/i;
export default handler;