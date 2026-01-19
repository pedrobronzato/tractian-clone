'use client';
import Button from '../common/Button';
import { useTranslations } from 'next-intl';
import { getMissionContent } from '@/content/who-we-serve';
interface MissionProps {
  role: string;
}
export default function Mission({ role }: MissionProps) {
  const t = useTranslations();
  const content = getMissionContent(t, role);
  return (
    <section className="3xl:min-h-[525px] 4xl:min-h-[560px] w-full bg-[url('https://tractian-webpage.s3.us-east-1.amazonaws.com/website/pages/who-we-serve/maintenance-engineer/en/more-than-machines.png')] bg-cover bg-right bg-no-repeat 2xl:min-h-[475px]">
      <div className="md:bg-opacity-80 3xl:min-h-[525px] 3xl:pl-12 4xl:min-h-[560px] relative z-10 flex w-full max-w-full justify-center bg-blue-950/80 px-4 py-12 md:max-w-[50%] md:justify-end lg:px-12 lg:py-16 xl:px-0 xl:py-20 xl:pl-16 2xl:min-h-[475px] 2xl:items-center 2xl:pl-16">
        <div className="flex w-full max-w-full flex-col items-center gap-8 md:max-w-[318px] md:items-start lg:max-w-full xl:max-w-[576px]">
          <article className="relative z-20 flex w-full flex-col items-center gap-4 md:items-start">
            <h2 className="text-title-lg text-center font-bold text-white md:text-left">
              {content.title_pt1}
              <br className="hidden xl:block" />
              {content.title_pt2}
            </h2>
          </article>
          <Button
            variant="filled"
            onClick={() => console.log('clicked')}
            label={content.button}
          />
        </div>
      </div>
    </section>
  );
}
