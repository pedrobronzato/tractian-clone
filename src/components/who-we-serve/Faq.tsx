import { useTranslations } from 'next-intl';
import FaqQuestion from './FaqQuestion';
import { getFaqContent } from '@/content/who-we-serve';

interface FaqProps {
  role: string;
}

export default function Faq({ role }: FaqProps) {
  const t = useTranslations();
  const content = getFaqContent(t, role);
  return (
    <section className="relative w-full bg-slate-100 py-12 lg:py-16">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 px-4 lg:max-w-6xl lg:gap-16">
        <article className="flex w-full flex-col items-center gap-2 lg:gap-4">
          <p className="text-body-md text-center text-blue-600 uppercase">
            {content.title}
          </p>
          <h2 className="font-inter-tight text-title-lg md:text-title-md text-center font-semibold lg:font-bold">
            {content.header}
          </h2>
        </article>

        <div className="flex w-full flex-col gap-y-6">
          {content.questions.map((question) => (
            <FaqQuestion
              key={question.title}
              awnser={question.awnser}
              title={question.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
