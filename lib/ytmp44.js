import axios from 'axios';
import { stringify } from 'querystring';
import cheerio from 'cheerio';

const ytmp44 = async (url) => {
  const parameters = {
    'url': url,
    'format': 'mp4',
    'lang': 'en'
  };

  try {
    const conversionResponse = await axios.post('https://s64.notube.net/recover_weight.php', stringify(parameters));
    if (!conversionResponse.data.token) {
      throw new Error('No se recibió un token de la respuesta de conversión.');
    }
    const token = conversionResponse.data.token;
    const downloadPageResponse = await axios.get('https://notube.net/en/download?token=' + token);

    if (downloadPageResponse.status !== 200) {
      throw new Error('No se pudo recuperar la página de descarga.');
    }

    const $ = cheerio.load(downloadPageResponse.data);
    const result = {
      'titulo': $('#breadcrumbs-section h2').text(),
      'descargar': $('#breadcrumbs-section #downloadButton').attr('href')
    };

    return { status: true, resultados: result };
  } catch (error) {
    console.error('Error al convertir el video de YouTube:', error);
    return { status: false, error: error.message };
  }
};

export default ytmp44;