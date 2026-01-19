export default function ArrowRightIcon({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      fill="none"
      height="17"
      viewBox="0 0 23 17"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
      className={
        className
          ? className
          : `h-3.5 w-3.5 text-blue-600 opacity-0 transition-all duration-150 group-hover:opacity-100`
      }
    >
      <path
        d="M22.1 8.3L13.9 16.5L12.8 15.4L19.2 9H0V7.5H19.2L12.8 1.1L13.9 0L22.1 8.3Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
