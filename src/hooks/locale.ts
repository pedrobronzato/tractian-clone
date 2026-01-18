import { startTransition } from 'react';
import { useRouter, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import BrFlag from '@/content/icons/BrFlag';
import UsFlag from '@/content/icons/UsFlag';
import EsFlag from '@/content/icons/EsFlag';

const localeLabels: Record<string, string> = {
  pt: 'Português (Brasil)',
  en: 'English (United States)',
  es: 'Español (México)',
};

const localeFlags: Record<string, React.ComponentType> = {
  pt: BrFlag,
  en: UsFlag,
  es: EsFlag,
};

export const useLocaleOptions = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  const localeOptions = routing.locales.map((loc) => ({
    id: loc,
    label: localeLabels[loc] || loc,
    onClick: () => handleLocaleChange(loc),
    icon: localeFlags[loc],
  }));

  return localeOptions;
};

export const useCurrentLocaleLabel = (): {
  label: string;
  id: string;
} => {
  const locale = useLocale();
  return {
    label: localeLabels[locale] || locale,
    id: locale,
  };
};
