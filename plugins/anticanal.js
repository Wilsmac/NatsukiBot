/*import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `ejemplo *${usedPrefix + command}* Lil Peep hate my life`
  let res = await yts(text)
  let vid = res.videos[0]
  if (!vid) throw `✳️ Vídeo/Audio no encontrado`
  let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
        //const url = 'https://www.youtube.com/watch?v=' + videoId
        m.react('🎧') 
  let play = `
        jdjs*
┌──────────────
▢  *título*: ${vid.title}
▢  *uwu* ${vid.ago}
▢  uwu* ${vid.timestamp}
▢  *uwu ${vid.views.toLocaleString()}
└──────────────`
 await conn.sendButton(m.chat, play, wm, thumbnail, [
    ['🎶 MP3', `${usedPrefix}menu`],
    ['🎥 MP4', `${usedPrefix}menu`]
  ], null, [['Canal', `${canalofc}`]], m)
}
handler.help = ['pruebaplay']
handler.tags = ['dl']
handler.command = ['pruebaplay']
handler.disabled = false

export default handler*/