import Image from 'next/image';

export default function FrontRunnersIcon() {
  return (
    <Image
      alt="Front Runners"
      width={149}
      height={156}
      className="mx-auto object-contain"
      src="https://imgix.tractian.com/website/components/footer/v2/front-runners.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=384"
    />
  );
}
