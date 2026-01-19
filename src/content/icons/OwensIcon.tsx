import Image from 'next/image';

export default function OwensIcon() {
  return (
    <Image
      alt="Owens Logo"
      width={59}
      height={32}
      className="mx-auto h-[32px] w-[59px]"
      src="https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/owens.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=128"
    />
  );
}
