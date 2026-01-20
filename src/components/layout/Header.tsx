'use client';
import { getNavigationItems } from '@/content/Header';
import DropdownButton from '../common/DropdownButton';
import Logo from '../common/logo';
import { useState } from 'react';
import Button from '../common/Button';
import Link from '../common/Link';
import MenuIcon from '@/content/icons/MenuIcon';
import HeaderMenu from './HeaderMenu';
import { useTranslations, useLocale } from 'next-intl';
import HeaderMenuMobile from './HeaderMenuMobile';
import LanguageSelector from '../common/LanguageSelector';
import CloseIcon from '@/content/icons/CloseIcon';
import { useDemoForm } from '@/hooks/useDemoForm';

export default function Header() {
  const [selected, setSelected] = useState<string | null>(
    null,
  );
  const { openDemoForm, DemoFormComponent } = useDemoForm();
  const [openMobileMenu, setOpenMobileMenu] =
    useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const navigationItems = getNavigationItems(t);

  const handleSelect = (id: string) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <>
      {DemoFormComponent}
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
              <LanguageSelector />
              <Link
                href="https://app.tractian.com/login"
                className="lg:hidden"
              >
                {t('common.login')}
              </Link>
              <Button
                variant="outline"
                label={t('common.getDemo')}
                onClick={openDemoForm}
              />
            </section>
          </div>
          <div className="flex w-full items-center justify-between lg:hidden">
            <Logo />
            <div
              className="flex h-10 w-10 items-center justify-center"
              onClick={() =>
                setOpenMobileMenu(!openMobileMenu)
              }
            >
              {openMobileMenu ? (
                <CloseIcon />
              ) : (
                <MenuIcon />
              )}
            </div>
          </div>
        </div>
        <HeaderMenu
          selected={selected}
          setSelected={setSelected}
        />
        <HeaderMenuMobile
          open={openMobileMenu}
          navigationItems={navigationItems}
          t={t}
          locale={locale}
        />
      </nav>
    </>
  );
}
