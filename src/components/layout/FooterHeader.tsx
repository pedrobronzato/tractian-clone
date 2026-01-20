import { ArrowRightIcon } from '@/content/icons';
import {
  FooterBadge,
  FooterInformation,
} from '@/content/Footer';

export default function FooterHeader({
  badges,
  information,
}: {
  badges: FooterBadge[];
  information: FooterInformation;
}) {
  return (
    <section className="mb-8 flex w-full flex-col gap-x-16 gap-y-8 lg:mb-12 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex w-full flex-wrap items-center justify-evenly gap-4 lg:w-auto lg:justify-start lg:gap-x-6 xl:flex-nowrap">
        {badges.map((badge) => (
          <figure
            key={badge.alt}
            className="flex items-center justify-center"
            style={{ maxWidth: badge.maxWidth }}
          >
            <badge.component />
          </figure>
        ))}
      </div>
      <a
        href="#"
        target="_self"
        className="mb-4 hidden items-center gap-x-2 self-end text-slate-50 transition hover:text-blue-300 lg:flex"
      >
        <p className="text-body-sm">
          {information.backToTop}
        </p>
        <ArrowRightIcon className="h-4 w-4 rotate-270 transform" />
      </a>
    </section>
  );
}
