import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, args }) => {
let stiker = false
let json, key

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/g.test(mime) && !/webp/g.test(mime)) {
let buffer = await q.download()
let media = await (uploadImage)(buffer)
json = await (await fetch(`https://aemt.me/removebg?url=${media}`)).json()
stiker = await sticker(false, json.url.result, global.packname, global.author)
} else if (text) {
json = await (await fetch(`https://aemt.me/removebg?url=${text.trim()}`)).json()
} else return m.reply(`*𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙾 𝙰 𝚄𝙽𝙰 𝚄𝚁𝙻 𝙾 𝙰𝙶𝚁𝙴𝙶𝚄𝙴 𝚄𝙽𝙰 𝚄𝚁𝙻 𝙲𝙾𝙽 \`(jpg, jpeg o png)\` 𝙿𝙰𝚁𝙰 𝙿𝙾𝙳𝙴𝚁 𝚀𝚄𝙸𝚃𝙰𝚁 𝙴𝙻 𝙵𝙾𝙽𝙳𝙾.*`)

await mensajesEditados(conn, m, key)
await conn.sendMessage(m.chat, { text: waittttt, edit: key })
await conn.sendMessage(m.chat, { image: { url: json.url.result }, caption: null }, { quoted: m })
await conn.sendFile(m.chat, stiker ? stiker : await sticker(false, json.url.result, global.packname, global.author), 'sticker.webp', '', null, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: packname, body: '• AVECES QUEDA MAL :v •', mediaType: 2, sourceUrl: canalofc, thumbnail: gataImg.getRandom()}}})
}
handler.command = /^(s?removebg|)$/i
export default handler

const isUrl = (text) => {
const urlRegex = /^(https?):\/\/[^\s/$.?#]+\.(jpe?g|png)$/i
return urlRegex.test(text)
}

async function mensajesEditados(conn, m, key) {
const mensajes = [ waitt, waittt, waitttt, waittttt ]
key = await conn.sendMessage(m.chat, { text: wait, quoted: m })
for (let i = 0; i < mensajes.length; i++) {
await new Promise(resolve => setTimeout(resolve, 1000))
await conn.sendMessage(m.chat, { text: mensajes[i], edit: key })
}}





/*import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, args }) => {
let stiker = false
let json, key

let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/image/g.test(mime) && !/webp/g.test(mime)) {
let buffer = await q.download()
let media = await (uploadImage)(buffer)
json = await (await fetch(`https://aemt.me/removebg?url=${media}`)).json()
stiker = await sticker(false, json.url.result, global.packname, global.author)
} else if (text) {
json = await (await fetch(`https://aemt.me/removebg?url=${text.trim()}`)).json()
} else return m.reply(`* `(jpg, jpeg o png)` *`)

await mensajesEditados(conn, m, key)
await conn.sendMessage(m.chat, { text: waitttttt, edit: key })
await conn.sendMessage(m.chat, { image: { url: json.url.result }, caption: null }, { quoted: m })
await conn.sendFile(m.chat, stiker ? stiker : await sticker(false, json.url.result, global.packname, global.author), 'sticker.webp', '', null, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wilmerofc, body: '• STICKER •', mediaType: 2, sourceUrl: canalofc, thumbnail: gataImg.getRandom()}}})
}
handler.command = /^(s?removebg|quitarfondo)$/i
export default handler

const isUrl = (text) => {
const urlRegex = /^(https?):\/\/[^\s/$.?#]+\.(jpe?g|png)$/i
return urlRegex.test(text)
}

async function mensajesEditados(conn, m, key) {
const mensajes = [ waitt, waittt, waitttt, waittttt ]
key = await conn.sendMessage(m.chat, { text: wait, quoted: m })
for (let i = 0; i < mensajes.length; i++) {
await new Promise(resolve => setTimeout(resolve, 1000))
await conn.sendMessage(m.chat, { text: mensajes[i], edit: key })
}}*/