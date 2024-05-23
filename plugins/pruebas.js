let handler = async (m, { conn: natsuki }) => {

await natsuki.reply(`Hola`)

handler.command = ['natsuki']
export default handler 