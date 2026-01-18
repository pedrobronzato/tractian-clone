import { SectionMenuContent } from '@/content/HeaderMenu';
import DetailedLink from '../common/DetailedLink';
import Image from 'next/image';

export default function SectionMenu({
  content,
}: {
  content: SectionMenuContent[];
}) {
  const ImageContainer = ({
    imgUrl,
    title,
  }: {
    imgUrl: string | undefined;
    title: string;
  }) => {
    return (
      <a className="group ml-4 flex flex-row items-center gap-4 lg:ml-0 lg:w-[186px] lg:flex-col lg:items-start lg:gap-3">
        <figure className="h-[90px] w-[160px] rounded-sm lg:h-[110px] lg:w-[186px]">
          <Image
            className="h-[90px] w-[160px] rounded-sm object-cover transition-all duration-200 group-hover:brightness-95 lg:h-[110px] lg:w-[186px]"
            src={imgUrl || ''}
            alt={title}
            width={160}
            height={90}
          />
        </figure>
        <p className="text-body-md font-medium text-slate-500 lg:text-slate-700">
          {title}
        </p>
      </a>
    );
  };

  return (
    <div className="flex w-full gap-4 lg:justify-between">
      {content.map((section, index) => (
        <div
          key={section.section || index}
          className={`animate__animated animate__fadeIn animate__fast flex w-full flex-col gap-6 border-l border-slate-300 pl-4 ${section.items.length <= 4 && section.section !== null ? 'max-w-[25%]' : ''}`}
        >
          {section.section && (
            <p
              className={`text-body-sm text-slate-500 ${section.isImg ? 'lg:text-body-md' : ''}`}
            >
              {section.section}
            </p>
          )}
          <div
            className={`w-full gap-4 ${section.items.length <= 4 ? 'flex flex-col' : 'grid grid-cols-3'} ${section.isImg ? 'lg:flex-row' : ''}`}
          >
            {section.items.map((item) =>
              section.isImg ? (
                <ImageContainer
                  key={item.title}
                  imgUrl={item.imgUrl}
                  title={item.title}
                />
              ) : (
                <DetailedLink
                  key={item.title}
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
