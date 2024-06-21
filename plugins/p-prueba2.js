let handler = async (m, { conn, args, usedPrefix }) => {
  conn.math = conn.math ? conn.math : {}
  if (args.length < 1) return await conn.sendButton(m.chat, `
┌─「 Mode 」
├ ${Object.keys(modes).join('\n├ ')}
└────
contoh: ${usedPrefix}math hard
`.trim(), watermark, 'Easy', '.math easy', 'Medium', '.math medium', m)
  let mode = args[0].toLowerCase()
  if (!(mode in modes)) return await conn.sendButton(m.chat, `
┌─「 Mode 」
├ ${Object.keys(modes).join('\n├ ')}
└────
contoh: ${usedPrefix}math hard
`.trim(), watermark, 'Hard', '.math hard', 'Extreme', '.math extreme', m)

  let id = m.chat
  if (id in conn.math) return conn.reply(m.chat, 'belum dijawab!', conn.math[id][0])
  let math = genMath(mode)
  conn.math[id] = [
    await conn.reply(m.chat, `apa hasil dari *${math.str}*?\n\nwaktu: ${(math.time / 1000).toFixed(2)} detik\nbonus jawaban benar: ${math.bonus} XP, Bonus +${math.daily} Daily Reward`, m),
    math, 4,
    setTimeout(async () => {
      if (conn.math[id]) await conn.sendButton(m.chat, `waktu habis!\njawabannya *${math.result}*`, wm, 'lagi', `.math ${args[0]}`, conn.math[id][0])
      delete conn.math[id]
    }, math.time)
  ]
}
handler.help = ['math <mode>']
handler.tags = ['game']
handler.command = /^math/i

module.exports = handler

let modes = {
  noob: [-3, 3, -3, 3, '+-', 15000, 10, 0],
  easy: [-10, 10, -10, 10, '*/+-', 20000, 40, 0],
  medium: [-40, 40, -20, 20, '*/+-', 40000, 150, 0],
  hard: [-100, 100, -70, 70, '*/+-', 60000, 350, 1],
  extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999, 1],
  impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 35000, 35000, 1],
  impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000, 1]
}

let operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷'
}

function genMath(mode) {
  let [a1, a2, b1, b2, ops, time, bonus, daily] = modes[mode]
  let a = randomInt(a1, a2)
  let b = randomInt(b1, b2)
  let op = pickRandom([...ops])
  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
  if (op == '/') [a, result] = [result, a]
  return {
    str: `${a} ${operators[op]} ${b}`,
    mode,
    time,
    bonus,
    result,
    daily
  }
}

function randomInt(from, to) {
  if (from > to) [from, to] = [to, from]
  from = Math.floor(from)
  to = Math.floor(to)
  return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}





/*import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw 'mmmmm'
  m.reply('Procesando...')
  let res = `https://bx-hunter.herokuapp.com/api/canvas/gfx2?apikey=FuckBitch&nama=${response[0]}`
  conn.sendFile(m.chat, res, 'error.jpg', `hhjjj`, m, false)
}
handler.help = ['logololi'].map(v => v + ' <text>')
handler.tags = ['nulis', 'anime']
handler.command = /^(logololi)$/i
handler.register = true

handler.limit = true

export default handler*/