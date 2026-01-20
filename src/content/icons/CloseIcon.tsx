export default function CloseIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className ? className : 'h-4 w-4 text-slate-500'}`}
    >
      <path
        d="M1 1L17 17M1 1L17 17"
        stroke="currentColor"
        strokeWidth="1.6"
      ></path>
      <path
        d="M1 17L17 1M1 17L17 1"
        stroke="currentColor"
        strokeWidth="1.6"
      ></path>
    </svg>
  );
}
