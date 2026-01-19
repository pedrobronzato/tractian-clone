import Image from 'next/image';

export default function VoestalpineIcon() {
  return (
    <Image
      alt="Voestalpine Logo"
      width={114}
      height={24}
      className="mx-auto h-[24px] w-[114px]"
      src="https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/voestalpine.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=256"
    />
  );
}
