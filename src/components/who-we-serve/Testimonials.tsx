import { getTestimonialsContent } from '@/content/who-we-serve';
import { useLocale, useTranslations } from 'next-intl';
import TestimonialCard from './TestimonialCard';
import Slider from '../common/Swiper';

interface TestimonialsProps {
  role: string;
}

export default function Testimonials({
  role,
}: TestimonialsProps) {
  const t = useTranslations();
  const locale = useLocale();
  const content = getTestimonialsContent(t, role, locale);

  return (
    <section className="w-full bg-white py-12 sm:px-4 lg:py-16 xl:px-0">
      <div className="item-center mx-auto flex w-full max-w-2xl flex-col items-center gap-8 md:gap-12 lg:max-w-6xl">
        <h2 className="text-title-md px-4 text-left font-bold sm:px-0 lg:text-center">
          {content.title}
        </h2>
        <div className="hidden h-auto w-full items-stretch gap-8 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between lg:gap-12">
          {content.testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.author}
              testimonial={testimonial}
            />
          ))}
        </div>
        <div className="w-full overflow-hidden sm:hidden">
          <Slider>
            {content.testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.author}
                testimonial={testimonial}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
