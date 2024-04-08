import translate from '@vitalets/google-translate-api'
import googleIt from 'google-it'
import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'
import {readFileSync, unlinkSync} from 'fs'
import fs from 'fs' 
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key})
const openaiii = new OpenAIApi(configuration)

let handler = async (m, { conn, command, usedPrefix, args, text }) => {

const isCommand1 = /^(gemini|bard)$/i.test(command)
const isCommand2 = /^(toillusion|toilusi(ó|o)?n)$/i.test(command)

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
const filters = [
{ id: "pattern001", title: "Personalizado" },
{ id: "pattern113", title: "Arroz al amanecer" },
{ id: "pattern147", title: "Hamburguesa" },
{ id: "pattern146", title: "Marruecos" },
{ id: "pattern120", title: "Dunas de arena" },
{ id: "pattern138", title: "Las Vegas" },
{ id: "pattern135", title: "Tokio" },
{ id: "pattern111", title: "Lago de otoño" },
{ id: "pattern122", title: "Lavanda" },
{ id: "pattern136", title: "Sabana" },
{ id: "pattern145", title: "Paisaje urbano" },
{ id: "pattern116", title: "Pueblo nevado" },
{ id: "pattern118", title: "Escocia" },
{ id: "pattern119", title: "Camino de senderismo" },
{ id: "pattern112", title: "Interior" },
{ id: "pattern123", title: "Aurora" },
{ id: "pattern133", title: "Coliseo" },
{ id: "pattern107", title: "Picos de estrellas" },
{ id: "pattern148", title: "Pizza" },
{ id: "pattern130", title: "Parque de atracciones" },
{ id: "pattern144", title: "Castillo" },
{ id: "pattern124", title: "Embrujado" },
{ id: "pattern128", title: "Camino solar" },
{ id: "pattern115", title: "Ruinas antiguas" },
{ id: "pattern125", title: "Estación de tren" },
{ id: "pattern149", title: "Lasagna" },
{ id: "pattern106", title: "Otoño" },
{ id: "pattern109", title: "Bliss de arena" },
{ id: "pattern143", title: "Templo" },
{ id: "pattern104", title: "Lago alpino" },
{ id: "pattern142", title: "Encanto alpino" },
{ id: "pattern127", title: "Pila de papel" },
{ id: "pattern102", title: "Utah" },
{ id: "pattern132", title: "Manhattan" },
{ id: "pattern108", title: "Acantilado" },
{ id: "pattern117", title: "Caribe" },
{ id: "pattern134", title: "Venecia" },
{ id: "pattern126", title: "Colina de tela" },
{ id: "pattern101", title: "Picos nevados" },
{ id: "pattern137", title: "Dubái" },
{ id: "pattern129", title: "Plaza de la ciudad" },
{ id: "pattern114", title: "Monte Fuji" },
{ id: "pattern141", title: "Plaza de arte" }
]
let list = ''
filters.forEach((filter, index) => {
list += `*\`[${index + 1}]\`* (${filter.title})\n`
})   
let filterList = `*Para convertir la imagen a una ilusión de patrones:*

> *Agregando un enlace de imagen:*
*${usedPrefix + command}* [enlace] | [filtro] | [consulta] *(opcional)*
> *Ejemplo:*
*${usedPrefix + command}* https://telegra.ph/file/587c0111afe97997ea0d8.jpg | 3 | Color verde

> *Respondiendo a una imagen:*
*${usedPrefix + command}* [filtro] | [consulta] *(opcional)*
> *Ejemplo:*
*${usedPrefix + command}* 3 | Color verde

\`Elige un filtro usando el número correspondiente\`\n
${list.trim()}
`
if (!text) return m.reply(filterList)  
const parts = text.split("|").map(s => s.trim()) 
const randomFilterIndex = Math.floor(Math.random() * (filters.length - 1)) + 1
const randomFilterNumber = randomFilterIndex
let [url, filterid, prompt] = text.split("|").map(s => s.trim())
const isUrlValid = url && /https?:\/\/.*\.(jpeg|jpg|png)/i.test(url)
const isPromptValid = prompt && /https?:\/\/.*\.(jpeg|jpg|png)/i.test(prompt)
if (!isUrlValid && !isPromptValid && m.quoted) {
url = true
filterid = !/\|/.test(text) && /^\d+$/.test(text) ? text : ((text.match(/\|/g)).length === 1) && /^\d+$/.test(parts[0]) ? parts[0] : (randomFilterNumber + 1).toString()
prompt = text.split("|").length === 2 ? parts[1] ? parts[1].trim() : "" : ""
}
try {
if (!url && !m.quoted) {
return m.reply(`> Debe agregar un enlace de imagen o responder a una imagen.`)
}
if (!filterid) return m.reply('> *Falta seleccionar un filtro!*\n\n' + filterList)   
const selectedFilterIndex = parseInt(filterid) - 1
if (isNaN(selectedFilterIndex) || selectedFilterIndex < 0 || selectedFilterIndex >= filters.length) {
return m.reply(`El número \`'${filterid}'\` no corresponde a ningún filtro disponible.`)
}
const selectedFilterId = filters[selectedFilterIndex].id || Math.floor(Math.random() * (filters.length - 1)) + 1
let promptText = ''
if (selectedFilterId === "pattern001") {
if (!prompt) {
return m.reply(`> Para este filtro es obligatorio agregar una consulta, vuelva a intentarlo.`)
}
promptText = prompt
} else {
promptText = prompt || ''
}
let bufferImg
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
await m.reply(wait)    
if (/image/g.test(mime) && !/webp/g.test(mime)) {
let buffer = await q.download()
let media = await uploadImage(buffer)
let response = await fetch(APIs.skizo.url + `illusion?apikey=${APIs.skizo.key}&url=${media}&filterid=${selectedFilterId}&prompt=${promptText}`)
bufferImg = await response.buffer()    
} else if (isUrlValid) {
let response = await fetch(APIs.skizo.url + `illusion?apikey=${APIs.skizo.key}&url=${url.trim()}&filterid=${selectedFilterId}&prompt=${promptText}`)
bufferImg = await response.buffer()
} else return m.reply("La URL proporcionada no es un enlace de imagen válido o no se ha respondido a una imagen.")

await conn.sendMessage(m.chat, { image: bufferImg, caption: `> *Efecto:* ${filters[selectedFilterIndex].title}\n>  *Prompt:* ${promptText || 'Ninguno'}` }, { quoted: m })
} catch (e) {
await m.reply(lenguajeCD['smsMalError3']() + '\n*' + lenguajeCD.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeCD.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeCD.smsMensError2()} ` + usedPrefix + command)
console.log(`${lenguajeCD['smsMensError2']()} ${usedPrefix + command}`)
console.error(e)
}
break
}}
handler.command = /^(gemini|bard|toillusion|toilusi(ó|o)?n))$/i
//handler.register = true
export default handler