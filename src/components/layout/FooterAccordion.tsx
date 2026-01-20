'use client';
import { FooterSection } from '@/content/Footer';
import { ArrowDownIcon } from '@/content/icons';
import { useState } from 'react';

export default function FooterAccordion({
  sections,
  downloadApp,
}: {
  sections: FooterSection[];
  downloadApp: FooterSection;
}) {
  const [openSections, setOpenSections] = useState<
    string[]
  >([]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title)
        ? prev.filter((section) => section !== title)
        : [...prev, title],
    );
  };

  const allSections = [...sections, downloadApp];

  const renderSection = (section: FooterSection) => {
    const isOpen = openSections.includes(section.title);

    return (
      <article
        className="sm:col-span-1 sm:w-full"
        key={section.title}
      >
        <button
          onClick={() => toggleSection(section.title)}
          className="mb-2 flex w-full items-center justify-between border-b border-blue-900 pb-4 sm:hidden"
        >
          <h6 className="text-body-sm font-bold text-ellipsis whitespace-nowrap text-slate-50 uppercase">
            {section.title}
          </h6>
          <ArrowDownIcon
            className={`h-3 w-3 text-blue-50 transition-all ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>

        <h6 className="text-body-sm mb-2 hidden font-bold text-ellipsis whitespace-nowrap text-slate-50 uppercase sm:block">
          {section.title}
        </h6>

        <ul
          className={`animate__animated animate__fadeIn gap-2 sm:grid sm:grid-cols-1 ${isOpen ? 'block' : 'hidden'}`}
        >
          {section.links.map((link) => (
            <li className="py-2 sm:py-0" key={link.label}>
              <a href={link.href} target="_blank">
                <p className="text-body-sm text-slate-50 transition ease-in-out hover:text-blue-300 hover:brightness-125">
                  {link.label}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </article>
    );
  };

  return (
    <section className="mb-12 grid grid-cols-1 gap-y-3 sm:hidden">
      {allSections.map(renderSection)}
    </section>
  );
}
