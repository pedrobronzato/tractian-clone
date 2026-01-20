import { useTranslations, useLocale } from 'next-intl';
import { getMenuConfig } from '@/content/MenuConfig';

export default function HeaderMenu({
  selected,
  setSelected,
}: {
  selected: string | null;
  setSelected: (selected: string | null) => void;
}) {
  const t = useTranslations();
  const locale = useLocale();

  const menuConfig = getMenuConfig(t, locale);

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
          className={`${isConstrained ? 'bg-opacity-60 absolute z-20 h-screen w-full bg-black backdrop-blur-[1px]' : 'hidden'}`}
          onClick={() => setSelected(null)}
        ></div>
        <div
          className={`relative z-30 mx-auto w-full px-8 pt-8 pb-12 ${maxWidthClass} ${isConstrained ? 'bg-slate-50' : ''}`}
        >
          <div className="flex w-full gap-4 lg:justify-between">
            {currentMenu.component}
          </div>
        </div>
      </div>
      <div
        className={`${!isConstrained ? 'bg-opacity-60 absolute z-20 h-screen w-full bg-black backdrop-blur-[1px]' : 'hidden'}`}
        onClick={() => setSelected(null)}
      ></div>
    </div>
  );
}
