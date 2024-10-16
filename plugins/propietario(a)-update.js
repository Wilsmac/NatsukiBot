import { execSync } from 'child_process';

const handler = async (m, { conn, text }) => {
try {
const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
let messager = stdout.toString()
if (messager.includes('Already up to date.')) messager = `${lenguajeCD.smsAvisoIIG()} 𝙰𝙲𝚃𝚄𝙰𝙻𝙼𝙴𝙽𝚃𝙴 ${gt} 𝚈𝙰 𝙴𝚂𝚃𝙰 𝙰𝙲𝚃𝚄𝙰𝙻𝙸𝚉𝙰𝙳𝙾 𝙰𝙻𝙰 𝚅𝙴𝚁𝚂𝙸𝙾𝙽 𝙼𝙰𝚂 𝚁𝙴𝙲𝙸𝙴𝙽𝚃𝙴.`
if (messager.includes('Updating')) messager = `𝙲𝙰𝙼𝙱𝙸𝙾𝚂 𝚁𝙴𝙻𝙸𝚉𝙰𝙳𝙾𝚂 𝙴𝙽 »»` + stdout.toString()
conn.reply(m.chat, messager, m);
} catch {      
try {    
const status = execSync('git status --porcelain');
if (status.length > 0) {
const conflictedFiles = status
.toString()
.split('\n')
.filter(line => line.trim() !== '')
.map(line => {
if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('NatsukiSessions/') || line.includes('npm-debug.log')) {
return null;
}
return '*→ ' + line.slice(3) + '*'})
.filter(Boolean);
if (conflictedFiles.length > 0) {
const errorMessage = `${lenguajeCD.smsAvisoFG()} > *Se han encontrado cambios locales en los archivos del bot que entran en conficto con las nuevas actualizaciones del repositorio. para actualizar, reinstalar el bot o realizar las actualizaciones manualmente.*\n\n*\`ARCHIVO EN CONFLICTO :\`*\n\n${conflictedFiles.join('\n')}.*`
await conn.reply(m.chat, errorMessage, m);  
}}
} catch (error) {
console.error(error);
if (error.message) {
const errorMessage2 = `\n${fg}` + error.message;
}
await m.reply(`${fg}`) 
}}};
handler.command = /^(update|actualizar|gitpull)$/i;
handler.rowner = true;
export default handler;