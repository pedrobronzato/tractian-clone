import { getAdvantagesContent } from '@/content/who-we-serve';
import { useTranslations } from 'next-intl';
import AdvantagesCard from './AdvantagesCard';
interface AdvantagesProps {
  role: string;
}

export default function Advantages({
  role,
}: AdvantagesProps) {
  const t = useTranslations();
  const content = getAdvantagesContent(t, role);
  return (
    <section className="w-full bg-slate-100 px-4 py-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8 lg:max-w-6xl lg:gap-12">
        <h2
          className="text-title-md font-inter-tight font-bold lg:text-center"
          dangerouslySetInnerHTML={{
            __html: content.title,
          }}
        />
        <div className="gap flex h-auto w-full flex-col items-stretch gap-8 lg:flex-row lg:justify-between lg:gap-16">
          {content.advantages.map((advantage) => (
            <AdvantagesCard
              key={advantage.title}
              title={advantage.title}
              description={advantage.description}
              icon={advantage.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
