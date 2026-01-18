import TitleSectionMenu from '@/components/layout/TitleSectionMenu';
import SectionMenu from '@/components/layout/SectionMenu';
import {
  getSolutionsSectionMenuContent,
  getWeserveSectionMenuContent,
  getResourcesSectionMenuContent,
  getCompanySectionMenuContent,
  getPricingSectionMenuContent,
} from './HeaderMenu';

export interface MenuConfig {
  component: React.ReactNode;
  maxWidth: 'full' | 'constrained';
}

type TranslationFunction = (key: string) => string;

export const getMenuConfig = (
  t: TranslationFunction,
): Record<string, MenuConfig> => {
  return {
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
};
