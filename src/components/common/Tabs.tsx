'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Zoom } from 'yet-another-react-lightbox/plugins';

export default function Tabs({
  tabs,
}: {
  tabs: Array<{
    title: string;
    contentTitle: string;
    contentDescription: string;
    items?: string[];
    img: string;
  }>;
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setActiveTab((prev) =>
        prev < tabs.length - 1 ? prev + 1 : 0,
      );
    }, 5000);
    return () => clearTimeout(timeout);
  }, [activeTab, tabs.length]);

  return (
    <div className="mx-auto flex w-full flex-col gap-12">
      <div className="relative mx-auto mt-2 flex w-full flex-col py-1 sm:flex-row sm:bg-transparent sm:py-0 lg:mt-0">
        <div className="relative mx-auto mt-2 flex w-full cursor-pointer flex-col py-1 sm:flex-row sm:bg-transparent sm:py-0 lg:mt-0">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => handleTabClick(index)}
              className={`ease relative col-span-1 flex w-full items-center justify-center border-b border-transparent bg-[#F4F4F9] px-1 pt-1 pb-[3px] transition-all duration-100 duration-300 sm:bg-transparent sm:bg-white sm:px-0 sm:py-0 sm:duration-300 lg:hover:bg-transparent ${activeTab === index ? 'sm:border-b-blue-600' : 'sm:border-b-slate-300'}`}
            >
              <button
                className={`text-body-md sm:text-tag md:text-body-sm lg:text-body-md w-full cursor-pointer rounded-sm px-6 py-1.5 text-slate-500 transition-all duration-100 hover:text-slate-600 sm:w-auto sm:items-start sm:p-4 sm:duration-300 lg:rounded-none lg:px-2 xl:px-4 2xl:px-6 ${activeTab === index ? 'font-semibold text-slate-700' : ''}`}
              >
                {tab.title}
              </button>
            </div>
          ))}
        </div>
      </div>
      <article
        key={activeTab}
        className="flex w-full justify-between gap-8 lg:gap-12"
      >
        <div className="animate__animated animate__fadeIn flex w-full flex-col items-center justify-between gap-8 transition duration-500 ease-in-out lg:min-h-[437px] lg:flex-row lg:gap-16">
          <div className="flex w-full flex-col gap-8 lg:max-w-[382px] lg:gap-12">
            <article className="flex flex-col items-center gap-4 lg:max-w-[382px] lg:items-start">
              <h2 className="text-title-xs font-bold">
                {tabs[activeTab].contentTitle}
              </h2>
              <p className="text-body-md text-slate-500">
                {tabs[activeTab].contentDescription}
              </p>
              <ul className="ml-4 flex w-full list-disc flex-col gap-1">
                {tabs[activeTab].items?.map(
                  (item, index) => (
                    <li
                      key={index}
                      className="text-body-md text-slate-500"
                    >
                      {item}
                    </li>
                  ),
                )}
              </ul>
            </article>
          </div>
          <figure
            className="w-full cursor-pointer rounded-sm"
            onClick={() => setLightboxOpen(true)}
          >
            <div className="relative transition-opacity hover:opacity-90">
              <Image
                src={tabs[activeTab].img}
                alt={tabs[activeTab].title}
                width={1920}
                height={1080}
              />
            </div>
          </figure>
        </div>
      </article>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={[
          {
            src: tabs[activeTab].img,
            alt: tabs[activeTab].title,
          },
        ]}
        plugins={[Zoom]}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 2,
          keyboardMoveDistance: 50,
          wheelZoomDistanceFactor: 100,
          pinchZoomDistanceFactor: 100,
          scrollToZoom: true,
        }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
          iconClose: () => (
            <svg
              className="mr-1 h-6 w-6 cursor-pointer text-slate-500 transition hover:text-slate-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ),
          iconZoomIn: () => (
            <svg
              className="mr-1 h-6 w-6 cursor-pointer text-slate-500 transition hover:text-slate-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
              />
            </svg>
          ),
          iconZoomOut: () => (
            <svg
              className="mr-1 h-6 w-6 cursor-pointer text-slate-500 transition hover:text-slate-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6"
              />
            </svg>
          ),
        }}
        styles={{
          slide: {
            backgroundColor: 'rgb(248, 250, 252)',
          },
          root: {
            backdropFilter: 'blur(2px)',
          },
        }}
        carousel={{
          padding: '40px',
          finite: true,
        }}
        controller={{
          closeOnBackdropClick: true,
        }}
        animation={{
          swipe: 0,
        }}
        on={{
          view: () => {
            document.body.style.overflow = 'hidden';
          },
          entering: () => {
            document.body.style.overflow = 'hidden';
          },
          exiting: () => {
            document.body.style.overflow = '';
          },
        }}
      />
    </div>
  );
}
