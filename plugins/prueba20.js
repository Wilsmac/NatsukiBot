let handler = async (m, { conn, usedPrefix, command, text }) => {

const messages = [
[
'Descripción 1',
'Footer 1',
'https://telegra.ph/file/b31cd03f716d362b33716.jpg',
[['Botón 1', 'id1'], ['Botón 2', 'id2']],
'Texto para copiar 1',
[['Enlace 1', 'https://example.com/link1'], ['Enlace 2', 'https://example.com/link2']],
[[
'Lista 1', 'Sección 1',
 'Titulo 1', usedPrefix + 'menu', 'Descripcion 1', 'id1',
]]],
[
'Descripción 2',
'Footer 2',
'https://telegra.ph/file/b31cd03f716d362b33716.jpg',
[['Botón 1', 'id1'], ['Botón 2', 'id2']],
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