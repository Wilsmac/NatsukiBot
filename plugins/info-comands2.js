/*let handler = async (m, { conn, text, command }) => {

const isCommand1 = /^(contactgc)$/i.test(command)
const isCommand2 = /^(privacionline)$/i.test(command)

async function reportError(e) {
await m.reply(lenguajeCD['smsMalError3']() + '\n*' + lenguajeCD.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeCD.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeCD.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeCD['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}

switch (true) {

case isCommand1:
let id = text ? text : m.chat  
const GD = 'all' // 'contacts'
await conn.updateGroupsAddPrivacy(GD)
m.reply(`AGREGANDO LA CONFIGURACIÓN...`)
try {  
} catch (e) {
await m.reply(`${fg}`) 
return console.log(e)
}}
} catch (e) {
reportError(e)
}
break

case isCommand2:
const CD = 'match_last_seen'
await conn.updateOnlinePrivacy(CD)
m.reply(`AGREGANDO LA CONFIGURACIÓN...`)
try {  
} catch (e) {
await m.reply(`${fg}`) 
return console.log(e)
}}
} catch (e) {
reportError(e)
}
break
}}
handler.command = /^(contactgc|privacionline)$/i
handler.owner = true
export default handler*/