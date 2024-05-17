import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
let res = await fetch('https://api.lolhuman.xyz/api/random/ppcouple?apikey=9b817532fadff8fc7cb86862')
if (res.status != 200) throw await res.text()
let json = await res.json()
if (!json.status) throw json
//conn.sendFile(m.chat, json.result.female, 'error.jpg', `𝙲𝙷𝙸𝙲𝙰 🌹`, m)
conn.sendButton(m.chat, '𝙲𝙷𝙸𝙲𝙰 💗', fantasy, json.result.female, [['𝚂 𝙸 𝙶 𝚄 𝙸 𝙴 𝙽 𝚃 𝙴', `/${command}`]], m)
//conn.sendFile(m.chat, json.result.male, 'error.jpg', `𝙲𝙷𝙸𝙲𝙾 🌺`, m)
conn.sendButton(m.chat, '𝙲𝙷𝙸𝙲𝙾 🌟', fantasy, json.result.male, [['𝚂 𝙸 𝙶 𝚄 𝙸 𝙴 𝙽 𝚃 𝙴', `/${command}`]], m)
}
handler.help = ['ppcouple']
handler.tags = ['internet']
handler.command = /^(ppcp|ppcouple|compartirperfil|compartirfoto)$/i
export default handler
