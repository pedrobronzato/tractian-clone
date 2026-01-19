import QuoteIcon from '@/content/icons/QuoteIcon';
import Image from 'next/image';

interface TestimonialCardProps {
  testimonial: {
    quote: string;
    author: string;
    authorJob: string;
    authorCompany: string;
    img: string;
    icon?: React.ComponentType;
  };
}
export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <div className="flex h-auto w-full cursor-grab flex-col gap-4 sm:cursor-default">
      <div className="flex w-full items-center gap-4">
        <QuoteIcon />
        {testimonial.icon && <testimonial.icon />}
      </div>
      <p className="text-quote h-full text-slate-500">
        {testimonial.quote}
      </p>
      <div className="flex items-center gap-3 lg:justify-between">
        <figure className="flex h-12 w-12 items-center justify-center rounded-full lg:h-14 lg:w-14">
          <Image
            className="h-full w-full rounded-full object-cover"
            src={testimonial.img}
            alt={testimonial.author}
            width={128}
            height={120}
          />
        </figure>
        <article className="flex w-full flex-1 flex-col">
          <p className="text-body-sm font-bold">
            {testimonial.author}
          </p>
          <p className="text-body-sm">
            {testimonial.authorJob}
          </p>
          <p className="text-body-sm font-bold">
            {testimonial.authorCompany}
          </p>
        </article>
      </div>
    </div>
  );
}
