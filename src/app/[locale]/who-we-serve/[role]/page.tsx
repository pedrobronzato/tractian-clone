import Benefits from '@/components/who-we-serve/Benefits';
import Hero from '@/components/who-we-serve/Hero';
import Features from '@/components/who-we-serve/Features';
import Advantages from '@/components/who-we-serve/Advantages';
import Testimonials from '@/components/who-we-serve/Testimonials';
import Clients from '@/components/who-we-serve/Clients';
import Steps from '@/components/who-we-serve/Steps';
import Mission from '@/components/who-we-serve/Mission';
import Faq from '@/components/who-we-serve/Faq';
import DemoForm from '@/components/layout/DemoForm';

interface PageProps {
  params: Promise<{
    role: string;
  }>;
}

export default async function WhoWeServePage({
  params,
}: PageProps) {
  const { role } = await params;
  return (
    <>
      <Hero role={role} />
      <Benefits role={role} />
      <Features role={role} />
      <Advantages role={role} />
      <Testimonials role={role} />
      <Clients role={role} />
      <Steps role={role} />
      <Mission role={role} />
      <Faq role={role} />
    </>
  );
}
