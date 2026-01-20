'use client';

import {
  Dialog,
  DialogPanel,
  Input,
} from '@headlessui/react';
import { useLocale, useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import { ToastContainer, toast } from 'react-toastify';
import 'react-international-phone/style.css';
import 'react-toastify/dist/ReactToastify.css';
import CloseIcon from '@/content/icons/CloseIcon';
import FormSelect from '@/components/common/FormSelect';
import {
  getIndustrySectors,
  getJobTitles,
  getSolutions,
  getSortedCountries,
} from '@/content/DemoForm';
import {
  validateForm,
  validateField,
  type FormErrors,
  type FormData,
} from '@/utils/validateForm';

interface DemoFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  jobTitle: '',
  industrySector: '',
  solution: '',
};

function ErrorBadge({
  className = '',
}: {
  className?: string;
}) {
  return (
    <div
      className={`absolute top-1/2 flex -translate-y-1/2 items-center justify-center ${className}`}
    >
      <span className="text-tag relative flex size-5 items-center justify-center rounded-full bg-red-500 font-bold text-white">
        !
      </span>
    </div>
  );
}

export default function DemoForm({
  isOpen,
  onClose,
}: DemoFormProps) {
  const locale = useLocale();
  const t = useTranslations();
  const [formData, setFormData] =
    useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const sortedCountries = useMemo(
    () => getSortedCountries(locale),
    [locale],
  );
  const jobTitles = useMemo(() => getJobTitles(t), [t]);
  const industrySectors = useMemo(
    () => getIndustrySectors(t),
    [t],
  );
  const solutions = useMemo(() => getSolutions(t), [t]);

  const resetForm = () => {
    setHasSubmitted(false);
    setErrors({});
    setFormData(initialFormData);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setHasSubmitted(true);
    const { isValid, errors: validationErrors } =
      validateForm(formData, t);
    setErrors(validationErrors);

    if (isValid) {
      console.log('Formulário enviado:', formData);
      toast.success(t('demoForm.successMessage'));
    }
  };

  const handleFieldChange = (
    fieldName: keyof FormData,
    value: string,
  ) => {
    setFormData((prev) =>
      prev[fieldName] === value
        ? prev
        : { ...prev, [fieldName]: value },
    );

    if (!hasSubmitted) return;

    const fieldError = validateField(fieldName, value, t);
    setErrors((prev) => {
      const currentError = prev[fieldName];
      if (fieldError === currentError) return prev;
      if (!fieldError && !currentError) return prev;
      const newErrors = { ...prev };
      if (fieldError) {
        newErrors[fieldName] = fieldError;
      } else {
        delete newErrors[fieldName];
      }
      return newErrors;
    });
  };

  const inputClass =
    'rounded-sm p-3 text-body-md outline ring-0 w-full placeholder:text-slate-500 text-slate-700 bg-white outline-1 outline-slate-400 hover:outline-slate-700 focus:outline-2 focus:outline-blue-600 disabled:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70';
  const errorInputClass =
    'rounded-sm p-3 text-body-md outline ring-0 w-full placeholder:text-slate-500 text-slate-700 bg-white outline-1 outline-red-500 hover:outline-red-600 focus:outline-2 focus:outline-red-600 disabled:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70';
  const errorMessageClass =
    'mt-2 text-body-sm text-red-600';

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      className="relative z-50"
    >
      <div
        className="fixed inset-0 bg-slate-900/70"
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="relative w-full max-w-[768px] bg-slate-50 px-6 py-8 shadow-xl md:px-16 lg:py-12">
          <div className="absolute top-3 right-3 z-20 size-6">
            <button
              onClick={handleClose}
              className="duration-default rounded-sm text-slate-500 hover:text-blue-600"
              aria-label={t('demoForm.close')}
            >
              <CloseIcon className="h-3 w-3" />
            </button>
          </div>
          <article className="mb-6 flex flex-col gap-y-2 px-5 text-center">
            <h2 className="text-title-md font-inter-tight md:text-title-xs font-semibold">
              {t('demoForm.title')}
            </h2>
            <p className="text-body-md text-slate-500">
              {t('demoForm.description')}
            </p>
          </article>
          <form
            onSubmit={handleSubmit}
            className="flex min-h-[360px] w-full flex-col gap-y-3"
          >
            <div>
              <div className="relative">
                <Input
                  type="text"
                  placeholder={t(
                    'demoForm.namePlaceholder',
                  )}
                  value={formData.name}
                  onChange={(e) =>
                    handleFieldChange(
                      'name',
                      e.target.value,
                    )
                  }
                  className={
                    errors.name
                      ? errorInputClass
                      : inputClass
                  }
                />
                {errors.name && (
                  <ErrorBadge className="right-4" />
                )}
              </div>
              {errors.name && (
                <p className={errorMessageClass}>
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <div className="relative">
                <Input
                  type="email"
                  placeholder={t(
                    'demoForm.emailPlaceholder',
                  )}
                  value={formData.email}
                  onChange={(e) =>
                    handleFieldChange(
                      'email',
                      e.target.value,
                    )
                  }
                  className={
                    errors.email
                      ? errorInputClass
                      : inputClass
                  }
                />
                {errors.email && (
                  <ErrorBadge className="right-4" />
                )}
              </div>
              {errors.email && (
                <p className={errorMessageClass}>
                  {errors.email}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-y-3 sm:flex-row sm:gap-3">
              <div className="phone-input-wrapper flex-1">
                <div className="relative">
                  <PhoneInput
                    countries={sortedCountries}
                    countrySelectorStyleProps={{
                      className: 'custom-country-selector',
                      buttonClassName: errors.phone
                        ? 'custom-country-selector-button-error'
                        : 'custom-country-selector-button',
                      dropdownStyleProps: {
                        listItemClassName:
                          'custom-country-selector-list-item',
                        listItemFlagClassName:
                          'custom-country-selector-list-item-flag',
                        listItemCountryNameClassName:
                          'custom-country-selector-list-item-country-name',
                      },
                    }}
                    defaultCountry="br"
                    value={formData.phone}
                    onChange={(phone) =>
                      handleFieldChange('phone', phone)
                    }
                    inputClassName={
                      errors.phone
                        ? 'custom-phone-input-error'
                        : 'custom-phone-input'
                    }
                  />
                  {errors.phone && (
                    <ErrorBadge className="right-4" />
                  )}
                </div>
                {errors.phone && (
                  <p className={errorMessageClass}>
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="flex-1">
                <div className="relative">
                  <FormSelect
                    value={formData.jobTitle}
                    onChange={(value) =>
                      handleFieldChange('jobTitle', value)
                    }
                    options={jobTitles}
                    placeholder={t(
                      'demoForm.jobTitlePlaceholder',
                    )}
                    getLabel={(option) => option.label}
                    hasError={!!errors.jobTitle}
                  />
                  {errors.jobTitle && (
                    <ErrorBadge className="pointer-events-none right-10" />
                  )}
                </div>
                {errors.jobTitle && (
                  <p className={errorMessageClass}>
                    {errors.jobTitle}
                  </p>
                )}
              </div>
            </div>

            <div>
              <div className="relative">
                <FormSelect
                  value={formData.industrySector}
                  onChange={(value) =>
                    handleFieldChange(
                      'industrySector',
                      value,
                    )
                  }
                  options={industrySectors}
                  placeholder={t(
                    'demoForm.industrySectorPlaceholder',
                  )}
                  getLabel={(option) => option.label}
                  hasError={!!errors.industrySector}
                />
                {errors.industrySector && (
                  <ErrorBadge className="pointer-events-none right-10" />
                )}
              </div>
              {errors.industrySector && (
                <p className={errorMessageClass}>
                  {errors.industrySector}
                </p>
              )}
            </div>

            <div>
              <div className="relative">
                <FormSelect
                  value={formData.solution}
                  onChange={(value) =>
                    handleFieldChange('solution', value)
                  }
                  options={solutions}
                  placeholder={t(
                    'demoForm.solutionPlaceholder',
                  )}
                  getLabel={(option) => option.label}
                  hasError={!!errors.solution}
                />
                {errors.solution && (
                  <ErrorBadge className="pointer-events-none right-10" />
                )}
              </div>
              {errors.solution && (
                <p className={errorMessageClass}>
                  {errors.solution}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="max-h-[48px] w-full max-w-fit min-w-full rounded-sm bg-green-600 px-6 py-3 text-center text-[18px] leading-[22px] font-medium text-white transition duration-150 ease-in-out hover:bg-green-900 active:bg-green-950 disabled:cursor-not-allowed disabled:bg-slate-300 lg:leading-6"
            >
              {t('demoForm.submitButton')}
            </button>
          </form>
        </DialogPanel>
      </div>
      <ToastContainer
        theme="colored"
        position="top-center"
      />
    </Dialog>
  );
}
