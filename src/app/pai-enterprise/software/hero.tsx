import Link from 'next/link';
import Image from 'next/image';

export default function HeroSoftware() {
  return (
    <>
      <div className=" w-full flex flex-col items-center space-y-10">
        <div className="text-center">
          <h2 className="font-medium metallic-text text-6xl mb-2">
            Pai Enterprise Dashboard
          </h2>
          <p className="text-base font-light">
            Plan Ahead, Minimise Disruptions: Power Outage Insights at Your
            Fingertips.{' '}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/get-started"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-base lg:text-lg transition-colors"
          >
            Book a Demo
          </Link>
          <Link
            href="/get-started"
            className="inline-flex  items-center justify-center gap-2 border-white border-1 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-base lg:text-lg transition-colors"
          >
            Get Started
          </Link>
        </div>

        <div className="relative w-[1300px] h-[900px]">
          <Image
            src="https://ews-app-landing-page.s3.us-east-1.amazonaws.com/website/dashboardImage.png"
            layout="fill"
            objectFit="contain"
            alt="pai-dashboard"
          />
        </div>
      </div>
    </>
  );
}
