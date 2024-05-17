import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, command }) => {
let res = await fetch('https://api.waifu.pics/sfw/waifu')
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.url) throw `${lenguajeGB['smsAvisoFG']()}`
//conn.sendFile(m.chat, json.url, 'error.jpg', `😻😻😻😻`, m)
conn.sendButton(m.chat, `😻`, fantasy, json.url, [['𝚂 𝙸 𝙶 𝚄 𝙸 𝙴 𝙽 𝚃 𝙴', `/${command}`]], m)
}
handler.help = ['waifu']
handler.tags = ['anime']
handler.command = /^(waifu)$/i
export default handler
