import * as e from "fs";
let handler = async (a, {conn: n, text: t, participants: r, usedPrefix, command}) => {
  if (!t)
    return a.reply(`*por favor Agrege una razon para la ejecuci\xf3n*
Ejemplo: 

${usedPrefix + command} deathnote hoy se va un inactivo
`);
  if (t.length < 9) return a.reply("*agrega una razón más larga por favor.*");
  let s = await n.profilePictureUrl(a.sender, "image").catch((e) => "./media/menus/Menu1");
  var p = [];
  r.map(async (e) => {
 p.push(e.id.replace("c.us", "s.whatsapp.net"));
 });
let o = 1e4,
m = p[Math.floor(Math.random() * p.length)];
if (m.startsWith(n.user.id.split(":")[0])) return a.reply("Hoy no muere nadie :D");
 n.sendMessage(
 a.chat,
 {
 text: `*Death Note* 📓
┏━⊱ *Seleccinado:* @${m.split("@")[0]}
┗⊱ *Raz\xf3n de su ejecucion:* 
${t}

_Tiene ${(o % 6e4) / 1e3} segundos para decir sus últimas palabras_
`,
 mentions: [m],
    },
    {
  ephemeralExpiration: 86400,
   quoted: {
   key: {participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},
    message: {
    groupInviteMessage: {
    groupJid: "50250101139-1616169743@g.us",
    inviteCode: "m",
    groupName: "P",
            caption: `⚰️@${m.split("@")[0]} 💀`,
            jpegThumbnail: imagen1,
          },
        },
      },
    }
  ),
    setTimeout(() => {
      setTimeout(() => {
        n.groupParticipantsUpdate(a.chat, [m], "remove").catch((e) => {
          a.reply(`${lenguajeCD['smsAvisoFG']()}`); 
        });
      }, 1e3),
        n.sendMessage(
          a.chat,
          {text: "Press [F]", mentions: [m]},
          {
            ephemeralExpiration: 86400,
            quoted: {
              key: {participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},
              message: {
             groupInviteMessage: {
             groupJid: "50250101139-1616169743@g.us",
             inviteCode: "m",
             groupName: "P",
             caption: `C come una manzana* 🍎 :v`,
             jpegThumbnail: e.readFileSync("./media/menus/Menu1"),
},
},
},
}
);
}, o);
};
(handler.help = ["deathnote"]),
  (handler.tags = ["games"]),
  (handler.command = /^(deathnote)$/i),
  (handler.group = !0),
  (handler.admin = !0),
  (handler.botAdmin = !0);
export default handler;