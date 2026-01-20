'use client';

import {
  useState,
  useRef,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import ArrowDownIcon from '../../content/icons/ArrowDownIcon';

export interface MenuOption {
  id: string;
  label: string;
  onClick: () => void;
}

interface DropdownMenuButtonProps {
  icon: ReactNode;
  options: MenuOption[];
  currentSelected: string;
}

export default function DropdownMenuButton({
  icon,
  options,
  currentSelected,
}: DropdownMenuButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeDropdown();
      }
    };

    document.addEventListener(
      'mousedown',
      handleClickOutside,
    );
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside,
      );
      document.removeEventListener(
        'keydown',
        handleEscapeKey,
      );
    };
  }, [isOpen, closeDropdown]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option: MenuOption) => {
    option.onClick();
    closeDropdown();
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        className="group flex items-center gap-2 rounded-md p-2 transition-colors duration-150 hover:bg-gray-100"
        onClick={handleToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div
          className={`transition-all duration-150 ${
            isOpen
              ? 'text-blue-600'
              : 'text-slate-500 group-hover:text-blue-600'
          }`}
        >
          {icon}
        </div>
        <div
          className={`transition-transform duration-150 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          <ArrowDownIcon />
        </div>
      </button>

      {isOpen && (
        <div className="duration-default text-body-sm xl:text-body-md absolute top-10 left-0 z-[1000] flex w-full flex-col items-center rounded-sm border border-slate-300 bg-slate-50 p-2 text-slate-500 transition-opacity ease-in-out lg:top-8 lg:left-[.75rem] lg:w-auto lg:border-2">
          {options.map((option) => {
            const isSelected =
              option.id === currentSelected;
            return (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option)}
                className={`text-body-md lg:text-body-sm flex w-full items-center gap-x-2 rounded-sm px-3 py-2 lg:py-2 ${
                  isSelected
                    ? 'bg-slate-200 hover:bg-slate-200'
                    : 'hover:bg-slate-100'
                }`}
              >
                <p className="text-body-sm whitespace-nowrap">
                  {option.label}
                </p>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
