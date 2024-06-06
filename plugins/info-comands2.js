/*
     código desarrollado por @Wilmer oficial 
         https://github.com/Wilsmac
*/
let handler = async (m, {conn, command, text}) => {
const isCommand1 = /^(contactgc)$/i.test(command)
const isCommand2 = /^(allgc)$/i.test(command)
const isCommand3 = /^(allonline)$/i.test(command)
const isCommand4 = /^(ocultaronline)$/i.test(command)
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
m.reply(`*AHORA SOLO LOS CONTACTOS PODRAN AGREGAR AH ESTE BOT A GRUPOS EXITOSAMENTE...*`)
try {  
} catch (e) {
reportError(e) 
}
break
case isCommand2:
let ld = text ? text : m.chat  
const LD = 'all'
await conn.updateGroupsAddPrivacy(LD)
m.reply(`*AHORA TODOS PODRAN AÑADIRME A GRUPOS EXITOSAMENTE...*`)
try {  
} catch (e) {
reportError(e) 
}
break
case isCommand3:
let cd = text ? text : m.chat  
const value1 = 'all'
await conn.updateOnlinePrivacy(value1)
m.reply(`*AHORA TODOS PUEDEN VER TU ONLINE O EN LÍNEA EXITOSAMENTE...*`)
try {  
} catch (e) {
reportError(e) 
}
break
case isCommand4:
let iu = text ? text : m.chat  
const value2 = 'match_last_seen'
await conn.updateOnlinePrivacy(value2)
m.reply(`*AHORA NADIE PUEDE VER TU ONLINE O EN LÍNEA EXITOSAMENTE...*`)
try { 
} catch (e) {
reportError(e) 
}
break
}}
handler.command = /^(contactgc|allgc|allonline|ocultaronline)$/i
handler.owner = true
export default handler