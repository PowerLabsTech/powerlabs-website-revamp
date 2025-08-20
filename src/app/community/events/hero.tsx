import Image from 'next/image';
import Link from 'next/link';

export default function HeroEvents() {
  return (
    <div className="relative w-full h-[100vh] text-white rounded-xl overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/investorBrunch.png"
        layout="fill"
        objectFit="cover"
        alt="investor brunch"
        className="z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content Container */}

      <div className="relative z-20 h-full flex items-center px-8 md:px-16 lg:px-24 w-full">
        <div className="absolute bottom-30 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 w-full space-y-5">
          <div>
            <h3 className="font-semibold text-4xl md:text-5xl lg:text-5xl">
              PowerLabs Investors Brunch
            </h3>
          </div>
          <div className="flex  items-center justify-center gap-4">
            <Link
              href="/get-started"
              className="mt-4 inline-flex items-center gap-2 border-white border hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-base transition-colors"
            >
              Learn More
              <span className="font-bold text-xl">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
