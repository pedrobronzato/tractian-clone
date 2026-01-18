'use client';
import { getNavigationItems } from '@/content/Header';
import DropdownButton from '../common/DropdownButton';
import Logo from '../common/logo';
import { useState, useTransition } from 'react';
import DropdownMenuButton from '../common/DropdownMenuButton';
import GlobeIcon from '@/content/icons/GlobeIcon';
import Button from '../common/Button';
import Link from '../common/Link';
import MenuIcon from '@/content/icons/MenuIcon';
import HeaderMenu from './HeaderMenu';
import { useRouter, usePathname } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Header() {
  const [selected, setSelected] = useState<string | null>(
    null,
  );
  const [, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations();
  const navigationItems = getNavigationItems(t);

  const handleSelect = (id: string) => {
    setSelected(selected === id ? null : id);
  };

  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  const localeLabels: Record<string, string> = {
    pt: 'Português (Brasil)',
    en: 'English (United States)',
    es: 'Español (México)',
  };

  const localeOptions = routing.locales.map((loc) => ({
    id: loc,
    label: localeLabels[loc] || loc,
    onClick: () => handleLocaleChange(loc),
  }));

  return (
    <nav className="duration-default sticky top-0 z-40 flex w-full flex-col items-center justify-center border-b border-slate-200 bg-slate-100 transition-colors ease-in-out">
      <div className="flex w-full max-w-screen-2xl items-center justify-between px-4 py-2 lg:px-8 lg:py-0">
        <div className="hidden h-full w-full items-center justify-between lg:flex">
          <section className="flex items-center gap-x-4">
            <Logo />
            <div className="flex h-[72px] items-center">
              {navigationItems.map((item) => (
                <div key={item.id}>
                  <section className="flex h-full items-center pl-4 xl:pl-8">
                    <DropdownButton
                      id={item.id}
                      selected={selected === item.id}
                      onSelect={handleSelect}
                      text={item.label}
                    />
                  </section>
                </div>
              ))}
            </div>
          </section>
          <section className="flex items-center gap-x-8 lg:gap-4 xl:gap-x-8">
            <DropdownMenuButton
              icon={<GlobeIcon />}
              options={localeOptions}
            />
            <Link
              href="https://app.tractian.com/login"
              className="lg:hidden"
            >
              Login
            </Link>
            <Button
              variant="outline"
              label="Get Demo"
              onClick={() => {
                console.log('Login');
              }}
            />
          </section>
        </div>
        <div className="flex w-full items-center justify-between lg:hidden">
          <Logo />
          <div className="flex h-10 w-10 items-center justify-center">
            <MenuIcon />
          </div>
        </div>
      </div>
      <HeaderMenu selected={selected} />
    </nav>
  );
}
