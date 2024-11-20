import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"
import cheerio from 'cheerio';
import fetch from "node-fetch"
import axios from "axios"
import moment from "moment-timezone"
import { es as esDefault, en as enDefault } from "./lib/multi-language/_default.js"
import { en, es, id, ar, pt } from "./lib/idiomas/total-idiomas.js"

// [ Agrega el número que será Bot y los que serán propietarios. ]
global.owner = [
["50250101139", 'Wilmer ofc', true],
["50258115623"], 
["51967997782"],
["573504664356"]
["573246150760"]
]

global.mods = []
global.prems = []

global.isBaileysFail = false

global.tagusario = ['50250101139'];

global.obtenerQrWeb = 0; //1 o 0
global.keepAliveRender = 0; // 1 o 0

//------------------------------------------------

global.botNumberCode = "" 
global.confirmCode = "" 
//-----------------------------------------------

global.catalogo = fs.readFileSync('./media/menus/prueba1.png')

//------------------------------------------------
global.lenguajeCD = es
global.lenguajeGB = es
global.mid = esDefault
global.version_language = '1.0 (MID-CD)'

//APIS Keys

global.Key360 = ["Gata_Dios"] // key Ephoto360
global.openai_key = 'sk-0' // Api New: https://platform.openai.com/account/api-keys 
global.openai_org_id = 'org-3' // Api New: https://platform.openai.com/account/org-settings */
global.keysZens = ["LuOlangNgentot", "c2459db922", "37CC845916", "6fb0eff124", "hdiiofficial", "fiktod", "BF39D349845E", "675e34de8a", "0b917b905e6f"]
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ["29d4b59a4aa687ca", "5LTV57azwaid7dXfz5fzJu", "cb15ed422c71a2fb", "5bd33b276d41d6b4", "HIRO", "kurrxd09", "ebb6251cc00f9c63"]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ["5VC9rvNx", "cfALv5"]
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = "GataDiosV3"
global.itsrose = ["4b146102c4d500809da9d1ff"]
global.baileys = "@whiskeysockets/baileys"

global.APIs = { 
xteam: 'https://api.xteam.xyz',
dzx: 'https://api.dhamzxploit.my.id',
lol: 'https://api.lolhuman.xyz',
violetics: 'https://violetics.pw',
neoxr: 'https://api.neoxr.my.id',
zenzapis: 'https://api.zahwazein.xyz',
akuari: 'https://api.akuari.my.id',
akuari2: 'https://apimu.my.id',        
fgmods: 'https://api.fgmods.xyz', 
botcahx: 'https://api.botcahx.biz.id',
ibeng: 'https://api.ibeng.tech/docs',        
rose: 'https://api.itsrose.site',
popcat : 'https://api.popcat.xyz',
xcoders : 'https://api-xcoders.site'
},

global.APIKeys = { 
'https://api.xteam.xyz': `${keysxteam}`,
'https://api.lolhuman.xyz': `${lolkeysapi}`,
'https://api.neoxr.my.id': `${keysneoxr}`,        
'https://violetics.pw': 'beta',
'https://api.zahwazein.xyz': `${keysxxx}`,
'https://api.fgmods.xyz': 'DRLg5kY7', 
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://api.botcahx.biz.id': 'Admin',
'https://api.ibeng.tech/docs': 'tamvan',
'https://api.itsrose.site': 'Rs-Zeltoria',
'https://api-xcoders.site': 'Frieren'
}

//------------------------------------------------
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

//------------------------------------------------

global.official = [
["50250101139", 'Wilmer ofc', 1], 
["50258115623", '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 💻', 1],  
["51996416792", '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 💻', 1],
["50250101139", '𝗗𝗲𝘀𝗮𝗿𝗿𝗼𝗹𝗹𝗮𝗱𝗼𝗿𝗮 𝗢𝗳𝗶𝗰𝗶𝗮𝗹 💻', 1],
["50258115623", 'Soporte', 1]]

global.mail = '' // Add email
global.desc = '' // Add short description (20 caractres max)
global.desc2 = '' // Add long description (90 caractres max) (Este parámetro se aplicará sólo si su whasapp no tiene descripción)
global.country = '' // Add country, example: 🇪🇨
//------------------------------------------------
global.fantasy = "𝐍𝐚𝐭𝐬𝐮𝐤𝐢𝐁𝐨𝐭 ᵖᵒʷᵒʳᵉᵈ ᵇʸ\n𝔚𝔦𝔩𝔪𝔢𝔯 𝖔𝖋𝖎𝖈𝖎𝖆𝖑" // new name
global.wilmerofc = "𝐍𝐚𝐭𝐬𝐮𝐤𝐢𝐁𝐨𝐭 ☃️" // fkontak2
global.packname = `├┈‧͙⁺˚･༓☾ 𝚆𝙸𝙻𝙼𝙴𝚁 𝙾𝙵𝙲 ☽༓･˚⁺‧͙\n├┈ ⟴ 𝚈𝚘𝚞𝚃𝚞𝚋𝚎:\n├┈ @wilmer.oficial\n├┈ ⟴ 𝙸𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖:\n├┈ @cmwilmer4\n╰⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏`
global.author =  ` ├┈‧͙･༓☾ 𝚆𝙸𝙻𝙼𝙴𝚁 𝙾𝙵𝙲 ☽༓･˚\n├┈⟴ 𝙶𝚒𝚝𝙷𝚞𝚋:\n├┈ Wilsmac\n├┈ ⟴ 𝙿𝚊𝚢𝙿𝚊𝚕:\n├┈ @wilmermacu1\n╰⊱⊶⊷⊶⊷⊶⊷⊶⊷⇲⊰⌏`

//----------------------------------------------------------


global.estilo2 = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: fantasy, orderTitle: 'Bang', thumbnail: catalogo, sellerJid: '0@s.whatsapp.net'}}}
global.textia = `ᴘᴏᴡʀᴇᴅ ʙʏ ᴡɪʟᴍᴇʀ`


//-------------------------------------------------------------


// Hola 👋🏻
var ase = new Date(); var hour = ase.getHours(); switch(hour){ case 0: hour = 'Linda noche 🌃'; break; case 1: hour = 'Linda noche 🌃'; break; case 2: hour = 'Linda noche 🌃'; break; case 3: hour = 'Linda mañana 🥀'; break; case 4: hour = 'Linda mañana 🥀'; break; case 5: hour = 'Linda mañana 🥀'; break; case 6: hour = 'Linda mañana 🥀'; break; case 7: hour = 'Linda mañana 🥀'; break; case 8: hour = 'Linda mañana 🥀'; break; case 9: hour = 'Linda mañana 🥀'; break; case 10: hour = 'Buen dia 💫'; break; case 11: hour = 'Buen dia 💫'; break; case 12: hour = 'Buen dia 💫'; break; case 13: hour = 'Buen dia 💫'; break; case 14: hour = 'Bonita tarde 🌄'; break; case 15: hour = 'Bonita tarde 🌄'; break; case 16: hour = 'Bonita tarde 🌄'; break; case 17: hour = 'Bonito anochecer 🌇'; break; case 18: hour = 'Linda noche 🌃'; break; case 19: hour = 'Linda noche 🌃'; break; case 20: hour = 'Linda noche 🌃'; break; case 21: hour = 'Linda noche 🌃'; break; case 22: hour = 'Linda noche 🌃'; break; case 23: hour = 'Linda noche 🌃'; break;}
global.saludo = '' + hour

global.d = new Date(new Date + 3600000)
global.locale = 'es'
global.dia = d.toLocaleDateString(locale, {weekday: 'long'})
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'})
global.mes = d.toLocaleDateString('es', {month: 'long'})
global.año = d.toLocaleDateString('es', {year: 'numeric'})
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true})


//------------------------------------------------

global.vs = "1.8.0"
global.vsJB = "3.0"
global.gt = "𝐍𝐚𝐭𝐬𝐮𝐤𝐢𝐁𝐨𝐭 ☃️"

global.canalofc = "https://whatsapp.com/channel/0029VaCUlPX0LKZAlP10pC43"
global.yt = "https://youtube.com/@wilmer.oficial"
global.yt2 = "https://www.youtube.com/watch?v=Ko019wvu2Tc&t=71s"
global.ig = "https://www.instagram.com/cmwilmer4"
global.md = "https://github.com/Wilsmac"
global.fb = "https://www.facebook.com/groups/1039865800178898/?ref=share"
global.tk = "https://www.tiktok.com/@wilsmac4"
global.ths = "https://www.threads.net/@cmwilmer4"
global.paypal = 'https://paypal.me/'
global.asistencia = 'https://wa.me/message/H6DKJA6N3J6PD1' //Contacto
global.bot = 'wa.me/50250101139'

global.nna = 'https://www.atom.bio/Wilsmac/' // Cuentas
global.nn2 = 'https://t.me/' // 
global.nna2 = 'https://chat.whatsapp.com/EAxOACyzjB6JhkRvQvw4zl' //Anime y social 
global.nn = 'https://chat.whatsapp.com/CPASQk25rExCIEdlkrOfBz' // FantasyBot-MD 
global.nnn = 'https://chat.whatsapp.com/CPASQk25rExCIEdlkrOfBz' // FantasyBot-MD 
global.nnnt = 'https://whatsapp.com/channel/0029VaCUlPX0LKZAlP10pC43' // canal 
global.nnntt = 'https://whatsapp.com/channel/0029VaCUlPX0LKZAlP10pC43' // canal 
global.nnnttt = 'https://chat.whatsapp.com/CPASQk25rExCIEdlkrOfBz' // FantasyBot-MD 
global.nnnttt1 = 'https://chat.whatsapp.com/EAxOACyzjB6JhkRvQvw4zl' // Anime y social 
global.nnnttt2 = 'https://whatsapp.com/channel/0029VaCUlPX0LKZAlP10pC43' // canal
global.nnnttt3 = 'https://whatsapp.com/channel/0029VaCUlPX0LKZAlP10pC43' // canal
global.nnnttt4 = 'https://whatsapp.com/channel/0029VaCUlPX0LKZAlP10pC43' // canal 
global.nnnttt5 = 'https://chat.whatsapp.com/EAxOACyzjB6JhkRvQvw4zl' // anime y social 
global.nnnttt6 = 'https://chat.whatsapp.com/CPASQk25rExCIEdlkrOfBz' // FantasyBot-MD 
global.channel1 = 'https://whatsapp.com/channel/0029VaCUlPX0LKZAlP10pC43'
global.channel2 = 'https://whatsapp.com/channel/0029VaCUlPX0LKZAlP10pC43'
global.channel3 = 'https://t.me/'
//------------------------------------------------


//------------------------------------------------

global.rg = '♥︎ 𝑹𝑬𝑺𝑼𝑳𝑻𝑨𝑫𝑶 ♥︎\n\n'
global.resultado = rg

global.ag = '♥︎ 𝑨𝑫𝑽𝑬𝑹𝑻𝑬𝑵𝑪𝑰𝑨 ♥︎\n\n'
global.advertencia = ag

global.iig = '♥︎ 𝑰𝑵𝑭𝑶𝑹𝑴𝑨𝑪𝑰𝑶𝑵 ♥︎\n\n'
global.informacion = iig

global.fg = ' ♥︎ 𝑬𝑹𝑹𝑶𝑹 ♥︎\n\n'
global.fallo = fg

global.mg = '♥︎ 𝑳𝑶 𝑨𝑯 𝑼𝑺𝑨𝑫𝑳 𝑫𝑬 𝑴𝑨𝑵𝑬𝑹𝑨 𝑰𝑵𝑪𝑶𝑹𝑹𝑬𝑪𝑻𝑨 ♥︎\n\n'
global.mal = mg

global.eeg = '♥︎ 𝑹𝑬𝑷𝑶𝑹𝑻𝑬 ♥︎\n\n'
global.envio = eeg

global.eg = '♥︎ 𝑬𝑿𝑰𝑻𝑶 ♥︎\n\n'
global.exito = eg

//------------------------------------------------

global.wm = "𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄"
global.igfg = "𝐍𝐚𝐭𝐬𝐮𝐤𝐢𝐁𝐨𝐭 🌺"
global.wait = "⌛ *`Cargando...`*\n*✦✦⊹⊹⊹⊹⊹⊹⊹⊹✪* `[20%]`"
global.waitt = "⏳ *`Cargando....`*\n*✦✦✦✦⊹⊹⊹⊹⊹⊹✪* `[40%]`"
global.waittt = "⌛ *`Cargando...`*\n*✦✦✦✦✦✦⊹⊹⊹⊹✪* `[60%]`"
global.waitttt = "⏳ *`Cargando....`*\n*✦✦✦✦✦✦✦✦⊹⊹✪* `[80%]`"
global.waittttt = "⌛ *`Procesando...`*\n*✦✦✦✦✦✦✦✦✦✦✪* `[100%]`"
global.nomorown = "50250101139"
global.pdoc = ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/msword", "application/pdf", "text/rtf"]

//-----------------------------------------------

// IMÁGENS 
global.imagen1 = fs.readFileSync("./media/menus/Menu3.jpg")
global.imagen2 = fs.readFileSync("./media/menus/img1.jpg")
global.imagen3 = fs.readFileSync("./media/menus/img2.jpg")
global.imagen4 = fs.readFileSync("./media/menus/img3.jpg")
global.imagen5 = fs.readFileSync("./media/menus/img4.jpg")
global.imagen6 = fs.readFileSync("./media/menus/img5.jpg")
global.imagen7 = fs.readFileSync("./media/menus/img6.jpg")
global.imagen8 = fs.readFileSync("./media/menus/img7.jpg")
global.imagen9 = fs.readFileSync("./media/menus/img8.jpg")
global.imagen10 = fs.readFileSync("./media/menus/img9.jpg")
global.imagen11 = fs.readFileSync("./media/menus/img10.jpg")
global.imagen12 = fs.readFileSync("./media/menus/img11.jpg")
global.imagen13 = fs.readFileSync("./media/menus/img12.jpg")

global.img = 'https://telegra.ph/file/6114942024c7658478830.jpg'
global.img2 = 'https://telegra.ph/file/6114942024c7658478830.jpg'

global.img3 = 'https://i.imgur.com/oUAGYc2.jpg' //prem
global.img4 = 'https://i.imgur.com/i0pccuo.jpg' //prem

global.img5 = 'https://telegra.ph/file/6114942024c7658478830.jpg'
global.img6 = 'https://telegra.ph/file/6114942024c7658478830.jpg'
global.img7 = 'https://telegra.ph/file/418da430e42952c392751.jpg'
global.img8 = 'https://telegra.ph/file/418da430e42952c392751.jpg'
global.img9 = 'https://telegra.ph/file/418da430e42952c392751.jpg'

global.img10 = 'https://telegra.ph/file/6114942024c7658478830.jpg'
global.img11 = 'https://telegra.ph/file/418da430e42952c392751.jpg'
global.img12 = 'https://telegra.ph/file/418da430e42952c392751.jpg'
global.img13 = 'https://i.imgur.com/pCfFOgw.jpeg'
global.img14 = 'https://telegra.ph/file/418da430e42952c392751.jpg'
global.img15 = 'https://telegra.ph/file/418da430e42952c392751.jpg'

global.img16 = 'https://telegra.ph/file/6114942024c7658478830.jpg' //+18

global.img17 = 'https://telegra.ph/file/6114942024c7658478830.jpg'
global.img18 = 'https://telegra.ph/file/6114942024c7658478830.jpg'

global.logogit = 'https://tinyurl.com/2qvl9vgs'

let nskvid = 'https://telegra.ph/file/fc75439751a71e3419c68.mp4'
let nskvid2 = 'https://telegra.ph/file/60222a8e88addd43523b7.mp4'
let nskvid3 = 'https://telegra.ph/file/efc37a04ba264b60ea1ec.mp4'
global.nskvid = [nskvid, nskvid2, nskvid3]
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
// ❰ RANDOMS ❱
global.welgata = [tk, ig, yt2, yt2, ig, md, ig, yt, paypal, yt2, yt2, ig, fb, tk, ths, asistencia]
global.redesMenu = [nna, nn, nn2, nnn, nnnt, nnntt, nnnttt, nnnttt1, nnnttt2, nnnttt3, nnnttt4, nnnttt5, md, ig, paypal, yt, asistencia, fb, tk]
global.accountsgb = [channel1, channel2, channel3, tk, ig, yt, paypal, fb, ths, md, nna, asistencia]
global.gataMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18]
global.gataVidMenu = ['./media/menus/Menuvid1.mp4', './media/menus/Menuvid2.mp4', './media/menus/Menuvid3.mp4']
global.gataImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13]


//----------------------------------------------------
global.fantasyVid = ['./media/menus/Menuvid1.mp4', './media/menus/Menuvid2.mp4', './media/menus/Menuvid3.mp4']

global.fantasyImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13]

global.fantasyMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18]

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
// ❰ RPG ❱
global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='];

global.cmenut = "❖––––––『"
global.cmenub = "┊✦ "
global.cmenuf = "╰━═┅═━––––––๑\n"
global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     "
 
global.dmenut = "*❖─┅──┅〈*"
global.dmenub = "*┊»*"
global.dmenub2 = "*┊*"
global.dmenuf = "*╰┅────────┅✦*"
global.htjava = "⫹⫺"

global.htki = "*⭑•̩̩͙⊱•••• ☪*"
global.htka = "*☪ ••••̩̩͙⊰•⭑*"

global.comienzo = "• • ◕◕════"
global.fin = " • •"

global.botdate = `⫹⫺ Date :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; //Asia/Jakarta
global.bottime = `𝐓 𝐈 𝐄 𝐌 𝐏 𝐎 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;//America/Los_Angeles
global.fgif = {
key: {
participant : '0@s.whatsapp.net'},
message: { 
"videoMessage": { 
"title": wm,
"h": `Hmm`,
'seconds': '999999999', 
'gifPlayback': 'true', 
'caption': bottime,
'jpegThumbnail': fs.readFileSync('./media/menus/Menu3.jpg')
}}}


global.multiplier = 85 // Cuanto más alto, más difícil subir de nivel 

//Emojis RPG - Referencias
global.rpg = {
emoticon(string) {
string = string.toLowerCase();
let emot = {
      level: '🧬 Nivel : Level',
      limit: lenguajeCD.eDiamante(),
      exp: lenguajeCD.eExp(),
      bank: '🏦 Banco : Bank',
      diamond: lenguajeCD.eDiamantePlus(),
      health: '❤️ Salud : Health',
      kyubi: lenguajeCD.eMagia(),
      joincount: lenguajeCD.eToken(),
      emerald: lenguajeCD.eEsmeralda(),
      stamina: lenguajeCD.eEnergia(),
      role: '💪 Rango | Role',
      premium: '🎟️ Premium',
      pointxp: '📧 Puntos Exp : Point Xp',
      gold: lenguajeCD.eOro(),
      
      trash: lenguajeCD.eBasura(),
      crystal: '🔮 Cristal : Crystal',
      intelligence: '🧠 Inteligencia : Intelligence',
      string: lenguajeCD.eCuerda(),
      keygold: '🔑 Llave de Oro : Key Gold',
      keyiron: '🗝️ Llave de Hierro : Key Iron',
      emas: lenguajeCD.ePinata(),
      fishingrod: '🎣 Caña de Pescar : Fishing Rod',
      gems: '🍀 Gemas : Gemas',
      magicwand: '⚕️ Varita Mágica : Magic Wand',
      mana: '🪄 Hechizo : Spell',
      agility: '🤸‍♂️ Agilidad : Agility',
      darkcrystal: '♠️ Cristal Oscuro : Dark Glass',
      iron: lenguajeCD.eHierro(),
      rock: lenguajeCD.eRoca(),
      potion: lenguajeCD.ePocion(),
      superior: '💼 Superior : Superior',
      robo: '🚔 Robo : Robo',
      upgrader: '🧰 Aumentar Mejora : Upgrade',
      wood: lenguajeCD.eMadera(),
      
      strength: '🦹‍ ♀️ Fuerza : Strength',
      arc: '🏹 Arco : Arc',
      armor: '🥼 Armadura : Armor',
      bow: '🏹 Super Arco : Super Bow',
      pickaxe: '⛏️ Pico : Peak',
      sword: lenguajeCD.eEspada(),
      
      common: lenguajeCD.eCComun(),
      uncoommon: lenguajeCD.ePComun(),
      mythic: lenguajeCD.eCMistica(),
      legendary: lenguajeCD.eClegendaria(),
      petFood: lenguajeCD.eAMascots(), //?
      pet: lenguajeCD.eCMascota(),//?
      
      bibitanggur: lenguajeCD.eSUva(), bibitapel: lenguajeCD.eSManzana(), bibitjeruk: lenguajeCD.eSNaranja(), bibitmangga: lenguajeCD.eSMango(), bibitpisang: lenguajeCD.eSPlatano(),
      
      ayam: '🐓 Pollo : Chicken',
      babi: '🐖 Puerco : Pig',
      Jabali: '🐗 Jabalí : Wild Boar',
      bull: '🐃 Toro : Bull',    
      buaya: '🐊 Cocodrilo : Alligator',    
      cat: lenguajeCD.eGato(),    
      centaur: lenguajeCD.eCentauro(),
      chicken: '🐓 Pollo : Chicken',
      cow: '🐄 Vaca : Cow', 
      dog: lenguajeCD.ePerro(),
      dragon: lenguajeCD.eDragon(),
      elephant: '🐘 Elefante : Elephant',
      fox: lenguajeCD.eZorro(),
      giraffe: '🦒 Jirafa : Giraffe',
      griffin: lenguajeCD.eAve(), //Mascota : Griffin',
      horse: lenguajeCD.eCaballo(),
      kambing: '🐐 Cabra : Goat',
      kerbau: '🐃 Búfalo : Buffalo',
      lion: '🦁 León : Lion',
      money: lenguajeCD.eGataCoins(),
      monyet: '🐒 Mono : Monkey',
      panda: '🐼 Panda',
      snake: '🐍 Serpiente : Snake',
      phonix: '🕊️ Fénix : Phoenix',
      rhinoceros: '🦏 Rinoceronte : Rhinoceros',
      wolf: lenguajeCD.eLobo(),
      tiger: '🐅 Tigre : Tiger',
      cumi: '🦑 Calamar : Squid',
      udang: '🦐 Camarón : Shrimp',
      ikan: '🐟 Pez : Fish',
      
      fideos: '🍝 Fideos : Noodles',
      ramuan: '🧪 Ingrediente NOVA : Ingredients',
      knife: '🔪 Cuchillo : Knife'
}
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]];
}}

global.rpgg = { //Solo emojis 
emoticon(string) {
string = string.toLowerCase();
let emott = {
      level: '🧬', limit: '💎', exp: '⚡', bank: '🏦',
      diamond: '💎+', health: '❤️', kyubi: '🌀', joincount: '🪙',
      emerald: '💚', stamina: '✨', role: '💪', premium: '🎟️',
      pointxp: '📧', gold: '👑',
      
      trash: '🗑', crystal: '🔮', intelligence: '🧠', string: '🕸️', keygold: '🔑',
      keyiron: '🗝️', emas: '🪅', fishingrod: '🎣', gems: '🍀', magicwand: '⚕️',
      mana: '🪄', agility: '🤸‍♂️', darkcrystal: '♠️', iron: '⛓️', rock: '🪨',
      potion: '🥤', superior: '💼', robo: '🚔', upgrader: '🧰', wood: '🪵',
      
      strength: '🦹‍ ♀️', arc: '🏹', armor: '🥼', bow: '🏹', pickaxe: '⛏️', sword: '⚔️',
      
      common: '📦', uncoommon: '🥡', mythic: '🗳️', legendary: '🎁', petFood: '🍖', pet: '🍱',
      
      bibitanggur: '🍇', bibitapel: '🍎', bibitjeruk: '🍊', bibitmangga: '🥭', bibitpisang: '🍌',
      
      ayam: '🐓', babi: '🐖', Jabali: '🐗', bull: '🐃', buaya: '🐊', cat: '🐈',      
      centaur: '🐐', chicken: '🐓', cow: '🐄', dog: '🐕', dragon: '🐉', elephant: '🐘',
      fox: '🦊', giraffe: '🦒', griffin: '🦅', //Mascota : Griffin',
      horse: '🐎', kambing: '🐐', kerbau: '🐃', lion: '🦁', money: '🐱', monyet: '🐒', panda: '🐼',
      snake: '🐍', phonix: '🕊️', rhinoceros: '🦏',
      wolf: '🐺', tiger: '🐅', cumi: '🦑', udang: '🦐', ikan: '🐟',
      
      fideos: '🍝', ramuan: '🧪', knife: '🔪'
}
let results = Object.keys(emott).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
if (!results.length) return '';
else return emott[results[0][0]];
}}

global.rpgshop = { //Tienda
emoticon(string) {
string = string.toLowerCase();
let emottt = {
      exp: lenguajeCD.eExp(), limit: lenguajeCD.eDiamante(), diamond: lenguajeCD.eDiamantePlus(), joincount: lenguajeCD.eToken(),
      emerald: lenguajeCD.eEsmeralda(), berlian: lenguajeCD.eJoya(), kyubi: lenguajeCD.eMagia(), gold: lenguajeCD.eOro(),
      money: lenguajeCD.eGataCoins(), tiketcoin: lenguajeCD.eGataTickers(), stamina: lenguajeCD.eEnergia(),
            
      potion: lenguajeCD.ePocion(), aqua: lenguajeCD.eAgua(), trash: lenguajeCD.eBasura(), wood: lenguajeCD.eMadera(),
      rock: lenguajeCD.eRoca(), batu: lenguajeCD.ePiedra(), string: lenguajeCD.eCuerda(), iron: lenguajeCD.eHierro(),
      coal: lenguajeCD.eCarbon(), botol: lenguajeCD.eBotella(), kaleng: lenguajeCD.eLata(), kardus: lenguajeCD.eCarton(),
      
      eleksirb: lenguajeCD.eEletric(), emasbatang: lenguajeCD.eBarraOro(), emasbiasa: lenguajeCD.eOroComun(), rubah: lenguajeCD.eZorroG(),
      sampah: lenguajeCD.eBasuraG(), serigala: lenguajeCD.eLoboG(), kayu: lenguajeCD.eMaderaG(), sword: lenguajeCD.eEspada(),
      umpan: lenguajeCD.eCarnada(), healtmonster: lenguajeCD.eBillete(), emas: lenguajeCD.ePinata(), pancingan: lenguajeCD.eGancho(),
      pancing: lenguajeCD.eCanaPescar(),
       
      common: lenguajeCD.eCComun(), uncoommon: lenguajeCD.ePComun(), mythic: lenguajeCD.eCMistica(),
      pet: lenguajeCD.eCMascota(),//?
      gardenboxs: lenguajeCD.eCJardineria(),//?
      legendary: lenguajeCD.eClegendaria(),
      
      anggur: lenguajeCD.eUva(), apel: lenguajeCD.eManzana(), jeruk: lenguajeCD.eNaranja(), mangga: lenguajeCD.eMango(), pisang: lenguajeCD.ePlatano(),
      
      bibitanggur: lenguajeCD.eSUva(), bibitapel: lenguajeCD.eSManzana(), bibitjeruk: lenguajeCD.eSNaranja(), bibitmangga: lenguajeCD.eSMango(), bibitpisang: lenguajeCD.eSPlatano(),
      
      centaur: lenguajeCD.eCentauro(), griffin: lenguajeCD.eAve(), kucing: lenguajeCD.eGato(), naga: lenguajeCD.eDragon(),
      fox: lenguajeCD.eZorro(), kuda: lenguajeCD.eCaballo(), phonix: lenguajeCD.eFenix(), wolf: lenguajeCD.eLobo(),
      anjing: lenguajeCD.ePerro(),
 
      petFood: lenguajeCD.eAMascots(), //?
      makanancentaur: lenguajeCD.eCCentauro(), makanangriffin: lenguajeCD.eCAve(),
      makanankyubi: lenguajeCD.eCMagica(), makanannaga: lenguajeCD.eCDragon(), makananpet: lenguajeCD.eACaballo(), makananphonix: lenguajeCD.eCFenix()
}
let results = Object.keys(emottt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
if (!results.length) return '';
else return emottt[results[0][0]];
}}

global.rpgshopp = { //Tienda
emoticon(string) {
string = string.toLowerCase();
let emotttt = {
      exp: '⚡', limit: '💎', diamond: '💎+', joincount: '🪙',
      emerald: '💚', berlian: '♦️', kyubi: '🌀', gold: '👑',
      money: '🐱', tiketcoin: '🎫', stamina: '✨',
            
      potion: '🥤', aqua: '💧', trash: '🗑', wood: '🪵',
      rock: '🪨', batu: '🥌', string: '🕸️', iron: '⛓️',
      coal: '⚱️', botol: '🍶', kaleng: '🥫', kardus: '🪧',
      
      eleksirb: '💡', emasbatang: '〽️', emasbiasa: '🧭', rubah: '🦊🌫️',
      sampah: '🗑🌫️', serigala: '🐺🌫️', kayu: '🛷', sword: '⚔️',
      umpan: '🪱', healtmonster: '💵', emas: '🪅', pancingan: '🪝',
      pancing: '🎣',
       
      common: '📦', uncoommon: '🥡', mythic: '🗳️',
      pet: '📫',//?
      gardenboxs: '💐',//?
      legendary: '🎁',
      
      anggur: '🍇', apel: '🍎', jeruk: '🍊', mangga: '🥭', pisang: '🍌',
      
      bibitanggur: '🌾🍇', bibitapel: '🌾🍎', bibitjeruk: '🌾🍊', bibitmangga: '🌾🥭', bibitpisang: '🌾🍌',
      
      centaur: '🐐', griffin: '🦅', kucing: '🐈', naga: '🐉', fox: '🦊', kuda: '🐎', phonix: '🕊️', wolf: '🐺', anjing: '🐶',
       
      petFood: '🍖', //?
      makanancentaur: '🐐🥩', makanangriffin: '🦅🥩', makanankyubi: '🌀🥩', makanannaga: '🐉🥩',
      makananpet: '🍱🥩', makananphonix: '🕊️🥩'  
}
let results = Object.keys(emotttt).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string));
if (!results.length) return '';
else return emotttt[results[0][0]];
}}
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
unwatchFile(file);
console.log(chalk.redBright("Update 'config.js'"));
import(`${file}?update=${Date.now()}`);
})
