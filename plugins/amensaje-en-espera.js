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
export default handler;