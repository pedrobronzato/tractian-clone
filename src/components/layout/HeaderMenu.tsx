import {
  getCompanySectionMenuContent,
  getPricingSectionMenuContent,
  getResourcesSectionMenuContent,
  getSolutionsSectionMenuContent,
  getWeserveSectionMenuContent,
} from '@/content/HeaderMenu';
import SectionMenu from './SectionMenu';
import TitleSectionMenu from './TitleSectionMenu';
import { useTranslations } from 'next-intl';

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

  const menuConfig: Record<string, MenuConfig> = {
    solutions: {
      component: (
        <TitleSectionMenu
          content={getSolutionsSectionMenuContent(t)}
        />
      ),
      maxWidth: 'full',
    },
    'who-we-serve': {
      component: (
        <SectionMenu
          content={getWeserveSectionMenuContent(t)}
        />
      ),
      maxWidth: 'full',
    },
    resources: {
      component: (
        <SectionMenu
          content={getResourcesSectionMenuContent(t)}
        />
      ),
      maxWidth: 'constrained',
    },
    company: {
      component: (
        <SectionMenu
          content={getCompanySectionMenuContent(t)}
        />
      ),
      maxWidth: 'constrained',
    },
    pricing: {
      component: (
        <SectionMenu
          content={getPricingSectionMenuContent(t)}
        />
      ),
      maxWidth: 'constrained',
    },
  };

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
      className="absolute top-0 left-0 z-50 mt-[70px] w-full px-2 sm:px-0 lg:left-0 lg:ml-0"
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
