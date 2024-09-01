let handler = async (m, { conn, args, usedPrefix, command }) => {
    let chat = global.db.data.chats[m.chat] || {};
    if (args[0] === 'on') {
        if (chat.antiBot) return conn.reply(m.chat, 'AntiBot 𝚈𝚊 𝚎𝚜𝚝𝚊 𝚊𝚌𝚝𝚒𝚟𝚘.', m, canalofc)
        chat.antiBot = true
        await conn.reply(m.chat, 'antiBot 𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾 𝙿𝙰𝚁𝙰 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙴𝚇𝙸𝚃𝙾𝚂𝙰𝙼𝙴𝙽𝚃𝙴. ✅', m, canalofc)
    } else if (args[0] === 'off') {
        if (!chat.antiBot) return conn.reply(m.chat, 'AntiBot ya está desactivado.', m, canalofc)
        chat.antiBot = false
        await conn.reply(m.chat, '𝙰𝙽𝚃𝙸𝙱𝙾𝚃 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾 𝙿𝙰𝚁𝙰 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾. ❌', m, canalofc)
    } else {
        await conn.reply(m.chat, `*𝙲𝙾𝙽𝙵𝙸𝙶𝚄𝚁𝙰𝙲𝙸𝙾𝙽 AntiBot*. 𝙴𝚜𝚌𝚛𝚒𝚋𝚊 "on" 𝚙𝚊𝚛𝚊 𝚊𝚌𝚝𝚒𝚟𝚊𝚛 𝚕𝚊 𝚘𝚙𝚌𝚒𝚘𝚗 𝚢 "off" 𝚙𝚊𝚛𝚊 𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚛 𝚕𝚊 𝚘𝚙𝚌𝚒́𝚘𝚗.`, m, canalofc)
    }
}
handler.help = ['antibot *<on/off>*']
handler.tags = ['enable', 'group']
handler.command = ['antibot']
handler.use = ['on/off']
handler.group = true
handler.admin = true

export default handler