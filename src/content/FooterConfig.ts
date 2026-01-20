export interface FooterLinkConfig {
  translationKey: string;
  href: string;
}

export interface FooterSectionConfig {
  titleKey: string;
  links: FooterLinkConfig[];
}

export interface FooterConfig {
  sections: FooterSectionConfig[];
  downloadApp: {
    titleKey: string;
    links: FooterLinkConfig[];
  };
}

export const footerConfigEN: FooterConfig = {
  sections: [
    {
      titleKey: 'footer.sections.onlineMonitoring.title',
      links: [
        {
          translationKey:
            'footer.sections.onlineMonitoring.links.conditionMonitoring',
          href: 'https://tractian.com/en/solutions/condition-monitoring/vibration-sensor',
        },
        {
          translationKey:
            'footer.sections.onlineMonitoring.links.keyFeatures',
          href: 'https://tractian.com/en/resources/videos/vibration-sensor',
        },
        {
          translationKey:
            'footer.sections.onlineMonitoring.links.insightsAndDiagnostics',
          href: 'https://tractian.com/en/solutions/condition-monitoring/insights-and-diagnosis',
        },
        {
          translationKey:
            'footer.sections.onlineMonitoring.links.vibrationSensor',
          href: 'https://tractian.com/en/solutions/condition-monitoring/vibration-analysis',
        },
        {
          translationKey:
            'footer.sections.onlineMonitoring.links.compatibleAssets',
          href: 'https://tractian.com/en/solutions/condition-monitoring/assets-monitored',
        },
        {
          translationKey:
            'footer.sections.onlineMonitoring.links.patentedTechnology',
          href: 'https://tractian.com/en/solutions/condition-monitoring/supervisor',
        },
        {
          translationKey:
            'footer.sections.onlineMonitoring.links.predictiveMaintenanceSoftware',
          href: 'https://tractian.com/en/solutions/apm/predictive-maintenance-software',
        },
      ],
    },
    {
      titleKey: 'footer.sections.energyManagement.title',
      links: [
        {
          translationKey:
            'footer.sections.energyManagement.links.aiPoweredCmms',
          href: 'https://tractian.com/en/solutions/cmms',
        },
        {
          translationKey:
            'footer.sections.energyManagement.links.bestInventoryManagementSoftware',
          href: 'https://tractian.com/en/cmms/inventory-management-software',
        },
        {
          translationKey:
            'footer.sections.energyManagement.links.preventiveMaintenanceSoftware',
          href: 'https://tractian.com/en/solutions/cmms/preventive-maintenance-software',
        },
        {
          translationKey:
            'footer.sections.energyManagement.links.planningAndScheduling',
          href: 'https://tractian.com/en/solutions/cmms/planning-and-scheduling-software',
        },
        {
          translationKey:
            'footer.sections.energyManagement.links.workOrderManagement',
          href: 'https://tractian.com/en/solutions/cmms/work-order-software',
        },
        {
          translationKey:
            'footer.sections.energyManagement.links.sparePartsManagement',
          href: 'https://tractian.com/en/solutions/cmms/inventory-management-software',
        },
        {
          translationKey:
            'footer.sections.energyManagement.links.checklistsSops',
          href: 'https://tractian.com/en/solutions/cmms/maintenance-sop',
        },
        {
          translationKey:
            'footer.sections.energyManagement.links.reportingAndAnalytics',
          href: 'https://tractian.com/en/solutions/cmms/maintenance-dashboard-software',
        },
        {
          translationKey:
            'footer.sections.energyManagement.links.mobileCmmsApp',
          href: 'https://tractian.com/en/solutions/cmms/mobile-app',
        },
        {
          translationKey:
            'footer.sections.energyManagement.links.integrations',
          href: 'https://tractian.com/en/solutions/integrations',
        },
      ],
    },
    {
      titleKey: 'footer.sections.oee.title',
      links: [
        {
          translationKey:
            'footer.sections.oee.links.productionMonitoring',
          href: 'https://tractian.com/en/solutions/oee',
        },
        {
          translationKey:
            'footer.sections.oee.links.assetPerformanceManagement',
          href: 'https://tractian.com/en/solutions/apm/asset-performance-management',
        },
        {
          translationKey:
            'footer.sections.oee.links.energyReports',
          href: 'https://tractian.com/en/solutions/oee/energy-reports',
        },
        {
          translationKey:
            'footer.sections.oee.links.processMonitoring',
          href: 'https://tractian.com/en/solutions/oee/plc-reader',
        },
        {
          translationKey:
            'footer.sections.oee.links.currentMonitoring',
          href: 'https://tractian.com/en/solutions/oee/current-monitoring',
        },
        {
          translationKey:
            'footer.sections.oee.links.utilityAndProcessAnalytics',
          href: 'https://tractian.com/en/solutions/oee/energy-trac',
        },
        {
          translationKey:
            'footer.sections.oee.links.customDashboards',
          href: 'https://tractian.com/en/solutions/oee/supervisor-reports',
        },
      ],
    },
    {
      titleKey: 'footer.sections.support.title',
      links: [
        {
          translationKey:
            'footer.sections.support.links.contactUs',
          href: 'https://tractian.com/en/contact',
        },
        {
          translationKey:
            'footer.sections.support.links.helpCenter',
          href: 'https://faq.tractian.com/en/',
        },
        {
          translationKey:
            'footer.sections.support.links.policies',
          href: 'https://tractian.com/en/policies/privacy',
        },
        {
          translationKey:
            'footer.sections.support.links.trustCenter',
          href: 'https://trust.tractian.com/',
        },
        {
          translationKey:
            'footer.sections.support.links.masterLicenseAndServiceAgreement',
          href: 'https://tractian.com/en/master-license',
        },
        {
          translationKey:
            'footer.sections.support.links.hostedSoftwareSla',
          href: 'https://tractian.com/en/service-level-agreement',
        },
        {
          translationKey:
            'footer.sections.support.links.hardwareWarrantyPolicy',
          href: 'https://tractian.com/en/hardware-warranty',
        },
      ],
    },
    {
      titleKey: 'footer.sections.about.title',
      links: [
        {
          translationKey:
            'footer.sections.about.links.aboutUs',
          href: 'https://tractian.com/en/about',
        },
        {
          translationKey:
            'footer.sections.about.links.referrals',
          href: 'https://tractian.com/en/referrals',
        },
        {
          translationKey:
            'footer.sections.about.links.careers',
          href: 'https://careers.tractian.com/',
        },
        {
          translationKey:
            'footer.sections.about.links.caseStudies',
          href: 'https://tractian.com/en/case-studies',
        },
        {
          translationKey:
            'footer.sections.about.links.press',
          href: 'https://tractian.com/en/press',
        },
      ],
    },
  ],
  downloadApp: {
    titleKey: 'footer.downloadApp.title',
    links: [
      {
        translationKey:
          'footer.downloadApp.links.appleStore',
        href: 'https://apps.apple.com/app/tractian/id1590498655',
      },
      {
        translationKey:
          'footer.downloadApp.links.googlePlay',
        href: 'https://play.google.com/store/apps/details?id=com.tractian.app&pli=1',
      },
      {
        translationKey: 'footer.downloadApp.links.sapStore',
        href: 'https://store.sap.com/dcp/en/product/display-2001016127_live_v1/tractian-ai-machine-intelligence-software',
      },
    ],
  },
};

export const footerConfigPT: FooterConfig = {
  sections: [
    {
      titleKey: 'footer.sections.onlineMonitoring.title',
      links: [
        {
          translationKey:
            'footer.sections.onlineMonitoring.links.overview',
          href: 'https://tractian.com/pt/solucoes/monitoramento-condicao/smart-trac',
        },
        {
          translationKey:
            'footer.sections.onlineMonitoring.links.insightsAndDiagnostics',
          href: 'https://tractian.com/pt/solucoes/monitoramento-condicao/insights-e-diagnostico',
        },
        {
          translationKey:
            'footer.sections.onlineMonitoring.links.monitoredAssets',
          href: 'https://tractian.com/pt/solucoes/monitoramento-condicao/ativos-monitorados',
        },
        {
          translationKey:
            'footer.sections.onlineMonitoring.links.vibrationAnalysis',
          href: 'https://tractian.com/pt/sensor-de-vibracao-industrial/analise-de-vibracao',
        },
        {
          translationKey:
            'footer.sections.onlineMonitoring.links.supervisor',
          href: 'https://tractian.com/pt/sensor-de-vibracao-industrial/supervisorio',
        },
      ],
    },
    {
      titleKey: 'footer.sections.energyManagement.title',
      links: [
        {
          translationKey:
            'footer.sections.energyManagement.links.overview',
          href: 'https://tractian.com/pt/solucoes/oee/leitor-de-plc',
        },
        {
          translationKey:
            'footer.sections.energyManagement.links.assetPerformance',
          href: 'https://tractian.com/pt/asset-performance-management',
        },
        {
          translationKey:
            'footer.sections.energyManagement.links.energyReports',
          href: 'https://tractian.com/pt/solucoes/oee/relatorios-de-energia',
        },
        {
          translationKey:
            'footer.sections.energyManagement.links.processMonitoring',
          href: 'https://tractian.com/pt/solucoes/oee/leitor-de-plc',
        },
        {
          translationKey:
            'footer.sections.energyManagement.links.energyEfficiency',
          href: 'https://tractian.com/pt/solucoes/oee/energy-trac',
        },
        {
          translationKey:
            'footer.sections.energyManagement.links.currentMonitoring',
          href: 'https://tractian.com/pt/solucoes/oee/monitoramento-de-corrente',
        },
        {
          translationKey:
            'footer.sections.energyManagement.links.supervisor',
          href: 'https://tractian.com/pt/energy-trac/supervisorio',
        },
      ],
    },
    {
      titleKey: 'footer.sections.assetManagement.title',
      links: [
        {
          translationKey:
            'footer.sections.assetManagement.links.overview',
          href: 'https://tractian.com/pt/cmms/cmms-tractian',
        },
        {
          translationKey:
            'footer.sections.assetManagement.links.planningAndScheduling',
          href: 'https://tractian.com/pt/solucoes/cmms/planejamento-e-programacao',
        },
        {
          translationKey:
            'footer.sections.assetManagement.links.maintenanceDashboards',
          href: 'https://tractian.com/pt/solucoes/cmms/dashboard-indicadores-manutencao',
        },
        {
          translationKey:
            'footer.sections.assetManagement.links.geolocation',
          href: 'https://tractian.com/pt/solucoes/cmms/geolocalizacao',
        },
        {
          translationKey:
            'footer.sections.assetManagement.links.workOrderManagement',
          href: 'https://tractian.com/pt/solucoes/cmms/gerenciamento-de-ordens-de-servico',
        },
        {
          translationKey:
            'footer.sections.assetManagement.links.inventoryControl',
          href: 'https://tractian.com/pt/solucoes/cmms/controle-de-estoque',
        },
        {
          translationKey:
            'footer.sections.assetManagement.links.automaticProcedures',
          href: 'https://tractian.com/pt/cmms/procedimentos-automaticos',
        },
        {
          translationKey:
            'footer.sections.assetManagement.links.mobileApp',
          href: 'https://tractian.com/pt/solucoes/cmms/aplicativo-movel',
        },
      ],
    },
    {
      titleKey: 'footer.sections.support.title',
      links: [
        {
          translationKey:
            'footer.sections.support.links.contactUs',
          href: 'https://tractian.com/pt/contato',
        },
        {
          translationKey:
            'footer.sections.support.links.helpCenter',
          href: 'https://faq.tractian.com/pt-BR/',
        },
        {
          translationKey:
            'footer.sections.support.links.policies',
          href: 'https://tractian.com/pt/politica/privacidade',
        },
        {
          translationKey:
            'footer.sections.support.links.termsOfUse',
          href: 'https://tractian.com/pt/termos-de-uso',
        },
        {
          translationKey:
            'footer.sections.support.links.trustCenter',
          href: 'https://trust.tractian.com/',
        },
      ],
    },
    {
      titleKey: 'footer.sections.about.title',
      links: [
        {
          translationKey:
            'footer.sections.about.links.aboutUs',
          href: 'https://tractian.com/pt/sobre',
        },
        {
          translationKey:
            'footer.sections.about.links.careers',
          href: 'https://careers.tractian.com/',
        },
        {
          translationKey:
            'footer.sections.about.links.caseStudies',
          href: 'https://tractian.com/pt/casos-de-estudo',
        },
        {
          translationKey:
            'footer.sections.about.links.press',
          href: 'https://tractian.com/pt/imprensa',
        },
        {
          translationKey:
            'footer.sections.about.links.community',
          href: 'https://tractian.com/pt/comunidade',
        },
      ],
    },
  ],
  downloadApp: {
    titleKey: 'footer.downloadApp.title',
    links: [
      {
        translationKey:
          'footer.downloadApp.links.appleStore',
        href: 'https://apps.apple.com/app/tractian/id1590498655',
      },
      {
        translationKey:
          'footer.downloadApp.links.googlePlay',
        href: 'https://play.google.com/store/apps/details?id=com.tractian.app&pli=1',
      },
      {
        translationKey: 'footer.downloadApp.links.sapStore',
        href: 'https://store.sap.com/dcp/en/product/display-2001016127_live_v1/tractian-ai-machine-intelligence-software',
      },
    ],
  },
};

export const footerConfigES: FooterConfig = {
  sections: [
    {
      titleKey: 'footer.sections.onlineMonitoring.title',
      links: [
        {
          translationKey:
            'footer.sections.onlineMonitoring.links.overview',
          href: 'https://tractian.com/es/soluciones/monitoreo-condicion/smart-trac',
        },
        {
          translationKey:
            'footer.sections.onlineMonitoring.links.insightsAndDiagnostics',
          href: 'https://tractian.com/es/soluciones/monitoreo-condicion/insights-y-diagnosticos',
        },
        {
          translationKey:
            'footer.sections.onlineMonitoring.links.vibrationAnalysis',
          href: 'https://tractian.com/es/sensor-de-vibracion-industrial/analisis-de-vibraciones',
        },
        {
          translationKey:
            'footer.sections.onlineMonitoring.links.monitoredAssets',
          href: 'https://tractian.com/es/soluciones/monitoreo-condicion/activos-monitoreados',
        },
        {
          translationKey:
            'footer.sections.onlineMonitoring.links.supervisor',
          href: 'https://tractian.com/es/sensor-de-vibracion-industrial/supervisor',
        },
      ],
    },
    {
      titleKey: 'footer.sections.energyManagement.title',
      links: [
        {
          translationKey:
            'footer.sections.energyManagement.links.overview',
          href: 'https://tractian.com/es/soluciones/oee/lector-plc',
        },
        {
          translationKey:
            'footer.sections.energyManagement.links.assetPerformance',
          href: 'https://tractian.com/es/asset-performance-management',
        },
        {
          translationKey:
            'footer.sections.energyManagement.links.energyReports',
          href: 'https://tractian.com/es/soluciones/oee/informes-de-energia',
        },
        {
          translationKey:
            'footer.sections.energyManagement.links.processMonitoring',
          href: 'https://tractian.com/es/solucoes/oee/lector-plc',
        },
        {
          translationKey:
            'footer.sections.energyManagement.links.currentMonitoring',
          href: 'https://tractian.com/es/soluciones/oee/monitoreo-de-corriente',
        },
        {
          translationKey:
            'footer.sections.energyManagement.links.energyEfficiency',
          href: 'https://tractian.com/es/soluciones/oee/energy-trac',
        },
        {
          translationKey:
            'footer.sections.energyManagement.links.supervisor',
          href: 'https://tractian.com/es/soluciones/oee/supervisor',
        },
      ],
    },
    {
      titleKey: 'footer.sections.assetManagement.title',
      links: [
        {
          translationKey:
            'footer.sections.assetManagement.links.overview',
          href: 'https://tractian.com/es/soluciones/cmms',
        },
        {
          translationKey:
            'footer.sections.assetManagement.links.planningAndScheduling',
          href: 'https://tractian.com/es/soluciones/cmms/software-de-planeacion-y-programacion',
        },
        {
          translationKey:
            'footer.sections.assetManagement.links.workOrderManagement',
          href: 'https://tractian.com/es/soluciones/cmms/software-gestion-de-ordenes-de-trabajo',
        },
        {
          translationKey:
            'footer.sections.assetManagement.links.materialsManagement',
          href: 'https://tractian.com/es/cmms/gestion-de-materiales',
        },
        {
          translationKey:
            'footer.sections.assetManagement.links.automaticProcedures',
          href: 'https://tractian.com/es/cmms/procedimentos-automaticos',
        },
        {
          translationKey:
            'footer.sections.assetManagement.links.mobileApp',
          href: 'https://tractian.com/es/soluciones/cmms/aplicacion-movil',
        },
        {
          translationKey:
            'footer.sections.assetManagement.links.geolocation',
          href: 'https://tractian.com/es/cmms/tracos/geolocalizacion',
        },
        {
          translationKey:
            'footer.sections.assetManagement.links.maintenanceDashboards',
          href: 'https://tractian.com/es/cmms/tracos/indicadores-dashboards-mantenimiento',
        },
      ],
    },
    {
      titleKey: 'footer.sections.support.title',
      links: [
        {
          translationKey:
            'footer.sections.support.links.contactUs',
          href: 'https://tractian.com/es/contacto',
        },
        {
          translationKey:
            'footer.sections.support.links.helpCenter',
          href: 'https://faq.tractian.com/es/',
        },
        {
          translationKey:
            'footer.sections.support.links.policies',
          href: 'https://tractian.com/es/politica/privacidade',
        },
        {
          translationKey:
            'footer.sections.support.links.trustCenter',
          href: 'https://trust.tractian.com/',
        },
      ],
    },
    {
      titleKey: 'footer.sections.about.title',
      links: [
        {
          translationKey:
            'footer.sections.about.links.aboutUs',
          href: 'https://tractian.com/es/sobre',
        },
        {
          translationKey:
            'footer.sections.about.links.careers',
          href: 'https://careers.tractian.com/',
        },
        {
          translationKey:
            'footer.sections.about.links.caseStudies',
          href: 'https://tractian.com/es/casos-de-estudio',
        },
        {
          translationKey:
            'footer.sections.about.links.press',
          href: 'https://tractian.com/es/prensa',
        },
        {
          translationKey:
            'footer.sections.about.links.community',
          href: 'https://tractian.com/es/comunidad',
        },
      ],
    },
  ],
  downloadApp: {
    titleKey: 'footer.downloadApp.title',
    links: [
      {
        translationKey:
          'footer.downloadApp.links.appleStore',
        href: 'https://apps.apple.com/app/tractian/id1590498655',
      },
      {
        translationKey:
          'footer.downloadApp.links.googlePlay',
        href: 'https://play.google.com/store/apps/details?id=com.tractian.app&pli=1',
      },
      {
        translationKey: 'footer.downloadApp.links.sapStore',
        href: 'https://store.sap.com/dcp/en/product/display-2001016127_live_v1/tractian-ai-machine-intelligence-software',
      },
    ],
  },
};

export function getFooterConfig(
  locale: string,
): FooterConfig {
  switch (locale) {
    case 'pt':
      return footerConfigPT;
    case 'es':
      return footerConfigES;
    case 'en':
    default:
      return footerConfigEN;
  }
}
