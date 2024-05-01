const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) throw `${lenguajeCD['smsAvisoMG']()} 𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙾 𝙽𝙸𝙶𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝚄𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 🌻\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ${usedPrefix + command} #`;
global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');
await m.reply(`${lenguajeCD['smsAvisoEG']()} 𝙴𝙻 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 𝚂𝙴 𝙰𝙲𝚃𝚄𝙰𝙻𝙸𝚉𝙾 𝙳𝙴 𝙵𝙾𝚁𝙼𝙰 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰 𝙿𝙰𝚁𝙰: ${gt} 𝙴𝙻 𝙽𝚄𝙴𝚅𝙾 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 
: [ ${text} ]`);
};
handler.help = ['setprefix'].map((v) => v + ' [prefix]');
handler.tags = ['owner'];
handler.command = /^(setprefix)$/i;
handler.rowner = true;
export default handler;
