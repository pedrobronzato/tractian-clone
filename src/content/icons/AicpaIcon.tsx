import Image from 'next/image';

export default function AicpaIcon() {
  return (
    <Image
      alt="AICPA"
      width={157}
      height={156}
      className="mx-auto object-contain"
      src="https://imgix.tractian.com/website/components/footer/v2/aicpa-soc.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=384"
    />
  );
}
