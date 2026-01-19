import BuiltIcon from './icons/BuiltIcon';
import G2Icon from './icons/G2Icon';
import PageCheckIcon from './icons/PageCheckIcon';
import PhoneGear from './icons/PhoneGear';
import BerryIcon from './icons/BerryIcon';
import CargillIcon from './icons/CargillIcon';
import CarrierIcon from './icons/CarrierIcon';
import CatIcon from './icons/CatIcon';
import HyundaiIcon from './icons/HyundaiIcon';
import InNOutIcon from './icons/InNOutIcon';
import KraftIcon from './icons/KraftIcon';
import LdcIcon from './icons/LdcIcon';
import OwensIcon from './icons/OwensIcon';
import QuakerIcon from './icons/QuakerIcon';
import SlbIcon from './icons/SlbIcon';
import TateIcon from './icons/TateIcon';
import VoestalpineIcon from './icons/VoestalpineIcon';
import WeyerIcon from './icons/WeyerIcon';

type TranslationFunction = {
  (key: string): string;
  raw(key: string): string;
};

export const FEATURE_TABS_COUNT = 4;
export const BENEFITS_CHECKLIST_COUNT = 4;
export const ADVANTAGES_COUNT = 3;
export const TESTIMONIALS_COUNT = 4;
export const STEPS_COUNT = 4;
export const FAQ_QUESTIONS_COUNT = 17;

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
    checklist: Array.from(
      { length: BENEFITS_CHECKLIST_COUNT },
      (_, index) => ({
        title: t(
          `whoWeServe.${role}.benefits.checklist.${index}.title`,
        ),
        description: t(
          `whoWeServe.${role}.benefits.checklist.${index}.description`,
        ),
        img: getBenefitsChecklistImage(index, locale, role),
      }),
    ),
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

const getTabItems = (
  t: TranslationFunction,
  baseKey: string,
  maxItems = 10,
): string[] | undefined => {
  const items: string[] = [];

  for (let i = 0; i < maxItems; i++) {
    const key = `${baseKey}.items.${i}`;
    const value = t(key);

    if (value === key) break;
    items.push(value);
  }

  return items.length ? items : undefined;
};

export const getFeaturesContent = (
  t: TranslationFunction,
  role: string = 'plant-manager',
) => {
  const baseKey = `whoWeServe.${role}.features`;

  return {
    title: t(`${baseKey}.title`),
    tabs: Array.from(
      { length: FEATURE_TABS_COUNT },
      (_, index) => {
        const tabKey = `${baseKey}.tabs.${index}`;

        const descriptionKey = `${tabKey}.contentDescription`;
        const description = t(descriptionKey);

        return {
          title: t(`${tabKey}.title`),
          contentTitle: t(`${tabKey}.contentTitle`),
          contentDescription:
            description === descriptionKey
              ? ''
              : description,
          items: getTabItems(t, tabKey),
          img: getFeaturesTabImage(index, role),
        };
      },
    ),
  };
};

export const getFeaturesTabImage = (
  index: number,
  role: string = 'plant-manager',
) => {
  const baseUrl = `https://imgix.tractian.com/website/pages/who-we-serve/${role}/en/`;
  const defaultParams =
    '?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=3840';
  const imageNames: string[] = [
    'reports-for-scalability.png',
    'operational-oversight.png',
    'multisite-visibility.png',
    'no-labor-gaps.png',
  ];

  return `${baseUrl}${imageNames[index]}${defaultParams}`;
};

export const getAdvantagesContent = (
  t: TranslationFunction,
  role: string = 'plant-manager',
) => {
  const baseKey = `whoWeServe.${role}.advantages`;
  return {
    title: t(`${baseKey}.title`),
    advantages: Array.from(
      { length: ADVANTAGES_COUNT },
      (_, index) => {
        return {
          title: t(`${baseKey}.advantages.${index}.title`),
          description: t(
            `${baseKey}.advantages.${index}.description`,
          ),
          icon: getAdvantageIcon(index),
        };
      },
    ),
  };
};

const getAdvantageIcon = (index: number) => {
  const icons = [BuiltIcon, PhoneGear, PageCheckIcon];
  return icons[index];
};

export const getTestimonialsContent = (
  t: TranslationFunction,
  role: string = 'plant-manager',
  locale: string = 'en',
) => {
  const baseKey = `whoWeServe.${role}.testimonials`;
  return {
    title: t(`${baseKey}.title`),
    testimonials: Array.from(
      { length: TESTIMONIALS_COUNT },
      (_, index) => {
        const testimonial: {
          quote: string;
          author: string;
          authorJob: string;
          authorCompany: string;
          img: string;
          icon?: React.ComponentType;
        } = {
          quote: t(
            `${baseKey}.testimonials.${index}.quote`,
          ),
          author: t(
            `${baseKey}.testimonials.${index}.author`,
          ),
          authorJob: t(
            `${baseKey}.testimonials.${index}.authorJob`,
          ),
          authorCompany: t(
            `${baseKey}.testimonials.${index}.authorCompany`,
          ),
          img: getTestimonialsImage(index, role, locale),
        };

        const iconValue = getTestimonialIcon(index, locale);
        if (iconValue) {
          testimonial.icon = iconValue;
        }

        return testimonial;
      },
    ),
  };
};

const getTestimonialIcon = (
  index: number,
  locale: string,
): React.ComponentType | undefined => {
  const iconMap: Record<
    string,
    Record<number, React.ComponentType>
  > = {
    en: {
      1: G2Icon,
    },
    es: {
      0: G2Icon,
    },
  };

  return iconMap[locale]?.[index];
};

const getTestimonialsImage = (
  index: number,
  role: string = 'plant-manager',
  locale: string = 'en',
) => {
  const baseUrl = `https://imgix.tractian.com/website/pages/who-we-serve/`;
  const defaultParams =
    '?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=3840';

  const imageNames: Record<
    string,
    { locale: string; name: string; role: string }[]
  > = {
    pt: [
      {
        locale: 'pt',
        name: 'roberto.png',
        role: 'reliability-engineers',
      },
      {
        locale: 'pt',
        name: 'jari.png',
        role: 'reliability-engineers',
      },
      {
        locale: 'pt',
        name: 'bruno-v2.png',
        role: 'plant-manager',
      },
      {
        locale: 'pt',
        name: 'edmilson.png',
        role: 'reliability-engineers',
      },
    ],
    en: [
      {
        locale: 'en',
        name: 'paul-v2.png',
        role: 'plant-manager',
      },
      {
        locale: 'en',
        name: 'nicholas.png',
        role: 'plant-manager',
      },
      {
        locale: 'en',
        name: 'fabiano.png',
        role: 'plant-manager',
      },
      {
        locale: 'en',
        name: 'andy.png',
        role: 'plant-manager',
      },
    ],
    es: [
      {
        locale: 'es',
        name: 'ricardo.png',
        role: 'plant-manager',
      },
      {
        locale: 'en',
        name: 'paul-v2.png',
        role: 'plant-manager',
      },
      {
        locale: 'es',
        name: 'miguel.png',
        role: 'plant-manager',
      },
      {
        locale: 'es',
        name: 'oliver.png',
        role: 'plant-manager',
      },
    ],
  };

  const fileObject = imageNames[locale]?.[index];

  return `${baseUrl}${fileObject?.role}/${fileObject?.locale}/${fileObject?.name}${defaultParams}`;
};

export const getClientsContent = (
  t: TranslationFunction,
  role: string = 'plant-manager',
) => {
  const baseKey = `whoWeServe.${role}.clients`;
  return {
    title: t(`${baseKey}.title`),
    logos: getClientLogos(),
  };
};

export const getClientLogos = () => {
  return [
    <WeyerIcon key="weyer" />,
    <BerryIcon key="berry" />,
    <InNOutIcon key="in-n-out" />,
    <CargillIcon key="cargill" />,
    <CarrierIcon key="carrier" />,
    <KraftIcon key="kraft" />,
    <SlbIcon key="slb" />,
    <HyundaiIcon key="hyundai" />,
    <QuakerIcon key="quaker" />,
    <TateIcon key="tate" />,
    <CatIcon key="cat" />,
    <VoestalpineIcon key="voestalpine" />,
    <OwensIcon key="owens" />,
    <LdcIcon key="ldc" />,
  ];
};

export const getStepsContent = (
  t: TranslationFunction,
  role: string = 'plant-manager',
) => {
  const baseKey = `whoWeServe.${role}.steps`;

  let title: string | undefined;
  try {
    const titleValue = t(`${baseKey}.title`);
    title =
      titleValue !== `${baseKey}.title`
        ? titleValue
        : undefined;
  } catch {
    title = undefined;
  }

  return {
    ...(title && { title }),
    header: t(`${baseKey}.header`),
    steps: Array.from(
      { length: STEPS_COUNT },
      (_, index) => {
        return {
          title: t(`${baseKey}.steps.${index}.title`),
          description: t(
            `${baseKey}.steps.${index}.description`,
          ),
        };
      },
    ),
  };
};

export const getMissionContent = (
  t: TranslationFunction,
  role: string = 'plant-manager',
) => {
  const baseKey = `whoWeServe.${role}.mission`;
  return {
    title_pt1: t(`${baseKey}.title_pt1`),
    title_pt2: t(`${baseKey}.title_pt2`),
    button: t(`${baseKey}.button`),
  };
};

export const getFaqContent = (
  t: TranslationFunction,
  role: string = 'plant-manager',
) => {
  const baseKey = `whoWeServe.${role}.faq`;
  return {
    title: t(`${baseKey}.title`),
    header: t(`${baseKey}.header`),
    questions: Array.from(
      { length: FAQ_QUESTIONS_COUNT },
      (_, index) => {
        return {
          title: t(`${baseKey}.questions.${index}.title`),
          awnser: t.raw(
            `${baseKey}.questions.${index}.awnser`,
          ),
        };
      },
    ),
  };
};
