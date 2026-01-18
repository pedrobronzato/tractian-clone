import {
  AiIcon,
  BlogIcon,
  BookIcon,
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

type TranslationFunction = (key: string) => string;

const createTranslationKeys = (basePath: string) => ({
  section: () => `${basePath}.section`,
  item: (itemKey: string, field: 'title' | 'description') =>
    `${basePath}.items.${itemKey}.${field}`,
});

export interface SolutionsSectionMenu {
  section: string;
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
  const solutionsKeys = {
    conditionMonitoring: createTranslationKeys(
      'header.menu.solutions.conditionMonitoring',
    ),
    cmms: createTranslationKeys(
      'header.menu.solutions.cmms',
    ),
    oee: createTranslationKeys('header.menu.solutions.oee'),
  };

  return [
    {
      section: t(
        solutionsKeys.conditionMonitoring.section(),
      ),
      icon: MonitoringIcon,
      href: '/solutions/condition-monitoring',
      items: [
        {
          title: t(
            solutionsKeys.conditionMonitoring.item(
              'vibrationSensor',
              'title',
            ),
          ),
          description: t(
            solutionsKeys.conditionMonitoring.item(
              'vibrationSensor',
              'description',
            ),
          ),
          icon: VibrationIcon,
          href: '/solutions/condition-monitoring/vibration-analysis',
        },
        {
          title: t(
            solutionsKeys.conditionMonitoring.item(
              'aiFailureDetection',
              'title',
            ),
          ),
          description: t(
            solutionsKeys.conditionMonitoring.item(
              'aiFailureDetection',
              'description',
            ),
          ),
          icon: AiIcon,
          href: '/solutions/condition-monitoring/ai-powered-condition-monitoring',
        },
        {
          title: t(
            solutionsKeys.conditionMonitoring.item(
              'reliabilityAnalysis',
              'title',
            ),
          ),
          description: t(
            solutionsKeys.conditionMonitoring.item(
              'reliabilityAnalysis',
              'description',
            ),
          ),
          icon: ReliabilityIcon,
          href: '/solutions/condition-monitoring',
        },
        {
          title: t(
            solutionsKeys.conditionMonitoring.item(
              'downtimePrevention',
              'title',
            ),
          ),
          description: t(
            solutionsKeys.conditionMonitoring.item(
              'downtimePrevention',
              'description',
            ),
          ),
          icon: TimeIcon,
          href: '/solutions/condition-monitoring/downtime-prevention-and-reporting',
        },
        {
          title: t(
            solutionsKeys.conditionMonitoring.item(
              'sensorSpecifications',
              'title',
            ),
          ),
          description: t(
            solutionsKeys.conditionMonitoring.item(
              'sensorSpecifications',
              'description',
            ),
          ),
          icon: SensorIcon,
          href: '/solutions/condition-monitoring/sensor-specifications',
        },
      ],
    },
    {
      section: t(solutionsKeys.cmms.section()),
      icon: ComputerIcon,
      href: '/solutions/cmms',
      items: [
        {
          title: t(
            solutionsKeys.cmms.item(
              'troubleshooting',
              'title',
            ),
          ),
          description: t(
            solutionsKeys.cmms.item(
              'troubleshooting',
              'description',
            ),
          ),
          icon: WrenchCheckIcon,
          href: '/solutions/cmms/maintenance-sop',
        },
        {
          title: t(
            solutionsKeys.cmms.item(
              'workOrderManagement',
              'title',
            ),
          ),
          description: t(
            solutionsKeys.cmms.item(
              'workOrderManagement',
              'description',
            ),
          ),
          icon: ClipboardIcon,
          href: '/solutions/cmms/work-order-software',
        },
        {
          title: t(
            solutionsKeys.cmms.item(
              'partsInventory',
              'title',
            ),
          ),
          description: t(
            solutionsKeys.cmms.item(
              'partsInventory',
              'description',
            ),
          ),
          icon: WrenchIcon,
          href: '/solutions/cmms/parts-inventory-management',
        },
        {
          title: t(
            solutionsKeys.cmms.item(
              'preventiveMaintenance',
              'title',
            ),
          ),
          description: t(
            solutionsKeys.cmms.item(
              'preventiveMaintenance',
              'description',
            ),
          ),
          icon: CalendarIcon,
          href: '/solutions/cmms/preventive-maintenance-software',
        },
        {
          title: t(
            solutionsKeys.cmms.item(
              'integrations',
              'title',
            ),
          ),
          description: t(
            solutionsKeys.cmms.item(
              'integrations',
              'description',
            ),
          ),
          icon: LinkIcon,
          href: '/solutions/integrations',
        },
      ],
    },
    {
      section: t(solutionsKeys.oee.section()),
      icon: RobotIcon,
      href: '/solutions/oee',
      items: [
        {
          title: t(
            solutionsKeys.oee.item(
              'aiProductionTracking',
              'title',
            ),
          ),
          description: t(
            solutionsKeys.oee.item(
              'aiProductionTracking',
              'description',
            ),
          ),
          icon: LightningIcon,
          href: '/solutions/oee/plc-reader',
        },
        {
          title: t(
            solutionsKeys.oee.item(
              'operatorPerformance',
              'title',
            ),
          ),
          description: t(
            solutionsKeys.oee.item(
              'operatorPerformance',
              'description',
            ),
          ),
          icon: OperatorIcon,
          href: '/solutions/oee',
        },
        {
          title: t(
            solutionsKeys.oee.item(
              'digitizedQuality',
              'title',
            ),
          ),
          description: t(
            solutionsKeys.oee.item(
              'digitizedQuality',
              'description',
            ),
          ),
          icon: MarkIcon,
          href: '/solutions/oee',
        },
        {
          title: t(
            solutionsKeys.oee.item(
              'customDashboards',
              'title',
            ),
          ),
          description: t(
            solutionsKeys.oee.item(
              'customDashboards',
              'description',
            ),
          ),
          icon: EnergyIcon,
          href: '/solutions/oee/supervisor-reports',
        },
        {
          title: t(
            solutionsKeys.oee.item(
              'utilityAnalytics',
              'title',
            ),
          ),
          description: t(
            solutionsKeys.oee.item(
              'utilityAnalytics',
              'description',
            ),
          ),
          icon: LightningCheckIcon,
          href: '/solutions/oee/energy-trac',
        },
      ],
    },
  ];
};

export interface SectionMenuContent {
  section: string | null;
  isImg?: boolean;
  items: {
    title: string;
    imgUrl?: string;
    icon?: () => React.ReactNode;
  }[];
}

export const getWeserveSectionMenuContent = (
  t: TranslationFunction,
): SectionMenuContent[] => {
  const weServeKeys = {
    byRole: 'header.menu.whoWeServe.byRole',
    bySector: 'header.menu.whoWeServe.bySector',
  };

  return [
    {
      section: t(`${weServeKeys.byRole}.section`),
      items: [
        {
          title: t(
            `${weServeKeys.byRole}.items.plantManager`,
          ),
          icon: PersonIcon,
        },
        {
          title: t(
            `${weServeKeys.byRole}.items.reliabilityEngineer`,
          ),
          icon: PersonIcon,
        },
        {
          title: t(
            `${weServeKeys.byRole}.items.maintenanceEngineer`,
          ),
          icon: PersonIcon,
        },
        {
          title: t(
            `${weServeKeys.byRole}.items.manufacturingEngineer`,
          ),
          icon: PersonIcon,
        },
      ],
    },
    {
      section: t(`${weServeKeys.bySector}.section`),
      items: [
        {
          title: t(
            `${weServeKeys.bySector}.items.automotive`,
          ),
          icon: CarIcon,
        },
        {
          title: t(
            `${weServeKeys.bySector}.items.chemicals`,
          ),
          icon: ChemicalIcon,
        },
        {
          title: t(
            `${weServeKeys.bySector}.items.facilities`,
          ),
          icon: HandshakeIcon,
        },
        {
          title: t(`${weServeKeys.bySector}.items.fleet`),
          icon: TruckIcon,
        },
        {
          title: t(
            `${weServeKeys.bySector}.items.foodBeverage`,
          ),
          icon: FoodIcon,
        },
        {
          title: t(
            `${weServeKeys.bySector}.items.heavyEquipment`,
          ),
          icon: HequipamentIcon,
        },
        {
          title: t(
            `${weServeKeys.bySector}.items.manufacturing`,
          ),
          icon: OperatorIcon,
        },
        {
          title: t(
            `${weServeKeys.bySector}.items.millsAgriculture`,
          ),
          icon: PlantIcon,
        },
        {
          title: t(
            `${weServeKeys.bySector}.items.miningMetals`,
          ),
          icon: MiningIcon,
        },
        {
          title: t(`${weServeKeys.bySector}.items.oilGas`),
          icon: GasIcon,
        },
      ],
    },
  ];
};

export const getResourcesSectionMenuContent = (
  t: TranslationFunction,
): SectionMenuContent[] => {
  const resourcesKeys = {
    center: 'header.menu.resources.resourcesCenter',
    hub: 'header.menu.resources.customerHub',
  };

  return [
    {
      section: t(`${resourcesKeys.center}.section`),
      items: [
        {
          title: t(
            `${resourcesKeys.center}.items.caseStudies`,
          ),
          icon: IndustryIcon,
        },
        {
          title: t(`${resourcesKeys.center}.items.ebooks`),
          icon: BookIcon,
        },
        {
          title: t(`${resourcesKeys.center}.items.blog`),
          icon: BlogIcon,
        },
        {
          title: t(
            `${resourcesKeys.center}.items.templates`,
          ),
          icon: PageIcon,
        },
        {
          title: t(
            `${resourcesKeys.center}.items.calculators`,
          ),
          icon: CalendarIcon,
        },
        {
          title: t(
            `${resourcesKeys.center}.items.eventsWebinars`,
          ),
          icon: MegaphoneIcon,
        },
        {
          title: t(`${resourcesKeys.center}.items.sops`),
          icon: WrenchCheckIcon,
        },
        {
          title: t(
            `${resourcesKeys.center}.items.chatgptPlugins`,
          ),
          icon: AiIcon,
        },
      ],
    },
    {
      section: t(`${resourcesKeys.hub}.section`),
      items: [
        {
          title: t(
            `${resourcesKeys.hub}.items.productUpdates`,
          ),
          icon: MegaphoneIcon,
        },
        {
          title: t(
            `${resourcesKeys.hub}.items.tractianAcademy`,
          ),
          icon: EducationIcon,
        },
        {
          title: t(`${resourcesKeys.hub}.items.helpCenter`),
          icon: HelpIcon,
        },
      ],
    },
  ];
};

export const getCompanySectionMenuContent = (
  t: TranslationFunction,
): SectionMenuContent[] => {
  const companyKeys = {
    about: 'header.menu.company.aboutTractian',
    others: 'header.menu.company.others',
  };

  return [
    {
      section: t(`${companyKeys.about}.section`),
      isImg: true,
      items: [
        {
          title: t(`${companyKeys.about}.items.aboutUs`),
          imgUrl:
            '/website/components/navbar/general/about.png',
        },
        {
          title: t(`${companyKeys.about}.items.careers`),
          imgUrl:
            '/website/components/navbar/general/careers.png',
        },
        {
          title: t(`${companyKeys.about}.items.newsroom`),
          imgUrl:
            '/website/components/navbar/general/newsroom.png',
        },
      ],
    },
    {
      section: t(`${companyKeys.others}.section`),
      items: [
        {
          title: t(`${companyKeys.others}.items.contactUs`),
          icon: ContactIcon,
        },
        {
          title: t(`${companyKeys.others}.items.referrals`),
          icon: ReferralsIcon,
        },
        {
          title: t(
            `${companyKeys.others}.items.trustCenter`,
          ),
          icon: TrustIcon,
        },
      ],
    },
  ];
};

export const getPricingSectionMenuContent = (
  t: TranslationFunction,
): SectionMenuContent[] => {
  const pricingKey = 'header.menu.pricing.items';

  return [
    {
      section: null,
      items: [
        {
          title: t(`${pricingKey}.conditionMonitoring`),
          icon: MonitoringIcon,
        },
      ],
    },
    {
      section: null,
      items: [
        {
          title: t(`${pricingKey}.cmmsSoftware`),
          icon: ComputerIcon,
        },
      ],
    },
  ];
};
