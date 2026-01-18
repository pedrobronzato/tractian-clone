'use client';
import DetailedLink from '../common/DetailedLink';
import { SolutionsSectionMenu } from '@/content/HeaderMenu';

export default function TitleSectionMenu({
  content,
}: {
  content: SolutionsSectionMenu[];
}) {
  return (
    <>
      {content.map((section) => (
        <div
          key={section.section}
          className="lg:animate__animated lg:animate__fadeIn lg:animate__fast flex w-full flex-col gap-4 lg:gap-6 lg:border-l lg:border-slate-300 lg:pl-4"
        >
          <DetailedLink
            icon={<section.icon />}
            href={section.href}
            title={section.section}
            sectionTitle
          />
          <div className="ml-4 flex w-full flex-col gap-3 lg:ml-0 lg:gap-4">
            {section.items.map((item) => (
              <DetailedLink
                key={item.title}
                href={item.href}
                icon={<item.icon />}
                title={item.title}
                subtitle={item.description}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
