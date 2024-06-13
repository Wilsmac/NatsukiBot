import fs from 'fs'
import fetch from 'node-fetch'
 let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = './media/menus/Menu1.jpg'
const {
    MessageType,
    Mimetype
} = (await import("@whiskeysockets/baileys")).default;

           const ftrol = {
  key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 999,
                            status: 1,
                            surface : 1,
                            message: `HELLO WORLD :3\n5 Menit`, 
                            orderTitle: `WILMER OFICIAL\n5 Menit`,
                            thumbnail: pp,
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
          //m.reply(teks)
          let jawab = `*Bot aktif selama*\n5 Menit\n\n_©ᴋɪɴɢ ᴏғ ʙᴇᴀʀ_`.trim()
conn.sendMessage(m.chat,{text:wm}, {quoted: ftrol})
}


handler.help = ['troli']

handler.tags = ['ᴘᴇɴᴅɪɴɢ sᴛᴜғғ']

handler.command = /^troli$/i
export default handler



/*import fs from 'fs'
import fetch from 'node-fetch'
 let handler  = async (m, { conn, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = (await import("@whiskeysockets/baileys")).default;

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
                            thumbnail: fs.readFileSync('./media/menus/Menu1.jpg'),
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

export default handler*/