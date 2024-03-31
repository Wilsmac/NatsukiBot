const { DisconnectReason, useMultiFileAuthState, MessageRetryMap, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, jidNormalizedUser, PHONENUMBER_MCC } = await import('@whiskeysockets/baileys')
import Pino from 'pino'
import fs from 'fs'
import syntaxerror from 'syntax-error'



let phoneNumber = global.botNumberCode
const methodCode = !!phoneNumber || process.argv.includes("code")
const MethodMobile = process.argv.includes("mobile")
browser: ['Ubuntu', 'Edge', '110.0.1587.56']


if (!fs.existsSync(`./${authFile}/creds.json`)) {
if (command == 'pe' || command == 'pe') { 
if (!conn.authState.creds.registered) {
let addNumber
if (!!phoneNumber) {
addNumber = phoneNumber.replace(/[^0-9]/g, '')
} else {
do {
phoneNumber = await m.reply(`Por favor, Ingrese el número de WhatsApp.`)
phoneNumber = phoneNumber.replace(/\D/g,'')
} while (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v)))
rl.close()
addNumber = phoneNumber.replace(/\D/g, '')

setTimeout(async () => {
let codeBot = await conn.requestPairingCode(addNumber)
codeBot = codeBot?.match(/.{1,4}/g)?.join("-") || codeBot
m.reply(`CÓDIGO DE VINCULACIÓN`)
m.reply(`${codeBot}`)
}, 2000)
}}}
}

conn.isInit = false
conn.well = false
handler.command = /^(pe)$/i;
/*if (!opts['test']) {
if (global.db) setInterval(async () => {
if (global.db.data) await global.db.write()
if (opts['autocleartmp'] && (global.support || {}).find) (tmp = [os.tmpdir(), 'tmp', "FantasyJadiBot"] tmp.forEach(filename => cp.spawn('find', [filename, '-amin', '2', '-type', 'f', '-delete'])))}, 30 * 1000)}*/