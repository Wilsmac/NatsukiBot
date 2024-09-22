let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = {
        'abrir': 'not_announcement',
        'cerrar': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        return conn.reply(`Elija una opción.\n\n*${usedPrefix + command}* abrir\n${usedPrefix + command}* cerrar`, m, canalofc)
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group *abrir/cerrar*']
handler.tags = ['group']
handler.command = ['group', 'grupo'] 
handler.admin = true
handler.botAdmin = true

export default handler




/*let handler = async (m, { conn, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg'  
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `${lenguajeGB['smsAvisoMG']()}*╭━[ ${wm} ]━⬣*
*┃➥ ${usedPrefix + command} abrir*
*┃➥ ${usedPrefix + command} cerrar*
*╰━━━━━[ 𓃠 ${vs} ]━━━━━⬣*
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)

if (isClose === 'not_announcement'){
m.reply(`${lenguajeGB['smsAvisoEG']()}${mid.smsGrup}`)
}

if (isClose === 'announcement'){
m.reply(`${lenguajeGB['smsAvisoEG']()}${mid.smsGrup}`)
}}
handler.help = ['group open / close', 'grupo abrir / cerrar']
handler.tags = ['group']
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true
handler.exp = 200
export default handler*/