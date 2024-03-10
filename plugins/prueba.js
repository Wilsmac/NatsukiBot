import { createHash } from 'crypto'
let handler = async function (m, { args, command }) {

if (command == 'nose1' || command == 'nose') {
conn.fakeReply(m.chat, 'Pues la verdad no sé amigo', 'Hola', 'status@broadcast')
}

}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <numero de serie>')
handler.tags = ['nose']
handler.command = /^nose|nose1?$/i
export default handler