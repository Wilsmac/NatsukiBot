import { readdirSync, unlinkSync, existsSync, promises as fs } from 'fs';
import path from 'path';

const handler = async (m, { conn }) => {
  const sessionPath = './NatsukiSessions';
  const fileLimit = 10;

  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, { text: '⚠️ Este comando solo puede ser utilizado en el bot principal' }, { quoted: m });
  }
  await conn.sendMessage(m.chat, { text: '✅ Iniciando...' }, { quoted: m });
  try {
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(m.chat, { text: '⚠️ La carpeta de sesión de 孫ՏᴏɴᏀᴏᴋᴜ孫 no existe o está vacía.' }, { quoted: m });
    }
    const files = await fs.readdir(sessionPath);
    const totalFiles = files.length;
    if (totalFiles > fileLimit) {
      let filesDeleted = 0;
      for (const file of files) {
        if (file !== 'creds.json') { 
          await fs.unlink(path.join(sessionPath, file));
          filesDeleted++;
          if (totalFiles - filesDeleted <= fileLimit) break; 
        }
      }
      await conn.sendMessage(m.chat, {
        text: `⚠️ Se eliminaron ${filesDeleted} archivos basura automáticamente. Total de archivos ahora: ${totalFiles - filesDeleted}.`
      }, { quoted: m });
    } else {
      let filesDeleted = 0;
      for (const file of files) {
        if (file !== 'creds.json') {
          await fs.unlink(path.join(sessionPath, file));
          filesDeleted++;
        }
      }
      if (filesDeleted === 0) {
        await conn.sendMessage(m.chat, { text: '⚠️ No se encontró ningún archivo para eliminar en la carpeta de sessions.' }, { quoted: m });
      } else {
        await conn.sendMessage(m.chat, { text: `✅ Se eliminaron ${filesDeleted} archivos de ${wm} manualmente.` }, { quoted: m });
      }
    }
  } catch (error) {
    console.error(error);
    await conn.sendMessage(m.chat, { text: `⚠️ Ocurrió un error al eliminar los archivos de sesión` }, { quoted: m });
  }
  await conn.sendMessage(m.chat, { text: `¡Hola! ¿Ahora me ves?.` }, { quoted: m });
};

handler.tags = ['owner'];
handler.help = ['dsowner', 'ds'];
handler.command = /^(del_reg_in_session_owner|dsowner|clearallsession)$/i;
handler.rowner = true;

export default handler;









/*import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
if (global.conn.user.jid !== conn.user.jid) {
return conn.sendMessage(m.chat, {text: '*Utiliza este comando directamente en el número principal del Bot*'}, {quoted: m})}
const chatId = m.isGroup ? [m.chat, m.sender] : [m.sender];
const sessionPath = './NatsukiSessions'
try {
const files = await fs.readdir(sessionPath);
let filesDeleted = 0;
for (const file of files) {
for (const id of chatId) {
if (file.includes(id.split('@')[0])) {
await fs.unlink(path.join(sessionPath, file));
filesDeleted++;
break;
}}} 
if (filesDeleted === 0) {
await conn.sendMessage(m.chat, {text: '*No se encontró ningún archivo que incluya la ID del chat*'}, {quoted: m});
} else {
await conn.sendMessage(m.chat, {text: `*Se eliminaron ${filesDeleted} archivos de sesión*`}, {quoted: m})
}} catch (err) {
console.error('Error al leer la carpeta o los archivos de sesión:', err);
await conn.sendMessage(m.chat, {text: '*Ocurrió un error al eliminar los archivos de sesión*'}, {quoted: m});
}
await conn.sendMessage(m.chat, {text: `*Hola, Ya funciona?`}, {quoted: m});
};
handler.help = ['ds']
handler.tags = ['tools']
handler.command = /^(fixmsgespera|ds)$/i;

















import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '*[✨] Utiliza este comando directamente en el número principal del Bot*'}, {quoted: m});
  }
  const chatId = m.isGroup ? [m.chat, m.sender] : [m.sender];
  const sessionPath = './NatsukiSessions/';
  try {
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      for (const id of chatId) {
        if (file.includes(id.split('@')[0])) {
          await fs.unlink(path.join(sessionPath, file));
          filesDeleted++;
          break;
        }
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: '*[✨] No se encontró ningún archivo que incluya la ID del chat*'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: `*¸.☆¸.♡.¸*\n*Se eliminaron ${filesDeleted} archivos de sesión*`}, {quoted: m});
    }
  } catch (err) {
    console.error('Error al leer la carpeta o los archivos de sesión:', err);
    await conn.sendMessage(m.chat, {text: '*[🌺] Ocurrió un error al eliminar los archivos de sesión*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: `*¡Hola! ¿Ahora puedes ver mis mensajes?*\n\n*¸.☆¸.♡.¸ ~_Si el Bot no le responde a sus comandos haga un pequeño spam_~*\n\n*⇴ Ejemplo:*\n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s`}, {quoted: m});
};
handler.help = ['fixmsgespera'];
handler.tags = ['fix'];
handler.command = /^(fixmsgespera|ds)$/i;
export default handler;*/