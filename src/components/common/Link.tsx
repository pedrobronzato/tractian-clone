export default function Link({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`text-body-md block text-center font-medium text-slate-500 group-hover:text-blue-600 hover:text-blue-600 xl:block ${className}`}
    >
      {children}
    </a>
  );
}
