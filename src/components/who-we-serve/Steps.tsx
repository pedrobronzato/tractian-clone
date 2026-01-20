import { getStepsContent } from '@/content/who-we-serve';
import { useTranslations } from 'next-intl';
import StepsCard from './StepsCard';

interface StepsProps {
  role: string;
}

export default function Steps({ role }: StepsProps) {
  const t = useTranslations();
  const content = getStepsContent(t, role);
  const hasTitle = content.title !== undefined;
  return (
    <section className="bg-slate-100 px-4 py-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-start gap-8 lg:max-w-6xl lg:items-center lg:gap-12">
        {hasTitle && (
          <p className="text-body-md text-left text-blue-600 uppercase lg:text-center">
            {content.title}
          </p>
        )}
        <h2 className="font-inter-tight text-title-md max-w-[800px] text-left font-bold lg:mb-4 lg:text-center">
          {content.header}
        </h2>
        <StepsCard steps={content.steps} />
      </div>
    </section>
  );
}
