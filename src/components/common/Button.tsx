import { ReactNode } from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'outline' | 'filled';
  icon?: ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
}

export default function Button({
  label,
  onClick,
  variant = 'filled',
  icon,
  disabled = false,
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = `${fullWidth ? 'w-full' : 'max-w-fit'} cursor-pointer rounded-sm w-full transition ease-in-out duration-150 disabled:cursor-not-allowed text-center text-body-md px-4 py-2`;

  const variantStyles = {
    outline:
      'text-blue-600 outline outline-1 outline-blue-600 hover:outline-2 active:outline-4 disabled:outline-slate-300 disabled:text-slate-300',
    filled:
      'bg-blue-600 text-white font-medium hover:bg-blue-900 active:bg-blue-950 disabled:bg-slate-300 relative z-30 mx-auto flex items-center justify-center gap-2 md:mx-0',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {label}
      {icon && icon}
    </button>
  );
}
