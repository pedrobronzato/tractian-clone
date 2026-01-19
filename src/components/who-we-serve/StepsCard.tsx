interface StepsCardProps {
  steps: {
    title: string;
    description: string;
  }[];
}

export default function StepsCard({
  steps,
}: StepsCardProps) {
  return (
    <div className="flex w-full flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12 xl:gap-16">
      {steps.map((step, index) => (
        <div
          className="flex h-full w-full flex-col gap-4"
          key={step.title}
        >
          <span className="text-body-xl flex h-7 w-7 items-center justify-center rounded-sm bg-blue-600 text-white lg:h-8 lg:w-8">
            {index + 1}
          </span>
          <article className="flex w-full flex-col gap-1 lg:gap-4">
            <h3 className="text-title-xs font-bold">
              {step.title}
            </h3>
            <p className="text-body-md text-slate-500">
              {step.description}
            </p>
          </article>
        </div>
      ))}
    </div>
  );
}
