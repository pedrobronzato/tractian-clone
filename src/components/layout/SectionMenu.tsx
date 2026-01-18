import { SectionMenuContent } from '@/content/HeaderMenu';
import DetailedLink from '../common/DetailedLink';
import Image from 'next/image';
import useMountHref from '@/hooks/mountHref';

export default function SectionMenu({
  content,
}: {
  content: SectionMenuContent[];
}) {
  const mountHref = useMountHref();

  const ImageContainer = ({
    imgUrl,
    title,
    href,
    customHref,
  }: {
    imgUrl: string | undefined;
    title: string;
    href: string;
    customHref?: boolean;
  }) => {
    return (
      <a
        href={mountHref(href, customHref)}
        className="group ml-4 flex flex-row items-center gap-4 lg:ml-0 lg:w-[186px] lg:flex-col lg:items-start lg:gap-3"
      >
        <figure className="h-[90px] w-[160px] rounded-sm lg:h-[110px] lg:w-[186px]">
          <Image
            className="h-[90px] w-[160px] rounded-sm object-cover transition-all duration-200 group-hover:brightness-95 lg:h-[110px] lg:w-[186px]"
            src={imgUrl || ''}
            alt={title}
            width={160}
            height={90}
          />
        </figure>
        <p className="text-body-md md:text-body-md font-medium text-slate-500 lg:text-slate-700">
          {title}
        </p>
      </a>
    );
  };

  return (
    <div className="flex w-full flex-col gap-8 lg:flex-row lg:justify-between lg:gap-4">
      {content.map((section, index) => (
        <div
          key={section.section || index}
          className={`animate__animated animate__fadeIn animate__fast flex w-full flex-col gap-4 lg:gap-6 lg:border-l lg:border-slate-300 lg:pl-4 ${section.items.length <= 4 && section.section !== null ? 'max-w-full lg:max-w-[25%]' : ''}`}
        >
          {section.section && (
            <p
              className={`text-body-sm text-slate-500 uppercase lg:normal-case ${section.isImg ? 'lg:text-body-md' : ''}`}
            >
              {section.section}
            </p>
          )}
          <div
            className={`w-full gap-4 ${section.items.length <= 4 ? 'flex flex-col' : 'flex flex-col lg:grid lg:grid-cols-3'} ${section.isImg ? 'lg:flex-row' : ''}`}
          >
            {section.items.map((item) =>
              section.isImg ? (
                <ImageContainer
                  key={item.title}
                  imgUrl={item.imgUrl}
                  customHref={item.customHref}
                  title={item.title}
                  href={item.href}
                />
              ) : (
                <DetailedLink
                  key={item.title}
                  href={item.href}
                  customHref={item.customHref}
                  title={item.title}
                  icon={item.icon ? <item.icon /> : null}
                />
              ),
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
