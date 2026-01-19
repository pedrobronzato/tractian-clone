import { useTranslations } from 'next-intl';
import ClientsCarousel from './ClientsCarousel';
import { getClientsContent } from '@/content/who-we-serve';

interface ClientsProps {
  role: string;
}

export default function Clients({ role }: ClientsProps) {
  const t = useTranslations();
  const content = getClientsContent(t, role);
  return (
    <section className="w-full bg-white px-0 pt-4 lg:px-4 lg:pb-16">
      <div className="mx-auto flex w-full max-w-full flex-col items-center gap-8 lg:gap-12">
        <h2 className="text-body-md mx-auto max-w-2xl px-4 text-center text-slate-500 lg:px-0">
          {content.title}
        </h2>
        <div className="mx-auto hidden w-full flex-wrap justify-center gap-12 lg:grid lg:max-w-6xl lg:grid-cols-7 lg:items-center lg:justify-center">
          {content.logos.map((logo) => (
            <div key={logo.key}>{logo}</div>
          ))}
        </div>
        <div className="flex w-full flex-col bg-transparent lg:hidden">
          <ClientsCarousel icons={content.logos} />
        </div>
      </div>
    </section>
  );
}
