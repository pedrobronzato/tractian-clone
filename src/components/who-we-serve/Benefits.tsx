import { getBenefitsContent } from '@/content/who-we-serve';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import InteractiveChecklist from '../common/InteractiveChecklist';

interface BenefitsProps {
  role: string;
}

export default function Benefits({ role }: BenefitsProps) {
  const t = useTranslations();
  const locale = useLocale();
  const content = getBenefitsContent(t, locale, role);
  console.log(content, 'content');

  return (
    <section className="w-full bg-slate-100 px-4 py-12 lg:py-16">
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-6xl lg:gap-16">
        <article className="flex w-full flex-col gap-4">
          <p className="text-body-md text-blue-600 uppercase">
            {content.catchphrase}
          </p>
          <h2 className="text-title-lg font-bold">
            {content.title}
          </h2>
        </article>
        <InteractiveChecklist
          checklist={content.checklist}
        />
      </div>
    </section>
  );
}
