interface AdvantagesCardProps {
  title: string;
  description: string;
  icon: React.ComponentType;
}

export default function AdvantagesCard({
  title,
  description,
  icon: Icon,
}: AdvantagesCardProps) {
  return (
    <div className="flex w-full flex-row items-start gap-4 lg:flex-col lg:items-center">
      <figure className="flex items-center justify-center rounded-sm bg-white p-[14px] lg:h-24 lg:w-24 lg:p-0">
        <Icon />
      </figure>
      <article className="flex w-full flex-col sm:gap-1 lg:items-center lg:gap-4">
        <h3 className="lg:text-title-xs text-left text-[16px] font-bold lg:text-center">
          {title}
        </h3>
        <p className="text-body-md text-left text-slate-500 lg:text-center">
          {description}
        </p>
      </article>
    </div>
  );
}
