let handler = async (m, { conn, usedPrefix, command}) => {
await conn.reply(m.chat,`Padre nuestro, que estás en los Cielos, santificado sea tu nombre, venga tu Reino, hágase tu voluntad así en la tierra como en el cielo. y perdónanos nuestras deudas así como nosotros perdonamos a nuestros deudores, y no nos dejes caer en la tentación, mas líbranos del mal. :"v`, estilo2)
}
handler.customPrefix = /^(Fototeta|fototeta)$/i
handler.command = new RegExp
export default handler





/*import fetch from 'node-fetch';
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let pp = await conn.profilePictureUrl(m.sender, 'image')

    const nst = {
      "key": {
        "fromMe": false,
        "participant": "0@s.whatsapp.net",
        "remoteJid": "0@s.whatsapp.net"
      },
      "message": {
        "groupInviteMessage": {
          "groupJid": "6285240750713-1610340626@g.us",
          "inviteCode": "mememteeeekkeke",
          "groupName": "P",
          "caption": "Hello, I'm NatsukiBot",
          "jpegThumbnail": await (await fetch(pp)).buffer()
        }
      }
    }

    conn.sendMessage(m.chat, { text: 'Hola, soy Natsuki, en que puedo ayudarte?' }, { quoted: nst })
  } catch (error) {
    conn.sendMessage(m.chat, 'Hola, soy Natsuki, en que puedo ayudarte?', 'conversation', { quoted: m })
  }
}
handler.customPrefix = /^(Ai)$/i
handler.command = new RegExp
export default handler*/