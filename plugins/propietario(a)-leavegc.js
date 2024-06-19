let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
let chat = global.db.data.chats[m.chat]
chat.welcome = false
await conn.reply(id, `𝙵𝚄𝙴 𝚄𝙽 𝙶𝚄𝚂𝚃𝙾 𝙴𝚂𝚃𝙰𝚁 𝙰𝚀𝚄𝙸\n${fantasy} 𝙰𝙱𝙰𝙽𝙳𝙾𝙽𝙰 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾.`, m, FakeChannel) 
await conn.groupLeave(id)
try {  
chat.welcome = true
} catch (e) {
await m.reply(`${fg}`) 
return console.log(e)
}}
handler.command = /^(salir|leavegc|salirdelgrupo|leave)$/i
handler.group = true
handler.rowner = true
export default handler
