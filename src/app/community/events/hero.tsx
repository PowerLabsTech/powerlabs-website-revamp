import Image from 'next/image';
import Link from 'next/link';

export default function HeroEvents() {
  return (
    <div className="relative w-full min-h-screen text-white rounded-xl overflow-hidden flex flex-col items-center justify-center">
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

      <div className="relative z-20 flex flex-col items-center space-y-6 md:space-y-8 p-6 text-center">
        <div>
          <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl max-w-3xl">
            PowerLabs Investors Brunch
          </h3>
        </div>
        <div className="flex items-center justify-center gap-4">
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
  );
}
