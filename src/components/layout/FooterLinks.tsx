import { FooterSection } from '@/content/Footer';
import FooterAccordion from './FooterAccordion';

export default function FooterLinks({
  sections,
  downloadApp,
}: {
  sections: FooterSection[];
  downloadApp: FooterSection;
}) {
  return (
    <>
      <section className="mb-12 hidden justify-between gap-y-3 sm:grid sm:grid-cols-2 md:gap-x-6 md:gap-y-6 lg:flex lg:grid-cols-5 lg:justify-between lg:gap-x-8 lg:gap-y-12">
        {sections.map((section, index) => {
          const isLastSection =
            index === sections.length - 1;
          return (
            <article
              className={
                isLastSection
                  ? 'flex grid-cols-1 flex-col gap-4 sm:col-span-2 sm:grid sm:w-full sm:grid-cols-2 lg:col-span-1 lg:flex lg:flex-col lg:gap-6'
                  : 'sm:col-span-1 sm:w-full'
              }
              key={section.title}
            >
              <div>
                <p className="text-body-md mb-2 hidden font-semibold text-slate-50 uppercase sm:block">
                  {section.title}
                </p>
                <ul className="hidden gap-2 sm:grid sm:grid-cols-1">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        className="text-body-sm text-slate-50 transition hover:text-blue-300"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {isLastSection && (
                <div>
                  <p className="text-body-md mb-2 hidden font-semibold text-slate-50 uppercase sm:block">
                    {downloadApp.title}
                  </p>
                  <ul className="hidden gap-2 sm:grid sm:grid-cols-1">
                    {downloadApp.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          target="_blank"
                          className="text-body-sm text-slate-50 transition hover:text-blue-300"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          );
        })}
      </section>
      <FooterAccordion
        sections={sections}
        downloadApp={downloadApp}
      />
    </>
  );
}
