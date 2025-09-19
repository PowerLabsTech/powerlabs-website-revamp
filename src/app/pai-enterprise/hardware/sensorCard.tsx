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
    <div
      className={`bg-[#161922] p-6 rounded-xl border border-gray-700/50 flex flex-col items-center justify-center relative space-y-6  h-[500px]`}
    >
      <div>
        <Image
          src={`https://ews-app-s3.s3.us-east-1.amazonaws.com/website/toolIcon.png`}
          alt="tool"
          width={64} // Adjusted width for better fit, adjust as needed
          height={64} // Adjusted height, adjust as needed
          // objectFit="contain" // Use objectFit if you want to ensure the whole image is visible
        />
      </div>

      <div className="flex flex-col text-center items-center justify-center space-y-2">
        <h3 className="text-2xl font-bold text-gray-200">
          Easy to Install, Easy to Maintain
        </h3>
        <p className="text-sm text-gray-500 mt-1 mb-6 text-center max-w-md">
          Tracks key power data—including voltage, current, energy use, and
          power factor—with industry-grade accuracy. You get trusted insights to
          manage energy smarter.
        </p>
      </div>
    </div>
  );
}
export function CommercialPurposeCard() {
  return (
    <div
      className={`bg-[#1570EF] p-6 rounded-xl border border-gray-700/50 flex flex-col items-center justify-center relative space-y-6  h-[500px]`}
    >
      <div>
        <Image
          src={`https://ews-app-s3.s3.us-east-1.amazonaws.com/website/industryIcon.png`}
          alt="Industry"
          width={64} // Adjusted width for better fit, adjust as needed
          height={64} // Adjusted height, adjust as needed
          // objectFit="contain" // Use objectFit if you want to ensure the whole image is visible
        />
      </div>

      <div className="flex flex-col text-center items-center justify-center space-y-2">
        <h3 className="text-2xl font-bold text-gray-200">
          For Commercial and Industrial Environments
        </h3>
        <p className="text-sm text-white mt-1 mb-6 text-center max-w-md">
          Built tough and compact, Pai Hardware fits into factories, office
          buildings, and energy facilities without fuss—using DIN-rail or wall
          mounting options.
        </p>
      </div>
    </div>
  );
}

export function BatterySaverCard() {
  return (
    <div
      className={`bg-[#161922] p-6 rounded-xl border border-gray-700/50 flex flex-col items-center justify-center relative space-y-4  h-[500px]`}
    >
      <div className="">
        <div className="">
          <Image
            src={`https://ews-app-s3.s3.us-east-1.amazonaws.com/website/battery--charging.png`}
            alt="Battery"
            width={98} // Adjusted width for better fit, adjust as needed
            height={98} // Adjusted height, adjust as needed
            // objectFit="contain" // Use objectFit if you want to ensure the whole image is visible
          />
        </div>
      </div>
      <div className="flex flex-col text-center items-center justify-center space-y-2">
        <h3 className="text-7xl font-bold text-gray-200">
          <span className="text-[#1570EF]">24</span> hours
        </h3>
        <p className="text-sm text-gray-500 mt-1 mb-6 text-center">
          Triple power input and 24-hour battery
        </p>
      </div>

      <div className="flex flex-col text-center items-center justify-center space-y-2">
        <h3 className="text-lg font-bold text-gray-200">
          Built-In Uptime Protection
        </h3>
        <p className="text-sm text-gray-500 mt-1 mb-6 text-center max-w-xs">
          No power? No problem, Pai Hardware keeps measuring and reporting, even
          during outages.
        </p>
      </div>
    </div>
  );
}

export function PaiCard() {
  return (
    <div
      className={`relative bg-[#161922] p-6 rounded-xl border border-gray-700/50 flex flex-col items-center justify-center relative space-y-4 overflow-hidden h-[500px]`}
    >
      <div className="flex flex-col text-center items-center justify-center space-y-2 ">
        <h3 className="text-2xl font-bold text-gray-200">
          Real-Time Energy Monitoring
        </h3>
        <p className="text-sm text-gray-500 mt-1 mb-6 text-center max-w-md">
          Tracks key power data—including voltage, current, energy use, and
          power factor—with industry-grade accuracy. You get trusted insights to
          manage energy smarter.
        </p>
      </div>

      <div className="">
        <Image
          src={`https://ews-app-s3.s3.us-east-1.amazonaws.com/website/realTimeEnergy.png`}
          alt="real-time-energy"
          width={150} // Adjusted width for better fit, adjust as needed
          height={150} // Adjusted height, adjust as needed
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
            <BatterySaverCard />
          </div>

          <div className="lg:col-span-3 secondRight">
            <PaiCard />
          </div>
        </div>
      </section>
    </div>
  );
}
