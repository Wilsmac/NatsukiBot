/*   Creditos - ig : https://www.instagram.com/fg98._/    */

import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg

import hispamemes from 'hispamemes'
let handler = async (m, {command, conn}) => {
const url = await hispamemes.meme()  
let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      "messageContextInfo": {
      "deviceListMetadata": {},
      "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ""
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "uwu"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "Hola",
            subtitle: "prueba",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".estado\",\"id\":\"message\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"url\",\"url\":\"https://github.com/Wilsmac/FantasyBot-MD-v1\",\"merchant_url\":\"https://www.google.com\"}"
              }
       ],
   })
    })
    }
  }
}, {})


await conn.relayMessage(url, msg.key.remoteJid, msg.message, { messageId: msg.key.id })
//conn.sendFile(m.chat, url, 'error.jpg', msg, m)}
//await conn.relayMessage(m.chat, `_${command}_`.trim(), author, url, [['𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 | 𝙉𝙀𝙓𝙏 🆕', `/${command}`]], m)}
handler.help = ['meme']
handler.tags = ['random']
handler.command = /^(meme|memes)$/i
export default handler
