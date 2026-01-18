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
          className="animate__animated animate__fadeIn animate__fast flex w-full flex-col gap-6 border-l border-slate-300 pl-4"
        >
          <DetailedLink
            icon={<section.icon />}
            title={section.section}
            sectionTitle
          />
          <div className="flex w-full flex-col gap-4">
            {section.items.map((item) => (
              <DetailedLink
                key={item.title}
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
