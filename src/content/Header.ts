export interface MenuFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  icon: string;
  features: MenuFeature[];
}

export interface NavItem {
  id: string;
  label: string;
  href?: string;
  hasDropdown?: boolean;
  dropdownContent?:
    | 'solutions'
    | 'who-we-serve'
    | 'resources';
}

type TranslationFunction = (key: string) => string;

export const getProductsMenu = (
  t: TranslationFunction,
): ProductCategory[] => [
  {
    id: 'condition-monitoring',
    name: t('header.products.conditionMonitoring.name'),
    icon: 'monitoring',
    features: [
      {
        icon: 'vibration',
        title: t(
          'header.products.conditionMonitoring.features.vibrationSensor.title',
        ),
        description: t(
          'header.products.conditionMonitoring.features.vibrationSensor.description',
        ),
      },
      {
        icon: 'ai-detection',
        title: t(
          'header.products.conditionMonitoring.features.aiDetection.title',
        ),
        description: t(
          'header.products.conditionMonitoring.features.aiDetection.description',
        ),
      },
      {
        icon: 'reliability',
        title: t(
          'header.products.conditionMonitoring.features.reliability.title',
        ),
        description: t(
          'header.products.conditionMonitoring.features.reliability.description',
        ),
      },
      {
        icon: 'downtime',
        title: t(
          'header.products.conditionMonitoring.features.downtime.title',
        ),
        description: t(
          'header.products.conditionMonitoring.features.downtime.description',
        ),
      },
      {
        icon: 'sensor',
        title: t(
          'header.products.conditionMonitoring.features.sensor.title',
        ),
        description: t(
          'header.products.conditionMonitoring.features.sensor.description',
        ),
      },
    ],
  },
  {
    id: 'cmms',
    name: t('header.products.cmms.name'),
    icon: 'cmms',
    features: [
      {
        icon: 'troubleshooting',
        title: t(
          'header.products.cmms.features.troubleshooting.title',
        ),
        description: t(
          'header.products.cmms.features.troubleshooting.description',
        ),
      },
      {
        icon: 'work-order',
        title: t(
          'header.products.cmms.features.workOrder.title',
        ),
        description: t(
          'header.products.cmms.features.workOrder.description',
        ),
      },
      {
        icon: 'inventory',
        title: t(
          'header.products.cmms.features.inventory.title',
        ),
        description: t(
          'header.products.cmms.features.inventory.description',
        ),
      },
      {
        icon: 'maintenance',
        title: t(
          'header.products.cmms.features.maintenance.title',
        ),
        description: t(
          'header.products.cmms.features.maintenance.description',
        ),
      },
      {
        icon: 'integrations',
        title: t(
          'header.products.cmms.features.integrations.title',
        ),
        description: t(
          'header.products.cmms.features.integrations.description',
        ),
      },
    ],
  },
  {
    id: 'oee',
    name: t('header.products.oee.name'),
    icon: 'oee',
    features: [
      {
        icon: 'production',
        title: t(
          'header.products.oee.features.production.title',
        ),
        description: t(
          'header.products.oee.features.production.description',
        ),
      },
      {
        icon: 'operator',
        title: t(
          'header.products.oee.features.operator.title',
        ),
        description: t(
          'header.products.oee.features.operator.description',
        ),
      },
      {
        icon: 'quality',
        title: t(
          'header.products.oee.features.quality.title',
        ),
        description: t(
          'header.products.oee.features.quality.description',
        ),
      },
      {
        icon: 'dashboards',
        title: t(
          'header.products.oee.features.dashboards.title',
        ),
        description: t(
          'header.products.oee.features.dashboards.description',
        ),
      },
      {
        icon: 'analytics',
        title: t(
          'header.products.oee.features.analytics.title',
        ),
        description: t(
          'header.products.oee.features.analytics.description',
        ),
      },
    ],
  },
];

export const getNavigationItems = (
  t: TranslationFunction,
): NavItem[] => [
  {
    id: 'solutions',
    label: t('header.navigation.solutions'),
    dropdownContent: 'solutions',
  },
  {
    id: 'who-we-serve',
    label: t('header.navigation.whoWeServe'),
    dropdownContent: 'who-we-serve',
  },
  {
    id: 'resources',
    label: t('header.navigation.resources'),
    dropdownContent: 'resources',
  },
  {
    id: 'company',
    label: t('header.navigation.company'),
    href: 'about',
  },
  {
    id: 'pricing',
    label: t('header.navigation.pricing'),
    href: 'pricing',
  },
];
