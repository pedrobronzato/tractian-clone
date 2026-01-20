import {
  CountryIso2,
  defaultCountries,
} from 'react-international-phone';

type TranslationFunction = {
  (key: string): string;
  raw<T = unknown>(key: string): T;
};

export interface DemoFormOption {
  id: string;
  label: string;
}

const getOptions = (
  t: TranslationFunction,
  key: string,
): DemoFormOption[] => t.raw<DemoFormOption[]>(key) ?? [];

export const getJobTitles = (t: TranslationFunction) =>
  getOptions(t, 'demoForm.jobTitles');

export const getIndustrySectors = (
  t: TranslationFunction,
) => getOptions(t, 'demoForm.industrySectors');

export const getSolutions = (t: TranslationFunction) =>
  getOptions(t, 'demoForm.solutions');

export const countriesByLanguage: Record<
  string,
  CountryIso2[]
> = {
  pt: ['pt', 'ao', 'mz', 'cv', 'gw', 'st', 'tl'],
  en: [
    'us',
    'gb',
    'ca',
    'au',
    'nz',
    'ie',
    'za',
    'sg',
    'in',
  ],
  es: [
    'es',
    'mx',
    'ar',
    'co',
    'cl',
    've',
    'pe',
    'ec',
    'gt',
    'cu',
    'bo',
    'do',
    'hn',
    'py',
    'sv',
    'ni',
    'cr',
    'pa',
    'uy',
    'gq',
  ],
};

export const getSortedCountries = (locale: string) => {
  const languageCountries =
    countriesByLanguage[locale] || [];

  const brazil = defaultCountries.filter(
    (country) => country[1] === 'br',
  );

  const localeCountries = languageCountries
    .map((countryCode) =>
      defaultCountries.find(
        (country) => country[1] === countryCode,
      ),
    )
    .filter(
      (country): country is (typeof defaultCountries)[0] =>
        country !== undefined,
    );

  const allLanguageCountryCodes = [
    'br',
    ...languageCountries,
  ];
  const otherCountries = defaultCountries.filter(
    (country) =>
      !allLanguageCountryCodes.includes(country[1]),
  );

  return [...brazil, ...localeCountries, ...otherCountries];
};
