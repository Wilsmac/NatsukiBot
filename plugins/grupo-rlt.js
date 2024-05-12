let handler = async (m, { conn,groupMetadata, participants, usedPrefix, command, isBotAdmin,isAdmin,isSuperAdmin }) => {
  let bot = global.db.data.settings[conn.user.jid] || {}
   if (!bot.restrict) 
               return m.reply(`⚠︎ 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰 ⚠︎\n\n\`¡EL RESTRICT ESTA ACTUALMENTE DESACTIVADO POR MI CREADOR(A)!\``) 
if (!isBotAdmin) 
       return m.reply(`⚠︎ 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰 ⚠︎\n\n¡𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝚂 𝙿𝙰𝚁𝙰 𝙰𝙳𝙼𝙸𝙽𝚂 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾!`)
      if (!m.isGroup) return !1
        let format = a => '@' + a.split('@')[0]
      let natsuki = groupMetadata.participants.filter(v => v !== conn.user.jid)
   natsuki=natsuki.filter(v => v.admin !=='superadmin')
     natsuki=natsuki.filter(v => v.admin !=='admin')
       natsuki=natsuki.map(v => v.id)
        if (natsuki == '') return m.reply(`⚠︎ 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰 ⚠︎\n𝙽𝙾 𝚂𝙴 𝙰𝙷 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝙳𝙾 𝙰𝙻𝙶𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙿𝙰𝚁𝙰 𝙻𝙰 𝚁𝚄𝙻𝙴𝚃𝙰.`)
            let usuario = natsuki.getRandom()
         m.reply(`*${format(usuario)} 𝙰𝙷 𝚂𝙸𝙳𝙾 𝙴𝙻𝙴𝙹𝙸𝙳𝙾 𝙿𝙰𝚁𝙰 𝙽𝚄𝙴𝚂𝚃𝚁𝙰 𝚁𝚄𝙻𝙴𝚃𝙰 Ñakañaka`,null,{mentions: [usuario]})        
     await delay(2000)    
  await conn.groupParticipantsUpdate(m.chat, [usuario], 'remove')
}

handler.command = /^(ruletadeban)$/i
handler.admin = true
export default handler

const delay = time => new Promise(res => setTimeout(res, time))