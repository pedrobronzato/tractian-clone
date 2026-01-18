import ArrowDownIcon from '@/content/icons/ArrowDownIcon';

export default function MobileAccordion({
  icon,
  handleSelect,
  label,
  open,
  content,
  id,
  contentClassName,
  labelClassName,
  containerClassName,
}: {
  icon?: React.ReactNode;
  handleSelect: (id: string) => void;
  label: string;
  open: boolean;
  content: React.ReactNode;
  id: string;
  contentClassName?: string;
  labelClassName?: string;
  containerClassName?: string;
}) {
  return (
    <div className="w-full">
      <button
        onClick={() => handleSelect(id)}
        aria-label="Open Navbar Button"
        className="flex w-full items-center justify-between px-4 py-3 hover:brightness-125"
      >
        <div className="flex items-center gap-x-4">
          {icon && icon}
          <p
            className={
              labelClassName
                ? labelClassName
                : `text-body-sm ${open ? 'text-slate-400' : 'text-slate-500'}`
            }
          >
            {label}
          </p>
        </div>
        <div
          className={`transition-transform duration-150 ease-in-out ${open ? 'rotate-180' : 'rotate-0'}`}
        >
          <ArrowDownIcon className="h-4 w-4" />
        </div>
      </button>
      {open && (
        <div
          className={
            contentClassName
              ? contentClassName
              : 'animate__animated animate__fadeIn relative flex flex-col gap-8 bg-slate-100 px-4 py-4 pb-8'
          }
        >
          {content}
        </div>
      )}
    </div>
  );
}
