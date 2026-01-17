import ArrowDownIcon from '../../content/icons/ArrowDownIcon';

export default function DropdownButton({
  selected,
  text,
  onSelect,
  id,
}: {
  selected: boolean;
  text: string;
  onSelect: (id: string) => void;
  id: string;
}) {
  return (
    <button
      className="group flex cursor-pointer items-center gap-x-2"
      onClick={() => onSelect(id as string)}
    >
      <p
        className={`font-medium text-slate-500 transition-colors duration-300 ease-in-out group-hover:text-blue-600 ${selected ? '!text-blue-600' : ''}`}
      >
        {text}
      </p>
      <div
        className={`transition-transform duration-150 ease-in-out ${selected ? 'rotate-180' : 'rotate-0'}`}
      >
        <ArrowDownIcon />
      </div>
    </button>
  );
}
