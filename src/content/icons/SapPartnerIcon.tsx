import Image from 'next/image';

export default function SapPartnerIcon() {
  return (
    <Image
      alt="SAP Silver Partner"
      width={205}
      height={120}
      className="mx-auto object-contain"
      src="https://imgix.tractian.com/website/components/footer/v2/sap-partner.png?auto=format%2Ccompress&cs=origin&fit=max&q=75&w=640"
    />
  );
}
