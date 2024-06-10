let handler = async (m, { conn, usedPrefix, command, text }) => {

/*const messages = [
[
'Descripción 1', 
'By Wilmer :b',
'https://telegra.ph/file/b95059bd21a2bbbd0218b.jpg',
[['Botón 1', 'id1'], ['Botón 2', 'id2']],
'Texto para copiar 1',
[['Enlace 1', 'https://example.com/link1'], ['Enlace 2', 'https://example.com/link2']],
[
[['Lista', 'Sección', 'Título', 'Tema', 'Descripción', 'Id']],
[['Sección 1', 'Título 1', 'Tema 1', 'Descripción 1', 'Id 1']],
[['Sección 2', 'Título 2', 'Tema 2', 'Descripción 2', 'Id 2']]
]],
[
'Descripción 2',
'By Wilmer :3',
'https://telegra.ph/file/d57ee60a1674082040ad0.jpg',
[['Botón 1', 'id1'], ['Botón 2', 'id2']],
'Texto para copiar 2',
[['Enlace 1', 'https://example.com/link1'], ['Enlace 2', 'https://example.com/link2']],
[[
'Lista', 
'Sección ',  
'Titulo',  
'Tema',  
'Descripcion', 
'Id',
]]]]*/

const sections = [{
title: `Título de la sección`,
rows: [

{ header: 'Encabezado1', title: "Título1", description: 'Descripción1', id: usedPrefix + "menu" }, 

{ header: 'Encabezado2', title: "Título2", description: 'Descripción2', id: "Id2" }, 

{ header: 'Encabezado3', title: "Título3", description: 'Descripción3', id: "Id3" }, 

{ header: 'Encabezado4', title: "Título4", description: 'Descripción4', id: "Id4" }, 
]},] 

const messages = [[ 
'Descripción', 
'Footer',
'https://telegra.ph/file/b95059bd21a2bbbd0218b.jpg',
[['Botón1', usedPrefix + 'menu'], ['Botón2', 'Id2'] /* etc... */],
[['Texto para copiar 1'], ['Texto para copiar 2'] /* etc... */],
[['Enlace1', canalofc], ['Enlace2', 'https://example.com/link2'] /* etc... */],
[['Botón Lista 1', sections], ['Botón Lista 2', sections] /* etc... */]
], [
'Descripción',
'Footer',
'https://telegra.ph/file/d57ee60a1674082040ad0.jpg',
[['Botón1', 'Id1'], ['Botón2', 'Id2']],
[['Texto para copiar 1'], ['Texto para copiar 2']],
[['Enlace1', 'https://example.com/link1'], ['Enlace2', 'https://example.com/link2']],
[['Botón Lista 1', sections], ['Botón Lista 2', sections]]
], [
'Descripción',
'Footer',
'https://telegra.ph/file/b95059bd21a2bbbd0218b.jpg',
[['Botón1', 'Id1'], ['Botón2', 'Id2']],
[['Texto para copiar 1'], ['Texto para copiar 2']],
[['Enlace1', 'https://example.com/link1'], ['Enlace2', 'https://example.com/link2']],
[['Botón Lista 1', sections], ['Botón Lista 2', sections]]
], [
'Descripción',
'Footer',
'https://telegra.ph/file/d57ee60a1674082040ad0.jpg',
[['Botón1', 'Id1'], ['Botón2', 'Id2']],
[['Texto para copiar 1'], ['Texto para copiar 2']],
[['Enlace1', 'https://example.com/link1'], ['Enlace2', 'https://example.com/link2']],
[['Botón Lista 1', sections], ['Botón Lista 2', sections]]
]]

await conn.sendNatsukisel(m.chat, 'Texto', 'Linea', 'TXT', messages, m)

}

handler.command = /^(lph)$/i
export default handler