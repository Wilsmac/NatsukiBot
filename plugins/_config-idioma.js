
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  let te = `𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙴 𝙴𝙻 𝙸𝙳𝙸𝙾𝙼𝙰 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙴 𝚄𝚂𝙰𝚁\n𝙻𝙾𝚂 𝙸𝙳𝙸𝙾𝙼𝙰𝚂 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴𝚂\n- es (Español)\n- en (Inglés)\n- id (Indonesia)\n- pt (Portugues)\n- ar (Árabe)\n\n*EJEMPLO:* ${usedPrefix + command}`
  if (!text) throw te
  let user = global.db.data.users[m.sender]
if (args[0] === "es") {
 user.language = args[0]
 m.reply("Bot configurado con el idioma español*\n\nAhora el bot responderá en el idioma Español.")
  } else if (args[0] === "en") {
       user.language = args[0]
 m.reply("*Selected English*\n\nTime the bot will respond in English.")
  } else if (args[0] === "id") {
      user.language = args[0]
   m.reply("*Bahasa Indonesia terpilih*\n\nSekarang bot akan membalas pesanmu dengan bahasa Indonesia.")
  } else if (args[0] === "pt") {
      user.language = args[0]
         m.reply("*Português selecionados*\n\nAgora o bot vai responder a sua mensagem em Português.")
   } else if (args[0] === "ar") {
        user.language = args[0]
   m.reply("تم اختيار اللغة العربية*\n\nالآن سيقوم البوت بالرد على رسائلك باللغة العربية.")
 } else {
       m.reply(te)
}}
 handler.help = ['language <es-en..>']

 handler.tags = ['main']

 handler.command = ['lang', 'idioma'] 

 export default handler