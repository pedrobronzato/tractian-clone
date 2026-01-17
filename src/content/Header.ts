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

export const productsMenu: ProductCategory[] = [
  {
    id: 'condition-monitoring',
    name: 'Tractian Condition Monitoring',
    icon: 'monitoring',
    features: [
      {
        icon: 'vibration',
        title: 'Vibration Sensor & Analysis',
        description:
          'All the tools you need to remotely monitor machine health.',
      },
      {
        icon: 'ai-detection',
        title: 'AI Failure Detection',
        description:
          'Spot issues early, trigger automatic alerts.',
      },
      {
        icon: 'reliability',
        title: 'Reliability & Root Cause Analysis',
        description:
          'Get to the why faster, build your reliability program.',
      },
      {
        icon: 'downtime',
        title: 'Downtime Prevention & Reporting',
        description:
          'Uncover failure trends, act before breakdowns happen.',
      },
      {
        icon: 'sensor',
        title: 'Sensor Specifications',
        description:
          'Monitor real-time vibration, temperature, runtime, and RPM.',
      },
    ],
  },
  {
    id: 'cmms',
    name: 'Tractian CMMS',
    icon: 'cmms',
    features: [
      {
        icon: 'troubleshooting',
        title: 'Troubleshooting & SOPs',
        description:
          'Guide technicians with smart SOPs and checklists.',
      },
      {
        icon: 'work-order',
        title: 'Work Order Management',
        description:
          'Plan, assign, and track every work order in one place.',
      },
      {
        icon: 'inventory',
        title: 'Parts Inventory Management',
        description:
          'Track critical parts and link them to maintenance tasks.',
      },
      {
        icon: 'maintenance',
        title: 'Preventive Maintenance',
        description:
          'Automate tasks, prevent failures, and cut downtime.',
      },
      {
        icon: 'integrations',
        title: 'Integrations',
        description:
          'Connect Tractian with ERPs, sensors, and data systems.',
      },
    ],
  },
  {
    id: 'oee',
    name: 'Tractian OEE',
    icon: 'oee',
    features: [
      {
        icon: 'production',
        title: 'AI Production Tracking',
        description:
          'Get status of production, lines, stations with live insights.',
      },
      {
        icon: 'operator',
        title: 'Operator Performance',
        description: 'Connect and empower the frontline.',
      },
      {
        icon: 'quality',
        title: 'Digitized Quality',
        description:
          'Take quality forms and measurements digital.',
      },
      {
        icon: 'dashboards',
        title: 'Custom Dashboards',
        description:
          'Drive operations with real-time data reports.',
      },
      {
        icon: 'analytics',
        title: 'Utility & Process Analytics',
        description:
          'Analyze energy consumption and process metrics.',
      },
    ],
  },
];

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

export const navigationItems: NavItem[] = [
  {
    id: 'solutions',
    label: 'Solutions',
    dropdownContent: 'solutions',
  },
  {
    id: 'who-we-serve',
    label: 'Who We Serve',
    dropdownContent: 'who-we-serve',
  },
  {
    id: 'resources',
    label: 'Resources',
    dropdownContent: 'resources',
  },
  {
    id: 'company',
    label: 'Company',
    href: 'about',
  },
  {
    id: 'pricing',
    label: 'Pricing',
    href: 'pricing',
  },
];
