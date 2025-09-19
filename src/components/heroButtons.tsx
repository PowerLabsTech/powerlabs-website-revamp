import { pathsRoute } from '@/app/routes';
import Button from './button';
import { useRouter } from 'next/navigation';

export default function HeroButtons() {
  const router = useRouter();
  return (
    <div className="flex flex-row gap-4 justify-center lg:justify-start">
      <Button onClick={() => router.push(pathsRoute.contactSales)}>
        Contact Sales
      </Button>

      <Button
        onClick={() => router.push(pathsRoute.partnerHub)}
        variant="outline"
      >
        Get Started
      </Button>
    </div>
  );
}
