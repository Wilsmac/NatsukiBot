// fue sacado por algún mal uso del comando :v

 let handler  = async (m, { conn }) => {

              
   let scan = await conn.sendFile(m.chat, await `https://telegra.ph/file/6114942024c7658478830.jpg`, m)
  setTimeout(() => {
    conn.sendMessage(m.chat, { delete: scan.key })
  }, 3000) //50
}
handler.help = ['holi'];
handler.command = /^(holi)$/i;
export default handler;