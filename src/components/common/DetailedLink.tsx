import useMountHref from '@/hooks/useMountHref';
import ArrowRightIcon from '@/content/icons/ArrowRight';
export default function DetailedLink({
  icon,
  title,
  subtitle,
  sectionTitle,
  href,
  customHref,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  sectionTitle?: boolean;
  href: string;
  customHref?: boolean;
}) {
  const mountHref = useMountHref();
  return (
    <a
      href={mountHref(href, customHref)}
      target="_blank"
      className="group flex w-full cursor-pointer items-center gap-2"
    >
      <figure className="flex h-8 w-8 items-center justify-center rounded-sm border border-neutral-200 bg-white lg:bg-transparent">
        {icon}
      </figure>
      <article className="flex w-full flex-1 flex-col">
        <div className="flex items-center gap-2">
          <p
            className={`text-body-sm text-slate-500 transition-all duration-150 group-hover:text-blue-600 lg:font-semibold lg:text-slate-700 ${sectionTitle ? 'lg:text-body-lg' : ''}`}
          >
            {title}
          </p>
          <ArrowRightIcon />
        </div>
        <p className="text-tag text-slate-500">
          {subtitle || ''}
        </p>
      </article>
    </a>
  );
}
