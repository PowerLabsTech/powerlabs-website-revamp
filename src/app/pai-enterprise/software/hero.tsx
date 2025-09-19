import Image from 'next/image';
import { useRouter } from 'next/navigation';
import HeroButtons from '@/components/heroButtons';

export default function HeroSoftware() {
  const router = useRouter();
  return (
    <>
      <div className="w-full flex flex-col items-center space-y-8 md:space-y-12  text-center pt-10  md:pt-20">
        <div>
          {/* Responsive font size for the heading */}
          <h2 className=" metallic-text hero-text-heading mb-2">
            Pai Enterprise Dashboard
          </h2>
          {/* Added max-width for better readability on large screens */}
          <p className="text-secondary max-w-2xl mx-auto">
            Intelligent energy at your fingertips
          </p>
        </div>

        <HeroButtons />

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
