import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function SensorCard({
  index,
  title,
  subtext,
}: {
  index: number;
  title: string;
  subtext: string;
}) {
  const imageUrl =
    'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/pai_board.png';
  const isEven = index % 2 === 0;

  return (
    <div className="relative w-full min-h-[450px] md:min-h-[500px] bg-[#0F1114] rounded-2xl overflow-hidden p-6 md:p-8 text-white">
      <div className="relative z-10 max-w-md">
        <p className="text-blue-500 font-bold text-base md:text-lg mb-4">
          {index}
        </p>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-400 text-base md:text-lg">{subtext}</p>
      </div>

      <div
        className={`
          absolute 
          w-[350px] h-[350px] -bottom-[175px] -right-[80px]
          md:w-[550px] md:h-[550px] md:-bottom-[275px] md:-right-[100px]
          transition-transform duration-500 ease-in-out
          ${isEven ? 'rotate-180' : ''}
        `}
      >
        <Image
          src={imageUrl}
          alt={`Sensor board for ${title}`}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}

export function InstallCard() {
  return (
    <div className="bg-[#161922] p-4 sm:p-6 rounded-xl border border-gray-700/50 flex flex-col items-center justify-center relative min-h-[500px] overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/backgroundCard.png"
          alt="Overlay"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col items-center w-full h-full relative z-10">
        {/* Icon */}
        <div className="flex items-center justify-center h-[60px] sm:h-[80px]">
          <Image
            src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/toolIcon.png"
            alt="tool"
            width={56}
            height={56}
            className="sm:w-[64px] sm:h-[64px]"
          />
        </div>

        {/* Title */}
        <div className="flex items-center justify-center text-center px-2 sm:px-6 mt-4 sm:mt-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-200 leading-snug">
            Easy to Install, Easy to Maintain
          </h3>
        </div>

        {/* Paragraph */}
        <div className="flex items-center justify-center text-center flex-1 mt-3 sm:mt-4 px-2 sm:px-6">
          <p className="text-xs sm:text-sm lg:text-base text-white opacity-70 max-w-md leading-relaxed">
            Lightweight, under 500g, and compact enough for tight spaces—plus
            designed for simple setup without specialist tools or complex
            wiring.
          </p>
        </div>
      </div>
    </div>
  );
}

export function CommercialPurposeCard() {
  return (
    <div className="bg-[#161922] p-4 sm:p-6 rounded-xl border border-gray-700/50 flex flex-col items-center justify-center relative min-h-[500px] overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/backgroundCard.png"
          alt="Overlay"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col items-center w-full h-full relative z-10">
        {/* Icon */}
        <div className="flex items-center justify-center h-[60px] sm:h-[80px]">
          <Image
            src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/industryIcon.png"
            alt="Industry"
            width={56}
            height={56}
            className="sm:w-[64px] sm:h-[64px]"
          />
        </div>

        {/* Title */}
        <div className="flex items-center justify-center text-center px-2 sm:px-6 mt-4 sm:mt-6">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-200 leading-snug">
            For Commercial and Industrial Environments
          </h3>
        </div>

        {/* Paragraph */}
        <div className="flex items-center justify-center text-center flex-1 mt-3 sm:mt-4 px-2 sm:px-6">
          <p className="text-xs sm:text-sm lg:text-base text-white opacity-70 max-w-md leading-relaxed">
            Built tough and compact, Pai Hardware fits into factories, office
            buildings, and energy facilities without fuss—using DIN-rail or wall
            mounting options.
          </p>
        </div>
      </div>
    </div>
  );
}

export function BatterySaverCard() {
  return (
    <div className="relative bg-[#161922] p-6 rounded-xl border border-gray-700/50 flex flex-col items-center overflow-hidden h-[500px] pt-18">
      {/* Background overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/backgroundCard.png"
          alt="Overlay"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col text-center items-center space-y-2">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-200 leading-snug">
          Built-In Uptime Protection
        </h3>
        <div className="flex items-center justify-center text-center flex-1 mt-3 sm:mt-4 px-2 sm:px-6">
          <p className="text-xs sm:text-sm lg:text-base text-white opacity-70 max-w-md leading-relaxed">
            No power? No problem. With triple power input and 24-hour battery
            backup, Pai Enterprise Sensor keeps measuring and reporting, even
            during outages.
          </p>
        </div>
      </div>

      {/* Bottom image */}
      <div className="absolute -bottom-22 lg:-bottom-15 z-0 w-full h-[320px] mt-auto">
        <Image
          src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/uptimeIllustration.png"
          alt="real-time-energy"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export function PaiCard() {
  return (
    <div className="relative bg-[#161922] p-6 rounded-xl border border-gray-700/50 flex flex-col items-center overflow-hidden h-[500px] pt-18">
      {/* Background overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/backgroundCard.png"
          alt="Overlay"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col text-center items-center space-y-2">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-200 leading-snug">
          Real-Time Energy Monitoring
        </h3>
        <div className="flex items-center justify-center text-center flex-1 mt-3 sm:mt-4 px-2 sm:px-6">
          <p className="text-xs sm:text-sm lg:text-base text-white opacity-70 max-w-md leading-relaxed">
            Tracks key power data—including voltage, current, energy use, and
            power factor—with industry-grade accuracy. You get trusted insights
            to manage energy smarter.
          </p>
        </div>
      </div>

      {/* Bottom image */}
      <div className="relative z-0 w-[300px] h-[320px] mt-auto">
        <Image
          src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/realTimeEnergy.png"
          alt="real-time-energy"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

export function InstallationGrid() {
  const analyticsAnimation = React.useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // BEST PRACTICE: Use matchMedia to create animations only for desktop screens
      // This improves mobile performance by not running complex animations.
      const mm = gsap.matchMedia();

      // (min-width: 1024px) is for desktop
      mm.add('(min-width: 1024px)', function () {
        // --- ALL DESKTOP-ONLY ANIMATIONS GO HERE ---

        // --- Animation for the scrolling mission text section ---
        const scrollMission = gsap.timeline({
          scrollTrigger: {
            trigger: '.trigger',
            start: 'top bottom',
            end: '+=800',
            scrub: true,
          },
        });

        scrollMission.from('.firstLeft', {
          xPercent: -150,
          ease: 'none',
        });
        scrollMission.from(
          '.firstRight',
          {
            xPercent: 150,
            ease: 'none',
          },
          '<'
        );
        scrollMission.from(
          '.secondLeft',
          {
            xPercent: -150,
            ease: 'none',
          },
          '>'
        );
        scrollMission.from(
          '.secondRight',
          {
            xPercent: 150,
            ease: 'none',
          },
          '<'
        );

        // --- END OF DESKTOP-ONLY ANIMATIONS ---
      });
    },
    { scope: analyticsAnimation }
  );

  return (
    <div ref={analyticsAnimation} className="overflow-x-hidden">
      <section className="pl-0 p-4 md:p-8 md:pl-0">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 trigger">
          <div className="lg:col-span-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="firstLeft">
              <InstallCard />
            </div>
            <div className="firstRight">
              <CommercialPurposeCard />
            </div>
          </div>

          <div className="lg:col-span-2 secondLeft">
            <PaiCard />
          </div>
          <div className="lg:col-span-3 secondRight">
            <BatterySaverCard />
          </div>
        </div>
      </section>
    </div>
  );
}
