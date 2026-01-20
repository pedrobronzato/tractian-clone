import { getFooterContent } from '@/content/Footer';
import { useTranslations, useLocale } from 'next-intl';
import FooterLinks from './FooterLinks';
import FooterHeader from './FooterHeader';
import FooterInformations from './FooterInformations';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();
  const { sections, downloadApp, badges, information } =
    getFooterContent(t, locale);

  return (
    <footer className="bg-blue-950 px-4 py-12 lg:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col">
        <FooterHeader
          badges={badges}
          information={information}
        />
        <FooterLinks
          sections={sections}
          downloadApp={downloadApp}
        />
        <FooterInformations information={information} />
      </div>
    </footer>
  );
}
