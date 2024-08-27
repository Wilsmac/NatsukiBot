import axios from 'axios'
import fetch from 'node-fetch'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import search from 'yt-search'
async function spotifyxv(query) {
let token = await tokens();
let response = await axios({
method: 'get',
url: 'https://api.spotify.com/v1/search?q=' + encodeURIComponent(query) + '&type=track',
headers: {
Authorization: 'Bearer ' + token,
},
})
const tracks = response.data.tracks.items
const results = tracks.map((track) => ({
name: track.name,
artista: track.artists.map((artist) => artist.name),
album: track.album.name,
duracion: timestamp(track.duration_ms),
url: track.external_urls.spotify,
imagen: track.album.images.length ? track.album.images[0].url : '',
}))
return results
}
async function tokens() {
const response = await axios({
method: 'post',
url:
'https://accounts.spotify.com/api/token',
headers: {
'Content-Type': 'application/x-www-form-urlencoded',
Authorization: 'Basic ' + Buffer.from('acc6302297e040aeb6e4ac1fbdfd62c3:0e8439a1280a43aba9a5bc0a16f3f009').toString('base64'),
},
data: 'grant_type=client_credentials',
})
return response.data.access_token
}
function timestamp(time) {
const minutes = Math.floor(time / 60000);
const seconds = Math.floor((time % 60000) / 1000);
return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
async function getBuffer(url, options) {
try {
options = options || {};
const res = await axios({
method: 'get',
url,
headers: {
DNT: 1,
'Upgrade-Insecure-Request': 1,
},
...options,
responseType: 'arraybuffer',
});
return res.data;
} catch (err) {
return err;
}}
async function getTinyURL(text) {
try {
let response = await axios.get(`https://tinyurl.com/api-create.php?url=${text}`);
return response.data;
} catch (error) {
return text;
}}
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `${lenguajeGB.smsMalused2()} ⊱ *${usedPrefix + command} Bellyache*`
try {
m.react('⌛️')
let songInfo = await spotifyxv(text)
if (!songInfo.length) throw `*No se encontró una canción.*`
let res = songInfo[0]
let fileSizeInMB = (await getBuffer(res.url)).length / (1024 * 1024)
let shortURL = await getTinyURL(res.url)
const info = `*TITULO:*
_${res.name}_

*ARTISTA:*
» _${res.artista.join(', ')}_

*URL DE DESCARGA:*
» _${shortURL}_

*Enviando canción...*
${wm}`

let resImg = await fetch(res.imagen)
let thumbb = await resImg.buffer()
let { videos } = await search(res.name)
let q = '128kbps'
let v = videos[0].url
let yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v))
let dl_url = await yt.audio[q].download()
let ttl = await yt.title
let size = await yt.audio[q].fileSizeH
let img = await getBuffer(res.imagen)
conn.sendMessage(m.chat, { audio: { url: dl_url }, fileName: `${ttl}.mp3`, mimetype: 'audio/mpeg' }, { quoted: m })
await conn.sendMessage(m.chat, {text: info, contextInfo: {forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.wm, "containsAutoReply": true, "mediaType": 1, "thumbnail": img, "thumbnailUrl": img, "mediaUrl": shortURL, "sourceUrl": shortURL}}}, {quoted: m});
m.react('✅️')
} catch (error) {
}}
handler.command = /^(spotify|music)$/i
export default handler




/*import fetch from 'node-fetch'
import Spotify from "spotifydl-x"
import fs from 'fs'
let handler = async(m, { conn, usedPrefix, command, text }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let frep = { contextInfo: { externalAdReply: {title: wm, body: author, sourceUrl: redesMenu.getRandom(), thumbnail: await(await fetch(gataMenu.getRandom())).buffer() }}}
if (!text) return await conn.reply(m.chat, `${lenguajeGB.smsMalused2()} ⊱ *${usedPrefix + command} Bellyache*`, fkontak, m) 
try {
let resDL = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let jsonDL = await resDL.json()
let linkDL = jsonDL.result[0].link
let spty = await spotifydl(linkDL)
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`}
let randomName = getRandom(".mp3")
const filePath = `./tmp/${randomName}`
fs.writeFileSync(filePath, spty.audio)
let spotifyi = ` *${mid.smsYT1}:*
_${spty.data.name}_

 *${mid.smsYT13}:*
» _${spty.data.artists}_

 *${mid.smsYT4}*:
» _${linkDL}_

 *${mid.smsSpoti}*
${wm}`
await conn.sendFile(m.chat, spty.data.cover_url, 'error.jpg', spotifyi, fkontak, m)
await conn.sendMessage(m.chat, { audio: fs.readFileSync(`./tmp/${randomName}`), fileName: `${spty.data.name}.mp3`, mimetype: "audio/mp4", }, { quoted: m })    
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, fkontak, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
handler.limit = false
}}
handler.command = /^(spotify|music)$/i
handler.limit = 1
handler.level = 2
export default handler

const credentials = { clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3', clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009' }
const spotify = new Spotify.default(credentials)
async function spotifydl(url) {
const res = await spotify.getTrack(url).catch(() => {
return { error: 'Fallo la descarga' }})
return { data: res, audio: await spotify.downloadTrack(url) }}


import fetch from 'node-fetch'
import fs from 'fs'

let handler = async(m, { conn, text, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let frep = { contextInfo: { externalAdReply: {title: wm, body: author, sourceUrl: redesMenu.getRandom(), thumbnail: await(await fetch(gataMenu.getRandom())).buffer() }}}
if (!text) return await conn.reply(m.chat, `${lenguajeGB.smsMalused2()} ⊱ *${usedPrefix + command} Bellyache*`, fkontak, m)
 //conn.sendButton(m.chat, lenguajeGB.smsMalused2(), `⊱ *${usedPrefix + command} Bellyache*`, null, [[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], fkontak, m)
try {
let res = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkeysapi}&query=${text}`)
let json = await res.json()
let { link } = json.result[0]
let res2 = await fetch(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkeysapi}&url=${link}`)
let json2 = await res2.json()
let { thumbnail, title, artists } = json2.result

let spotifyi = `✨ *TITULO:* 
_${title}_

🗣️ *ARTISTA:* 
» _${artists}_

🌐 *URL*: 
» _${link}_

💚 *URL DE DESCARGA:* 
» _${json2.result.link}_

🎶 *Enviando canción...*
${wm}`

conn.sendFile(m.chat, thumbnail, 'error.jpg', spotifyi, fkontak, m)
//await conn.sendButton(m.chat, '🎧 *Ｓ Ｐ Ｏ Ｔ Ｉ Ｆ Ｙ* 🎧', spotifyi, thumbnail, [[lenguajeGB.smsConMenu(), `${usedPrefix}menu`]], m, frep)
let aa = await conn.sendMessage(m.chat, { audio: { url: json2.result.link }, fileName: `error.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
if (!aa) return conn.sendFile(m.chat, json2.result.link, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' }) 
} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}}
handler.command = /^(spotify|music)$/i
handler.limit = 1
handler.level = 3
export default handler*/
