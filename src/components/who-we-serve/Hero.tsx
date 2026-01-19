'use client';
import {
  getHeroContent,
  getHeroImage,
} from '@/content/who-we-serve';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Button from '../common/Button';
import ArrowRight from '@/content/icons/ArrowRight';

interface HeroProps {
  role: string;
}

export default function Hero({ role }: HeroProps) {
  const t = useTranslations();
  const locale = useLocale();
  const content = getHeroContent(t, role);
  const backgroundImages = getHeroImage(role, locale);

  return (
    <section
      className="3xl:min-h-[675px] 4xl:min-h-[695px] relative w-full md:bg-cover md:bg-right md:bg-no-repeat 2xl:bg-right-top"
      style={{
        backgroundImage: `url('${backgroundImages.src}')`,
      }}
    >
      <div className="3xl:min-h-[675px] 4xl:min-h-[695px] relative z-10 flex w-full max-w-full justify-end bg-blue-950 px-4 pt-14 pb-12 md:max-w-[50%] md:items-center md:bg-blue-950/80 lg:bg-blue-950/80 lg:px-12 lg:py-16 xl:py-20 xl:pr-24 xl:pl-16">
        <div className="flex w-fit flex-col items-center gap-8 md:items-start">
          <article className="relative z-20 flex flex-col items-center gap-4 md:items-start">
            <p className="text-body-md text-center font-light text-white md:text-left">
              {content.catchphrase}
            </p>
            <h1 className="text-title-lg font-inter-tight text-center font-bold text-white md:text-left">
              {content.title_1}
              <br className="hidden xl:block" />
              {content.title_2}
              <br className="hidden xl:block" />
              {content.title_3}
            </h1>
            <p className="text-body-md text-center font-light text-white md:text-left">
              {content.description_1}
              <br className="hidden xl:block" />
              {content.description_2}
            </p>
          </article>
          <Button
            onClick={() => console.log('clicked')}
            icon={
              <ArrowRight className="h-4 w-4 text-white" />
            }
            label={content.button}
            variant="filled"
          />
        </div>
      </div>
      <div className="absolute inset-0 mx-auto hidden w-full items-center justify-end lg:flex 2xl:right-8 2xl:mr-0">
        <div className="3xl:max-w-[320px] 3xl:px-6 3xl:py-7 4xl:max-w-[335px] flex w-full max-w-[240px] flex-col gap-4 rounded-l-sm bg-white px-4 py-4 lg:py-6 2xl:max-w-[280px] 2xl:rounded-sm 2xl:px-5">
          <p className="text-body-sm lg:text-body-md md:text-body-md text-slate-500">
            {content.quote}
          </p>
          <article className="flex w-full flex-col">
            <p className="text-body-sm font-bold">
              {content.quote_author}
            </p>
            <p className="text-body-sm">
              {content.quote_author_job}
            </p>
            <p className="text-body-sm font-bold">
              {content.quote_author_company}
            </p>
          </article>
        </div>
      </div>
      <Image
        width="2560"
        height="1980"
        className="hidden h-full w-full object-cover object-right sm:block md:hidden"
        src={backgroundImages.src}
        alt="Hero image"
      />
      <Image
        width="2560"
        height="1980"
        className="block h-full w-full object-cover object-center sm:hidden"
        src={backgroundImages.mobile}
        alt="Hero image"
      />
    </section>
  );
}
