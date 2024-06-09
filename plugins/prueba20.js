let handler = async (m, { conn, usedPrefix, command, text }) => {

const messages = [
[
'Descripción 1',
'Footer 1',
'https://telegra.ph/file/b95059bd21a2bbbd0218b.jpg',
[['Botón 1', '.menu'], ['Botón 2', '.menu']],
'Texto para copiar 1',
[['Enlace 1', 'https://example.com/link1'], ['Enlace 2', 'https://example.com/link2']],
[[
'Lista 1', 'Sección 1',
 'Titulo 1', usedPrefix + 'menu', 'Descripcion 1', '.menu',
]]],
[
'Descripción 2',
'Footer 2',
'https://telegra.ph/file/d57ee60a1674082040ad0.jpg',
[['Botón 1', '.menu'], ['Botón 2', '.menu']],
'Texto para copiar 2',
[['Enlace 1', 'https://example.com/link1'], ['Enlace 2', 'https://example.com/link2']],
[[
'Lista', 
   'Sección ',  
          'id',  
            'Titulo',  
               'Subtitulo', 
                    'Descripcion',
             ]
     ]
          ]
              ]


await conn.sendNatsukisel(m.chat, 'Texto', 'Linea', 'TEXTO', messages, m)

}

handler.command = /^(lph)$/i
export default handler