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

type TranslationFunctionWithRaw = {
  (key: string): string;
  raw<T = unknown>(key: string): T;
};

type ProductFeatureContent = {
  id: string;
  title: string;
  description: string;
};

type ProductCategoryContent = {
  id: string;
  name: string;
  features: ProductFeatureContent[];
};

type NavigationItemContent = {
  id: string;
  label: string;
};

const productIcons: Record<string, string> = {
  'condition-monitoring': 'monitoring',
  cmms: 'cmms',
  oee: 'oee',
};

const productFeatureIcons: Record<
  string,
  Record<string, string>
> = {
  'condition-monitoring': {
    vibrationSensor: 'vibration',
    aiDetection: 'ai-detection',
    reliability: 'reliability',
    downtime: 'downtime',
    sensor: 'sensor',
  },
  cmms: {
    troubleshooting: 'troubleshooting',
    workOrder: 'work-order',
    inventory: 'inventory',
    maintenance: 'maintenance',
    integrations: 'integrations',
  },
  oee: {
    production: 'production',
    operator: 'operator',
    quality: 'quality',
    dashboards: 'dashboards',
    analytics: 'analytics',
  },
};

const navigationConfig: Record<
  string,
  Pick<NavItem, 'href' | 'dropdownContent'>
> = {
  solutions: { dropdownContent: 'solutions' },
  'who-we-serve': { dropdownContent: 'who-we-serve' },
  resources: { dropdownContent: 'resources' },
  company: { href: 'about' },
  pricing: { href: 'pricing' },
};

export const getProductsMenu = (
  t: TranslationFunctionWithRaw,
): ProductCategory[] =>
  (
    t.raw<ProductCategoryContent[]>('header.products') ?? []
  ).map((product) => ({
    ...product,
    icon: productIcons[product.id] ?? product.id,
    features: product.features.map((feature) => ({
      ...feature,
      icon:
        productFeatureIcons[product.id]?.[feature.id] ??
        feature.id,
    })),
  }));

export const getNavigationItems = (
  t: TranslationFunctionWithRaw,
): NavItem[] =>
  (
    t.raw<NavigationItemContent[]>('header.navigation') ??
    []
  ).map((item) => ({
    ...item,
    ...navigationConfig[item.id],
  }));
