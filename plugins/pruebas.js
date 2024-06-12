import fs from 'fs'
import fetch from 'node-fetch'
 let handler  = async (m, { conn, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = (await import("@adiwajshing/baileys")).default;

           const ftrol = {
  key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 999,
                            status: 1,
                            surface : 1,
                            message: `okto\n5 Menit`, // Wilmer :3
                            orderTitle: `Nakano Nino\n5 Menit`,
                            thumbnail: Menu1,
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
          //m.reply(teks)
          let jawab = `*Natsuki*\n5 Menit\n\n_©okto_`.trim()
conn.sendMessage(m.chat,{text:wm}, {quoted: ftrol})
}


handler.help = ['troli']

handler.tags = ['ᴘᴇɴᴅɪɴɢ sᴛᴜғғ']

handler.command = /^troli$/i

export default handler