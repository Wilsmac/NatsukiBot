import translate from '@vitalets/google-translate-api'
import googleIt from 'google-it'
import gpt from 'api-dylux'
import fs from 'fs' 
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key})
const openaiii = new OpenAIApi(configuration)
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, command, usedPrefix, args, text, isOwner, isROwner, participants, groupMetadata  }) => {
let fkontak, who, user, number, bot, bant
fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${conn.user.jid.split('@')[0]}:${conn.user.jid.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const isCommand1 = /^(gemini|bard)$/i.test(command)
const isCommand2 = /^(ai)$/i.test(command)
const isCommand3 = /^(join|nuevogrupo|newgrupo|unete)$/i.test(command)

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
case isCommand2:
if (!text) throw `\`Escriba un texto usando el comando para usar a chatgpt :D\``
await conn.sendPresenceUpdate('composing', m.chat)       
try {
var apii = await fetch(`https://aemt.me/gpt4?text=${text}`)
var res = await apii.json()
await m.reply(res.result)
} catch (e) {
reportError(e)
}
break
case isCommand3:
user = m.sender.split('@')[0] 
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_1, code1] = link.match(linkRegex) || []
if (!code1) return m.reply(lenguajeCD.smsJoin1(usedPrefix, command))
try {      
if ( isOwner || m.fromMe) {
await m.reply(lenguajeCD.smsJoin2())
let res1 = await conn.groupAcceptInvite(code1)
await conn.sendMessage(res1, { text: lenguajeCD.smsJoin(user), mentions: (await conn.groupMetadata(`${res1}`)).participants.map(v => v.id) }, [user], { quoted: fkontak })
}} catch (e) {
reportError(e)
}        
break
}}
handler.command = /^(ai|gemini|bard|join|nuevogrupo|newgrupo|unete)$/i
//handler.register = true
export default handler