let handler = async (m, { conn, args, usedPrefix, command }) => {
let txt = `prueba`
conn.sendMessage(m.chat, { text: txt, caption: "1234", footer: wm, buttons: [
  {
    buttonId: ".menu", 
    buttonText: { 
      displayText: 'menu' 
    }
  }, {
    buttonId: ".s", 
    buttonText: {
      displayText: "sticker"
    }
  }
],
  viewOnce: true,
  headerType: 1,
}, { quoted: m })
}
handler.command = ['test']
export default handler