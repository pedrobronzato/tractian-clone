import { useLocale } from 'next-intl';

export default function useMountHref() {
  const locale = useLocale();
  const baseUrl = 'https://tractian.com';

  return (path: string, customHref?: boolean) => {
    if (customHref) {
      return path;
    }
    return `${baseUrl}/${locale}${path}`;
  };
}
