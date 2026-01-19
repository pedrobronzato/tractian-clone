import Benefits from '@/components/who-we-serve/Benefits';
import Hero from '@/components/who-we-serve/Hero';

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
    </>
  );
}
