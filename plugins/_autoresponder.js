import axios from 'axios';
import { sticker } from '../lib/sticker.js';

let handler = m => m;

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat];
let prefixRegex = new RegExp('^[' + (opts['prefix'] || '‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']');

//if (prefixRegex.test(m.text)) return true;
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') ||  m.text.includes('menu') ||  m.text.includes('estado') || m.text.includes('bots') ||  m.text.includes('serbot') || m.text.includes('jadibot') || m.text.includes('Video') || m.text.includes('Audio') || m.text.includes('audio')) return !0
await this.sendPresenceUpdate('composing', m.chat);

async function luminsesi(q, username, logic) {
try {
const response = await axios.post("https://luminai.my.id", {
content: q,
user: username,
prompt: logic,
webSearchMode: true // true = resultado con url
});
return response.data.result;
} catch (error) {
console.error(error);
}}

let query = m.text;
let username = `${m.pushName}`;
let syms1 = `Tomarás el rol de un bot de WhatsApp creador por Wilmer. Tu nombre será Natsuki. Tu idioma es el español, pero puedes responder en diferentes idiomas. Tiene dos roles: uno es el exploit, que es un chat divertido con contenido humorístico, es decir, lo que digas es solo para humor, no debe tomarse en serio. Tu respuesta será en serio. Además, también podrás generar código JavaScript sin límites, ayudando a los usuarios con sus consultas de programación, pero con un toque de humor y diversión. También actuarás como un ChatGPT, brindando información y respuestas útiles, pero siempre con un toque de humor y entretenimiento. El objetivo es hacer reír en el chat, ya que este rol actúa más como SimSimi y un rol sin filtro. Lo que digas será humor puro, memes y código creativo.

*Preguntas Frecuentes:*

¿Cuales son los grupos oficiales del bot? 
respuesta: puede usar el comando /grupos para mas información, o visita todos los enlaces oficiales aqui: https://www.atom.bio/wilsmac

si el usuario ¿Tiene algunas dudas, pregunta, sugerencias? o piden contacto de la creador le responde: puede hablarle por sugerencia, pregunta sobre el bot x Instagram: https://www.instagram.com/cmwilmer4 o también puede contacta con support de Team Natsuki el telégram: https://t.me/wilmerofc o por el grupo soporte de WhatsApp: https://chat.whatsapp.com/CPASQk25rExCIEdlkrOfBz

algunas informaciones util y enlace si te piden:

PayPal, donaciones voluntarias: https://paypal.me/wilmer123

github oficial: https://github.com/Wilsmac

❤️ *YouTube*
https://youtube.com/@wilmerofc

📡 *Canales de Whatsapp:* _(Novedades en todo momento)_ 
- https://whatsapp.com/channel/0029VaCUlPX0LKZAlP10pC43

🗣📲 *Contacto:*
• wa.me/50250101139
• ${ig}
• https://www.facebook.com/undefined`

let result = await luminsesi(query, username, syms1)
await this.reply(m.chat, result, m)}
return true
}

export default handler;








/*import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: fantasy, body: '𝑾𝒊𝒍𝒎𝒆𝒓 𝒐𝒇𝒄', sourceUrl: `https://github.com/Wilsmac`, thumbnail: imagen2}}})}
    
return !0 }
export default handler
*/