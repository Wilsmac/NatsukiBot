import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
if (!text) throw `> ⓘ 𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙾 𝚃𝙸𝚃𝚄𝙻𝙾 𝙳𝙴 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾́𝙽 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴 𝚀𝚄𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝚄𝙴, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command} \`Ari Abdul Babydoll\``
try { 
const yt_play = await search(args.join(' '))
const texto1 = `
*AQUI ESTA* @${m.sender.replace(/@.+/, '')}
✨⃞⃝⃟➥ 𝑻𝑰𝑻𝑼𝑳𝑶
   ${yt_play[0].title}
─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
✨⃞⃝⃟➥ 𝑷𝑼𝑩𝑳𝑰𝑪𝑨𝑫𝑶
  ${yt_play[0].ago}
─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
✨⃞⃝⃟➥ 𝑫𝑼𝑹𝑨𝑪𝑰𝑶𝑵
  ${secondString(yt_play[0].duration.seconds)}
─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
✨⃞⃝⃟➥ 𝑽𝑰𝑺𝑻𝑨𝑺
  ${MilesNumber(yt_play[0].views)}
─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
✨⃞⃝⃟➥ 𝑼𝑹𝑳
𖤍 ${yt_play[0].url}
*✧══════•❁❀❁•══════✧*`.trim()

await conn.sendButton(m.chat, wm, texto1, yt_play[0].thumbnail, [['𝙼 𝙴 𝙽 𝚄', `${usedPrefix}menu`]], null, null, m)

let listSections = [];             
listSections.push({
title: `𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙴 𝚂𝚄 𝚃𝙸𝙿𝙾 𝙳𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰 (𝙉𝙖𝙩𝙨𝙪𝙠𝙞𝘽𝙤𝙩)`,
rows: [{ header: "𝙰 𝚄 𝙳 𝙸 𝙾 (Opcion 1)", title: "", id: `${usedPrefix}yta ${yt_play[0].url}`, description: `${yt_play[0].title}\n` }, /*{ header: "𝙰 𝚄 𝙳 𝙸 𝙾 (Opcion 2)", title: "", id: `${usedPrefix}play.1 ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },*/
{ header: "𝙰 𝚄 𝙳 𝙸 𝙾  𝐃 𝐎 𝐂", title: "", id: `${usedPrefix}ytmp3doc ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
{ header: "𝚅 𝙸 𝙳 𝙴 𝙾 (Opcion 1)", title: "", id: `${usedPrefix}ytv ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
/*{ header: "𝚅 𝙸 𝙳 𝙴 𝙾 (Opcion 2)", title: "", id: `${usedPrefix}play.2 ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },*/
{header: "𝚅 𝙸 𝙳 𝙴 𝙾  𝐃 𝐎 𝐂", title: "", id: `${usedPrefix}ytmp4doc ${yt_play[0].url}`, description: `${yt_play[0].title}\n`}
]});


await conn.sendList(m.chat, `*𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙴 𝚂𝚄 𝚃𝙸𝙿𝙾 𝙳𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰, 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙱𝚄𝚂𝚀𝚄𝙴𝙳𝙰:  ${text}*`, `\n𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚂`, `𝙴 𝙻 𝙴 𝙹 𝙸 𝚁`, listSections, {quoted: estilo2});
} catch (e) {
await conn.reply(m.chat, `${lenguajeCD['smsMalError3']()}#report ${lenguajeCD['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, estilo2, m)
console.log(`❗❗ ${lenguajeCD['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
handler.limit = 0
}}
handler.command = ['play', 'play2', 'play3', 'play4']
//handler.limit = 3
//handler.register = true 
export default handler;

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
  }







/*import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn: natsuki, command, args, text, usedPrefix}) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) throw `> ⓘ 𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙾 𝚃𝙸𝚃𝚄𝙻𝙾 𝙳𝙴 𝙻𝙰 𝙲𝙰𝙽𝙲𝙸𝙾́𝙽 𝚀𝚄𝙴 𝚀𝚄𝙸𝙴𝚁𝙴 𝚀𝚄𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝚄𝙴, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command} \`Ari Abdul Babydoll\``
try { 
const yt_play = await search(args.join(' '))
const texto1 = `
*AQUI ESTA* @${m.sender.replace(/@.+/, '')}
✨⃞⃝⃟➥ 𝑻𝑰𝑻𝑼𝑳𝑶
   ${yt_play[0].title}
─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
✨⃞⃝⃟➥ 𝑷𝑼𝑩𝑳𝑰𝑪𝑨𝑫𝑶
  ${yt_play[0].ago}
─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
✨⃞⃝⃟➥ 𝑫𝑼𝑹𝑨𝑪𝑰𝑶𝑵
  ${secondString(yt_play[0].duration.seconds)}
─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
✨⃞⃝⃟➥ 𝑽𝑰𝑺𝑻𝑨𝑺
  ${MilesNumber(yt_play[0].views)}
─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
✨⃞⃝⃟➥ 𝑼𝑹𝑳
𖤍 ${yt_play[0].url}
*✧══════•❁❀❁•══════✧*`.trim()

await natsuki.sendButton(m.chat, wm, texto1, yt_play[0].thumbnail, [['𝙼 𝙴 𝙽 𝚄', '/menu']], null, null, m)

let listSections = [];             
listSections.push({
title: ' 𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙴 𝚂𝚄 𝚃𝙸𝙿𝙾 𝙳𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰 (𝙉𝙖𝙩𝙨𝙪𝙠𝙞𝘽𝙤𝙩)',
rows: [{ header: "𝙰 𝚄 𝙳 𝙸 𝙾 (Opcion 1)", title: "", id: `${usedPrefix}yta ${yt_play[0].url}`, description: `${yt_play[0].title}\n` }, { header: "𝙰 𝚄 𝙳 𝙸 𝙾 (Opcion 2)", title: "", id: `${usedPrefix}play.1 ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
{ header: "𝙰 𝚄 𝙳 𝙸 𝙾  𝐃 𝐎 𝐂", title: "", id: `${usedPrefix}ytmp3doc ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
{ header: "𝚅 𝙸 𝙳 𝙴 𝙾 (Opcion 1)", title: "", id: `${usedPrefix}ytv ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
{ header: "𝚅 𝙸 𝙳 𝙴 𝙾 (Opcion 2)", title: "", id: `${usedPrefix}play.2 ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
{header: "𝚅 𝙸 𝙳 𝙴 𝙾  𝐃 𝐎 𝐂", title: "", id: `${usedPrefix}ytmp4doc ${yt_play[0].url}`, description: `${yt_play[0].title}\n`}
]});

listSections.push({
  text: `*𝙴𝙻𝙸𝙹𝙰 𝚀𝚄𝙴 𝚅𝙰 𝙰 𝙷𝙰𝙲𝙴𝚁 𝙲𝙾𝙽  ${text}*`,
  footer: global.wm,
  title: ` 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚂 `,
  buttonText: `𝙴𝙻𝙸𝙹𝙰`,
  sections
}) 


await natsuki.sendList(m.chat, `*𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙴 𝚂𝚄 𝚃𝙸𝙿𝙾 𝙳𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰, 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙱𝚄𝚂𝚀𝚄𝙴𝙳𝙰:  ${text}*`, `\n𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚂* `, `𝙴𝙻𝙴𝙹𝙸𝚁`, listSections, {quoted: fkontak});
} catch (e) {
await natsuki.reply(m.chat, `${lenguajeCD['smsMalError3']()}#report ${lenguajeCD['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, fkontak, m)
console.log(`❗❗ ${lenguajeCD['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
handler.limit = 0
}}
handler.command = ['play', 'play2', 'play3', 'play4']
//handler.limit = 3
//handler.register = true 
export default handler;

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
}


import fetch from "node-fetch"
import yts from "yt-search"
import ytdl from 'ytdl-core'
import axios from 'axios'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, command, args, text, usedPrefix }) => {
let q, v, yt, dl_url, ttl, size, lolhuman, lolh, n, n2, n3, n4, cap, qu, currentQuality   
if (!text) throw `${lenguajeGB['smsAvisoMG']()}${mid.smsMalused4}\n*${usedPrefix + command} Billie Eilish - Bellyache*`
try {
const yt_play = await search(args.join(" "))
let additionalText = ''
if (command === 'play') { 
additionalText = '𝐀𝐮𝐝𝐢𝐨 '
} else if (command === 'play2') {
additionalText = '𝐕𝐢𝐝𝐞𝐨 '}
let captionvid = `
✨⃞⃝⃟➥ 𝑻𝑰𝑻𝑼𝑳𝑶
   ${yt_play[0].title}
─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
✨⃞⃝⃟➥ 𝑷𝑼𝑩𝑳𝑰𝑪𝑨𝑫𝑶
  ${yt_play[0].ago}
─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
✨⃞⃝⃟➥ 𝑫𝑼𝑹𝑨𝑪𝑰𝑶𝑵
  ${secondString(yt_play[0].duration.seconds)}
─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
✨⃞⃝⃟➥ 𝑽𝑰𝑺𝑻𝑨𝑺
  ${MilesNumber(yt_play[0].views)}
─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
✨⃞⃝⃟➥ 𝑼𝑹𝑳
𖤍 ${yt_play[0].url}
*✧══════•❁❀❁•══════✧*`  
await conn.sendMessage(m.chat, {
text: captionvid,
contextInfo: {
externalAdReply: {
title: `𝐄𝐧 𝐮𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨 𝐞𝐧𝐯𝐢𝐨 𝐬𝐮: ${additionalText}`,
body: fantasy,
thumbnailUrl: `${yt_play[0].url}`, 
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: true
}}} , { quoted: m })
if (command == 'play') {	
try {
let q = '128kbps'
let v = yt_play[0].url
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
const dl_url = await yt.audio[q].download()
const ttl = await yt.title
const size = await yt.audio[q].fileSizeH
await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: ttl,
body: "",
thumbnailUrl: `${yt_play[0].url}`, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })   
} catch {
try {
const dataRE = await fetch(`https://api.akuari.my.id/downloader/youtube?link=${yt_play[0].url}`)
const dataRET = await dataRE.json()
await conn.sendMessage(m.chat, { audio: { url: dataRET.mp3[1].url }, mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: `𝐄𝐧 𝐮𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨 𝐞𝐧𝐯𝐢𝐨 𝐬𝐮: ${additionalText}`,
body: "",
thumbnailUrl: `${yt_play[0].url}`, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })   
} catch {
try {
let humanLol = await fetch(`https://api.lolhuman.xyz/api/ytplay?apikey=${lolkeysapi}&query=${yt_play[0].title}`)
let humanRET = await humanLol.json()
await conn.sendMessage(m.chat, { audio: { url: humanRET.result.audio.link }, mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: yt_play[0].title,
body: "",
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })       
} catch {     
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
await conn.sendMessage(m.chat, { audio: { url: lolh.result.link}, mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: n,
body: "",
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })   
} catch {   
try {
let searchh = await yts(yt_play[0].url)
let __res = searchh.all.map(v => v).filter(v => v.type == "video")
let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId)
let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' })
await conn.sendMessage(m.chat, { audio: { url: ress.url }, mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: __res[0].title,
body: "",
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })   
//conn.sendMessage(m.chat, { audio: { url: ress.url }, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })  
} catch {
}}}}}
}  
if (command == 'play2') {
try {
let qu = '360'
let q = qu + 'p'
let v = yt_play[0].url
const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
const size = await yt.video[q].fileSizeH
await await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `╔╦══• •✠•${wm}•✠ • •══╦╗\n • ${mid.smsYT1}\n┃ ${ttl}\n╚╩══• •✠•${fantasy}•✠ • •══╩╝`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
} catch {   
try {  
let mediaa = await ytMp4(yt_play[0].url)
await conn.sendMessage(m.chat, { video: { url: mediaa.result }, fileName: `error.mp4`, caption: `_${wm}_`, thumbnail: mediaa.thumb, mimetype: 'video/mp4' }, { quoted: m })     
} catch {  
try {
let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`)    
let lolh = await lolhuman.json()
let n = lolh.result.title || 'error'
let n2 = lolh.result.link
let n3 = lolh.result.size
let n4 = lolh.result.thumbnail
await conn.sendMessage(m.chat, { video: { url: n2 }, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `╔╦══• •✠•${wm}•✠ • •══╦╗\n┃⏤͟͟͞͞★꙲⃝͟🌻 ${mid.smsYT1}\n┃ ${n}\n╚╩══• •✠•${fantasy}•✠ • •══╩╝`, thumbnail: await fetch(n4) }, { quoted: m })
} catch {
}}}    
}} catch {
handler.limit = 0
}}
handler.command = ['play', 'play2']
handler.exp = 500
handler.limit = 1
export default handler

async function search(query, options = {}) {
const search = await yts.search({ query, hl: "es", gl: "ES", ...options });
return search.videos};

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = "$1.";
let arr = number.toString().split(".");
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join(".") : arr[0]};

function secondString(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " día, " : " días, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " horas, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " minutos, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " segundos") : "";
return dDisplay + hDisplay + mDisplay + sDisplay};

function bytesToSize(bytes) {
return new Promise((resolve, reject) => {
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
if (bytes === 0) return 'n/a';
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
if (i === 0) resolve(`${bytes} ${sizes[i]}`);
resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`)})};

async function ytMp3(url) {
return new Promise((resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
let { contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { audio: item.url, size: bytes }}};
let resultFix = result.filter(x => x.audio != undefined && x.size != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, result2: resultFix, thumb })}).catch(reject)})};

async function ytMp4(url) {
return new Promise(async(resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
let { qualityLabel, contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { video: item.url, quality: qualityLabel, size: bytes }}};
let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, rersult2: resultFix[0].video, thumb })}).catch(reject)})};

async function ytPlay(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getAudio = await ytMp3(random);
resolve(getAudio)}).catch(reject)})};

async function ytPlayVid(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getVideo = await ytMp4(random);
resolve(getVideo)}).catch(reject)})};*/