// fue sacado por algún mal uso del comando :v



              let scan = await parent.sendMessage(m.chat, `Hola` m)
  setTimeout(() => {
    parent.sendMessage(m.chat, { delete: scan.key })
  }, 50000) //50 segundos

handler.help = ['holi'];
handler.command = /^(holi)$/i;
export default handler;