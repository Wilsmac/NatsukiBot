//códigos desarrollado por Wilmer oficial
// https://github.com/Wilsmac

                                  let handler = function (m) {
                 if (!m.quoted) throw false

             let { chat, fromMe, isBaileys } = m.quoted
    
     if (!fromMe) throw false

            if (!isBaileys) throw '> INFORMACION\nESE MENSAJE NO FUE ENVIADO POR MI Y POR LO TANTO NO PUEDO ELIMINARLO.'

         conn.sendMessage(chat, { delete: m.quoted.vM.key })
}

handler.help = ['del', 'delete']
handler.tags = ['tools']
handler.command = /^del(ete)?$/i
export default handler