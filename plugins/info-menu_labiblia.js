import { getDevice } from '@whiskeysockets/baileys'
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

const lugarFecha = moment().tz('America/Lima')
const formatoFecha = {
weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}
lugarFecha.locale('es', formatoFecha)
const horarioFecha = lugarFecha.format('dddd, DD [de] MMMM [del] YYYY || HH:mm A').replace(/^\w/, (c) => c.toUpperCase())

if (!/web|desktop|unknown/gi.test(dispositivo)) {  
let menu = `

╭═══〘 ❀❀❀❀❀❀❀ 〙══╮
║ *BIENVENID(A) AL MENÚ*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤   *LA BIBLIA*
╰═══╡𖣘𖣘𖣘𖣘𖣘𖣘𖣘╞═══╯

  ♡  ∩_∩
  （„• ֊ •„)♡
 ┏━━∪∪━⏤͟͟͞͞★꙲⃝͟🌷❈┉━━━┓
 ╰ᴇᴄᴏɴᴏᴍɪ́ᴀ ꙰
\`Experiencia:\` ${exp} ⚡
\`Diamantes:\` ${limit} 💎
\`Coins:\` ${money} 💵
\`Tokens:\` ${joincount} 🪙\n ┗━━━━⏤͟͟͞͞★꙲⃝͟🌷❈┉━━━━━━┛`.trim()

const buttonParamsJson = JSON.stringify({
title: "✩ 𝙻𝙸𝚂𝚃𝙰 𝙷𝙾𝚁𝙽𝚈 ✩",
description: "Infórmate por medios",
sections: [
{ title: "𝙸𝙼𝙰𝙶𝙴𝙽 (𝙋𝘼𝘾𝙆)",
rows: [
{ header: "𝙿𝙰𝙲𝙺 🥵", title: "", description: "𝙸𝙼𝙰𝙶𝙴𝙽 𝙿𝙰𝙲𝙺 😻", id: usedPrefix + "pack" }
]},
{ title: "𝙸𝙼𝙰𝙶𝙴𝙽 (𝙏𝙀𝙏𝘼𝙎)",
rows: [
{ header: "𝚃𝙴𝚃𝙰𝚂 🥵", title: "", description: "𝙸𝙼𝙰𝙶𝙴𝙽: 𝚃𝙴𝚃𝙰𝚂 😻", id: usedPrefix + "tetas" }
]},
{ title: "𝙸𝙼𝙰𝙶𝙴𝙽 (𝘽𝙊𝙊𝙏𝙔)",
rows: [
{ header: "𝙱𝙾𝙾𝚃𝚈", title: "", description: "𝙸𝙼𝙰𝙶𝙴𝙽: 𝙱𝙾𝙾𝚃𝚈 ", id: usedPrefix + "booty" }
]},
{ title: "𝙸𝙼𝙰𝙶𝙴𝙽 (𝙀𝘾𝘾𝙃𝙄)",
rows: [
{ header: "𝙸𝙼𝙰𝙶𝙴𝙽 𝙴𝙲𝙲𝙷𝙸", title: "", description: "𝙸𝙼𝙰𝙶𝙴𝙽 𝙴𝙲𝙲𝙷𝙸 🍁", id: usedPrefix + "ecchi" }
]},
{ title: "𝙸𝙼𝙰𝙶𝙴𝙽 (𝙋𝙊𝙍𝙉𝙊)", highlight_label: "Próximamente",
rows: [
{ header: "𝙽𝙾𝙿𝙾𝚁", title: "", description: "𝙸𝙼𝙰𝙶𝙴𝙽: 𝙽𝙾𝙿𝙾𝚁", id: usedPrefix + "porno" }
]},
{ title: "𝙸𝙼𝙰𝙶𝙴𝙽 (𝙋𝙀𝘾𝙃𝙊𝙎)",
rows: [
{ header: "𝙿𝙴𝙲𝙷𝙾𝚂 😻", title: "", description: "𝙸𝙼𝙰𝙶𝙴𝙽: 𝙿𝙴𝙲𝙷𝙾𝚂 🍁", id: usedPrefix + "pechos" }
]},
{ title: "𝙸𝙼𝙰𝙶𝙴𝙽 (𝙋𝘼𝙉𝙏𝙄𝙀𝙎)",
rows: [
{ header: "𝙸𝙼𝙰𝙶𝙴𝙽 𝙿𝙰𝙽𝚃𝙸𝙴𝚂 😻", title: "", description: "𝙸𝙼𝙰𝙶𝙴𝙽: 𝙿𝙰𝙽𝚃𝙸𝙴𝚂 😻", id: usedPrefix + "panties" }
]},
{ title: "𝙸𝙼𝙰𝙶𝙴𝙽 (𝙋𝙐𝙎𝙎𝙔)",
rows: [
{ header: "𝙸𝙼𝙰𝙶𝙴𝙽: 𝙿𝚄𝚂𝚂𝚈 🥵", title: "", description: "𝙸𝙼𝙰𝙶𝙴𝙽 𝙿𝚄𝚂𝚂𝚈 🍁", id: usedPrefix + "pussy" }
]},
{ title: "𝙸𝙼𝙰𝙶𝙴𝙽 (𝙔𝙐𝙍𝙄)",
rows: [
{ header: "𝙸𝙼𝙰𝙶𝙴𝙽 𝚈𝚄𝚁𝙸 😻", title: "", description: "𝙸𝙼𝙰𝙶𝙴𝙽: 𝚈𝚄𝚁𝙸 😻", id: usedPrefix + "yuri" }
]},
{ title: "𝙸𝙼𝙰𝙶𝙴𝙽 (𝚁𝙰𝙽𝙳𝙾𝙼𝚇𝚇𝚇)⚠️",
rows: [
{ header: "𝙸𝙼𝙰𝙶𝙴𝙽 𝚇𝚇𝚇 𝚁𝙰𝙽𝙳𝙾𝙼", title: "", description: "𝙸𝙼𝙰𝙶𝙴𝙽: 𝚁𝙰𝙽𝙳𝙾𝙼 𝚇𝚇𝚇", id: usedPrefix + "terminos" }
]},
{ title: "𝙸𝙼𝙰𝙶𝙴𝙽 (𝙋𝘼𝘾𝙆 2)",
rows: [
{ header: "𝙿𝙰𝙲𝙺 2 𝙿𝙻𝙸𝚂", title: "", description: "𝙸𝙼𝙰𝙶𝙴𝙽: 𝙿𝙰𝙲𝙺 2", id: usedPrefix + "pack2" }
]},
{ title: "VIDEO (𝚅𝙸𝙳𝙴𝙾 𝚇𝚇𝚇)",
rows: [
{ header: "𝚅𝙸𝙳𝙴𝙾 𝚇𝚇𝚇", title: "", description: "𝚅𝙸𝙳𝙴𝙾: 𝚇𝚇𝚇", id: usedPrefix + "vídeoxxx" }
]},
{ title: "VIDEO (𝚅𝙸𝙳𝙴𝙾 𝙻𝙴𝚂𝙱𝙸 𝚇𝚇𝚇)",
rows: [
{ header: "𝚅𝙸𝙳𝙴𝙾 𝙻𝙴𝚂𝙱𝙸", title: "", description: "𝚅𝙸𝙳𝙴𝙾: 𝙻𝙴𝚂𝙱𝙸 𝚇𝚇𝚇", id: usedPrefix + "videolesbixxx" }
]}
]})
const interactiveMessage = {
body: { text: menu },
footer: { text: fantasy + ` \n☃️` },
header: { title: `⋆┈┈｡❃ུ۪ ❀ུ۪ ❁ུ۪ ❃ུ۪ ❀ུ۪ ｡┈┈⋆\n-ˋˏᴜsᴜᴀʀɪᴏ: ˎˊ-\n╭━━━━━━━━━━━━━━━╮\n┃🍁❥̷᜔ ${username}❁⃟ࣾ❥̷.⁞. ┃\n╰━━━┳━━━━━━━━━━━╯`, subtitle: "test4", hasMediaAttachment: false },
nativeFlowMessage: { buttons: [{ 
name: "single_select",
buttonParamsJson
}]
}}
const message = { messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, interactiveMessage }
await conn.relayMessage(m.chat, { viewOnceMessage: { message } }, {})

} else { 
let menu = `Hola`.trim()
await conn.sendFile(m.chat, fantasyImg, 'lp.jpg', menu, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝐅𝐚𝐧𝐭𝐚𝐬𝐲𝐁𝐨𝐭-𝐌𝐃 ', previewType: 0, thumbnail: imagen4, sourceUrl: canalofc}}}) 
await conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m }) 
//natsuki.sendFile(m.chat, fantasyVidMenu.getRandom(), 'fantasy.mp4', menu, fkontak)
}} catch (e) {
await m.reply(lenguajeCD['smsMalError3']() + '\n*' + lenguajeCD.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeCD.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeCD.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeCD['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menulabiblia|labiblia)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}




















/*import fs from 'fs'
import moment from 'moment-timezone'
import ct from 'countries-and-timezones'
import fetch from 'node-fetch'
import { parsePhoneNumber } from 'libphonenumber-js'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
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
let picture = './media/menus/Menu1.jpg'
let fkontak55 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}}
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let fake0 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': saludo, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${saludo},;;;\nFN:${saludo},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}}

let fechaMoment, formatDate, nombreLugar, ciudad = null
const phoneNumber = '+' + m.sender
const parsedPhoneNumber = parsePhoneNumber(phoneNumber)
const countryCode = parsedPhoneNumber.country
const countryData = ct.getCountry(countryCode)
const timezones = countryData.timezones
const zonaHoraria = timezones.length > 0 ? timezones[0] : 'UTC'
moment.locale(mid.idioma_code)
let lugarMoment = moment().tz(zonaHoraria)
if (lugarMoment) {
fechaMoment = lugarMoment.format('llll [(]a[)]')
formatDate = fechaMoment.charAt(0).toUpperCase() + fechaMoment.slice(1) 
nombreLugar = countryData.name
const partes = zonaHoraria.split('/')
ciudad = partes[partes.length - 1].replace(/_/g, ' ')
}else{
lugarMoment = moment().tz('America/Lima')
fechaMoment = lugarMoment.format('llll [(]a[)]')
formatDate = fechaMoment.charAt(0).toUpperCase() + fechaMoment.slice(1) 
nombreLugar = 'America'
ciudad = 'Lima'
}      
            m.react('♦️') 
let menu = `╭═══〘 ❀❀❀❀❀❀❀ 〙══╮
║     ${gt} 
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *𝗛ola, ${taguser}*
╰═══╡𖣘𖣘𖣘𖣘𖣘𖣘𖣘╞═══╯

┏━━━━━━━━━━━━━━━━┓
┃ *< MENU+18 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣═╡♦️ _${usedPrefix}pack_
┣═╡♦️ _${usedPrefix}pack3_
┣═╡♦️ _${usedPrefix}videoxxx_
┣═╡♦️ _${usedPrefix}videolesbixxx_
┣═╡♦️ _${usedPrefix}tetas_
┣═╡♦️ _${usedPrefix}booty_
┣═╡♦️ _${usedPrefix}ecchi_
┣═╡♦️ _${usedPrefix}imagenlesbians_
┣═╡♦️ _${usedPrefix}panties_
┣═╡♦️ _${usedPrefix}porno_
┣═╡♦️ _${usedPrefix}randomxxx_
┣═╡♦️ _${usedPrefix}pechos_
┣═╡♦️ _${usedPrefix}yuri_
┣═╡♦️ _${usedPrefix}yuri2_
┣═╡♦️ _${usedPrefix}hentai_
┣═╡♦️ _${usedPrefix}nsfworgy_
┣═╡♦️ _${usedPrefix}nsfwass_
┣═╡♦️ _${usedPrefix}nsfwbdsm_
┣═╡♦️ _${usedPrefix}nsfwero_
┣═╡♦️ _${usedPrefix}nsfwglass_
┣═╡♦️ _${usedPrefix}hentaipdf *<texto>*_
┣═╡♦️ _${usedPrefix}hentaisearch *<texto>*_
┗━━━━━━━━━━━━━━━━┛`.trim()
await conn.sendFile(m.chat, picture, 'error.mp4', menu, fake0)

} catch (e) {
await m.reply(lenguajeCD['smsMalError3']() + '\n*' + lenguajeCD.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeCD.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeCD.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeCD['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menulabiblia|labiblia)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}*/