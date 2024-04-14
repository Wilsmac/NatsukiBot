
const handler = async (m, {conn, usedPrefix}) => {
  const datas = global

  const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const text = `¡HOLA! 👋🏻`.trim();
  const buttonMessage= {
    'document': {url: `https://github.com/Wilsmac/FantasyBot-MD-v1`},
    'mimetype': `application/${document}`,
    'fileName': `¡Hola!`,
    'fileLength': 99999999999999,
    'pageCount': 200,
    'contextInfo': {
      'forwardingScore': 200,
      'isForwarded': true,
      'externalAdReply': {
        'mediaUrl': 'https://github.com/Wilsmac/FantasyBot-MD-v1',
        'mediaType': 2,
        'previewType': 'pdf',
        'title': fantasy,
        'body': wm,
        'thumbnail': fs.readFileSync("./media/menus/Menu1.jpg"),
        'sourceUrl': 'https://whatsapp.com/channel/0029VaCUlPX0LKZAlP10pC43'}},
    'caption': text,
    'footer': wm,
    'headerType': 6};
  conn.sendMessage(m.chat, buttonMessage, {quoted: m});
};
handler.help = ['hoka'];
handler.tags = ['info'];
handler.command = /^(hoka)$/i;
export default handler;