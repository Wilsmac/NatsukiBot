import { youtubedl, youtubedlv2 } from '@bochilteam/scraper' 
import fetch from 'node-fetch'
import yts from 'yt-search'
import ytdl from 'ytdl-core'
let handler = async (m, { text, conn, args, usedPrefix, command }) => {
if (!args[0]) return conn.reply(m.chat, `${lenguajeCD['smsAvisoMG']()}${mid.smsMalused7}\n*${usedPrefix + command} https://youtu.be/gJRzCi0f0*`, fkontak, m)
let youtubeLink = '';
if (args[0].includes('you')) {
youtubeLink = args[0]; 
} else {
const index = parseInt(args[0]) - 1;
if (index >= 0) {
if (Array.isArray(global.videoList) && global.videoList.length > 0) {
const matchingItem = global.videoList.find(item => item.from === m.sender);
if (matchingItem) {
if (index < matchingItem.urls.length) {
youtubeLink = matchingItem.urls[index];
} else {
throw `${lenguajeCD['smsAvisoFG']()}${mid.smsYT} ${matchingItem.urls.length}*`;
}} else {
throw `${lenguajeCD['smsAvisoMG']()} ${mid.smsY2(usedPrefix, command)} ${usedPrefix}playlist <texto>*`;
}} else {
throw `${lenguajeCD['smsAvisoMG']()}${mid.smsY2(usedPrefix, command)} ${usedPrefix}playlist <texto>*`;
}}}  
await conn.reply(m.chat, lenguajeGB['smsAvisoEG']() + mid.smsAud, estilo2, m)
try {
const res = await fetch(`https://api.siputzx.my.id/api/d/ytmp3?url=${encodeURIComponent(args)}`);
let { data } = await res.json();
await conn.sendMessage(m.chat, { audio: { url: data.dl }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch {
try {
const axeelUrl = `https://axeel.my.id/api/download/audio?url=${encodeURIComponent(args)}`;
const axeelResponse = await fetch(axeelUrl);
const axeelData = await axeelResponse.json();
if (!axeelData || !axeelData.downloads?.url) throw new Error();
await conn.sendMessage(m.chat, { audio: { url: axeelData.downloads.url }, mimetype: 'audio/mpeg' }, { quoted: m });
} catch {
try {
let searchh = await yts(youtubeLink)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
await conn.sendMessage(m.chat, { audio: { url: ress.url}, mimetype: 'audio/mpeg' }, { quoted: m})
} catch {
try {
const ryzenUrl = `https://api.ryzendesu.vip/api/downloader/ytmp3?url=${encodeURIComponent(videoUrl)}`;
const ryzenResponse = await fetch(ryzenUrl);
const ryzenData = await ryzenResponse.json();
if (ryzenData.status === 'tunnel' && ryzenData.url) {
const downloadUrl = ryzenData.url;
await conn.sendMessage(m.chat, { audio: { url: downloadUrl }, mimetype: 'audio/mpeg' }, { quoted: m });
}
} catch {
try {          
const res = await fetch(`https://api.zenkey.my.id/api/download/ytmp3?apikey=zenkey&url=${encodeURIComponent(args)}`)
let { result } = await res.json()
await conn.sendMessage(m.chat, { audio: { url: await result.download.url }, mimetype: 'audio/mpeg' }, { quoted: m })
} catch {
try {
let q = '128kbps'
let v = youtubeLink
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' })
} catch {
try {
let lolhuman = await fetch(`${apis}/download/ytmp3?&url=${youtubeLink}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })  
} catch (e) {
await conn.reply(m.chat, `${lenguajeCD?['smsMalError3']()}#report ${lenguajeCD['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, estilo2, m)
console.log(`❗❗ ${lenguajeCD['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}
}}}}}}}
handler.command = /^audio|fgmp3|dlmp3|getaud|yt(a|mp3)$/i
export default handler