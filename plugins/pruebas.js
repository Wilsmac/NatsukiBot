let handler = async (m, { conn: natsuki }) => {

if (!Array.isArray(global.conns)) {
  global.conns = []
}
await natsuki.reply(`Hola`)
}

handler.command = ['natsuki']
export default handler 