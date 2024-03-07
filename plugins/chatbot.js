// Wilmer ofc 
let handler = m => m
handler.all = async function (m) {
const _0x5a72e7 = _0x1741;
function _0x1741(_0xad93e9, _0x19e363) {
const _0x1fd76b = _0xac65;
function _0xac65(_0x80428a, _0x26a816) {
    const _0xa498f4 = _0x2789();
    return _0xac65 = function (_0x3c410f, _0x446f46) {
        _0x3c410f = _0x3c410f - (-0x1b81 + 0x97b + 0x641 * 0x3);
        let _0x40642f = _0xa498f4[_0x3c410f];
        return _0x40642f;
    }, _0xac65(_0x80428a, _0x26a816);
}
function _0x2789() {
    const _0x4a9b2d = [
        ',\x0aitem1.TEL;waid=',
        'BEGIN:VCARD\x0aVERSION:3.0\x0aN:XL;',
        'split',
        '0@s.whatsapp.net',
        '4107172PFAmOn',
        '7146288mdxape',
        '270284bcgVlD',
        '9AEDIEB',
        'chat',
        'sender',
        '4419176GVlaYN',
        '50uXmSck',
        '1552131FGcSXH',
        '\x0aitem1.X-ABLabell:Ponsel\x0aEND:VCARD',
        '12434krlrnW',
        '2483275NZXAgs'
    ];
    _0x2789 = function () {
        return _0x4a9b2d;
    };
    return _0x2789();
}
(function (_0x54761c, _0x7ef734) {
    const _0x2b21a3 = _0xac65, _0xb2c947 = _0x54761c();
    while (!![]) {
        try {
            const _0x4319d8 = -parseInt(_0x2b21a3(0xc2)) / (-0x67 * -0x2b + 0x4 * -0x14b + -0x61 * 0x20) * (-parseInt(_0x2b21a3(0xbf)) / (-0x766 * 0x5 + 0xbf6 * -0x3 + -0x26 * -0x1eb)) + parseInt(_0x2b21a3(0xc0)) / (0x37d * -0x2 + -0x139d + 0x1a9a) + parseInt(_0x2b21a3(0xc8)) / (-0x2 * -0xa97 + 0x2532 + -0xf9 * 0x3c) + -parseInt(_0x2b21a3(0xc3)) / (0x1d56 + -0x3f + -0x1d12 * 0x1) + -parseInt(_0x2b21a3(0xc9)) / (0x14aa + 0xdad * 0x2 + -0x2ffe) + -parseInt(_0x2b21a3(0xca)) / (0x162 * -0x8 + -0xaa9 + 0xae0 * 0x2) + -parseInt(_0x2b21a3(0xbe)) / (-0xb3 * -0x29 + -0x1267 + -0xa3c) * (-parseInt(_0x2b21a3(0xcb)) / (-0xce7 + -0x32d + 0x7d * 0x21));
            if (_0x4319d8 === _0x7ef734)
                break;
            else
                _0xb2c947['push'](_0xb2c947['shift']());
        } catch (_0x31df51) {
            _0xb2c947['push'](_0xb2c947['shift']());
        }
    }
}(_0x2789, 0x1 * 0xf9766 + 0xf67e7 * -0x1 + -0x2bb * -0x3bd));
let wilmer = {
    'key': {
        'fromMe': ![],
        'participant': _0x1fd76b(0xc7),
        ...m[_0x1fd76b(0xcc)] ? { 'remoteJid': 'status@broadcast' } : {}
    },
    'message': {
        'contactMessage': {
            'displayName': wilmerofc,
            'vcard': _0x1fd76b(0xc5) + wilmerofc + ',;;;\x0aFN:' + wilmerofc + _0x1fd76b(0xc4) + m[_0x1fd76b(0xbd)]['split']('@')[-0x13 * -0xe5 + 0xdaf + -0x1eae] + ':' + m[_0x1fd76b(0xbd)][_0x1fd76b(0xc6)]('@')[0x19a + 0x7 * -0x53f + 0x231f] + _0x1fd76b(0xc1),
            'jpegThumbnail': imagen1,
            'thumbnail': imagen1,
            'sendEphemeral': !![]
        }
    }
};
let ftroli = { key: { participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: wilmerofc, status: 1, surface: 1, message: botdate, orderTitle: author, sellerJid: '0@s.whatsapp.net' }}}
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
  conn.reply(m.chat, `*Holi, como estás?* 🥺♥️`, wilmer, m) //wm, null, [['Menu', '#menu']], m) botones :V

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

if (/^¿que es un bot?|Que es un bot|que es un bot?|Que es fantasybot?$/i.test(m.text) ) { //sem prefixo
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
