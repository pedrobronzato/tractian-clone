import MobileAccordion from '../common/MobileAccordion';
import { NavItem } from '@/content/Header';
import { getMenuConfig } from '@/content/MenuConfig';
import { useState } from 'react';
import LanguageSelector from '../common/LanguageSelector';
import Button from '../common/Button';
import { useDemoForm } from '@/hooks/useDemoForm';
import { TranslationFunction } from '@/content/HeaderMenu';

export default function HeaderMenuMobile({
  open,
  navigationItems,
  t,
  locale,
}: {
  open: boolean;
  navigationItems: NavItem[];
  t: TranslationFunction;
  locale: string;
}) {
  const [opened, setOpened] = useState<string[]>([]);
  const { DemoFormComponent, openDemoForm } = useDemoForm();
  const menuConfig = getMenuConfig(t, locale);

  const handleSelect = (id: string) => {
    setOpened((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id],
    );
  };

  return (
    <div
      style={{
        height: 'calc(-56px + 100dvh)',
        width: '100%',
        overflow: 'hidden auto',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
      className={`fixed top-[56px] right-0 z-[9999] bg-white transition-transform duration-200 ease-in-out lg:hidden ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="pt-4">
        {navigationItems.map((item) => (
          <MobileAccordion
            key={item.id}
            id={item.id}
            handleSelect={handleSelect}
            label={item.label}
            open={opened.includes(item.id)}
            content={menuConfig[item.id]?.component}
          />
        ))}
      </div>
      <LanguageSelector />
      <div className="flex items-center justify-between gap-4 px-4 py-6">
        <Button
          variant="outline"
          label={t('common.login')}
          onClick={() =>
            window.open(
              'https://app.tractian.com/login',
              '_blank',
            )
          }
          fullWidth
        />
        <Button
          variant="filled"
          label={t('common.getDemo')}
          onClick={openDemoForm}
          fullWidth
        />
      </div>
      {DemoFormComponent}
    </div>
  );
}
