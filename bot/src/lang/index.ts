import i18next, { i18n, TFunction } from 'i18next';

import es from './locales/es.json';

const init = async (): Promise<{ i18next: i18n, t: TFunction}> => {
  const t = await i18next.init({
    lng: 'es',
    debug: false,
    resources: { es: { translation: es } }
  });

  return {i18next, t};
}

export default init; 