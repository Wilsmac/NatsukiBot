// fue sacado por algún mal uso del comando :v

 let handler  = async (m, { conn }) => {

              
  setTimeout(() => {
    parent.sendMessage(m.chat, { delete: `Hola` })
  }, 50000) //50 segundos
}
handler.help = ['holi'];
handler.command = /^(holi)$/i;
export default handler;