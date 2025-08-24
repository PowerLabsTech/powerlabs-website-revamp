import Link from 'next/link';
import Image from 'next/image';

export default function HeroSoftware() {
  return (
    <>
      <div className="w-full flex flex-col items-center space-y-8 md:space-y-12 p-4 text-center">
        <div>
          {/* Responsive font size for the heading */}
          <h2 className="font-medium metallic-text text-4xl md:text-6xl mb-2">
            Pai Enterprise Dashboard
          </h2>
          {/* Added max-width for better readability on large screens */}
          <p className="text-base font-light max-w-2xl mx-auto">
            Plan Ahead, Minimise Disruptions: Power Outage Insights at Your
            Fingertips.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/get-started"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-base transition-colors"
          >
            Book a Demo
          </Link>
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center gap-2 border-white border hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-base transition-colors"
          >
            Get Started
          </Link>
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
