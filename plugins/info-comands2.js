let handler = async (m, {conn, command, text}) => {
  const isCommand1 = /^(contactgc)$/i.test(command)

    async function reportError(e) {
     await m.reply(lenguajeCD['smsMalError3']() + '\n*' + lenguajeCD.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeCD.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeCD.smsMensError2()} ` + usedPrefix + command)
   console.log(`❗❗ ${lenguajeCD['smsMensError2']()} ${usedPrefix + command} ❗❗`)
 console.log(e)
    }
  switch (true) {
 case isCommand1:
let id = text ? text : m.chat  
const GD = 'contacts'
await conn.updateGroupsAddPrivacy(GD)
m.reply(`AGREGANDO LA CONFIGURACIÓN...`)
try {  
} catch (e) {
reportError(e) 
}
break
}}
handler.command = /^(contactgc)$/i
handler.owner = true
export default handler
