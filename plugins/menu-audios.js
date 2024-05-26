import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch'

let handler = async (m, { conn: natsuki, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {
try{ 
const { levelling } = '../lib/levelling.js'
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric' 
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
 
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let user = global.db.data.users[m.sender]
//user.registered = false

let pp = gataVidMenu.getRandom()
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(gataMenu.getRandom())).buffer(), sourceUrl: redesMenu.getRandom() }}}

/*let str = `
╭┄〔 *${wm}* 〕┄⊱
┊ *🎶 ${lenguajeGB['smsConfi2']()} ${username}*
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱

⠇ *${lenguajeGB['smsTex16']()}* 🔊
⠇ ${lenguajeGB['smsTex17']()}
∘ _Noche de paz_
∘ _Buenos dias_
∘ _Audio hentai_
∘ _Fiesta del admin_
∘ _Fiesta del admin 2_
∘ _Fiesta del administrador_ 
∘ _Viernes_
∘ _Mierda de Bot_
∘ _Me olvidé_
∘ _Baneado_
∘ _Feliz navidad_
∘ _A nadie le importa_
∘ _Sexo_
∘ _Vete a la vrg_
∘ _Ara ara_
∘ _Hola_
∘ _Un pato_
∘ _Nyanpasu_
∘ _Te amo_
∘ _Yamete_
∘ _Te diagnostico con gay_
∘ _Quien es tu sempai botsito 7w7_
∘ _Bañate_
∘ _Vivan los novios_
∘ _Marica quien_
∘ _Es puto_
∘ _La biblia_
∘ _Onichan_
∘ _Bot puto_
∘ _Feliz cumpleaños_
∘ _Pasa pack Bot_
∘ _Atencion grupo_
∘ _Homero chino_
∘ _Oh me vengo_
∘ _Murio el grupo_
∘ _Siuuu_
∘ _Rawr_
∘ _UwU_
∘ _:c_
∘ _a_
∘ _Hey_
∘ _Enojado_
∘ _Enojada_
∘ _Chao_
∘ _Hentai_
∘ _Triste_
∘ _Estoy triste_
∘ _Me pican los cocos_
∘ _Contexto_
∘ _Me voy_
∘ _Tengo los calzones del admin_
∘ _Entrada épica_ 
∘ _Esto va ser épico papus_
∘ _Ingresa épicamente_
∘ _Bv_
∘ _Yoshi_
∘ _No digas eso papu_
∘ _Ma ma masivo_
∘ _Masivo_
∘ _Basado_
∘ _Basada_
∘ _Fino señores_
∘ _Verdad que te engañe_
∘ _Sus_
∘ _Ohayo_
∘ _La voz de hombre_
∘ _Pero esto_
∘ _Bien pensado Woody_
∘ _Jesucristo_
∘ _Wtf_
∘ _Una pregunta_
∘ _Que sucede_
∘ _Hablame_
∘ _Pikachu_
∘ _Niconico_
∘ _Yokese_
∘ _Omaiga_
∘ _Nadie te preguntó_
∘ _Bueno si_
∘ _Usted está detenido_
∘ _No me hables_
∘ _No chu_
∘ _El pepe_
∘ _Pokémon_
∘ _No me hagas usar esto_
∘ _Esto va para ti_
∘ _Abduzcan_
∘ _Joder_
∘ _Hablar primos_
∘ _Mmm_
∘ _Orale_
∘ _Me anda buscando anonymous_
∘ _Blackpink in your area_
∘ _Cambiate a Movistar_
∘ _Momento equisde | Momento XD_
∘ _Todo bien | 😇_
∘ _Te gusta el Pepino | 🥒_
∘ _El tóxico_
∘ _Moshi moshi_
∘ _Calla Fan de BTS_
∘ _Que tal grupo_
∘ _Muchachos_
∘ _Está Zzzz | 😴_
∘ _Goku Pervertido_
∘ _Potaxio | 🥑_
∘ _Nico nico_
∘ _El rap de Fernanfloo_
∘ _Tal vez_
∘ _Corte corte_
∘ _Buenas noches_
∘ _Porque ta tite_
∘ _Eres Fuerte_
∘ _Bueno Master | 🫂_
∘ _No Rompas más_
∘ _Traiganle una falda_
∘ _Se están riendo de mí_
∘ _Su nivel de pendejo_
∘ _Bienvenido/a 🥳 | 👋_
∘ _Elmo sabe donde vives_
∘ _tunometecabrasaramambiche_
∘ _Y este quien es_
∘ _Motivación_
∘ _En caso de una investigación_
∘ _Buen día grupo | 🙌_
∘ _Las reglas del grupo_
∘ _Oye | 🐔_
∘ _Ig de la minita_
∘ _Gaspi frase_
∘ _Vamos!!_
∘ _Se pudrio_
∘ _Gol!_

╭════• ೋ•✧๑♡๑✧•ೋ •════╮
                      🐈 𝙂𝙖𝙩𝙖 𝘿𝙞𝙤𝙨 🐈
         0:40 ━❍──────── -8:39
         ↻     ⊲  Ⅱ  ⊳     ↺
         VOLUMEN: ▁▂▃▄▅▆▇ 100%
╰════• ೋ•✧๑♡๑✧•ೋ •════╯`.trim()
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
/*let menuA = `🎶 ${lenguajeGB['smsConfi2']()} *${username}*`.trim()*/
/*let menuB = `
╭┄〔 *${wm}* 〕┄⊱
┊დ *${week}, ${date}*
┊დ *${lenguajeGB['smsBotonM4']()} » ${Object.keys(global.db.data.users).length}* 
┊
┊დ *${lenguajeGB['smsBotonM5']()} »* ${role}
┊დ *${lenguajeGB['smsBotonM6']()} » ${level}*
┊დ *${lenguajeGB['smsBotonM7']()} »* ${user.premiumTime > 0 ? '✅' : '❌'}
╰┄┄┄┄〔 *𓃠 ${vs}* 〕┄┄┄┄⊱

⠇ *${lenguajeGB['smsTex16']()}* 🔊
⠇ ${lenguajeGB['smsTex17']()}
∘ _Noche de paz_
∘ _Buenos dias_
∘ _Audio hentai_
∘ _Fiesta del admin_
∘ _Fiesta del admin 2_
∘ _Fiesta del administrador_ 
∘ _Viernes_
∘ _Mierda de Bot_
∘ _Me olvidé_
∘ _Baneado_
∘ _Feliz navidad_
∘ _A nadie le importa_
∘ _Sexo_
∘ _Vete a la vrg_
∘ _Ara ara_
∘ _Hola_
∘ _Un pato_
∘ _Nyanpasu_
∘ _Te amo_
∘ _Yamete_
∘ _Te diagnostico con gay_
∘ _Quien es tu sempai botsito 7w7_
∘ _Bañate_
∘ _Vivan los novios_
∘ _Marica quien_
∘ _Es puto_
∘ _La biblia_
∘ _Onichan_
∘ _Bot puto_
∘ _Feliz cumpleaños_
∘ _Pasa pack Bot_
∘ _Atencion grupo_
∘ _Homero chino_
∘ _Oh me vengo_
∘ _Murio el grupo_
∘ _Siuuu_
∘ _Rawr_
∘ _UwU_
∘ _:c_
∘ _a_
∘ _Hey_
∘ _Enojado_
∘ _Enojada_
∘ _Chao_
∘ _Hentai_
∘ _Triste_
∘ _Estoy triste_
∘ _Me pican los cocos_
∘ _Contexto_
∘ _Me voy_
∘ _Tengo los calzones del admin_
∘ _Entrada épica_ 
∘ _Esto va ser épico papus_
∘ _Ingresa épicamente_
∘ _Bv_
∘ _Yoshi_
∘ _No digas eso papu_
∘ _Ma ma masivo_
∘ _Masivo_
∘ _Basado_
∘ _Basada_
∘ _Fino señores_
∘ _Verdad que te engañe_
∘ _Sus_
∘ _Ohayo_
∘ _La voz de hombre_
∘ _Pero esto_
∘ _Bien pensado Woody_
∘ _Jesucristo_
∘ _Wtf_
∘ _Una pregunta_
∘ _Que sucede_
∘ _Hablame_
∘ _Pikachu_
∘ _Niconico_
∘ _Yokese_
∘ _Omaiga_
∘ _Nadie te preguntó_
∘ _Bueno si_
∘ _Usted está detenido_
∘ _No me hables_
∘ _No chu_
∘ _El pepe_
∘ _Pokémon_
∘ _No me hagas usar esto_
∘ _Esto va para ti_
∘ _Abduzcan_
∘ _Joder_
∘ _Hablar primos_
∘ _Mmm_
∘ _Orale_
∘ _Me anda buscando anonymous_
∘ _Blackpink in your area_
∘ _Cambiate a Movistar_
∘ _Momento equisde | Momento XD_
∘ _Todo bien | 😇_
∘ _Te gusta el Pepino | 🥒_
∘ _El tóxico_
∘ _Moshi moshi_
∘ _Calla Fan de BTS_
∘ _Que tal grupo_
∘ _Muchachos_
∘ _Está Zzzz | 😴_
∘ _Goku Pervertido_
∘ _Potaxio | 🥑_
∘ _Nico nico_
∘ _El rap de Fernanfloo_
∘ _Tal vez_
∘ _Corte corte_
∘ _Buenas noches_
∘ _Porque ta tite_
∘ _Eres Fuerte_
∘ _Bueno Master | 🫂_
∘ _No Rompas más_
∘ _Traiganle una falda_
∘ _Se están riendo de mí_
∘ _Su nivel de pendejo_
∘ _Bienvenido/a 🥳 | 👋_
∘ _Elmo sabe donde vives_
∘ _tunometecabrasaramambiche_
∘ _Y este quien es_
∘ _Motivación_
∘ _En caso de una investigación_
∘ _Buen día grupo | 🙌_
∘ _Las reglas del grupo_
∘ _Oye | 🐔_
∘ _Ig de la minita_
∘ _Gaspi frase_
∘ _Vamos!!_
∘ _Se pudrio_
∘ _Gol!_`.trim()
  
await conn.sendButtonVid(m.chat, pp, menuA, menuB, lenguajeGB.smsBotonM1(), '.menu', lenguajeGB.smsBotonM2(), '/allmenu', lenguajeGB.smsBotonM3(), '#inventario', fkontak, adReply)
*/
let listSections = [];             
listSections.push({
title: `${lenguajeGB.smsTex18()}`,
rows: [
{ header: lenguajeGB['smsLista2'](), title: "", description: "", id: usedPrefix + "creadora" },
{ header: lenguajeGB['smsLista5'](), title: "", description: "", id:  usedPrefix + "infomenu" },
{ header: lenguajeGB['smsLista6'](), title: "", description: "", id: usedPrefix + "allmenu" },  
  
{ header: "➥🔊 Noche de paz", description: "", id: `Noche de paz`},
{ header: "➥🔊 Buenos dias", description: "", id: `Buenos dias`},
{ header: "➥🔊 Audio hentai", description: "", id: `Audio hentai`},
{ header: "➥🔊 Fiesta del admin", description: "", id: `Fiesta del admin`},
{ header: "➥🔊 Fiesta del admin 2", description: "", id: `Fiesta del admin 2`},
{ header: "➥🔊 Fiesta del administrador", description: "", id: `Fiesta del administrador`},
{ header: "➥🔊 Viernes", description: "", id: `Viernes`},
{ header: "➥🔊 Me olvidé", description: "", id: `Me olvidé`},
{ header: "➥🔊 Baneado", description: "", id: `Baneado`},
{ header: "➥🔊 Feliz navidad", description: "", id: `Feliz navidad`},
{ header: "➥🔊 A nadie le importa", description: "", id: `A nadie le importa`},
{ header: "➥🔊 Sexo", description: null, rowId: `Sexo`},
{ header: "➥🔊 Vete a la vrg", description: "", id: `Vete a la vrg`},
{ header: "➥🔊 Ara ara", description: "", id: `Ara ara`},
{ header: "➥🔊 Mierda de Bot", description: "", id: `Mierda de Bot`},
{ header: "➥🔊 Hola", description: "", id: `Hola`},
{ header: "➥🔊 Un pato", description: "", id: `Un pato`},
{ header: "➥🔊 Nyanpasu", description: "", id: `Nyanpasu`},
{ header: "➥🔊 Te amo", description: "", id: `Te amo`},
{ header: "➥🔊 Yamete", description: "", id: `Yamete`},
{ header: "➥🔊 Te diagnostico con gay", description: "", id: `Te diagnostico con gay`},
{ header: "➥🔊 Quien es tu sempai botsito 7w7", description: "", id: `Quien es tu sempai botsito 7w7`},
{ header: "➥🔊 Bañate", description: "", id: `Bañate`},
{ header: "➥🔊 Vivan los novios", description: "", id: `Vivan los novios`},
{ header: "➥🔊 Marica quien", description: "", id: `Marica quien`},
{ header: "➥🔊 Es puto", description: "", id: `Es puto`},
{ header: "➥🔊 La biblia", description: "", id: `La biblia`},
{ header: "➥🔊 Onichan", description: "", id: `Onichan`},
{ header: "➥🔊 Bot puto", description: "", id: `Bot puto`},
{ header: "➥🔊 Feliz cumpleaños", description: "", id: `Feliz cumpleaños`},
{ header: "➥🔊 Pasa pack Bot", description: "", id: `Pasa pack Bot`},
{ header: "➥🔊 Atencion grupo", description: "", id: `Atencion grupo`},
{ header: "➥🔊 Homero chino", description: "", id: `Homero chino`},
{ header: "➥🔊 Oh me vengo", description: "", id: `Oh me vengo`},
{ header: "➥🔊 Murio el grupo", description: "", id: `Murio el grupo`},
{ header: "➥🔊 Siuuu", description: "", id: `Siuuu`},
{ header: "➥🔊 Rawr", description: "", id: `Rawr`},
{ header: "➥🔊 UwU", description: "", id: `UwU`},
{ header: "➥🔊 :c", description: "", id: `:c`},
{ header: "➥🔊 a", description: "", id: `a`},
{ header: "➥🔊 Hey", description: "", id: `Hey`},
{ header: "➥🔊 Enojado", description: "", id: `Enojado`},
{ header: "➥🔊 Enojada", description: "", id: `Enojada`},
{ header: "➥🔊 Chao", description: "", id: `Chao`},
{ header: "➥🔊 Hentai", description: "", id: `Hentai`},
{ header: "➥🔊 Triste", description: "", id: `Triste`},
{ header: "➥🔊 Estoy triste", description: "", id: `Estoy triste`},
{ header: "➥🔊 Me pican los cocos", description: "", id: `Me pican los cocos`},
{ header: "➥🔊 Contexto", description: "", id: `Contexto`},
{ header: "➥🔊 Me voy", description: "", id: `Me voy`},
{ header: "➥🔊 Tengo los calzones del admin", description: "", id: `Tengo los calzones del admin`},
{ header: "➥🔊 Entrada épica", description: "", id: `Entrada épica`},
{ header: "➥🔊 Esto va ser épico papus", description: "", id: `Esto va ser épico papus`},
{ header: "➥🔊 Ingresa épicamente", description: "", id: `Ingresa épicamente`},
{ header: "➥🔊 Bv", description: "", id: `Bv`},
{ header: "➥🔊 Yoshi", description: "", id: `Yoshi`},
{ header: "➥🔊 No digas eso papu", description: "", id: `No digas eso papu`},
{ header: "➥🔊 Ma ma masivo", description: "", id: `Ma ma masivo`},
{ header: "➥🔊 Masivo", description: "", id: `Masivo`},
{ header: "➥🔊 Basado", description: "", id: `Basado`},
{ header: "➥🔊 Fino señores", description: "", id: `Fino señores`},
{ header: "➥🔊 Verdad que te engañe", description: "", id: `Verdad que te engañe`},
{ header: "➥🔊 Sus", description: "", id: `Sus`},
{ header: "➥🔊 Ohayo", description: "", id: `Ohayo`},
{ header: "➥🔊 La voz de hombre", description: "", id: `La voz de hombre`},
{ header: "➥🔊 Pero esto", description: "", id: `Pero esto`},
{ header: "➥🔊 Bien pensado Woody", description: "", id: `Bien pensado Woody`},
{ header: "➥🔊 Jesucristo", description: "", id: `Jesucristo`},
{ header: "➥🔊 Wtf", description: "", id: `Wtf`},
{ header: "➥🔊 Una pregunta", description: "", id: `Una pregunta`},
{ header: "➥🔊 Que sucede", description: "", id: `Que sucede`},
{ header: "➥🔊 Hablame", description: "", id: `Hablame`},
{ header: "➥🔊 Pikachu", description: "", id: `Pikachu`},
{ header: "➥🔊 Niconico", description: "", id: `Niconico`},
{ header: "➥🔊 Yokese", description: "", id: `Yokese`},
{ header: "➥🔊 Omaiga", description: "", id: `Omaiga`},
{ header: "➥🔊 Nadie te preguntó", description: "", id: `Nadie te preguntó`},
{ header: "➥🔊 Bueno si", description: "", id: `Bueno si`},
{ header: "➥🔊 Usted está detenido", description: "", id: `Usted está detenido`},
{ header: "➥🔊 No me hables", description: "", id: `No me hables`},
{ header: "➥🔊 No, chupala", description: "", id: `No, chupala`},
{ header: "➥🔊 El pepe", description: "", id: `El pepe`},
{ header: "➥🔊 Pokémon", description: "", id: `Pokémon`},
{ header: "➥🔊 No me hagas usar esto", description: "", id: `No me hagas usar esto`},
{ header: "➥🔊 Esto va para ti", description: "", id: `Esto va para ti`},
{ header: "➥🔊 Abduzcan", description: "", id: `Abduzcan`},
{ header: "➥🔊 Joder", description: "", id: `Joder`},
{ header: "➥🔊 Hablar primos", description: "", id: `Hablar primos`},
{ header: "➥🔊 Mmm", description: "", id: `Mmm`},
{ header: "➥🔊 Orale", description: "", id: `Orale`},
{ header: "➥🔊 Me anda buscando anonymous", description: "", id: `Me anda buscando anonymous`},
{ header: "➥🔊 Blackpink in your area", description: "", id: `Blackpink in your area`},
{ header: "➥🔊 Cambiate a Movistar", description: "", id: `Cambiate a Movistar`},
{ header: "➥🔊 Momento equisde", description: "", id: `Momento equisde`},
{ header: "➥🔊 Momento XD", description: "", id: `Momento XD`},
{ header: "➥🔊 Todo bien", description: "", id: `Todo bien`},
{ header: "➥🔊 😇", description: "", id: `😇`},
{ header: "➥🔊 Te gusta el Pepino", description: "", id: `Te gusta el Pepino`},
{ header: "➥🔊 🥒", description: "", id: `🥒`},
{ header: "➥🔊 El tóxico", description: "", id: `El tóxico`},
{ header: "➥🔊 Moshi moshi", description: "", id: `Moshi moshi`},
{ header: "➥🔊 Calla Fan de BTS", description: "", id: `Calla Fan de BTS`},
{ header: "➥🔊 Que tal grupo", description: "", id: `Que tal grupo`},
{ header: "➥🔊 Muchachos", description: "", id: `Muchachos`},
{ header: "➥🔊 Está Zzzz", description: "", id: `Está Zzzz`},
{ header: "➥🔊 😴", description: "", id: `😴`},
{ header: "➥🔊 Goku Pervertido", description: "", id: `Goku Pervertido`},
{ header: "➥🔊 Potaxio", description: "", id: `Potaxio`},
{ header: "➥🔊 🥑", description: "", id: `🥑`},
{ header: "➥🔊 Nico nico", description: "", id: `Nico nico`},
{ header: "➥🔊 El rap de Fernanfloo", description: "", id: `El rap de Fernanfloo`},
{ header: "➥🔊 Tal vez", description: "", id: `Tal vez`},
{ header: "➥🔊 Corte corte", description: "", id: `Corte corte`},
{ header: "➥🔊 Buenas noches", description: "", id: `Buenas noches`},
{ header: "➥🔊 Porque ta tite", description: "", id: `Porque ta tite`},
{ header: "➥🔊 Eres Fuerte", description: "", id: `Eres Fuerte`},
{ header: "➥🔊 Bueno Master", description: "", id: `Bueno Master`},
{ header: "➥🔊 🫂", description: "", id: `🫂`},
{ header: "➥🔊 No Rompas más", description: "", id: `No Rompas más`},  
{ header: "➥🔊 Traiganle una falda", description: "", id: `Traiganle una falda`},
{ header: "➥🔊 Se están riendo de mí", description: "", id: `Se están riendo de mí`},
{ header: "➥🔊 Su nivel de pendejo", description: "", id: `Su nivel de pendejo`},
{ header: "➥🔊 Bienvenido/a", description: "", id: `Bienvenido`},
{ header: "➥🔊 🥳", description: "", id: `🥳`},
{ header: "➥🔊 👋", description: "", id: `👋`},
{ header: "➥🔊 Elmo sabe donde vives", description: "", id: `Elmo sabe donde vives`},
{ header: "➥🔊 tunometecabrasaramambiche", description: "", id: `tunometecabrasaramambiche`},
{ header: "➥🔊 Y este quien es", description: "", id: `Y este quien es`},
{ header: "➥🔊 Motivación", description: "", id: `Motivación`},
{ header: "➥🔊 En caso de una investigación", description: "", id: `En caso de una investigación`},
{ header: "➥🔊 Buen día grupo", description: "", id: `Buen día grupo`},
{ header: "➥🔊 🙌", description: "", id: `🙌`},
{ header: "➥🔊 Oye", description: "", id: `Oye`},
{ header: "➥🔊 Ig de la minita", description: "", id: `Ig de la minita`},
{ header: "➥🔊 Gaspi frase", description: "", id: `Gaspi frase`},
{ header: "➥🔊 Vamos!!", description: "", id: `Vamos`},
{ header: "➥🔊 Se pudrio", description: "", rowId: `Se pudrio`},
{ headere: "➥🔊 Gol!", description: "", id: `Gol`},
{ header: "➥🔊 Las reglas del grupo", description: "", id: `Las reglas del grupo`},
]})

const listMessage = {
text: `${wm}`,
footer: `*${lenguajeGB['smsTex16']()}*
${lenguajeGB['smsTex19']()}
${wm}`,//`
title: null,
buttonText: `🔊 ${lenguajeGB['smsTex16']()} 🔊`,
sections }

await natsuki.sendList(m.chat, `*Lista. de todos los audios*`, `${gt}`, `Ver lista`, listSections, {quoted: fkontak});


} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}

handler.help = ['infomenu'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menuaudios|memuaudios|memuaudio|audios|audio)$/i
handler.exp = 60
//handler.register = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
