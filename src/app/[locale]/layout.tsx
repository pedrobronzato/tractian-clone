import { routing } from '@/i18n/routing';
import {
  hasLocale,
  NextIntlClientProvider,
} from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { interTight, inter } from '../fonts';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<'/[locale]'>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`${interTight.variable} ${inter.variable}`}
    >
      <body>
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
