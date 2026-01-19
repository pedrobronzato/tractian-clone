'use client';
import ArrowDownIcon from '@/content/icons/ArrowDownIcon';
import { useState } from 'react';
interface FaqQuestionProps {
  title: string;
  awnser: string;
}
export default function FaqQuestion({
  title,
  awnser,
}: FaqQuestionProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button
      className="group w-full rounded-sm border border-slate-300 bg-transparent p-4 transition hover:border-blue-600"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="mb-0 flex w-full items-center justify-between gap-3 transition-all">
        <h3
          className={`${isOpen ? 'text-blue-600' : 'text-slate-700 group-hover:text-blue-600'} lg:font-semiboldtext-body-md text-body-md text-left font-medium transition-all group-hover:brightness-110`}
        >
          {title}
        </h3>
        <ArrowDownIcon
          className={`${isOpen ? 'rotate-180 text-blue-600' : 'rotate-0 text-slate-500'}`}
        />
      </div>
      {isOpen && (
        <p
          className="text-body-md overflow-hidden text-left text-slate-500 ease-in-out"
          dangerouslySetInnerHTML={{ __html: awnser }}
        />
      )}
    </button>
  );
}
