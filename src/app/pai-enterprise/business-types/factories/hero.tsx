import Image from 'next/image';
import Link from 'next/link';

export default function HeroFactories() {
  return (
    <div className="relative w-full h-[80vh] text-white rounded-xl overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://ews-app-landing-page.s3.us-east-1.amazonaws.com/website/factoriesBackground.jpg"
        layout="fill"
        objectFit="cover"
        alt="factory background"
        className="z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content Container */}

      <div className="relative z-20 h-full flex items-center px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl space-y-8">
          {/* Text Content */}
          <div>
            <h2 className="font-medium metallic-text-long text-4xl md:text-5xl lg:text-6xl mb-4">
              You handle workload. <br /> We handle wattload.
            </h2>
            <p className="text-base md:text-lg font-light text-gray-200">
              You control production. Pai controls what powers it. Together, you
              move faster, spend smarter, and stay ahead of unseen costs.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-started"
              className="inline-block bg-white hover:bg-blue-700 text-[#1570EF] hover:text-white font-bold py-3 px-8 rounded-lg text-base lg:text-lg transition-colors text-center"
            >
              Book a Demo
            </Link>
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 border-white border-2 hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg text-base lg:text-lg transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
