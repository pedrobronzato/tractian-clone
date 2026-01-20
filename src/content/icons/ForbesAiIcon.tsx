import Image from 'next/image';

export default function ForbesAiIcon() {
  return (
    <Image
      alt="Forbes"
      width={181}
      height={144}
      className="mx-auto object-contain"
      src="https://imgix.tractian.com/website/components/footer/v2/forbes-ai.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=384"
    />
  );
}
