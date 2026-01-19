import Image from 'next/image';

export default function BerryIcon() {
  return (
    <Image
      alt="Berry Logo"
      width={52}
      height={28}
      className="mx-auto h-[28px] w-[52px]"
      src="https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/berry-logo.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=128"
    />
  );
}
