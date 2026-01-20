export type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  jobTitle?: string;
  industrySector?: string;
  solution?: string;
};

export type FormData = {
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  industrySector: string;
  solution: string;
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  const digitsOnly = phone.replace(/\D/g, '');
  return digitsOnly.length >= 10;
};

export const validateField = (
  fieldName: keyof FormData,
  value: string,
  t: (key: string) => string,
): string | undefined => {
  switch (fieldName) {
    case 'name':
      if (!value.trim()) {
        return t('demoForm.errors.fieldRequired');
      } else if (value.trim().length < 8) {
        return t('demoForm.errors.nameMinLength');
      }
      break;

    case 'email':
      if (!value.trim()) {
        return t('demoForm.errors.fieldRequired');
      } else if (!isValidEmail(value)) {
        return t('demoForm.errors.emailInvalid');
      }
      break;

    case 'phone':
      if (!value.trim()) {
        return t('demoForm.errors.fieldRequired');
      } else if (!isValidPhone(value)) {
        return t('demoForm.errors.phoneInvalid');
      }
      break;

    case 'jobTitle':
    case 'industrySector':
    case 'solution':
      if (!value) {
        return t('demoForm.errors.fieldRequired');
      }
      break;
  }

  return undefined;
};

export const validateForm = (
  formData: FormData,
  t: (key: string) => string,
): { isValid: boolean; errors: FormErrors } => {
  const errors: FormErrors = {};

  const nameError = validateField('name', formData.name, t);
  if (nameError) errors.name = nameError;

  const emailError = validateField(
    'email',
    formData.email,
    t,
  );
  if (emailError) errors.email = emailError;

  const phoneError = validateField(
    'phone',
    formData.phone,
    t,
  );
  if (phoneError) errors.phone = phoneError;

  const jobTitleError = validateField(
    'jobTitle',
    formData.jobTitle,
    t,
  );
  if (jobTitleError) errors.jobTitle = jobTitleError;

  const industrySectorError = validateField(
    'industrySector',
    formData.industrySector,
    t,
  );
  if (industrySectorError)
    errors.industrySector = industrySectorError;

  const solutionError = validateField(
    'solution',
    formData.solution,
    t,
  );
  if (solutionError) errors.solution = solutionError;

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};
