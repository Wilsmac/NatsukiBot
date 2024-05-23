let handler = async (m, { conn: natsuki }) => {

natsuki.reply(`Hola`)
}

handler.command = ['natsuki']
export default handler 