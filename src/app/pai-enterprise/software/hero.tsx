import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '@/components/button';
import { pathsRoute } from '@/app/routes';

export default function HeroSoftware() {
  const router = useRouter();
  return (
    <>
      <div className="w-full flex flex-col items-center space-y-8 md:space-y-12 p-4 text-center">
        <div>
          {/* Responsive font size for the heading */}
          <h2 className=" metallic-text hero-text-heading mb-2">
            Pai Enterprise Dashboard
          </h2>
          {/* Added max-width for better readability on large screens */}
          <p className="text-secondary max-w-2xl mx-auto">
            Plan Ahead, Minimise Disruptions: Power Outage Insights at Your
            Fingertips.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={() => router.push(pathsRoute.contactSales)}>
            Contact Sales
          </Button>
          <Button
            variant="outline"
            onClick={() => router.push(pathsRoute.partnerHub)}
          >
            Get Started
          </Button>
        </div>

        {/* Responsive container for the image */}
        <div className="relative w-full max-w-6xl aspect-video">
          <Image
            src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/dashboardImage.png"
            layout="fill"
            objectFit="contain"
            alt="pai-dashboard"
          />
        </div>
      </div>
    </>
  );
}
