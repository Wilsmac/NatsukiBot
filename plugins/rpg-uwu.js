 const { useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, MessageRetryMap, makeCacheableSignalKeyStore, jidNormalizedUser, PHONENUMBER_MCC } = await import('@whiskeysockets/baileys') import moment from 'moment-timezone' import NodeCache from 'node-cache' import readline from 'readline' import qrcode from "qrcode" import crypto from 'crypto' import fs from "fs" import pino from 'pino'; import * as ws from 'ws'; const { CONNECTING } = ws import { Boom } from '@hapi/boom' import { makeWASocket } from '../lib/simple.js';

if (global.conns instanceof Array) console.log()
else global.conns = []

let handler = async (m, { conn: _conn, args, usedPrefix, command, isOwner }) => {

  let parent = args[0] && args[0] == 'plz' ? _conn : await global.conn
  if (!((args[0] && args[0] == 'plz') || (await global.conn).user.jid == _conn.user.jid)) {
        throw ` Este comando solo los puede usar el bot principal: wa.me/${global.conn.user.jid.split`@`[0]}?text=${usedPrefix + command}`
}

       
  async function bbts() {

  let authFolderB = crypto.randomBytes(10).toString('hex').slice(0, 8)
  


    if (!fs.existsSync("./FantasyJadiBot/"+ authFolderB)){
        fs.mkdirSync("./FantasyJadiBot/"+ authFolderB, { recursive: true });
    }
    args[0] ? fs.writeFileSync("./FantasyJadiBot/" + authFolderB + "/creds.json", JSON.stringify(JSON.parse(Buffer.from(args[0], "base64").toString("utf-8")), null, '\t')) : ""

const {state, saveState, saveCreds} = await useMultiFileAuthState(`./FantasyJadiBot/${authFolderB}`)
const msgRetryCounterMap = (MessageRetryMap) => { };
const msgRetryCounterCache = new NodeCache()
const {version} = await fetchLatestBaileysVersion();
let phoneNumber = m.sender.split('@')[0]

const methodCodeQR = process.argv.includes("qr")
const methodCode = !!phoneNumber || process.argv.includes("code")
const MethodMobile = process.argv.includes("mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (texto) => new Promise((resolver) => rl.question(texto, resolver))

const connectionOptions = {
  logger: pino({ level: 'silent' }),
  printQRInTerminal: false,
  mobile: MethodMobile, 
  browser: [ "Ubuntu", "Chrome", "20.0.04" ], 
  auth: {
  creds: state.creds,
  keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
  },
  markOnlineOnConnect: true, 
  generateHighQualityLinkPreview: true, 
  getMessage: async (clave) => {
  let jid = jidNormalizedUser(clave.remoteJid)
  let msg = await store.loadMessage(jid, clave.id)
  return msg?.message || ""
  },
  msgRetryCounterCache,
  msgRetryCounterMap,
  defaultQueryTimeoutMs: undefined,   
  version
  }

let conn = makeWASocket(connectionOptions)

if (methodCode && !conn.authState.creds.registered) {
    if (!phoneNumber) {
       
        process.exit(0);
    }
    let cleanedNumber = phoneNumber.replace(/[^0-9]/g, '');
    if (!Object.keys(PHONENUMBER_MCC).some(v => cleanedNumber.startsWith(v))) {
       
        process.exit(0);
    }

    setTimeout(async () => {
        let codeBot = await conn.requestPairingCode(cleanedNumber);
        codeBot = codeBot?.match(/.{1,4}/g)?.join("-") || codeBot;
       await m.reply(`{global.packname}✥━═ ࿇*
_𝙽𝚄𝙴𝚅𝙰 𝙵𝚄𝙽𝙲𝙸𝙾𝙽 𝙳𝙴 𝙷𝙰𝙲𝙴𝚁𝚃𝙴 𝚄𝙽 𝚂𝚄𝙱 𝙱𝙾𝚃_* 🌹
➥ 𝙳𝚒𝚛𝚒𝚓𝚊𝚜𝚎 𝚎𝚗 𝚕𝚘𝚜 𝚝𝚛𝚎𝚜 𝚙𝚞𝚗𝚝𝚘𝚜 𝚎𝚗 𝚕𝚊 𝚎𝚜𝚚𝚞𝚒𝚗𝚊 𝚜𝚞𝚙𝚎𝚛𝚒𝚘𝚛 𝚍𝚎𝚛𝚎𝚌𝚑𝚊
➥𝙸𝚛 𝚊 𝚕𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝙳𝚒𝚜𝚙𝚘𝚜𝚒𝚝𝚒𝚟𝚘𝚜 𝚟𝚒𝚗𝚌𝚞𝚕𝚊𝚍𝚘𝚜
➥ 𝚍𝚊 𝚌𝚕𝚒𝚌𝚔 𝚎𝚗 𝚟𝚒𝚗𝚌𝚞𝚕𝚊𝚛 𝚌𝚘𝚗 𝚌𝚘𝚍𝚒𝚐𝚘 𝚍𝚎 𝚝𝚎𝚕𝚎𝚏𝚘𝚗𝚘
➥ 𝚙𝚎𝚐𝚊 𝚎𝚕 𝚌𝚘𝚍𝚒𝚐𝚘 𝚊 𝚌𝚘𝚗𝚝𝚒𝚗𝚞𝚊𝚌𝚒𝚘𝚗
𝙹𝚊𝚍𝚒𝚋𝚘𝚝, 𝙷𝚎𝚌𝚑𝚘 𝚙𝚘𝚛 @Wilmer oficial 🌹`)
        parent.sendMessage(m.chat, {text : `${codeBot}`}, { quoted: m })
        rl.close();
    }, 3000);
}

conn.isInit = false


let isInit = true

async function connectionUpdate(update) {
    const { connection, lastDisconnect, isNewLogin, qr } = update
    if (isNewLogin) conn.isInit = true
   

    const code = lastDisconnect?.error?.output?.statusCode || lastDisconnect?.error?.output?.payload?.statusCode;
        if (code && code !== DisconnectReason.loggedOut && conn?.ws.socket == null) {
      let i = global.conns.indexOf(conn)
      if (i < 0) return console.log(await creloadHandler(true).catch(console.error))
      delete global.conns[i]
      global.conns.splice(i, 1)

     if (code !== DisconnectReason.connectionClosed){ 
        parent.sendMessage(conn.user.jid, {text : `${lenguajeCD['smsJBConexion']()}`}, { quoted: m }) 
    } else {
        parent.sendMessage(m.chat, {text : ` 𝙻𝙰 𝙲𝙾𝙽𝙴𝚇𝙸𝙾𝙽 𝚂𝙴 𝙰𝙷 𝙲𝙴𝚁𝚁𝙰𝙳𝙾, 𝙳𝙴𝙱𝙴 𝙲𝙾𝙽𝙴𝙲𝚃𝙰𝚁𝚂𝙴 𝙽𝚄𝙴𝚅𝙰𝙼𝙴𝙽𝚃𝙴 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 .botcode o .code 𝚈 𝚅𝚄𝙴𝙻𝚅𝙰 𝙰 𝙸𝙽𝙶𝚁𝙴𝚂𝙰𝚁 𝙴𝙻 𝙲𝙾𝙳𝙸𝙶𝙾.`}, { quoted: m })
    }
    }
    
    if (global.db.data == null) loadDatabase()

    if (connection == 'open') {
    conn.isInit = true
    global.conns.push(conn)
    await parent.sendMessage(m.chat, {text : args[0] ? ` 𝙲𝙾𝙽𝙴𝚇𝙸𝙾𝙽 𝙴𝚇𝙸𝚃𝙾𝚂𝙰` : ` 𝙲𝙾𝙽𝙴𝚇𝙸𝙾𝙽 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾, 𝙿𝚄𝙴𝙳𝙴 𝙲𝙾𝙽𝙴𝙲𝚃𝙰𝚁𝚂𝙴 𝙽𝚄𝚅𝙰𝙼𝙽𝚃𝙴 𝚄𝚂𝙰𝙽𝙳𝙾 𝚂𝚄 (ID)`}, { quoted: m })
    await sleep(5000)
    if (args[0]) return
                await parent.sendMessage(conn.user.jid, {text : `𝚃𝙴 𝙷𝙰𝚂 𝙲𝙾𝙽𝙴𝙲𝚃𝙰𝙳𝙾(𝙰), 𝙿𝙾𝚁\n𝙵𝙰𝚅𝙾𝚁 𝙴𝚂𝙿𝙴𝚁𝙴 𝚂𝙴 𝙴𝚂𝚃𝙰𝙽 𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾 𝙻𝙾𝚂 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂...\n♻️*𝙾𝙿𝙲𝙸𝙾𝙽𝙴𝚂 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴𝚂:\n» #stop\n» #eliminarsesion
\n» #code `}, { quoted: m })
                parent.sendMessage(conn.user.jid, {text : usedPrefix + command + " " + Buffer.from(fs.readFileSync("./FantasyJadiBot/" + authFolderB + "/creds.json"), "utf-8").toString("base64")}, { quoted: m })
          }

  }

  setInterval(async () => {
    if (!conn.user) {
      try { conn.ws.close() } catch { }
      conn.ev.removeAllListeners()
      let i = global.conns.indexOf(conn)
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
try { conn.ws.close() } catch { }
conn.ev.removeAllListeners()
conn = makeWASocket(connectionOptions)
isInit = true
}

if (!isInit) {
conn.ev.off('messages.upsert', conn.handler)
conn.ev.off('group-participants.update', conn.participantsUpdate)
conn.ev.off('groups.update', conn.groupsUpdate)
conn.ev.off('message.delete', conn.onDelete)
conn.ev.off('call', conn.onCall)
conn.ev.off('connection.update', conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
}

conn.welcome = global.conn.welcome + ''
conn.bye = global.conn.bye + ''
conn.spromote = global.conn.spromote + ''
conn.sdemote = global.conn.sdemote + ''

conn.handler = handler.handler.bind(conn)
conn.participantsUpdate = handler.participantsUpdate.bind(conn)
conn.groupsUpdate = handler.groupsUpdate.bind(conn)
conn.onDelete = handler.deleteUpdate.bind(conn)
conn.connectionUpdate = connectionUpdate.bind(conn)
conn.credsUpdate = saveCreds.bind(conn, true)

conn.ev.on('messages.upsert', conn.handler)
conn.ev.on('group-participants.update', conn.participantsUpdate)
conn.ev.on('groups.update', conn.groupsUpdate)
conn.ev.on('message.delete', conn.onDelete)
conn.ev.on('connection.update', conn.connectionUpdate)
conn.ev.on('creds.update', conn.credsUpdate)
isInit = false
return true
}
creloadHandler(false)
}
bbts()

}
handler.help = ['botclone']
handler.tags = ['serbot']
handler.command = ['code', 'botcode', 'botclone']
handler.rowner = false

export default handler

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
