let handler = async (m, { conn: natsuki, text }) => {

if (!text) 
  return m.reply('𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁, 𝙴𝚂𝙲𝚁𝚄𝙱𝙰 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝚁 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 シ︎')
try{
           m.react('⚙️')
m.reply('ღ 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝙳𝙾 𝙴𝚇𝙸𝚃𝙾𝚂𝙰𝙼𝙴𝙽𝚃𝙴\n\n𝙲𝚁𝙴𝙰𝙽𝙳𝙾 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾...')

let natsuki2 = await natsuki.groupCreate(text, [m.sender])
let lik = await natsuki.groupInviteCode(natsuki2.gid)

let invite = 'https://chat.whatsapp.com/' + lik;

m.reply('*invitacion:* ' + invite)
} catch (e) {

m.reply(`𝙷𝚄𝙱𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙸𝙽𝙴𝚂𝙿𝙴𝚁𝙰𝙳𝙾`)
   }
      }
handler.help = ['creargc *<nombre>*']
handler.tags = ['owner']
handler.command = /^(creargc|creargrupo|creargroup)$/
handler.owner = true
export default handler