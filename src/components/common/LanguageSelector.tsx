import { GlobeIcon } from '@/content/icons';
import DropdownMenuButton from './DropdownMenuButton';
import {
  useCurrentLocaleLabel,
  useLocaleOptions,
} from '@/hooks/useLocale';
import MobileAccordion from './MobileAccordion';
import { useState } from 'react';

const LocaleSelector = () => {
  const localeOptions = useLocaleOptions();
  const { id: currentLocaleId } = useCurrentLocaleLabel();
  return (
    <div>
      {localeOptions.map((option) => (
        <button
          key={option.id}
          onClick={option.onClick}
          className={`${currentLocaleId === option.id && 'bg-slate-200'} text-body-md lg:text-body-sm flex w-full items-center gap-x-4 rounded-sm px-2 py-2 hover:bg-slate-100`}
        >
          <option.icon />
          <p className="text-body-sm text-slate-500">
            {option.label}
          </p>
        </button>
      ))}
    </div>
  );
};

export default function LanguageSelector() {
  const localeOptions = useLocaleOptions();
  const { label, id } = useCurrentLocaleLabel();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hidden lg:block">
        <DropdownMenuButton
          icon={<GlobeIcon />}
          options={localeOptions}
          currentSelected={id}
        />
      </div>
      <div className="block lg:hidden">
        <div className="relative inline-flex w-full flex-col py-4 lg:w-auto lg:max-w-none lg:flex-row lg:px-0 lg:py-2">
          <MobileAccordion
            icon={<GlobeIcon />}
            handleSelect={() => setOpen(!open)}
            label={label}
            labelClassName={`font-medium text-slate-500 transition-all duration-150 text-body-sm`}
            open={open}
            contentClassName="animate__animated animate__fadeIn mt-2 w-full px-4 lg:hidden"
            content={<LocaleSelector />}
            id={id}
          />
        </div>
      </div>
    </>
  );
}
