// fue sacado por algún mal uso del comando :v

 let handler  = async (m, { conn }) => {

              
   let scan = await parent.sendFile(m.chat, await `https://telegra.ph/file/6114942024c7658478830.jpg`, m)
  setTimeout(() => {
    parent.sendMessage(m.chat, { delete: scan.key })
  }, 50000) //50
}
handler.help = ['holi'];
handler.command = /^(holi)$/i;
export default handler;