import {
  AiIcon,
  BlogIcon,
  BookIcon,
  CalculatorIcon,
  CalendarIcon,
  CarIcon,
  ChemicalIcon,
  ClipboardIcon,
  ComputerIcon,
  ContactIcon,
  EducationIcon,
  EnergyIcon,
  FoodIcon,
  GasIcon,
  HandshakeIcon,
  HelpIcon,
  HequipamentIcon,
  IndustryIcon,
  LightningCheckIcon,
  LightningIcon,
  LinkIcon,
  MarkIcon,
  MegaphoneIcon,
  MiningIcon,
  MonitoringIcon,
  OperatorIcon,
  PageIcon,
  PersonIcon,
  PlantIcon,
  ReferralsIcon,
  ReliabilityIcon,
  RobotIcon,
  SensorIcon,
  TimeIcon,
  TruckIcon,
  TrustIcon,
  VibrationIcon,
  WrenchCheckIcon,
  WrenchIcon,
} from './icons';

export type TranslationFunction = {
  (key: string): string;
  raw<T = unknown>(key: string): T;
};

type SolutionItemContent = {
  id: string;
  title: string;
  description: string;
};

type SolutionsSectionContent = {
  section: string;
  items: SolutionItemContent[];
};

type SimpleMenuItemContent = {
  id: string;
  title: string;
};

type SimpleSectionContent = {
  section: string;
  items: SimpleMenuItemContent[];
};

type PricingItemContent = {
  id: string;
  title: string;
};

type MenuItemMeta = {
  href: string;
  icon?: () => React.ReactNode;
  imgUrl?: string;
  customHref?: boolean;
};

type SolutionItemMeta = {
  href: string;
  icon: () => React.ReactNode;
};

const solutionSectionMeta: Record<
  string,
  { icon: () => React.ReactNode; href: string }
> = {
  conditionMonitoring: {
    icon: MonitoringIcon,
    href: '/solutions/condition-monitoring',
  },
  cmms: {
    icon: ComputerIcon,
    href: '/solutions/cmms',
  },
  oee: {
    icon: RobotIcon,
    href: '/solutions/oee',
  },
};

const solutionItemMeta: Record<
  string,
  Record<string, SolutionItemMeta>
> = {
  conditionMonitoring: {
    vibrationSensor: {
      icon: VibrationIcon,
      href: '/solutions/condition-monitoring/vibration-analysis',
    },
    aiFailureDetection: {
      icon: AiIcon,
      href: '/solutions/condition-monitoring/ai-powered-condition-monitoring',
    },
    reliabilityAnalysis: {
      icon: ReliabilityIcon,
      href: '/solutions/condition-monitoring',
    },
    downtimePrevention: {
      icon: TimeIcon,
      href: '/solutions/condition-monitoring/downtime-prevention-and-reporting',
    },
    sensorSpecifications: {
      icon: SensorIcon,
      href: '/solutions/condition-monitoring/sensor-specifications',
    },
  },
  cmms: {
    troubleshooting: {
      icon: WrenchCheckIcon,
      href: '/solutions/cmms/maintenance-sop',
    },
    workOrderManagement: {
      icon: ClipboardIcon,
      href: '/solutions/cmms/work-order-software',
    },
    partsInventory: {
      icon: WrenchIcon,
      href: '/solutions/cmms/parts-inventory-management',
    },
    preventiveMaintenance: {
      icon: CalendarIcon,
      href: '/solutions/cmms/preventive-maintenance-software',
    },
    integrations: {
      icon: LinkIcon,
      href: '/solutions/integrations',
    },
  },
  oee: {
    aiProductionTracking: {
      icon: LightningIcon,
      href: '/solutions/oee/plc-reader',
    },
    operatorPerformance: {
      icon: OperatorIcon,
      href: '/solutions/oee',
    },
    digitizedQuality: {
      icon: MarkIcon,
      href: '/solutions/oee',
    },
    customDashboards: {
      icon: EnergyIcon,
      href: '/solutions/oee/supervisor-reports',
    },
    utilityAnalytics: {
      icon: LightningCheckIcon,
      href: '/solutions/oee/energy-trac',
    },
  },
};

const weServeRoleMeta: Record<string, MenuItemMeta> = {
  plantManager: {
    icon: PersonIcon,
    href: '/who-we-serve/plant-manager',
  },
  reliabilityEngineer: {
    icon: PersonIcon,
    href: '/who-we-serve/reliability-engineer',
  },
  maintenanceEngineer: {
    icon: PersonIcon,
    href: '/who-we-serve/maintenance-engineer',
  },
  manufacturingEngineer: {
    icon: PersonIcon,
    href: '/who-we-serve/manufacturing-engineer',
  },
};

const weServeSectorMetaByLocale: Record<
  string,
  Record<string, MenuItemMeta>
> = {
  pt: {
    automotive: {
      icon: CarIcon,
      href: '/industry/automotive',
    },
    miningMetals: {
      icon: MiningIcon,
      href: '/industry/mining-sector',
    },
    chemicals: {
      icon: ChemicalIcon,
      href: '/industry/chemical',
    },
    millsAgriculture: {
      icon: PlantIcon,
      href: '/industry/mills-and-agriculture',
    },
    foodBeverage: {
      icon: FoodIcon,
      href: '/industry/food-and-beverage',
    },
    pulpPaper: {
      icon: PageIcon,
      href: '/industry/pulp-and-paper',
    },
  },
  es: {
    automotive: {
      icon: CarIcon,
      href: '/industry/automotive',
    },
    miningMetals: {
      icon: MiningIcon,
      href: '/industry/mining-sector',
    },
    chemicals: {
      icon: ChemicalIcon,
      href: '/industry/chemical',
    },
    millsAgriculture: {
      icon: PlantIcon,
      href: '/industry/mills-and-agriculture',
    },
    foodBeverage: {
      icon: FoodIcon,
      href: '/industry/food-and-beverage',
    },
    manufacturing: {
      icon: OperatorIcon,
      href: '/industry/manufacturing-maintenance-software',
    },
    facilities: {
      icon: GasIcon,
      href: '/industry/facilities-maintenance-software',
    },
  },
  en: {
    automotive: {
      icon: CarIcon,
      href: '/industry/automotive',
    },
    chemicals: {
      icon: ChemicalIcon,
      href: '/industry/chemical',
    },
    facilities: {
      icon: HandshakeIcon,
      href: '/industry/facilities-maintenance-software',
    },
    fleet: {
      icon: TruckIcon,
      href: '/industry/fleet-maintenance-software',
    },
    foodBeverage: {
      icon: FoodIcon,
      href: '/industry/food-and-beverage',
    },
    heavyEquipment: {
      icon: HequipamentIcon,
      href: '/industry/heavy-equipment-maintenance-software',
    },
    manufacturing: {
      icon: OperatorIcon,
      href: '/industry/manufacturing-maintenance-software',
    },
    millsAgriculture: {
      icon: PlantIcon,
      href: '/industry/mills-and-agriculture',
    },
    miningMetals: {
      icon: MiningIcon,
      href: '/industry/mining-sector',
    },
    oilGas: {
      icon: GasIcon,
      href: '/industry/oil-and-gas-maintenance-software',
    },
  },
};

const resourcesCenterMeta: Record<string, MenuItemMeta> = {
  caseStudies: {
    icon: IndustryIcon,
    href: '/case-studies',
  },
  ebooks: { icon: BookIcon, href: '/resources' },
  blog: { icon: BlogIcon, href: '/blog' },
  templates: { icon: PageIcon, href: '/resources' },
  calculators: {
    icon: CalculatorIcon,
    href: '/resources/calculators/maintenance-calculators',
  },
  eventsWebinars: {
    icon: MegaphoneIcon,
    href: '/events/hub',
  },
  sops: { icon: WrenchCheckIcon, href: '/assets' },
  chatgptPlugins: {
    icon: AiIcon,
    href: '/resources/ai-agents',
  },
};

const resourcesHubMeta: Record<string, MenuItemMeta> = {
  productUpdates: {
    icon: MegaphoneIcon,
    href: 'https://releases.tractian.com/',
    customHref: true,
  },
  tractianAcademy: {
    icon: EducationIcon,
    href: 'https://academy.tractian.com/',
    customHref: true,
  },
  helpCenter: {
    icon: HelpIcon,
    href: 'https://faq.tractian.com/',
    customHref: true,
  },
};

const companyAboutMeta: Record<string, MenuItemMeta> = {
  aboutUs: {
    imgUrl: '/website/components/navbar/general/about.png',
    href: '/about',
  },
  careers: {
    imgUrl:
      '/website/components/navbar/general/careers.png',
    href: 'https://careers.tractian.com/',
    customHref: true,
  },
  newsroom: {
    imgUrl:
      '/website/components/navbar/general/newsroom.png',
    href: '/press',
  },
};

const companyOthersMeta: Record<string, MenuItemMeta> = {
  contactUs: { icon: ContactIcon, href: '/contact' },
  referrals: { icon: ReferralsIcon, href: '/referrals' },
  trustCenter: {
    icon: TrustIcon,
    href: 'https://trust.tractian.com/',
    customHref: true,
  },
};

const pricingMeta: Record<string, MenuItemMeta> = {
  conditionMonitoring: {
    icon: MonitoringIcon,
    href: '/solutions/condition-monitoring/vibration-sensor/pricing',
  },
  cmmsSoftware: {
    icon: ComputerIcon,
    href: '/solutions/cmms/pricing',
  },
};

export interface SolutionsSectionMenu {
  section: string;
  maxWidth?: string;
  icon: () => React.ReactNode;
  href: string;
  items: {
    title: string;
    description: string;
    href: string;
    icon: () => React.ReactNode;
  }[];
}

export const getSolutionsSectionMenuContent = (
  t: TranslationFunction,
): SolutionsSectionMenu[] => {
  const conditionMonitoring =
    t.raw<SolutionsSectionContent>(
      'header.menu.solutions.conditionMonitoring',
    ) ?? { section: '', items: [] };
  const cmms = t.raw<SolutionsSectionContent>(
    'header.menu.solutions.cmms',
  ) ?? { section: '', items: [] };
  const oee = t.raw<SolutionsSectionContent>(
    'header.menu.solutions.oee',
  ) ?? { section: '', items: [] };

  const buildSection = (
    key: keyof typeof solutionSectionMeta,
    content: SolutionsSectionContent,
  ): SolutionsSectionMenu => ({
    section: content.section,
    ...solutionSectionMeta[key],
    items: content.items.map((item) => ({
      ...item,
      ...solutionItemMeta[key][item.id],
    })),
  });

  return [
    buildSection(
      'conditionMonitoring',
      conditionMonitoring,
    ),
    buildSection('cmms', cmms),
    buildSection('oee', oee),
  ];
};

export interface SectionMenuContent {
  section: string | null;
  isImg?: boolean;
  maxWidth?: string;
  items: {
    title: string;
    imgUrl?: string;
    icon?: () => React.ReactNode;
    href: string;
    customHref?: boolean;
  }[];
}

export const getWeserveSectionMenuContent = (
  t: TranslationFunction,
  locale: string,
): SectionMenuContent[] => {
  const byRole = t.raw<SimpleSectionContent>(
    'header.menu.whoWeServe.byRole',
  ) ?? { section: '', items: [] };
  const bySector = t.raw<SimpleSectionContent>(
    'header.menu.whoWeServe.bySector',
  ) ?? { section: '', items: [] };
  const sectorMeta =
    weServeSectorMetaByLocale[locale] ||
    weServeSectorMetaByLocale.en;

  return [
    {
      section: byRole.section,
      maxWidth: '25%',
      items: byRole.items.map((item) => ({
        ...item,
        ...weServeRoleMeta[item.id],
      })),
    },
    {
      section: bySector.section,
      items: bySector.items.map((item) => ({
        ...item,
        ...sectorMeta[item.id],
      })),
    },
  ];
};

export const getResourcesSectionMenuContent = (
  t: TranslationFunction,
): SectionMenuContent[] => {
  const centerContent = t.raw<SimpleSectionContent>(
    'header.menu.resources.resourcesCenter',
  ) ?? { section: '', items: [] };
  const hubContent = t.raw<SimpleSectionContent>(
    'header.menu.resources.customerHub',
  ) ?? { section: '', items: [] };

  return [
    {
      section: centerContent.section,
      items: centerContent.items.map((item) => ({
        ...item,
        ...resourcesCenterMeta[item.id],
      })),
    },
    {
      section: hubContent.section,
      items: hubContent.items.map((item) => ({
        ...item,
        ...resourcesHubMeta[item.id],
      })),
    },
  ];
};

export const getCompanySectionMenuContent = (
  t: TranslationFunction,
): SectionMenuContent[] => {
  const aboutContent = t.raw<SimpleSectionContent>(
    'header.menu.company.aboutTractian',
  ) ?? { section: '', items: [] };
  const othersContent = t.raw<SimpleSectionContent>(
    'header.menu.company.others',
  ) ?? { section: '', items: [] };

  return [
    {
      section: aboutContent.section,
      isImg: true,
      items: aboutContent.items.map((item) => ({
        ...item,
        ...companyAboutMeta[item.id],
      })),
    },
    {
      section: othersContent.section,
      maxWidth: '40%',
      items: othersContent.items.map((item) => ({
        ...item,
        ...companyOthersMeta[item.id],
      })),
    },
  ];
};

export const getPricingSectionMenuContent = (
  t: TranslationFunction,
): SectionMenuContent[] => {
  const pricingItems =
    t.raw<PricingItemContent[]>(
      'header.menu.pricing.items',
    ) ?? [];

  return [
    {
      section: null,
      items: pricingItems
        .filter((item) => item.id === 'conditionMonitoring')
        .map((item) => ({
          ...item,
          ...pricingMeta[item.id],
        })),
    },
    {
      section: null,
      items: pricingItems
        .filter((item) => item.id === 'cmmsSoftware')
        .map((item) => ({
          ...item,
          ...pricingMeta[item.id],
        })),
    },
  ];
};
