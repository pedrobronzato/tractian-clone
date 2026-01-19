'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import CheckIcon from '@/content/icons/CheckIcon';

export default function InteractiveChecklist({
  checklist,
}: {
  checklist: {
    title: string;
    description: string;
    img: string;
  }[];
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSelectedIndex((prev) =>
        prev < checklist.length - 1 ? prev + 1 : 0,
      );
    }, 5000);
    return () => clearTimeout(timeout);
  }, [selectedIndex, checklist.length]);

  return (
    <div className="flex w-full flex-col items-start gap-8 lg:min-h-[360px] lg:flex-row lg:justify-between">
      <div className="xs:h-auto flex h-[316px] w-full flex-col gap-4 border-l-2 border-slate-300 lg:gap-6">
        {checklist.map((item, index) => {
          const isSelected = selectedIndex === index;
          return (
            <button
              className={`group -ml-[2px] h-full w-full cursor-pointer border-l-2 bg-transparent px-4 transition-all duration-300 ${
                isSelected
                  ? 'border-brand-primary'
                  : 'border-slate-300 hover:border-slate-400'
              }`}
              key={item.title}
              onClick={() => setSelectedIndex(index)}
            >
              <div className="mb-2 flex w-full items-center gap-3 transition-all duration-500 lg:justify-between">
                <figure
                  className={`flex h-6 w-6 items-center justify-center transition-all duration-300 ease-in-out ${
                    isSelected
                      ? 'bg-brand-primary'
                      : 'bg-slate-400'
                  }`}
                >
                  <CheckIcon />
                </figure>
                <h3
                  className={`lg:text-body-lg lg:text-title-xs w-full flex-1 text-left text-[16px] font-medium transition-all duration-500 lg:font-semibold ${
                    isSelected
                      ? 'text-text-primary'
                      : 'text-slate-400'
                  }`}
                >
                  {item.title}
                </h3>
              </div>
              <div
                className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                  isSelected
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="min-h-0">
                  <p className="text-body-md pb-2 text-left text-slate-500">
                    {item.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <figure className="relative flex h-full w-full justify-center rounded-sm lg:h-[320px]">
        <Image
          key={selectedIndex}
          className="animate__animated animate__fadeIn animate__slow h-full w-full rounded-sm object-contain transition-all duration-300 ease-in-out md:object-cover lg:object-contain"
          src={checklist[selectedIndex].img}
          alt={checklist[selectedIndex].title}
          width={1071}
          height={749}
        />
      </figure>
    </div>
  );
}
