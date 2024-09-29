import fg from 'api-dylux'
import yts from 'yt-search'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch' 
let limit = 200

let handler = async (m, { conn: star, args, text, isPrems, isOwner, usedPrefix, command }) => {
if (!args || !args[0]) return star.reply(m.chat, '🚩 Ingresa el enlace del vídeo de YouTube junto al comando.\n\n`Ejemplo:`\n' + `> *${usedPrefix + command}* https://youtu.be/QSvaCSt8ixs`, m, canalofc)
if (!args[0].match(/youtu/gi)) return star.reply(m.chat, `Verifica que el enlace sea de YouTube.`, m, canalofc).then(_ => m.react('✖️'))
let q = '128kbps'


await m.react('🕓')
try {
let v = args[0]
let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
let dl_url = await yt.audio[q].download()
let title = await yt.title
let size = await yt.audio[q].fileSizeH
let thumbnail = await yt.thumbnail

let img = await (await fetch(`${thumbnail}`)).buffer()  
if (size.split('MB')[0] >= limit) return star.reply(m.chat, `El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, rcanal).then(_ => m.react('✖️'))
        let txt = '`乂  Y O U T U B E  -  M P 3 D O C`\n\n'
       txt += `        ✩   *Titulo* : ${title}\n`
       txt += `        ✩   *Calidad* : ${q}\n`
       txt += `        ✩   *Tamaño* : ${size}\n\n`
       txt += `> *- ↻ El audio se esta enviando espera un momento, soy lenta. . .*`
await star.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, canalofc)
await star.sendMessage(m.chat, { document: { url: dl_url }, caption: '', mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: m })
await m.react('✅')
} catch {
try {
let yt = await fg.yta(args[0], q)
let { title, dl_url, size } = yt 
let vid = (await yts(text)).all[0]
let { thumbnail, url } = vid

let img = await (await fetch(`${vid.thumbnail}`)).buffer()  
if (size.split('MB')[0] >= limit) return star.reply(m.chat, `El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, rcanal).then(_ => m.react('✖️'))
        let txt = '`乂  Y O U T U B E  -  M P 3 D O C`\n\n'
       txt += `        ✩   *Titulo* : ${title}\n`
       txt += `        ✩   *Calidad* : ${q}\n`
       txt += `        ✩   *Tamaño* : ${size}\n\n`
       txt += `> *- ↻ El audio se esta enviando espera un momento, soy lenta. . .*`
await star.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, canalofc)
await star.sendMessage(m.chat, { document: { url: dl_url }, caption: '', mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: m })
await m.react('✅')
} catch {
try {
let yt = await fg.ytmp3(args[0], q)
let { title, dl_url, size, thumb } = yt 

let img = await (await fetch(`${thumb}`)).buffer()
if (size.split('MB')[0] >= limit) return star.reply(m.chat, `El archivo pesa mas de ${limit} MB, se canceló la Descarga.`, m, canalofc).then(_ => m.react('✖️'))
        let txt = '`乂  Y O U T U B E  -  M P 3 D O C`\n\n'
       txt += `        ✩   *Titulo* : ${title}\n`
       txt += `        ✩   *Calidad* : ${q}\n`
       txt += `        ✩   *Tamaño* : ${size}\n\n`
       txt += `> *- ↻ El audio se esta enviando espera un momento, soy lenta. . .*`
await star.sendFile(m.chat, img, 'thumbnail.jpg', txt, m, null, canalofc)
await star.sendMessage(m.chat, { document: { url: dl_url }, caption: '', mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, { quoted: m })
await m.react('✅')
} catch {
await m.react('✖️')
}}}}
handler.help = ['ytmp3doc *<link yt>*']
handler.tags = ['downloader']
handler.command = ['ytmp3doc', 'ytadoc'] 
//handler.limit = 1
handler.register = true 

export default handler



/*import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args || !args[0]) return conn.reply(m.chat, `${lenguajeGB['smsAvisoMG']()}${mid.smsMalused7}\n*${usedPrefix + command} https://youtu.be/85xI8WFMIUY*`, fkontak, m)
try { 
const yt_play = await search(args.join(' '))
let additionalText = ''
if (command === 'play3' || command == 'playaudiodoc') {
additionalText = '𝘼𝙐𝘿𝙄𝙊'
} else if (command === 'play4' || command == 'playvideodoc') {
additionalText = '𝙑𝙄𝘿𝙀𝙊'
}
const texto1 = `✧═══ ${vs} ═══✧

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
─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
🌹 𝑬𝑵𝑽𝑰𝑨𝑫𝑶 ${additionalText}, 𝑨𝑮𝑼𝑨𝑹𝑫𝑬 𝑼𝑵 𝑴𝑶𝑴𝑬𝑵𝑻𝑶 𝑷𝑶𝑹 𝑭𝑨𝑽𝑶𝑹..
*✧══════•❁❀❁•══════✧*`.trim()
await conn.sendMessage(m.chat, {
text: texto1,
contextInfo: {
externalAdReply: {
title: yt_play[0].title,
body: fantasy,
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })
if (command == 'play3' || command == 'playaudiodoc') {
try {
const q = '128kbps';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.audio[q].download();
const ttl = await yt.title;
const size = await yt.audio[q].fileSizeH;
let cap = `╭━❰  ${wm}  ❱━⬣\n┃📥 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝘿𝙇 📥\n┃ও *${mid.smsYT1}:* \n┃» ${ttl}\n┃﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘\n┃ও *${mid.smsYT11}:*\n┃» ${size}\n╰━━━━━❰ *𓃠 ${vs}* ❱━━━━⬣`.trim()
await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: cap, mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: ttl,
body: "",
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })   
} catch {
try {
const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
const lolh = await lolhuman.json();
const n = lolh.result.title || 'error';
await conn.sendMessage(m.chat, {document: {url: lolh.result.link}, caption: `╔╦══• •✠•${wm}•✠ • •══╦╗\n┃📥 YOUTUBE DL 📥\n┃ও *TÍTULO | TITLE:* \n┃» ${n}\n┃﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘\n┃ও *PESO | SIZE:*\n┃» ${n2}\n╚╩══• •✠•${wm}•✠ • •══╩╝`, fileName: `${n}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
/*await conn.sendMessage(m.chat, { document: { url: lolh.result.link }, caption: `╔╦══• •✠•${wm}•✠ • •══╦╗\n┃📥 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝘿𝙇 📥\n┃ও *${mid.smsYT1}:* \n┃» ${n}\n╚╩══• •✠•${wm}•✠ • •══╩╝`, fileName: `${n}.mp3`, mimetype: 'audio/mpeg', contextInfo: {
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
const searchh = await yts(yt_play[0].url);
const __res = searchh.all.map((v) => v).filter((v) => v.type == 'video');
const infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId);
const ress = await ytdl.chooseFormat(infoo.formats, {filter: 'audioonly'});
await conn.sendMessage(m.chat, { document: { url: ress.url }, fileName: __res[0].title + '.mp3', mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: __res[0].title,
body: "",
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })   
} catch {
}}}}
if (command == 'play4' || command == 'playvideodoc') {
try {
const qu = '360';
const q = qu + 'p';
const v = yt_play[0].url;
const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
const dl_url = await yt.video[q].download();
const ttl = await yt.title;
const size = await yt.video[q].fileSizeH;
await conn.sendMessage(m.chat, { document: { url: dl_url }, caption: `╔╦══• •✠•${wm}•✠ • •══╦╗\n┃📥 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝘿𝙇 📥\n┃ও *${mid.smsYT1}:* \n┃» ${ttl}\n┃﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘\n┃ও *${mid.smsYT11}:*\n┃» ${size}\n╚╩══• •✠•${wm}•✠ • •══╩╝`, fileName: `${ttl}.mp3`, mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: ttl,
body: "",
thumbnailUrl: yt_play[0].thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m })   
} catch {
try {
const mediaa = await ytMp4(yt_play[0].url);
await await conn.sendMessage(m.chat, {document: {url: dl_url}, caption: cap, mimetype: 'video/mp4', fileName: ttl + `.mp4`}, {quoted: m});
} catch {
try {
const lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${yt_play[0].url}`);
const lolh = await lolhuman.json();
const n = lolh.result.title || 'error';
const n2 = lolh.result.link;
const n3 = lolh.result.size;
const n4 = lolh.result.thumbnail;
await conn.sendMessage(m.chat, {document: {url: n2}, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `╭━❰  ${wm}  ❱━⬣\n┃📥 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝘿𝙇 📥\n┃ও *${mid.smsYT1}:* \n┃» ${n}\n┃﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘\n┃ও *${mid.smsYT11}:*\n┃» ${n3}\n╰━━━━━❰ *𓃠 ${vs}* ❱━━━━⬣`, thumbnail: await fetch(n4)}, {quoted: m});
} catch {
}}}}
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, fkontak, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
handler.limit = 0
}}
handler.help = ['play3', 'play4'].map((v) => v + ' < busqueda >');
handler.tags = ['downloader'];
handler.command = /^(playaudiodoc|playdoc|playdoc2|play3|play4|playvideodoc)$/i;
handler.limit = 3
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

function bytesToSize(bytes) {
return new Promise((resolve, reject) => {
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
if (bytes === 0) return 'n/a';
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
if (i === 0) resolve(`${bytes} ${sizes[i]}`);
resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
})}

async function ytMp3(url) {
return new Promise((resolve, reject) => {
ytdl.getInfo(url).then(async (getUrl) => {
const result = [];
for (let i = 0; i < getUrl.formats.length; i++) {
const item = getUrl.formats[i];
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
const {contentLength} = item;
const bytes = await bytesToSize(contentLength);
result[i] = {audio: item.url, size: bytes};
}}
const resultFix = result.filter((x) => x.audio != undefined && x.size != undefined);
const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
const tinyUrl = tiny.data;
const title = getUrl.videoDetails.title;
const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({title, result: tinyUrl, result2: resultFix, thumb});
}).catch(reject);
})}

async function ytMp4(url) {
return new Promise(async (resolve, reject) => {
ytdl.getInfo(url).then(async (getUrl) => {
const result = [];
for (let i = 0; i < getUrl.formats.length; i++) {
const item = getUrl.formats[i];
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
const {qualityLabel, contentLength} = item;
const bytes = await bytesToSize(contentLength);
result[i] = {video: item.url, quality: qualityLabel, size: bytes};
}}
const resultFix = result.filter((x) => x.video != undefined && x.size != undefined && x.quality != undefined);
const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
const tinyUrl = tiny.data;
const title = getUrl.videoDetails.title;
const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({title, result: tinyUrl, rersult2: resultFix[0].video, thumb});
}).catch(reject);
})}

async function ytPlay(query) {
return new Promise((resolve, reject) => {
yts(query).then(async (getData) => {
const result = getData.videos.slice( 0, 5 );
const url = [];
for (let i = 0; i < result.length; i++) {
url.push(result[i].url);
}
const random = url[0];
const getAudio = await ytMp3(random);
resolve(getAudio);
}).catch(reject);
})}

async function ytPlayVid(query) {
return new Promise((resolve, reject) => {
yts(query).then(async (getData) => {
const result = getData.videos.slice( 0, 5 );
const url = [];
for (let i = 0; i < result.length; i++) {
url.push(result[i].url);
}
const random = url[0];
const getVideo = await ytMp4(random);
resolve(getVideo);
}).catch(reject);
})}*/