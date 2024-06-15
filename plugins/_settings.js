import fetch from 'node-fetch'
import moment from 'moment-timezone'
import axios from 'axios'
import fs from 'fs'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto }  = (await import(global.baileys))

var handler = m => m
handler.all = async function (m) {

global.canalrd = "https://whatsapp.com/channel/0029VaCUlPX0LKZAlP10pC43"

var canal = [
{ link: canalrd, id: "120363192435027853@newsletter", name: "『 Natsuki Club Oficial 』" }
]
var Channelswa = canal

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

global.channelWa = { contextInfo: { mentionedJid: null, forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: Channelswa.id, serverMessageId: '', newsletterName: Channelswa.name }, externalAdReply: { title: wm, body: gt, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: fantasyImg.getRandom(), thumbnail: imagen1, sourceUrl: canalofc }}}, { quoted: m }

}
export default handler
