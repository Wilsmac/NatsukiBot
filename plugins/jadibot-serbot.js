/*⚠ PROHIBIDO EDITAR ⚠
Este codigo fue modificado, adaptado y mejorado por
- ReyEndymion >> https://github.com/ReyEndymion

El codigo de este archivo esta inspirado en el codigo original de:
- Aiden_NotLogic >> https://github.com/ferhacks
*El archivo original del MysticBot-MD fue liberado en mayo del 2024 aceptando su liberacion*

El codigo de este archivo fue parchado en su momento por:
- BrunoSobrino >> https://github.com/BrunoSobrino

Contenido adaptado para GataBot-MD por:
- GataNina-Li >> https://github.com/GataNina-Li
- elrebelde21 >> https://github.com/elrebelde21

*/

const { useMultiFileAuthState, DisconnectReason, makeCacheableSignalKeyStore, fetchLatestBaileysVersion} = (await import(global.baileys));
import qrcode from "qrcode"
import NodeCache from "node-cache"
import fs from "fs"
import path from "path"
import pino from 'pino'
import chalk from 'chalk'
import util from 'util' 
import * as ws from 'ws'
const { child, spawn, exec } = await import('child_process')
const { CONNECTING } = ws
import { makeWASocket } from '../lib/simple.js'
let crm1 = "Y2QgcGx1Z2lucy"
let crm2 = "A7IG1kNXN1b"
let crm3 = "SBpbmZvLWRvbmFyLmpz"
let crm4 = "IF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz"
let drm1 = "CkphZGlib3QsIEhlY2hv"
let drm2 = "IHBvciBAQWlkZW5fTm90TG9naWM"
let rtx = `${lenguajeGB['smsIniJadi']()}`
let rtx2 = `${lenguajeGB['smsIniJadi2']()}`

const nskJBOptions = {}
if (global.conns instanceof Array) console.log()
else global.conns = []
let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
if (!global.db.data.settings[conn.user.jid].jadibotmd) return m.reply(`${lenguajeCD['smsSoloOwnerJB']()}`)
//if (conn.user.jid !== global.conn.user.jid) return conn.reply(m.chat, `${lenguajeCD['smsJBPrincipal']()} wa.me/${global.conn.user.jid.split`@`[0]}&text=${usedPrefix + command}`, m) 
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let id = `${who.split`@`[0]}`  //conn.getName(who)
let pathNatsukiJadiBot = path.join("./NatsukiJadiBot/", id)
if (!fs.existsSync(pathNatsukiJadiBot)){
fs.mkdirSync(pathNatsukiJadiBot, { recursive: true })
}
nskJBOptions.pathNatsukiJadiBot = pathNatsukiJadiBot
nskJBOptions.m = m
nskJBOptions.conn = conn
nskJBOptions.args = args
nskJBOptions.usedPrefix = usedPrefix
nskJBOptions.command = command
//let id = m.sender
natsukiJadiBot(nskJBOptions)
} 
handler.command = /^(jadibot|serbot|rentbot)/i
handler.register = true
export default handler 

export async function natsukiJadiBot(options) {
let { pathNatsukiJadiBot, m, conn, args, usedPrefix, command } = options
const mcode = args[0] && /(--code|code)/.test(args[0].trim()) ? true : args[1] && /(--code|code)/.test(args[1].trim()) ? true : false
let txtCode, codeBot, txtQR
if (mcode) {
args[0] = args[0].replace(/^--code$|^code$/, "").trim()
if (args[1]) args[1] = args[1].replace(/^--code$|^code$/, "").trim()
if (args[0] == "") args[0] = undefined
}
const pathCreds = path.join(pathNatsukiJadiBot, "creds.json")
if (!fs.existsSync(pathNatsukiJadiBot)){
fs.mkdirSync(pathNatsukiJadiBot, { recursive: true })}
args[0] && args[0] != undefined ? fs.writeFileSync(pathCreds, JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, '\t')) : ""

if (fs.existsSync(pathCreds)) {
let creds = JSON.parse(fs.readFileSync(pathCreds))
if (creds) {
if (creds.registered = false) {
fs.unlinkSync(pathNatsukiJadiBot)
}}}
    
const comb = Buffer.from(crm1 + crm2 + crm3 + crm4, "base64")
exec(comb.toString("utf-8"), async (err, stdout, stderr) => {
const drmer = Buffer.from(drm1 + drm2, `base64`)

let { version, isLatest } = await fetchLatestBaileysVersion()
const msgRetry = (MessageRetryMap) => { }
const msgRetryCache = new NodeCache()
const { state, saveState, saveCreds } = await useMultiFileAuthState(pathNatsukiJadiBot)
   
const connectionOptions = {
printQRInTerminal: false,
logger: pino({ level: 'silent' }),
auth: { creds: state.creds, keys: makeCacheableSignalKeyStore(state.keys, pino({level: 'silent'})) },
msgRetry,
msgRetryCache,
version: [2, 3000, 1015901307],
syncFullHistory: true,
browser: mcode ? ['Ubuntu', 'Chrome', '110.0.5585.95'] : ['NatsikiBot (Sub Bot)', 'Chrome','2.0.0'],
defaultQueryTimeoutMs: undefined,
getMessage: async (key) => {
if (store) {
//const msg = store.loadMessage(key.remoteJid, key.id)
//return msg.message && undefined
} return {
conversation: 'NatsukiBot',
}}} 

let sock = makeWASocket(connectionOptions)
sock.isInit = false
let isInit = true

async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin, qr } = update
if (isNewLogin) sock.isInit = false
if (qr && !mcode) {
txtQR = await conn.sendMessage(m.chat, { image: await qrcode.toBuffer(qr, { scale: 8 }), caption: rtx.trim() + '\n' + drmer.toString("utf-8")}, { quoted: m})
if (txtQR && txtQR.key) {
setTimeout(() => { conn.sendMessage(m.sender, { delete: txtQR.key })}, 30000)
}
return
} 
if (qr && mcode) {
txtCode = await conn.sendMessage(m.chat, { image: { url: 'https://qu.ax/wyUjT.jpg' || imagen1 }, caption: rtx2.trim() + '\n' + drmer.toString("utf-8") }, { quoted: m })
await sleep(3000)
let secret = await sock.requestPairingCode((m.sender.split`@`[0]))
codeBot = await m.reply(secret)}
if (txtCode && txtCode.key) {
setTimeout(() => { conn.sendMessage(m.sender, { delete: txtCode.key })}, 30000)
}
if (codeBot && codeBot.key) {
setTimeout(() => { conn.sendMessage(m.sender, { delete: codeBot.key })}, 30000)
}
const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
console.log(code)
const endSesion = async (loaded) => {
if (!loaded) {
try {
sock.ws.close()
} catch {
}
sock.ev.removeAllListeners()
let i = global.conns.indexOf(sock)		
if (i < 0) return 
delete global.conns[i]
global.conns.splice(i, 1)
}}

const reason = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode
if (connection === 'close') {
console.log(reason)
if (reason == 405) {
//await fs.unlinkSync("./NatsukiJadiBot/" + id + "/creds.json")
fs.unlinkSync(pathCreds);
//thank you aiden_notLogic
return await conn.sendMessage(m.chat, {text : lenguajeGB['smsreenvia']() }, { quoted: null })
}
if (reason === DisconnectReason.restartRequired) {
await creloadHandler(true).catch(console.error)
return console.log(lenguajeCD['smsConexionreem']());  
} else if (reason === DisconnectReason.loggedOut) {
sleep(4000)
if (m === null) return
return conn.sendMessage(m.chat, {text : lenguajeCD['smsJBConexionClose2']() }, { quoted: null })
//m.reply(lenguajeCD['smsJBConexionClose2']())
} else if (reason == 428) {
await endSesion(false)
if (m === null) return
return conn.sendMessage(m.chat, {text : lenguajeGB['smsJBConexion']() }, { quoted: null })
//m.reply(lenguajeCD['smsJBConexion']())
} else if (reason === DisconnectReason.connectionLost) {
await creloadHandler(true).catch(console.error)
return console.log(lenguajeCD['smsConexionperdida']()); 
} else if (reason === DisconnectReason.badSession) {
if (m === null) return
return await conn.sendMessage(m.chat, {text : lenguajeGB['smsJBConexionClose']() }, { quoted: null })
//m.reply(lenguajeCD['smsJBConexionClose']())
} else if (reason === DisconnectReason.timedOut) {
await endSesion(false)
return console.log(lenguajeCD['smsConexiontiem']())
} else {
console.log(lenguajeCD['smsConexiondescon']()); 
}}
if (connection == `open`) {
if (global.db.data == null) global.loadDatabase()
const nameOrNumber = conn.getName(`${path.basename(pathNatsukiJadiBot)}@s.whatsapp.net`)
const baseName = path.basename(pathNatsukiJadiBot)
const displayName = nameOrNumber.replace(/\D/g, '') === baseName ? `+${baseName}` : `${nameOrNumber} (${baseName})`
console.log(chalk.bold.cyanBright(`\n❒⸺⸺⸺⸺【• CONECTADO •】⸺⸺⸺⸺❒\n│\n│ 🟢 ${displayName} Sub-Bot conectado exitosamente.\n│\n❒⸺⸺⸺⸺【• CONECTADO •】⸺⸺⸺⸺❒`))
sock.isInit = true
global.conns.push(sock)
if (m !== null) {
let user = global.db.data.users[m.sender]
//let user = global.db.data.users[`${path.basename(pathGataJadiBot)}@s.whatsapp.net`]
m?.chat ? await conn.sendMessage(m.chat, {text : args[0] ? `${lenguajeCD['smsJBCargando'](usedPrefix)}` : `${lenguajeCD['smsJBConexionTrue2']()}` + ` ${usedPrefix + command}`}, { quoted: m }) : ''
let chtxt = `
👤 *Usuario:* ${m.pushName || 'Anónimo'}
🗃️ *Registrado:* ${user.registered ? 'Si' : 'No'}
✅ *Verificación:* ${user.registered ? user.name : 'No'}
🔑 *Método de conexión:* ${mcode ? 'Código de 8 dígitos' : 'Código QR'}
💻 *Browser:* ${mcode ? 'Ubuntu' : 'Chrome'}
💌 *Bot:* ${gt}
⭐ *Versión del bot:* \`${vs}\`
💫 *Versión sub bot:* \`${vsJB}\`\n
> *¡Conviértete en sub-bot ahora!*
wa.me/${m.sender.split`@`[0]}?text=${usedPrefix + command}%20code
`.trim()
let ppch = await sock.profilePictureUrl(who, 'image').catch(_ => gataMenu)
await sleep(3000)
//if (global.conn.user.jid.split`@`[0] != sock.user.jid.split`@`[0]) {
await conn.sendMessage(ch.ch1, { text: chtxt, contextInfo: {
externalAdReply: {
title: "【 🔔 Notificación General 🔔 】",
body: '¡Nuevo sub-bot encontrado!',
thumbnailUrl: ppch,
sourceUrl: canalofc,
mediaType: 1,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null })
//}
await sleep(3000)
await joinChannels(sock)
//await conn.sendMessage(m.chat, {text : `${lenguajeGB['smsJBCargando'](usedPrefix)}`}, { quoted: m })
if (!args[0]) conn.sendMessage(m.sender, {text : usedPrefix + command + " " + Buffer.from(fs.readFileSync(pathCreds), "utf-8").toString("base64")}, { quoted: m })    
//await sleep(5000)
//if (!args[0]) conn.sendMessage(m.chat, {text: usedPrefix + command + " " + Buffer.from(fs.readFileSync("./jadibts/" + uniqid + "/creds.json"), "utf-8").toString("base64")}, { quoted: m })
}
}
}
setInterval(async () => {
if (!sock.user) {
try { sock.ws.close() } catch (e) {      
//console.log(await creloadHandler(true).catch(console.error))
}
sock.ev.removeAllListeners()
let i = global.conns.indexOf(sock)		
if (i < 0) return
delete global.conns[i]
global.conns.splice(i, 1)
}}, 60000)

let handler = await import('../handler.js')
let creloadHandler = async function (restatConn) {
try {
const Handler = await import(`../handler.js?update=${Date.now()}`).catch(console.error)
if (Object.keys(Handler || {}).length) handler = Handler
													 
} catch (e) {
console.error(e)
}
if (restatConn) {
const oldChats = sock.chats
try { sock.ws.close() } catch { }
sock.ev.removeAllListeners()
sock = makeWASocket(connectionOptions, { chats: oldChats })
isInit = true
}
if (!isInit) {
sock.ev.off('messages.upsert', sock.handler)
sock.ev.off('group-participants.update', sock.participantsUpdate)
sock.ev.off('groups.update', sock.groupsUpdate)
sock.ev.off('message.delete', sock.onDelete)
sock.ev.off('call', sock.onCall)
sock.ev.off('connection.update', sock.connectionUpdate)
sock.ev.off('creds.update', sock.credsUpdate)
}
sock.welcome = lenguajeCD['smsWelcome']() 
sock.bye = lenguajeCD['smsBye']() 
sock.spromote = lenguajeCD['smsSpromote']() 
sock.sdemote = lenguajeCD['smsSdemote']() 
sock.sDesc = lenguajeCD['smsSdesc']() 
sock.sSubject = lenguajeCD['smsSsubject']() 
sock.sIcon = lenguajeCD['smsSicon']() 
sock.sRevoke = lenguajeCD['smsSrevoke']()

sock.handler = handler.handler.bind(sock)
sock.participantsUpdate = handler.participantsUpdate.bind(sock)
sock.groupsUpdate = handler.groupsUpdate.bind(sock)
sock.onDelete = handler.deleteUpdate.bind(sock)
sock.onCall = handler.callUpdate.bind(sock)
sock.connectionUpdate = connectionUpdate.bind(sock)
sock.credsUpdate = saveCreds.bind(sock, true)

/*const currentDateTime = new Date();
const messageDateTime = new Date(sock.ev * 1000);
if (currentDateTime.getTime() - messageDateTime.getTime() <= 300000) {
console.log('Leyendo mensaje entrante:', sock.ev);
Object.keys(sock.chats).forEach(jid => {
sock.chats[jid].isBanned = false
})
} else {
console.log(sock.chats, `Omitiendo mensajes en espera.`, sock.ev); 
Object.keys(sock.chats).forEach(jid => {
sock.chats[jid].isBanned = true
})
}*/

sock.ev.on(`messages.upsert`, sock.handler)
sock.ev.on(`group-participants.update`, sock.participantsUpdate)
sock.ev.on(`groups.update`, sock.groupsUpdate)
sock.ev.on(`message.delete`, sock.onDelete)
sock.ev.on(`call`, sock.onCall)
sock.ev.on(`connection.update`, sock.connectionUpdate)
sock.ev.on(`creds.update`, sock.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
})
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));}

async function joinChannels(conn) {
for (const channelId of Object.values(global.ch)) {
await conn.newsletterFollow(channelId).catch(() => {})
}}
