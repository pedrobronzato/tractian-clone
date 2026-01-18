import MobileAccordion from '../common/MobileAccordion';
import { NavItem } from '@/content/Header';
import { getMenuConfig } from '@/content/MenuConfig';
import { useState } from 'react';
import LanguageSelector from '../common/LanguageSelector';
import Button from '../common/Button';

export default function HeaderMenuMobile({
  open,
  navigationItems,
  t,
}: {
  open: boolean;
  navigationItems: NavItem[];
  t: (key: string) => string;
}) {
  const [opened, setOpened] = useState<string[]>([]);
  if (!open) return null;

  const menuConfig = getMenuConfig(t);

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
      className="absolute top-[56px] left-0 z-[9999] bg-white transition-all duration-150"
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
          onClick={() => {
            console.log('Login');
          }}
          fullWidth
        />
        <Button
          variant="filled"
          label={t('common.getDemo')}
          onClick={() => {
            console.log('Get Demo');
          }}
          fullWidth
        />
      </div>
    </div>
  );
}
