import React from 'react';
import {
  FrontRunnersIcon,
  ForbesAiIcon,
  AicpaIcon,
  SapPartnerIcon,
  Iso27001Icon,
  OracleCloudIcon,
  Iso9001Icon,
  BestMeetsIcon,
  WhiteLogo,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  FacebookIcon,
} from './icons';
import TikTokIcon from './icons/TikTokIcon';
import XIcon from './icons/XIcon';
import {
  getFooterConfig,
  type FooterSectionConfig,
  type FooterLinkConfig,
} from './FooterConfig';

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterBadge {
  component: React.ComponentType;
  alt: string;
  maxWidth: string;
}

export interface FooterSocialMediaLink {
  name: string;
  icon: () => React.JSX.Element;
  href: string;
}

export interface FooterInformation {
  whiteLogo: () => React.JSX.Element;
  tradeMark: string;
  phone: string;
  address: string;
  addressLink: string;
  privacyPolicy: string;
  socialMediaLinks: FooterSocialMediaLink[];
  backToTop: string;
}

type TranslationFunction = (key: string) => string;

export const getFooterContent = (
  t: TranslationFunction,
  locale: string = 'en',
) => {
  const footerConfig = getFooterConfig(locale);

  const sections: FooterSection[] =
    footerConfig.sections.map(
      (section: FooterSectionConfig) => ({
        title: t(section.titleKey),
        links: section.links.map(
          (link: FooterLinkConfig) => ({
            label: t(link.translationKey),
            href: link.href,
          }),
        ),
      }),
    );

  const downloadApp: FooterSection = {
    title: t(footerConfig.downloadApp.titleKey),
    links: footerConfig.downloadApp.links.map(
      (link: FooterLinkConfig) => ({
        label: t(link.translationKey),
        href: link.href,
      }),
    ),
  };

  const badges: FooterBadge[] = [
    {
      component: FrontRunnersIcon,
      alt: 'Front Runners',
      maxWidth: '50px',
    },
    {
      component: ForbesAiIcon,
      alt: 'Forbes',
      maxWidth: '60px',
    },
    {
      component: AicpaIcon,
      alt: 'AICPA',
      maxWidth: '52px',
    },
    {
      component: SapPartnerIcon,
      alt: 'SAP Silver Partner',
      maxWidth: '68px',
    },
    {
      component: Iso27001Icon,
      alt: 'ISO 27001',
      maxWidth: '90px',
    },
    {
      component: OracleCloudIcon,
      alt: 'Oracle Cloud',
      maxWidth: '59px',
    },
    {
      component: Iso9001Icon,
      alt: 'ISO 9001',
      maxWidth: '56px',
    },
    {
      component: BestMeetsIcon,
      alt: 'Best Meets Requirements',
      maxWidth: '56px',
    },
  ];

  const baseSocialMediaLinks: FooterSocialMediaLink[] = [
    {
      name: 'Linkedin',
      icon: LinkedinIcon,
      href: 'https://www.linkedin.com/company/get-tractian/',
    },
    {
      name: 'Instagram',
      icon: InstagramIcon,
      href: 'https://www.instagram.com/get.tractian/',
    },
    {
      name: 'Youtube',
      icon: YoutubeIcon,
      href: 'https://www.youtube.com/channel/UCmrRZOCxvMbDnR5haGfFe8w',
    },
    {
      name: 'Facebook',
      icon: FacebookIcon,
      href: 'https://www.facebook.com/get.tractian/',
    },
  ];

  const socialMediaLinks: FooterSocialMediaLink[] =
    locale === 'pt'
      ? [
          ...baseSocialMediaLinks,
          {
            name: 'TikTok',
            icon: TikTokIcon,
            href: 'https://www.tiktok.com/@tractian',
          },
          {
            name: 'X',
            icon: XIcon,
            href: 'https://twitter.com/tractian',
          },
        ]
      : baseSocialMediaLinks;

  const information: FooterInformation = {
    whiteLogo: WhiteLogo,
    tradeMark: t('footer.information.tradeMark'),
    phone: t('footer.information.phone'),
    address: t('footer.information.address'),
    addressLink: t('footer.information.addressLink'),
    socialMediaLinks,
    backToTop: t('footer.information.backToTop'),
    privacyPolicy: t('footer.information.privacyPolicy'),
  };

  return {
    sections,
    downloadApp,
    badges,
    information,
  };
};
