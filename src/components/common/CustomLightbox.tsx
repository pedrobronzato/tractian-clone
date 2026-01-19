import Lightbox from 'yet-another-react-lightbox';
import { Zoom } from 'yet-another-react-lightbox/plugins';

export default function CustomLightbox({
  open,
  close,
  slides,
}: {
  open: boolean;
  close: () => void;
  slides: Array<{ src: string; alt: string }>;
}) {
  return (
    <Lightbox
      open={open}
      close={close}
      slides={slides}
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
        container: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
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
  );
}
