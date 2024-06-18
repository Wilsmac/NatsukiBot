import axios from 'axios'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${lenguajeCD['smsAvisoMG']()}${mid.smsInsta2}\n*${usedPrefix + command} cmwiler4*`
try {
const {key} = await conn.sendMessage(m, {text: wait})
await conn.sendMessage(m, {text: waitt, edit: key})
await conn.sendMessage(m, {text: waittt, edit: key})
await conn.sendMessage(m, {text: waitttt, edit: key})
let res = await igstalk(args[0].replace(/^@/, ''))
let res2 = await fetch(`https://api.lolhuman.xyz/api/stalkig/${args[0].replace(/^@/, '')}?apikey=${lolkeysapi}`)
let res3 = await res2.json()
let json = JSON.parse(JSON.stringify(res))
let iggs = `┃ *${gt} ${vs}*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃  ${mid.name}
┃ *${json.username}*
┃─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
┃  ${mid.user}
┃ *${json.fullname}*
┃─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
┃ ${mid.smsYT4}
┃ *https://instagram.com/${json.username.replace(/^@/, '')}*
┃─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
┃ ${mid.smsinsta1}
┃ *${json.followers}* 
┃─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
┃  ${mid.smsinsta2}
┃ *${json.following}* 
┃─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
┃  ${mid.smsinsta3}
┃ *${json.post}*
┃─━━━━┉❈⏤͟͟͞͞★꙲⃝͟🌻❈┉━━━━─
┃  ${mid.smsinsta4}
┃ *${json.bio}*`.trim() 
let aa = `${res3.result.photo_profile || res.profile}`
await conn.sendFile(m.chat, aa, 'error.jpg', iggs, m)
conn.reply(m.chat, `${lenguajeGB['smsAvisoIIG']()} *${mid.smsinfo}*`, m, {contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: '𝐅𝐚𝐧𝐭𝐚𝐬𝐲𝐁𝐨𝐭-𝐌𝐃',
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://github.com/Wilsmac/FantasyBot-MD-v1`}}})
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}
handler.help = ['igstalk'].map(v => v + ' <username>')
handler.tags = ['downloader']
handler.command = /^(igstalk|verig|igver)$/i
handler.exp = 80
handler.money = 150
handler.level = 3
handler.register = true
export default handler

async function igstalk(Username) {
return new Promise((resolve, reject) => {
axios.get('https://dumpor.com/v/'+Username, {
headers: { "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8", "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36" }}).then(res => {
const $ = cheerio.load(res.data)
const result = {
profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()}
resolve(result)})})}

