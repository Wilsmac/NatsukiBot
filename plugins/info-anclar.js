 //códigos desarrollado por Wilmer oficial 
 // https://github.com/Wilsmac

let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
const value = 'match_last_seen' // 'all'
//const value = 'contacts' //'all' | 'contact_blacklist' | 'none'
await conn.reply(id, `AGREGANDO LA CONFIGURACIÓN.`) 
await conn.updateOnlinePrivacy(value)

//await conn.updateGroupsAddPrivacy(value)
try {  
} catch (e) {
await m.reply(`${fg}`) 
return console.log(e)
}}
handler.command = /^(solocontact)$/i
handler.rowner = true
export default handler







                                 /* let handler = function (m) {
                 if (!m.quoted) throw false

             let { chat, fromMe, isBaileys } = m.quoted
    
     if (!fromMe) throw false

            if (!isBaileys) throw '> INFORMACION\nESE MENSAJE NO FUE ENVIADO POR MI Y POR LO TANTO NO PUEDO ELIMINARLO.'

         conn.sendMessage(chat, { delete: m.quoted.vM.key })
}

handler.help = ['del', 'delete']
handler.tags = ['tools']
handler.command = /^del(ete)?$/i
handler.group = true
handler.admin = true
export default handler*/