import { execSync } from 'child_process'
let handler = async (m, { conn, text }) => {
try {  
if (global.conn.user.jid == conn.user.jid) {
let stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''))
conn.reply(m.chat, stdout.toString(), m)}
//} catch {
var update = execSync('git remote set-url origin https://github.com/Wilsmac/FantasyBot-MD-v1.git && git pull')
await m.reply('actualizaciones realizadas, cambios realizados' + stdout.toString())
} catch {
await m.reply(`${fg}`) 
}}
handler.help = ['update9']
handler.tags = ['owner']
handler.command = /^update9|actualizar9$/i
handler.rowner = true
export default handler