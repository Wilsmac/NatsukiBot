import { cpus as _cpus, totalmem, freemem } from 'os'
import util from 'util'
import os from 'os'
import fetch from 'node-fetch'
import osu from 'node-os-utils'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'
let format = sizeFormatter({
std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
})
let handler = async (m, { conn: natsuki, usedPrefix, command, isRowner}) => {
try {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let grupos = [nna, nn, nnn, nnnt, nnntt, nnnttt]
let fantasy = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' ', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(fantasy.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: ' 𝐅𝐚𝐧𝐭𝐚𝐬𝐲𝐁𝐨𝐭-𝐌𝐃 ', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]

let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000 }
  
let muptime = clockString(_muptime)
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
const used = process.memoryUsage()
const cpus = _cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})

const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
  
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}})

let old = performance.now()
await natsuki.reply(m.chat, `𝙿𝚁𝚄𝙴𝙱𝙰 𝙳𝙴 𝚅𝙴𝙻𝙾𝙲𝙸𝙳𝙰𝙳 𝙴𝚇𝙸𝚃𝙾𝚂𝙰, 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁...🚀 `, fkontak, {contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝐅𝐚𝐧𝐭𝐚𝐬𝐲𝐁𝐨𝐭-𝐌𝐃 ', previewType: 0, thumbnail: fantasyImg.getRandom(), sourceUrl: canalofc }}})

let neww = performance.now()
let speed = neww - old
let caption = `*[ 𝚅𝙴𝙻𝙾𝙲𝙸𝙳𝙰𝙳 ]*

 *${Math.round(neww - old)}* ms
 *${speed}* ms

*${htjava}* 𝚃𝙸𝙴𝙼𝙿𝙾 𝙳𝙴 𝙴𝙹𝙴𝙲𝚄𝙲𝙸𝙾𝙽
${muptime}
${readMore}
*${htjava} C H A T S*
• *${groupsIn.length}* \`\`\`Grupales : Groups\`\`\`
• *${groupsIn.length}* \`\`\`Grupos Unidos : Join Groups\`\`\`
• *${groupsIn.length - groupsIn.length}* \`\`\`Grupos Restantes : Groups Left\`\`\`
• *${chats.length - groupsIn.length}* \`\`\`Chats Privados : Chats Private\`\`\`
• *${chats.length}* \`\`\`Total Chats\`\`\`

*${htjava} S E R V I D O R*
*🗂️ RAM:* ${format(totalmem() - freemem())} / ${format(totalmem())}
*🗃️ RAM Libre:* ${format(freemem())}

*💻 Plataforma :* \`\`\`${os.platform()}\`\`\`
*⚙️ Servidor :* _${os.hostname()}_
${readMore}
*NodeJS Uso de memoria : Memory Usage*
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}

${cpus[0] ? `*Uso total de la CPU*
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

*CPU Core(s) Uso (${cpus.length} Core CPU)*
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`
//natsuki.sendFile(m.chat, fantasyVid.getRandom(), 'fantasy.mp4', caption, fkontak)
/*await natsuki.sendFile(m.chat, gataImg.getRandom(), 'pp.jpg', caption, fkontak, false, { contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝐅𝐚𝐧𝐭𝐚𝐬𝐲𝐁𝐨𝐭-𝐌𝐃 ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}})*/
await natsuki.sendButton(m.chat, wm, caption, fantasy.getRandom(), [['𝙼 𝙴 𝙽 𝚄', '/menu']], m, dos.getRandom())
} catch (e) {
await natsuki.reply(m.chat, `${fg}*ALGO SALIÓ MAL.*\n\n\`\`\`REPORTE ESTE COMANDO ${usedPrefix + command} CON EL COMANDO ${usedPrefix}reporte\`\`\``, m)
}}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|velocidad|rapidez|velocity)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [' ' + d, ' *Días*\n ', h, ' *Horas*\n ', m, ' *Minuto*\n ', s, ' *Segundo* '].map(v => v.toString().padStart(2, 0)).join('')
}

