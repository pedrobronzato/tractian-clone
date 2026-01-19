import Image from 'next/image';

export default function LdcIcon() {
  return (
    <Image
      alt="LDC Logo"
      width={60}
      height={28}
      className="mx-auto h-[28px] w-[60px]"
      src="https://imgix.tractian.com/website/pages/who-we-serve/plant-manager/en/ldc.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=128"
    />
  );
}
