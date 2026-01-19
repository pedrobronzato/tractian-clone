type TranslationFunction = (key: string) => string;

export const getHeroContent = (
  t: TranslationFunction,
  role: string,
) => {
  return {
    catchphrase: t(`whoWeServe.${role}.hero.catchphrase`),
    title_1: t(`whoWeServe.${role}.hero.title_1`),
    title_2: t(`whoWeServe.${role}.hero.title_2`),
    title_3: t(`whoWeServe.${role}.hero.title_3`),
    description_1: t(
      `whoWeServe.${role}.hero.description_1`,
    ),
    description_2: t(
      `whoWeServe.${role}.hero.description_2`,
    ),
    button: t(`whoWeServe.${role}.hero.button`),
    quote: t(`whoWeServe.${role}.hero.quote`),
    quote_author: t(`whoWeServe.${role}.hero.quote_author`),
    quote_author_job: t(
      `whoWeServe.${role}.hero.quote_author_job`,
    ),
    quote_author_company: t(
      `whoWeServe.${role}.hero.quote_author_company`,
    ),
  };
};

export const getHeroImage = (
  role: string,
  locale: string = 'en',
) => {
  const images: Record<
    string,
    Record<string, { src: string; mobile: string }>
  > = {
    'plant-manager': {
      en: {
        src: 'https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/plant-manager/en/plant-manager-header-image.png',
        mobile:
          'https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/plant-manager/en/plant-manager-header-image-mobile.png?q=75&w=3840',
      },
      pt: {
        src: 'https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/plant-manager/pt/header-image.png',
        mobile:
          'https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/plant-manager/pt/header-image-mobile.png?q=75&w=3840',
      },
      es: {
        src: 'https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/plant-manager/pt/header-image.png',
        mobile:
          'https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/plant-manager/pt/header-image-mobile.png?q=75&w=3840',
      },
    },
  };

  return (
    images[role]?.[locale] || images['plant-manager'].en
  );
};

export const getBenefitsContent = (
  t: TranslationFunction,
  locale: string = 'en',
  role: string = 'plant-manager',
) => {
  return {
    catchphrase: t(
      `whoWeServe.${role}.benefits.catchphrase`,
    ),
    title: t(`whoWeServe.${role}.benefits.title`),
    checklist: Array.from({ length: 4 }, (_, index) => ({
      title: t(
        `whoWeServe.${role}.benefits.checklist.${index}.title`,
      ),
      description: t(
        `whoWeServe.${role}.benefits.checklist.${index}.description`,
      ),
      img: getBenefitsChecklistImage(index, locale, role),
    })),
  };
};

export const getBenefitsChecklistImage = (
  index: number,
  locale: string = 'en',
  role: string = 'plant-manager',
) => {
  const baseUrl =
    'https://imgix.tractian.com/website/pages/who-we-serve/';
  const defaultParams =
    '?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=3840';

  const normalizedLocale = locale === 'es' ? 'en' : locale;

  const imageNames: Record<string, string[]> = {
    en: [
      'prove-the-roi.png',
      'get-ahead.png',
      'run-a-leaner.png',
      'keeps-audit-simple.png',
    ],
    pt: [
      'dados-precisos.png',
      'antecipe-falhas-criticas.png',
      'performance-maxima.png',
      'auditorias-e-compliance.png',
    ],
  };

  const rolePath =
    locale === 'pt'
      ? 'reliability-engineers'
      : 'plant-manager';
  const fileName =
    imageNames[normalizedLocale]?.[index] ||
    imageNames.en[index];

  return `${baseUrl}${rolePath}/${normalizedLocale}/${fileName}${defaultParams}`;
};
