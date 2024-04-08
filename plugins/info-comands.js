import translate from '@vitalets/google-translate-api'
import googleIt from 'google-it'
import fetch from 'node-fetch'
import gpt from 'api-dylux'
import gtts from 'node-gtts'
import {readFileSync, unlinkSync} from 'fs'
import fs from 'fs' 
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key})
const openaiii = new OpenAIApi(configuration)

let handler = async (m, { conn, command, usedPrefix, args, text }) => {

const isCommand1 = /^(gemini|bard)$/i.test(command)
const isCommand2 = /^(ai)$/i.test(command)

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
async function reportError(e) {
await m.reply(lenguajeCD['smsMalError3']() + '\n*' + lenguajeCD.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeCD.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeCD.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeCD['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}

switch (true) {

case isCommand1:
if (!text) throw `\`Escriba un texto usando el comando para usar a Gemini :D\``
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
var apii = await fetch(`https://aemt.me/openai?text=${text}`)
var res = await apii.json()
await m.reply(res.result)
} catch (e) {
reportError(e)
}
break
}}
handler.command = /^(ai|gemini|bard)$/i
//handler.register = true
export default handler