/*import translate from '@vitalets/google-translate-api'
import * as fs from 'fs'
import { es, en, id, ar, pt } from '../lib/idiomas/total-idiomas.js'

let handler = async (m, { conn, args, usedPrefix, command }) => {

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let bot = `𝙴𝚕 𝚒𝚍𝚒𝚘𝚖𝚊 𝚊𝚑 𝚜𝚒𝚍𝚘 𝚌𝚊𝚖𝚋𝚒𝚊𝚍𝚘 𝚌𝚘𝚛𝚛𝚎𝚌𝚝𝚊𝚖𝚎𝚗𝚝𝚎.`
let bot2 = `𝚜𝚎𝚕𝚎𝚌𝚌𝚒𝚘𝚗𝚎 𝚎𝚕 𝚒𝚍𝚒𝚘𝚖𝚊 𝚚𝚞𝚎 𝚍𝚎𝚜𝚎𝚎 𝚞𝚜𝚊𝚛.`
let bot3 = `𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙽𝙾 𝙲𝙰𝙼𝙽𝙸𝙰𝚁𝙰 𝙴𝙻 𝙸𝙳𝙸𝙾𝙼𝙰 𝙰𝙲𝚃𝚄𝙰𝙻𝙼𝙴𝙽𝚃𝙴, 𝚂𝙾𝙻𝙾 𝙻𝙾𝚂 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂.`
let idioma = await translate(`${bot}`, { to: args[0], autoCorrect: true })
let idioma2 = await translate(`${bot2}`, { to: lenguajeCD.lenguaje(), autoCorrect: true })
let idioma3 = await translate(`${bot3}`, { to: lenguajeCD.lenguaje(), autoCorrect: true })

try {  
if (args[0] == 'es'){
global.lenguajeGB = es
await conn.sendButton(m.chat, lenguajeCD['smsAvisoEG']() + idioma.text + '\n' + 'Español', igfg, null, [[`𝙼 𝙴 𝙽 𝚄 ☃️`, `${usedPrefix}menu`]], fkontak, m)

}else if (args[0] == 'en'){
global.lenguajeGB = en
await conn.sendButton(m.chat, lenguajeCD['smsAvisoEG']() + idioma.text + '\n' + 'English', igfg, null, [[`𝙼 𝙴 𝙽 𝚄 ☃️`, `${usedPrefix}menu`]], fkontak, m)

}else if (args[0] == 'id'){
global.lenguajeGB = id
await conn.sendButton(m.chat, lenguajeCD['smsAvisoEG']() + idioma.text + '\n' + 'Bahasa Indonesia', igfg, null, [[`𝙼 𝙴 𝙽 𝚄 ☃️`, `${usedPrefix}menu`]], fkontak, m)

}else if (args[0] == 'ar'){
global.lenguajeGB = ar
await conn.sendButton(m.chat, lenguajeCD['smsAvisoEG']() + idioma.text + '\n' + 'عرب', igfg, null, [[`𝙼 𝙴 𝙽 𝚄 ☃️`, `${usedPrefix}menu`]], fkontak, m)

}else if (args[0] == 'pt'){
global.lenguajeGB = pt
await conn.sendButton(m.chat, lenguajeCD['smsAvisoEG']() + idioma.text + '\n' + 'Português', igfg, null, [[`𝙼 𝙴 𝙽 𝚄 ☃️`, `${usedPrefix}menu`]], fkontak, m)
}else{

const sections = [{
title: '𝙻𝙾𝚂 𝙸𝙳𝙸𝙾𝙼𝙰𝚂 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴𝚂 𝙰𝙲𝚃𝚄𝙰𝙻𝙼𝙴𝙽𝚃𝙴',
rows: [
   {header: "⚠︎ Español", title: "", id: `${usedPrefix + command} es`, description: ``},
     {header: "⚠︎ English", title: "", id: `${usedPrefix + command} en`, description: ``},
       {header: "⚠︎ Bahasa Indonesia", title: "", id: `${usedPrefix + command} id`, description: ``},
         {header: "⚠︎ عرب", title: "", id: `${usedPrefix + command} ar`, description: ``},
            {header: "⚠︎ Português", title: "", id: `${usedPrefix + command} pt`, description: ``}]}]

const listMessage = {
text: idioma2.text + '\n\n' + idioma3.text,
footer: `➥ Español = ${usedPrefix + command} es
➥ English = ${usedPrefix + command} en
➥ Bahasa Indonesia = ${usedPrefix + command} id
➥ عرب = ${usedPrefix + command} ar
➥ Português = ${usedPrefix + command} pt\n\n` + wm,
title: `${htki} Idioma ☃️`,
buttonText: `𝚂 𝙴 𝙻 𝙴 𝙲 𝙲 𝙸 𝙾 𝙽 𝙰 𝚁`,
sections }
await conn.sendList(m.chat, listMessage, {quoted: fkontak})
}
}catch(e){
await m.reply(`${fg}\`NO SE LOGRÓ CAMBIAR DE IDIOMA, REPORTE ESTE COMANDO USANDO: ${usedPrefix}reporte\``) 
console.log(e) 
}}

handler.command = /^(idioma|languaje|languages)$/i
//handler.owner = true

export default handler*/
