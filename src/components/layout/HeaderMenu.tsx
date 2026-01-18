import { useTranslations } from 'next-intl';
import { getMenuConfig } from '@/content/MenuConfig';

interface MenuConfig {
  component: React.ReactNode;
  maxWidth: 'full' | 'constrained';
}

export default function HeaderMenu({
  selected,
}: {
  selected: string | null;
}) {
  const t = useTranslations();

  const menuConfig = getMenuConfig(t);

  if (!selected || !menuConfig[selected]) return null;

  const currentMenu = menuConfig[selected];
  const maxWidthClass =
    currentMenu.maxWidth === 'full'
      ? 'max-w-7xl'
      : 'max-w-[970px]';
  const isConstrained =
    currentMenu.maxWidth === 'constrained';

  return (
    <div
      key={selected}
      className="absolute top-0 left-0 z-50 mt-[70px] hidden w-full px-2 sm:px-0 lg:left-0 lg:ml-0 lg:block"
    >
      <div
        className={`relative ${isConstrained ? '' : 'bg-slate-50 shadow-lg lg:px-2'}`}
      >
        <div
          className={`relative z-30 mx-auto w-full px-8 pt-8 pb-12 ${maxWidthClass} ${isConstrained ? 'bg-slate-50' : ''}`}
        >
          <div className="flex w-full gap-4 lg:justify-between">
            {currentMenu.component}
          </div>
        </div>
      </div>
    </div>
  );
}
