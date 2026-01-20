import Image from 'next/image';

export default function Iso27001Icon() {
  return (
    <Image
      alt="ISO 27001"
      width={201}
      height={80}
      className="mx-auto object-contain"
      src="https://imgix.tractian.com/website/components/footer/v2/BadgeISO27001.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=640"
    />
  );
}
