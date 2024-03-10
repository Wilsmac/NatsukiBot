/*import { createHash } from 'crypto'
let handler = async function (m, { args, command }) {

if (command == 'now' || command == 'no1') {
if (!args[0]) throw `Hola amigo :D`
let user = global.db.data.users[m.sender]
var sn = createHash('md5').update(m.sender).digest('hex').slice(0, 6)
if (args[0] !== sn) throw `Hola amigo`
user.registered = false
m.reply(`*Hola amigo :D.*`)
}

if (command == 'sn' || command == 'wilmer') {
conn.fakeReply(m.chat, sn, '0@s.whatsapp.net', 'hola we, que haces?', 'status@broadcast')
}

}
handler.help = ['', 'ister'].map(v => 'wilmer' + v + ' Que haces?')
handler.tags = ['rg']
handler.command = /^no1(ister)|wilmer|ns?$/i
export default handler*/