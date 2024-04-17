// fue sacado por algún mal uso del comando :v



              let scan = await m.reply(`Hola`)
  setTimeout(() => {
    parent.sendMessage(m.chat, { delete: scan })
  }, 50000) //50 segundos

handler.help = ['holi'];
handler.command = /^(holi)$/i;
export default handler;