let handler  = async (m, { conn, usedPrefix: _p }) => {

let troli = { key: { fromMe: false, participant: "0@s.whatsapp.net", ...(false ? { remoteJid: "17608914335@s.whatsapp.net" } : {}) }, message: { productMessage: { product: { productImage:{ "mimetype": "image/jpeg", jpegThumbnail: imagen1 }, title: `${wm}`, description: "NatsukiBot-GD", currencyCode: "USD", priceAmount1000: "200000000", retailerId: "Ghost", productImageCount: 1 }, businessOwnerJid: "0@s.whatsapp.net" }}}

/*let troli = { key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" }, message: { imageMessage: { mimetype: 'image/jpeg', caption: wm, jpegThumbnail: imagen1 }}}
*/
/*let troli = {key: {participant: "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net"}, "message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us", "inviteCode": "m", "groupName": "P", "caption": wm, 'jpegThumbnail': fs.readFileSync('./media/menus/Menu3.jpg')}}}*/

conn.sendMessage(m.chat, {text:wm}, {quoted: troli})
}
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
                            orderTitle: `Hola dkqbisbjd\n5 Menit`,
                            jpegThumbnail: fs.readFileSync('./media/menus/Menu1.jpg'),
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
export default handler*/
