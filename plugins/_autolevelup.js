import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'
export function before(m, { conn }) {
//if (!db.data.chats[m.chat].autonivel && m.isGroup) throw
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
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
	
let user = global.db.data.users[m.sender]
let chat = global.db.data.chats[m.chat]
if (!chat.autolevelup)
return !0
	
let before = user.level * 1
while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
 if (before !== user.level) {


conn.reply(m.chat, `┏━━°❀•°:🌹:°•❀°━━┓ 
  🌺⃢❈❥ ${username}
┗━━°❀•°:🌹:°•❀°━━┛
 ⬤͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙ _*${lenguajeGB.smsAutoLv2()} ${before}*_
 ⬤͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙ _*${lenguajeGB.smsAutoLv3()} ${user.level}*_ 
 ⬤͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙ _*${lenguajeGB.smsAutoLv4()}* ${user.role}*_
 ⬤͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙͙ _*${lenguajeGB.smsAutoLv5()} ${new Date().toLocaleString('id-ID')}*_
✩｡_*${lenguajeGB.smsAutoLv1()}*_ ✩
*╚═════•| ✿ |•═════╝*`, fkontak2, m)

let especial = ['limit', 'diamond', 'joincount', 'emerald', 'berlian', 'kyubi', 'gold', 'money', 'tiketcoin', 'stamina'].getRandom()
let especial2 = ['potion', 'aqua', 'trash', 'wood', 'rock', 'batu', 'string', 'iron', 'coal', 'botol', 'kaleng', 'kardus'].getRandom()
let especial3 = ['eleksirb', 'emasbatang', 'emasbiasa', 'rubah', 'sampah', 'serigala', 'kayu', 'sword', 'umpan', 'healtmonster', 'emas', 'pancingan', 'pancing'].getRandom()
let especial4 = ['common', 'uncoommon', 'mythic', 'pet', 'gardenboxs', 'legendary'].getRandom()

let especialCant = [6, 7, 6, 7, 6, 6, 6, 7, 8, 9, 8, 3, 9, 7, 9].getRandom()
let especialCant2 = [6, 7, 6, 7, 6, 6, 6, 7, 8, 9, 10, 3, 11, 7, 9].getRandom()
let especialCant3 = [6, 7, 6, 7, 6, 6, 6, 7, 8, 9, 10, 3, 11, 7, 9].getRandom()
let especialCant4 = [2, 2, 2, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 2, 2].getRandom()

let normal = ['potion', 'aqua', 'trash', 'wood', 'rock', 'batu', 'string', 'iron', 'coal', 'botol', 'kaleng', 'kardus'].getRandom()
let normal2 = ['petFood', 'makanancentaur', 'makanangriffin', 'makanankyubi', 'makanannaga', 'makananpet', 'makananphonix'  ].getRandom()
let normal3 = ['anggur', 'apel', 'jeruk', 'mangga', 'pisang'].getRandom()

let normalCant = [1, 3, 3, 3, 4, 4, 2, 2, 4, 4, 4, 4, 1].getRandom() 
let normalCant2 = [1, 3, 2, 2, 4, 4, 2, 2, 4, 4, 5, 5, 1].getRandom() 
let normalCant3 = [1, 3, 3, 3, 4, 4, 2, 2, 4, 4, 4, 4, 1].getRandom() 

if (user.level == 5){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 5!!* 🏆
𓃠 *${especialCant * 1} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 1} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 1} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 1} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝑭𝒂𝒏𝒕𝒂𝒔𝒚𝑩𝒐𝒕-𝑴𝑫 𝐕1 𝑩𝒚 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄 ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}}) 
user[especial] += especialCant * 1
user[especial2] += especialCant2 * 1
user[especial3] += especialCant3 * 1
user[especial4] += especialCant4 * 1
  
}else if (user.level == 10){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 10!!* 🏆
𓃠 *${especialCant * 1} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 1} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 1} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 1} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' [♥︎𝐿] 𝑌 [☆𝑊] 𝑋 𝗦𝗜𝗘𝗠𝗣𝗥𝗘 ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}}) 
user[especial] += especialCant * 1
user[especial2] += especialCant2 * 1
user[especial3] += especialCant3 * 1
user[especial4] += especialCant4 * 1
  
}else if (user.level == 15){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 15!!* 🏆
𓃠 *${especialCant * 2} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 2} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 2} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 2} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄 ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}}) 
user[especial] += especialCant * 2
user[especial2] += especialCant2 * 2
user[especial3] += especialCant3 * 2
user[especial4] += especialCant4 * 2
  
}else if (user.level == 20){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 20!!* 🏆
𓃠 *${especialCant * 2} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 2} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 2} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 2} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄 ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}}) 
user[especial] += especialCant * 2
user[especial2] += especialCant2 * 2
user[especial3] += especialCant3 * 2
user[especial4] += especialCant4 * 2
  
}else if (user.level == 25){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 25!!* 🏆
𓃠 *${especialCant * 3} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 3} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 3} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 3} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄 ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}})
user[especial] += especialCant * 3
user[especial2] += especialCant2 * 3
user[especial3] += especialCant3 * 3
user[especial4] += especialCant4 * 3
	
}else if (user.level == 30){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 30!!* 🏆
𓃠 *${especialCant * 3} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 3} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 3} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 3} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄 ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}})
user[especial] += especialCant * 3
user[especial2] += especialCant2 * 3
user[especial3] += especialCant3 * 3
user[especial4] += especialCant4 * 3
	
}else if (user.level == 35){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 35!!* 🏆
𓃠 *${especialCant * 4} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 4} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 4} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 4} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄 ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}})
user[especial] += especialCant * 4
user[especial2] += especialCant2 * 4
user[especial3] += especialCant3 * 4
user[especial4] += especialCant4 * 4
	
}else if (user.level == 40){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 40!!* 🏆
𓃠 *${especialCant * 4} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 4} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 4} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 4} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄 ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}})
user[especial] += especialCant * 4
user[especial2] += especialCant2 * 4
user[especial3] += especialCant3 * 4
user[especial4] += especialCant4 * 4
	
}else if (user.level == 45){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 45!!* 🏆
𓃠 *${especialCant * 4} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 4} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 4} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 4} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄 ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}})
user[especial] += especialCant * 4
user[especial2] += especialCant2 * 4
user[especial3] += especialCant3 * 4
user[especial4] += especialCant4 * 4
	
}else if (user.level == 50){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 50!!* 🏆
𓃠 *${especialCant * 5} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 5} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 5} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 5} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄 ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}})
user[especial] += especialCant * 5
user[especial2] += especialCant2 * 5
user[especial3] += especialCant3 * 5
user[especial4] += especialCant4 * 5
	
}else if (user.level == 55){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 55!!* 🏆
𓃠 *${especialCant * 5} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 5} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 5} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 5} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄 ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}})
user[especial] += especialCant * 5
user[especial2] += especialCant2 * 5
user[especial3] += especialCant3 * 5
user[especial4] += especialCant4 * 5
	
}else if (user.level == 60){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 60!!* 🏆
𓃠 *${especialCant * 5} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 5} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 5} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 5} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄 ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}})
user[especial] += especialCant * 5
user[especial2] += especialCant2 * 5
user[especial3] += especialCant3 * 5
user[especial4] += especialCant4 * 5
	
}else if (user.level == 65){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 65!!* 🏆
𓃠 *${especialCant * 5} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 5} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 5} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 5} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄 ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}})
user[especial] += especialCant * 5
user[especial2] += especialCant2 * 5
user[especial3] += especialCant3 * 5
user[especial4] += especialCant4 * 5
	
}else if (user.level == 70){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 70!!* 🏆
𓃠 *${especialCant * 6} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 6} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 6} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 6} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄 ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}})
user[especial] += especialCant * 6
user[especial2] += especialCant2 * 6
user[especial3] += especialCant3 * 6
user[especial4] += especialCant4 * 6
	
}else if (user.level == 75){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 75!!* 🏆
𓃠 *${especialCant * 6} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 6} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 6} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 6} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄 ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}})
user[especial] += especialCant * 6
user[especial2] += especialCant2 * 6
user[especial3] += especialCant3 * 6
user[especial4] += especialCant4 * 6
	
}else if (user.level == 80){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 80!!* 🏆
𓃠 *${especialCant * 7} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 7} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 7} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 7} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄 ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}})
user[especial] += especialCant * 7
user[especial2] += especialCant2 * 7
user[especial3] += especialCant3 * 7
user[especial4] += especialCant4 * 7
	
}else if (user.level == 85){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 85!!* 🏆
𓃠 *${especialCant * 7} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 7} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 7} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 7} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄 ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}})
user[especial] += especialCant * 7
user[especial2] += especialCant2 * 7
user[especial3] += especialCant3 * 7
user[especial4] += especialCant4 * 7
	
}else if (user.level == 90){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 90!!* 🏆
𓃠 *${especialCant * 8} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 8} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 8} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 8} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄 ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}})
user[especial] += especialCant * 8
user[especial2] += especialCant2 * 8
user[especial3] += especialCant3 * 8
user[especial4] += especialCant4 * 8
	
}else if (user.level == 95){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 95!!* 🏆
𓃠 *${especialCant * 10} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 10} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 10} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 10} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄 ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}})
user[especial] += especialCant * 10
user[especial2] += especialCant2 * 10
user[especial3] += especialCant3 * 10
user[especial4] += especialCant4 * 10
	
}else if (user.level == 100){
conn.reply(m.chat, `*${lenguajeGB.smsAutoLv7()} 100!!* 🏆
𓃠 *${especialCant * 10} ${global.rpgshop.emoticon(especial)}*
𓃠 *${especialCant2 * 10} ${global.rpgshop.emoticon(especial2)}*
𓃠 *${especialCant3 * 10} ${global.rpgshop.emoticon(especial3)}*
𓃠 *${especialCant4 * 10} ${global.rpgshop.emoticon(especial4)}*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄 ', previewType: 0, thumbnail: gataImg.getRandom(), sourceUrl: accountsgb.getRandom()}}})
user[especial] += especialCant * 10
user[especial2] += especialCant2 * 10
user[especial3] += especialCant3 * 10
user[especial4] += especialCant4 * 10
	
}else{	
	
}
	 
}}		
//export const disabled = false 
