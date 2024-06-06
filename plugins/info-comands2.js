

/*let handler = async (m, { conn, command, usedPrefix, args, text, isOwner, isROwner, participants, groupMetadata  }) => {
let fkontak, who, user, number, bot, bant
fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${conn.user.jid.split('@')[0]}:${conn.user.jid.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const isCommand1 = /^(gemini|bard)$/i.test(command)

async function reportError(e) {
await m.reply(lenguajeCD['smsMalError3']() + '\n*' + lenguajeCD.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeCD.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeCD.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeCD['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}

switch (true) {

case isCommand1:
if (!text) throw `ingrese un texto usando el comando para usar a Gemini`
await conn.sendPresenceUpdate('composing', m.chat)       
try {
var apii = await fetch(`https://aemt.me/gemini?text=${text}`)
var res = await apii.json()
await m.reply(res.result)
} catch (e) {
reportError(e)
}
break
}}
handler.command = /^(ai|gemini|bard)$/i
//handler.register = true
export default handler*/