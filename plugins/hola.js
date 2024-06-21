/*const handler = async (m, { conn }) => {

conn.sendMessage(m.chat, "hola", {quoted: {key: {
fromMe: false,
participant: `0@s.whatsapp.net`
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync(`./media/menus/Menu1.jpg`)
},
"title": `🚫hola hola hola`,
"description": "",
"currencyCode": "SYP",
"priceAmount1000": "999999999999999999",
"retailerId": "",
"productImageCount": 999
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}}})
}
handler.command = /^(hoka)$/i
export default handler*/

/*const handler = async (m, {conn, usedPrefix}) => {
  const datas = global

  const doc = ['pdf', 'zip'];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const texto = `¡HOLA! 👋🏻`.trim();
  const texto2 = {
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
  conn.sendMessage(m.chat, texto2, {quoted: m});
};
handler.help = ['hoka'];
handler.tags = ['info'];
handler.command = /^(hoka)$/i;
export default handler;*/
