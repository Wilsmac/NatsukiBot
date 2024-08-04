import { tmpdir } from 'os'
import path from 'path'
import {
  readdirSync,
  statSync,
  unlinkSync,
  existsSync,
  readFileSync,
  watch
} from 'fs'

let handler = async (m, { conn, usedPrefix: _p, __dirname, args, text }) => {
    if (!text) return conn.reply(m.chat, `𝙸𝙽𝙶𝚁𝙴𝚂𝙰 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝚈 𝚁𝚄𝚃𝙰 𝙳𝙴𝙻 𝙰𝚁𝙲𝙷𝙸𝚅𝙾 𝙿𝙰𝚁𝙰 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁.`, m, canalofc)

    const file = text.trim()
    if (!existsSync(file)) return conn.reply(m.chat, `𝙰𝚁𝙲𝙷𝙸𝚅𝙾 𝙽𝙾 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝙳𝙾...`, m, canalofc)

    unlinkSync(file)
    conn.reply(m.chat, `𝙴𝙻 𝙰𝚁𝙲𝙷𝙸𝙲𝙾 \`${file}\` 𝙰𝙷 𝚂𝙸𝙳𝙾 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾 𝙴𝚇𝙸𝚃𝙾𝚂𝙰𝙼𝙴𝙽𝚃𝙴.`, m, canalofc)
}
handler.tags = ['owner']
handler.help = ['deletefile']
handler.command = /^(deletefile|df)$/i
handler.rowner = true

export default handler