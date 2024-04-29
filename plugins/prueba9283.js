/*import { getDevice } from '@whiskeysockets/baileys'
import fs from 'fs'
import moment from 'moment-timezone'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
const dispositivo = await getDevice(m.key.id)
try {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let pp = gataVidMenu
let vn = 'https://qu.ax/bfaM.mp3'
let pareja = global.db.data.users[m.sender].pasangan 
const numberToEmoji = { "0": "0️⃣", "1": "1️⃣", "2": "2️⃣", "3": "3️⃣", "4": "4️⃣", "5": "5️⃣", "6": "6️⃣", "7": "7️⃣", "8": "8️⃣", "9": "9️⃣", }
let lvl = level
let emoji = Array.from(lvl.toString()).map((digit) => numberToEmoji[digit] || "❓").join("")

const lugarFecha = moment().tz('America/Lima')
const formatoFecha = {
weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}
lugarFecha.locale('es', formatoFecha)
const horarioFecha = lugarFecha.format('dddd, DD [de] MMMM [del] YYYY || HH:mm A').replace(/^\w/, (c) => c.toUpperCase())

if (!/web|desktop|unknown/gi.test(dispositivo)) {  
let menu = `
\`Fecha y hora:\` ${horarioFecha}
   ↷ ɪɴғᴏ ᴅᴇ ʙᴏᴛ
 *${lenguajeCD['smsTotalUsers']()}* ➺ _${Object.keys(global.db.data.users).length}_ 
 *Registrados »* ${rtotalreg}/${totalreg}    
 *${lenguajeCD['smsUptime']()}* ➺ _${uptime}_ 
 *${lenguajeCD['smsVersion']()}* ➺ _${vs}_
 *${lenguajeCD['smsMode']()} ➺* _${global.opts['self'] ? `${lenguajeCD['smsModePrivate']().charAt(0).toUpperCase() + lenguajeCD['smsModePrivate']().slice(1).toLowerCase()}` : `${lenguajeCD['smsModePublic']().charAt(0).toUpperCase() + lenguajeCD['smsModePublic']().slice(1).toLowerCase()}`}_
 *${lenguajeCD['smsBanChats']()}* ➺ _${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_ 
 *${lenguajeCD['smsBanUsers']()}* ➺ _${Object.entries(global.db.data.users).filter(user => user[1].banned).length}_ `.trim()

const buttonParamsJson = JSON.stringify({
title: "VER LISTA",
description: "CONFIGURACIÓNES",
sections: [
{ title: "GRUPOS",
rows: [
{ header: "Redes", title: "", description: "activar antilink", id: usedPrefix + "enable antilink" },

{ header: "Redes", title: "", description: "desactivar antilink", id: usedPrefix + "disable antilink" },

{ header: "Redes", title: "", description: "activar modohorny", id: usedPrefix + "enable modohorny" },

{ header: "Modohorny", title: "", description: "desactivar modohorny", id: usedPrefix + "disable modohorny" },

]},
{ title: "Chat privado",
rows: [
{ header: "activar pconly", title: "", description: "solo chat privado", id: usedPrefix + "enable pconly" },

{ header: "activar gconly", title: "", description: "solo chat grupal", id: usedPrefix + "enable gconly" },

{ header: "anti toxicos", title: "", description: "activar antitoxic", id: usedPrefix + "enable antitoxic" },

{ header: "audios", title: "", description: "activar audios ", id: usedPrefix + "enable audios" }
]}
]})
const interactiveMessage = {
body: { text: menu },
footer: { text: wm + ` \nSi algo no funciona utilice el comando *${usedPrefix}menu*` },
header: { title: `\`Hola\` ${taguser}*\n*_CENTRÓ DE CONFIGURACIÓN_*`, subtitle: "test4", hasMediaAttachment: false },
nativeFlowMessage: { buttons: [{ 
name: "single_select",
buttonParamsJson
}]
}}
const message = { messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, interactiveMessage }
await conn.relayMessage(m.chat, { viewOnceMessage: { message } }, {})

} else { 
let menu = `
*${lenguajeCD['smsTotalUsers']()}* ➺ _${Object.keys(global.db.data.users).length}_ 
*Registrados »* ${rtotalreg}/${totalreg}    
*${lenguajeCD['smsUptime']()}* ➺ _${uptime}_ 
*${lenguajeCD['smsVersion']()}* ➺ _${vs}_
*${lenguajeCD['smsMode']()} ➺* _${global.opts['self'] ? `${lenguajeCD['smsModePrivate']().charAt(0).toUpperCase() + lenguajeCD['smsModePrivate']().slice(1).toLowerCase()}` : `${lenguajeCD['smsModePublic']().charAt(0).toUpperCase() + lenguajeCD['smsModePublic']().slice(1).toLowerCase()}`}_
⎔ *${lenguajeCD['smsBanChats']()}* ➺ _${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}_ 
⎔ *${lenguajeCD['smsBanUsers']()}* ➺ _${Object.entries(global.db.data.users).filter(user => user[1].banned).length}_ ${(conn.user.jid == global.conn.user.jid ? '' : `\n⎔ *SOY SUB BOT DE: https://wa.me/${global.conn.user.jid.split`@`[0]}*`) || ''}

`.trim()
await conn.sendFile(m.chat, fantasyImg, 'lp.jpg', menu, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝐅𝐚𝐧𝐭𝐚𝐬𝐲𝐁𝐨𝐭-𝐌𝐃 ', previewType: 0, thumbnail: imagen4, sourceUrl: canalofc}}}) 
await conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m }) 
//conn.sendFile(m.chat, fantasyVidMenu.getRandom(), 'fantasy.mp4', menu, fkontak)
}} catch (e) {
await m.reply(lenguajeCD['smsMalError3']() + '\n*' + lenguajeCD.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeCD.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeCD.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeCD['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menuconfig|enb\?)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')} */