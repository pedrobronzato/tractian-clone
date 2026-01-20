import { getFeaturesContent } from '@/content/who-we-serve';
import { useTranslations } from 'next-intl';
import Tabs from '../common/Tabs';

interface FeaturesProps {
  role: string;
}

export default function Features({ role }: FeaturesProps) {
  const t = useTranslations();
  const content = getFeaturesContent(t, role);

  return (
    <section className="relative w-full bg-white px-4 py-12 lg:px-16 lg:py-20">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-8 text-slate-700 lg:max-w-6xl lg:gap-12">
        <article className="flex w-full flex-col items-start gap-8 lg:items-center">
          <h2 className="font-inter-tight text-title-md mt-4 w-full text-left font-bold lg:text-center">
            {content.title}
          </h2>

          <div className="w-full">
            <Tabs tabs={content.tabs} />
          </div>
        </article>
      </div>
    </section>
  );
}
