import {
  Field,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';
import ArrowDownIcon from '@/content/icons/ArrowDownIcon';

export interface FormSelectOption {
  id: string;
  label: string;
}

interface FormSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: FormSelectOption[];
  placeholder: string;
  getLabel?: (option: FormSelectOption) => string;
  className?: string;
  hasError?: boolean;
}

export default function FormSelect({
  value,
  onChange,
  options,
  placeholder,
  getLabel,
  className = '',
  hasError = false,
}: FormSelectProps) {
  const baseClass =
    'text-left min-h-[48px] min-w-full !pr-8 w-full rounded-sm outline bg-white p-3 text-body-md disabled:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70 placeholder:text-slate-500 text-slate-500';
  const normalClass =
    'outline-1 outline-slate-400 hover:outline-slate-700 focus:outline-2 focus:outline-blue-600';
  const errorClass =
    'outline-1 outline-red-500 hover:outline-red-600 focus:outline-2 focus:outline-red-600';

  const selectClass = `${baseClass} ${hasError ? errorClass : normalClass} ${className}`;
  const renderLabel =
    getLabel ??
    ((option: FormSelectOption) => option.label);
  const selectedOption = options.find(
    (option) => option.id === value,
  );

  return (
    <Field>
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <ListboxButton className={selectClass}>
            <span
              className={
                selectedOption
                  ? 'text-slate-700'
                  : 'text-slate-500'
              }
            >
              {selectedOption
                ? renderLabel(selectedOption)
                : placeholder}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ArrowDownIcon className="h-4 w-4 text-slate-400" />
            </span>
          </ListboxButton>
          <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
            <ListboxOption
              key="placeholder"
              value=""
              disabled
              className="text-body-sm pointer-events-none cursor-default pt-3 pr-8 pb-2 pl-3 text-slate-400"
            >
              {placeholder}
            </ListboxOption>
            {options.map((option) => (
              <ListboxOption
                key={option.id}
                value={option.id}
                className={`${option.id === value ? 'bg-slate-100' : ''} relative cursor-pointer px-4 py-2 text-gray-700 transition-colors select-none hover:bg-blue-50 data-[focus]:bg-blue-50`}
              >
                <p className="text-body-md text-slate-500">
                  {renderLabel(option)}
                </p>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </Field>
  );
}
