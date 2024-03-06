// Wilmer ofc 
let handler = m => m
handler.all = async function (m) {
let fkontak2 = { key: { participant: '0@s.whatsapp.net' }, message: { contactMessage: { displayName: packname, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${author},;;;\nFN:${author},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, jpegThumbnail: fs.readFileSync('./media/menus/Menu1.jpg'), thumbnail: fs.readFileSync('./media/menus/Menu1.jpg'), sendEphemeral: true }}}
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)
if (chat.isBanned) return

if (/^e$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`Que bueno sabe la letra E`, `eeeeee`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}



if (/^Hola|Holi|hola$/i.test(m.text) ) { //sin prefijo
  conn.reply(m.chat, `*Holi, como estás?* 🥺♥️`, fkontak3, m) //wm, null, [['Menu', '#menu']], m) botones :V

}




/*if (/^Buenos días|buenos días|buenos dias|hola, buenos días$/i.test(m.text) ) { //sin prefijo
  let teks = `
  ${pickRandom([`*"Comenzar el día orando y dando gracias a dios es a lo que yo llamo un buen amanecer."*`,
                `*"Mientras empieces el día sonriendo, estás asegurando que será un buen día."*`, 
                `**Aunque la lluvia haga un día muy oscuro, tu tienes el sol por dentro."*`,
                `*"Gracias por hacerme tan especial, gracias por estar conmigo, que la bendición y el amor te acompañen en este nuevo día."*`,
                `*"La vida y el tiempo son los mejores maestros. La vida nos enseña a aprovechar el tiempo y el tiempo nos enseña a valorar la vida."*`, 
                `*"No te limites en tu andar guiándote solamente por el camino de los demás, sé emprendedor y ve por donde no hay un camino para comenzar a dejar tus huellas, Buenos Dias"*`,
                `*"Buenos días a toda esa gente bonita que me rodea… bueno y a la fea también"*`,
                `*"Nacemos de nuevo con cada amanecer. Que este día sea el más importante de tu vida. Buenos días."*`,
                `*"El brillo de cada día, no depende del sol sino de tu sonrisa que sale del corazón. Que tengas un feliz día."*`,
                `*"Lo mejor de empezar un nuevo día es que voy a poder ver tu sonrisa, buenos día."*`,
                `*"El momento para todo es el ahora. ¡Despiértate y ten un gran día!"*`,
                `*"No te limites en tu andar guiándote solamente por el camino de los demás, sé emprendedor y ve por donde no hay un camino para comenzar a dejar tus huellas, Buenos Dias"*`])}
  `, fkontak, m)
}*/



/*if (/^Mande porno|porno|paja$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`no puedo esta contra las política del grupo.😸`, `_uff miren un pajero_`, `_pagame y paso mi pack😏🥵_`, `_que_`, `_que quiere pija dice 🤣_`, `_pasa el pack de tu hermana😏_`, `_mire un gilipolla_`, `_siuuu sexo sexo sexo😈_`, '_callate putito_'])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}*/

if (/^reglas|normas|Reglas$/i.test(m.text) ) { //sin prefijo
  conn.reply(m.chat, `╭┅〘 ⚠️ 𝗢𝗯𝗲𝗱𝗲𝗰𝗲 𝗹𝗮𝘀 𝗿𝗲𝗴𝗹𝗮𝘀 ⚠️ 〙*
➽❌ 𝐏𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨 𝐥𝐥𝐚𝐦𝐚𝐫 𝐚𝐥 𝐁𝐨𝐭
➽❌ 𝐏𝐫𝐨𝐡𝐢𝐛𝐢𝐝𝐨 𝐒𝐩𝐚𝐦 𝐚𝐥 𝐁𝐨𝐭
➽❌ 𝐍𝐨 𝐚𝐠𝐫𝐞𝐠𝐚𝐫 𝐚𝐥 𝐁𝐨𝐭
➽❌ 𝐑𝐞𝐬𝐩𝐞𝐭𝐚 𝐥𝐨𝐬 𝐭𝐞𝐫𝐦𝐢𝐧𝐨𝐬 𝐲 𝐜𝐨𝐧𝐝𝐢𝐜𝐢𝐨𝐧𝐞𝐬
*╰═┅ৡৢ͜͡✦═╡ 𝑾𝑰𝑳𝑴𝑬𝑹 𝑶𝑭𝑪 ╞═┅ৡৢ͜͡✦═╯*`, fkontak, m) //wm, null, [['Menu', '#menu']], m) botones :V

}


/*if (/^hola|halo|hello|hi$/i.test(m.text) ) { //sin prefijo 
     conn.reply(m.chat, `tu nariz contra mis bolas :v`, fkontak, m)

 }*/

if (/^¿que es un bot?|Que es un bot|Que es fantasybot?$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `┍━━━━╝ *${packname}*╚━━━━┑
┃ ━─━─━─━─━─━─━─━─━
┃ ☆::¿𝐐𝐮𝐞́ 𝐞𝐬 𝐮𝐧 𝐁𝐨𝐭 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩?::☆
┃━─━─━─━─━─━─━─━─━
┃ 𝐔𝐧 𝐁𝐨𝐭 𝐞𝐬 𝐮𝐧𝐚 𝐢𝐧𝐭𝐞𝐥𝐢𝐠𝐞𝐧𝐜𝐢𝐚 𝐚𝐫𝐭𝐢𝐟𝐢𝐜𝐢𝐚𝐥 𝐪𝐮𝐞 𝐫𝐞𝐚𝐥𝐢𝐳𝐚 𝐭𝐚𝐫𝐞𝐚𝐬
┃ 𝐪𝐮𝐞 𝐥𝐞 𝐢𝐧𝐝𝐢𝐪𝐮𝐞 𝐜𝐨𝐧 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬, 𝐞𝐧 𝐞𝐥 𝐜𝐚𝐬𝐨 𝐝𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 
┃━─━─━─━─━─━─━─━─━
┃𝐩𝐮𝐞𝐝𝐞𝐬 𝐜𝐫𝐞𝐚𝐫 𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐬, 𝐝𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐫 𝐦𝐮́𝐬𝐢𝐜𝐚, 𝐯𝐢𝐝𝐞𝐨𝐬, 
┃━─━─━─━─━─━─━─━─━
┃ 𝐜𝐫𝐞𝐚𝐫 𝐥𝐨𝐠𝐨𝐬 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢𝐳𝐚𝐝𝐨𝐬 𝐲 𝐦𝐮𝐜𝐡𝐨 𝐦𝐚𝐬, 
┃ 𝐞𝐬𝐭𝐨 𝐝𝐞 𝐟𝐨𝐫𝐦𝐚 𝐚𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐳𝐚𝐝𝐚, 𝐨 𝐬𝐞𝐚 𝐪𝐮𝐞 𝐮𝐧 𝐡𝐮𝐦𝐚𝐧𝐨 
┃━─━─━─━─━─━─━─━─━
┃ 𝐧𝐨 𝐢𝐧𝐭𝐞𝐫𝐟𝐢𝐞𝐫𝐞 𝐞𝐧 𝐞𝐥 𝐩𝐫𝐨𝐜𝐞𝐬𝐨 
┃ 𝒑𝒂𝒓𝒂 𝒗𝒆𝒓 𝒆́𝒍 𝒎𝒆𝒏𝒖́ 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐩𝐮𝐞𝐝𝐞𝐬 𝐮𝐬𝐚𝐫 #menu
┃ ━─━─━─━─━─━─━─━─━
┃  𝑩𝒚 𝑾𝒊𝒎𝒎𝒆𝒓 𝒐𝒇𝒄
╰≪━─━─━─ ºᶠᶜ─━─━─━≫*`, m)

}  
return !0 
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
