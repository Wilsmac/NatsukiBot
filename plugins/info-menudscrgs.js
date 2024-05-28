import fs from 'fs'
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
            m.react('📥') 
let menu = `¡HOLA! 👋🏻 • ${username}\n𝘽𝙄𝙀𝙉𝘽𝙀𝙉𝙄𝘿𝙊 𝘼𝙇 𝙈𝙀𝙉𝙐 𝘿𝙀 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎
> ├┈‧͙⁺˚*･༓☾　®　☽༓･*˚⁺‧͙ 
> ├┈ 𝒃𝒚 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄 
> ├┈ ${gt}
    *Fecha y hora*
> ┣ 𝙵𝙴𝙲𝙷𝙰 𝚈 𝙷𝙾𝚁𝙰: \`${formatDate}\`
> ┣ 𝙿𝙰𝙸𝚂: \`${nombreLugar}\`
> ┣ 𝙲𝙸𝚄𝙳𝙰𝙳: \`${ciudad}\`
> *╘━ꥇ۬════•| ✿ |•════╝* 
 
> ✞͙͙͙͙͙͙͙͙͙͙⏜❟︵ֹ̩̥̩̥̩̥̩̩̥⏜੭🏮୧ֹ⏜︵ֹ̩̥̩̥̩̥̩̥̩̥̩̥̩̥❟⏜፞✞͙͙͙͙͙͙͙͙͙͙.
> ├┈ ↷ᴅᴇsᴄᴀʀɢᴀs
> ├• ✐; ₊˚✦୧︰  .
> ├┈・──・──・﹕₊˚ ✦・୨୧・
> │  ◦ _${usedPrefix}imagen | image *texto*_
> │  ◦ _${usedPrefix}pinterest | dlpinterest *texto*_
> │  ◦ _${usedPrefix}wallpaper|wp *texto*_
> │  ◦ _${usedPrefix}play | play2 *texto o link*_
> │  ◦ _${usedPrefix}play.1 *texto o link*_
> │  ◦ _${usedPrefix}play.2 *texto o link*_ 
> │  ◦ _${usedPrefix}ytmp3 | yta *link*_
> │  ◦ _${usedPrefix}ytmp4 | ytv *link*_
> │  ◦ _${usedPrefix}pdocaudio | ytadoc *link*_
> │  ◦ _${usedPrefix}pdocvieo | ytvdoc *link*_
> │  ◦ _${usedPrefix}tw |twdl | twitter *link*_
> │  ◦ _${usedPrefix}facebook | fb *link*_
> │  ◦ _${usedPrefix}instagram *link video o imagen*_
> │  ◦ _${usedPrefix}verig | igstalk *usuario(a)*_
> │  ◦ _${usedPrefix}ighistoria | igstory *usuario(a)*_
> │  ◦ _${usedPrefix}tiktok *link*_
> │  ◦ _${usedPrefix}tiktokimagen | ttimagen *link*_
> │  ◦ _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
> │  ◦ _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
> │  ◦ _${usedPrefix}mediafire | dlmediafire *link*_
> │  ◦ _${usedPrefix}clonarepo | gitclone *link*_
> │  ◦ _${usedPrefix}clima *país ciudad*_
> │  ◦ _${usedPrefix}consejo_
> │  ◦ _${usedPrefix}morse codificar *texto*_
> │  ◦ _${usedPrefix}morse decodificar *morse*_
> │  ◦ _${usedPrefix}fraseromantica_
> │  ◦ _${usedPrefix}historia_
> ╰┉ͦ━ᷫ━ⷭ┈ ⃘⵿݂۪۪۪࣭࣭፝۬۬۬͞💙ꫂ❀ᰰ᷒|²⁰|²|²³ ♡┈⊷ꫂ፝۬۬۬͞ᜓ⃘݂۪۪۪࣭࣭.─❤️⃟ᬽ፝֟━❥ᰰຼ᭢╯*`.trim()
await conn.sendFile(m.chat, picture, 'error.mp4', menu, fake0)

} catch (e) {
await m.reply(lenguajeCD['smsMalError3']() + '\n*' + lenguajeCD.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeCD.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeCD.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeCD['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menudescargas|menudscrgas)$/i
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
