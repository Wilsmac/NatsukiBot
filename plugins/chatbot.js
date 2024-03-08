// Wilmer ofc 


let handler = m => m
handler.all = async function (m) {
const _0x44713f = _0x34b6;
function _0x34b6(_0x355db8, _0x38a593) {
    const _0x400972 = _0x5695();
    return _0x34b6 = function (_0x16a5bb, _0x27e0c3) {
        _0x16a5bb = _0x16a5bb - (0x1 * 0x12fa + -0x12dc + -0x16 * -0xb);
        let _0x5e2a77 = _0x400972[_0x16a5bb];
        return _0x5e2a77;
    }, _0x34b6(_0x355db8, _0x38a593);
}
function _0x5695() {
    const _0x4cecf4 = [
        '10QkaAWA',
        '50166towazJ',
        'split',
        '7930580BDnYXG',
        '16rFbvUv',
        ',;;;\x0aFN:',
        ',\x0aitem1.TEL;waid=',
        '1528180FrsxKo',
        'sender',
        '855510JLyYbE',
        './media/menus/Menu1.jpg',
        '2370321JHDFol',
        '2784531yQdyIG',
        'readFileSync',
        '46058790kkljpF',
        '25WXxsFt',
        '\x0aitem1.X-ABLabell:Ponsel\x0aEND:VCARD'
    ];
    _0x5695 = function () {
        return _0x4cecf4;
    };
    return _0x5695();
}
(function (_0x4d3b1a, _0x58b11c) {
    const _0x423612 = _0x34b6, _0x34f90f = _0x4d3b1a();
    while (!![]) {
        try {
            const _0x37ec1c = parseInt(_0x423612(0x111)) / (-0x1e * 0x11a + 0x2 * -0x4e4 + -0x891 * -0x5) * (-parseInt(_0x423612(0x112)) / (0x6b6 + 0x6a9 + -0xd5d)) + -parseInt(_0x423612(0x11d)) / (0x1ee + 0x255e + -0x2749) + -parseInt(_0x423612(0x118)) / (0x1 * 0x219d + -0x1156 + 0x17 * -0xb5) + parseInt(_0x423612(0x120)) / (-0x14a9 + -0x1 * -0xb5d + 0x3 * 0x31b) * (-parseInt(_0x423612(0x11a)) / (0x1e * 0x47 + 0x1588 + -0x1dd4)) + -parseInt(_0x423612(0x114)) / (-0x1c9c + 0x8a9 + 0x13fa) + parseInt(_0x423612(0x115)) / (0x12d * -0x1d + -0x257d + 0xb2 * 0x67) * (-parseInt(_0x423612(0x11c)) / (0x222 * 0x3 + -0x3af * -0x1 + -0x1 * 0xa0c)) + parseInt(_0x423612(0x11f)) / (0x89f * -0x1 + -0x15 * -0x81 + 0xf6 * -0x2);
            if (_0x37ec1c === _0x58b11c)
                break;
            else
                _0x34f90f['push'](_0x34f90f['shift']());
        } catch (_0x47fdc1) {
            _0x34f90f['push'](_0x34f90f['shift']());
        }
    }
}(_0x5695, 0xf371d + -0x1 * -0x6f85a + -0xbed97));
let fkontak2 = {
    'key': { 'participant': '0@s.whatsapp.net' },
    'message': {
        'contactMessage': {
            'displayName': wilmerofc,
            'vcard': 'BEGIN:VCARD\x0aVERSION:3.0\x0aN:XL;' + author + _0x44713f(0x116) + author + _0x44713f(0x117) + m[_0x44713f(0x119)][_0x44713f(0x113)]('@')[-0x1484 * 0x1 + -0x666 + 0x1aea] + ':' + m['sender'][_0x44713f(0x113)]('@')[-0x162a + 0x546 + 0x10e4] + _0x44713f(0x110),
            'jpegThumbnail': fs[_0x44713f(0x11e)](_0x44713f(0x11b)),
            'thumbnail': fs['readFileSync']('./media/menus/Menu1.jpg'),
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
  conn.reply(m.chat, `*Holi, como estás?* 🥺♥️`, fkontak2, m) //wm, null, [['Menu', '#menu']], m) botones :V

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
*╰═┅ৡৢ͜͡✦═╡ 𝑾𝑰𝑳𝑴𝑬𝑹 𝑶𝑭𝑪 ╞═┅ৡৢ͜͡✦═╯*`, fkontak, m)

}


/*if (/^hola|halo|hello|hi$/i.test(m.text) ) { //sin prefijo 
     conn.reply(m.chat, `tu nariz contra mis bolas :v`, fkontak, m)*/

 }

if (/^¿que es un bot?|Que es un bot|que es un bot?|Que es fantasybot$/i.test(m.text) ) { //sem prefixo
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
╰≪━─━─━─ ºᶠᶜ─━─━─━≫*`, fkontak2, m)


}  
return !0 
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
