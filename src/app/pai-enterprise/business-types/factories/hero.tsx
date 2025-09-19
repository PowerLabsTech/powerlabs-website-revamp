import HeroButtons from '@/components/heroButtons';
import Image from 'next/image';

export default function HeroFactories() {
  return (
    <div className="relative w-full h-[80vh] text-white rounded-xl overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/factoryHeader.jpg"
        layout="fill"
        objectFit="cover"
        alt="factory background"
        className="z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>

      {/* Content Container */}

      <div className="relative z-20 h-full flex flex-col justify-center items-center lg:items-start p-6 sm:p-8 md:px-16 lg:px-24">
        <div className="max-w-4xl space-y-8 text-center lg:text-left">
          {/* Text Content */}
          <div>
            <h2 className="text-subheading metallic-text-long  mb-4">
              Always On. Always Aware.
            </h2>
            <p className="text-secondary text-gray-300 max-w-3xl mx-auto lg:mx-0">
              You control production. Pai controls what powers it. Together, you
              move faster, spend smarter, and stay ahead of unseen costs.
            </p>
          </div>

          {/* Buttons */}
          <HeroButtons />
        </div>
      </div>
    </div>
  );
}
