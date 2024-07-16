import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://tinyurl.com/27broato')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]

  if (chat.welcome && m.messageStubType == 27) {
    let bienvenida = `${lenguajeCD['smsWelcome']()}`

await conn.sendNatsuki2(m.chat, gt, textia, bienvenida, img, img, canalofc, estilo2)
  }

  if (chat.welcome && m.messageStubType == 28) {
    let bye = `${lenguajeCD['smsBye']()}`
await conn.sendNatsuki2(m.chat, gt, textia, bye, img, img, canalofc, estilo2)
  }

  if (chat.welcome && m.messageStubType == 32) {
    let kick = `${lenguajeCD['smsBye']()}`
await conn.sendNatsuki2(m.chat, gt, textia, kick, img, img, canalofc, estilo2)
}}