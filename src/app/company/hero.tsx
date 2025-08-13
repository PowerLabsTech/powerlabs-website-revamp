import Image from 'next/image';
import Link from 'next/link';

export default function HeroCompany() {
  return (
    <div className="relative w-full h-[80vh] text-white rounded-xl overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://ews-app-landing-page.s3.us-east-1.amazonaws.com/website/officeSpace.jpg"
        layout="fill"
        objectFit="cover"
        alt="office space"
        className="z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content Container */}

      <div className="relative z-20 h-full flex items-center px-8 md:px-16 lg:px-24">
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
          <Image
            src="https://ews-app-landing-page.s3.us-east-1.amazonaws.com/website/scrollDown.png"
            width={20}
            height={24}
            alt="Scroll down icon"
            className="animate-bounce"
          />
          <p className="mt-2 text-sm font-semibold">Scroll Down</p>
        </div>
      </div>
    </div>
  );
}
