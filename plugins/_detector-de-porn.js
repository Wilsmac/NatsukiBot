import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
import fetch from 'node-fetch'
let { downloadContentFromMessage } = (await import(global.baileys))
import path from 'path'  
let handler = m => m
handler.before = async function (m, { conn, __dirname }) {
let media, link, buffer
try{
let q = m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (!(/sticker|image/.test(mime)) || m.mtype == 'viewOnceMessageV2') return
let IsTel = /^image\/(png|jpe?g)$/.test(mime)
if (IsTel) {
media = await q.download()
link = await uploadImage(media)
}