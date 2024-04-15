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
links = await uploadImage(media)
}
if (m.mtype == 'viewOnceMessageV2') {
let msg = m.message.viewOnceMessageV2.message
let type = Object.keys(msg)[0]
if (type == 'imageMessage') {
media = await downloadContentFromMessage(msg[type], 'image')
buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])}
links = await uploadImage(buffer)
}}
if (links) {
const response = await fetch(`https://api.alyachan.dev/api/porn-detector?image=${link}&apikey=wilmermacu`)
const result = await response.json()
await m.reply(link)
if (result.status && result.data && result.data.isPorn) {
