import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pt', 'en', 'es'],
  defaultLocale: 'pt',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/who-we-serve/plant-manager': {
      pt: '/solucoes-para-gerentes-industriais',
      en: '/who-we-serve/plant-manager',
      es: '/who-we-serve/gerente-de-planta',
    },
  },
});
