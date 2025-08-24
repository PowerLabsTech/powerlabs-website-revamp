'use client';

import Image from 'next/image';
import Link from 'next/link';
import chevronDown from '../../public/svgs/chevronDown.svg';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function MissionSection() {
  const scrollSection = useRef(null);

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
            trigger: '.scrollOver',
            start: 'top top',
            end: '+=5000',
            scrub: true,
            pin: true,
          },
        });

        scrollMission.to('.scrollOver1', {
          yPercent: -150,
          ease: 'none',
        });

        // --- END OF DESKTOP-ONLY ANIMATIONS ---
      });
    },
    { scope: scrollSection }
  );

  return (
    <>
      {/* RESPONSIVE: This section is now naturally responsive without animations on mobile */}
      <div ref={scrollSection}>
        <section className="scrollOver h-auto lg:h-[100vh] relative overflow-hidden">
          <div
            className="scrollOver1 relative lg:absolute top-0 w-full bg-no-repeat bg-center flex justify-start z-20"
            style={{
              backgroundImage:
                "url('https://ews-app-s3.s3.us-east-1.amazonaws.com/website/missionImage1.jpg')",
              height: '100vh',
              backgroundSize: 'cover',
              alignItems: 'flex-end',
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
            {/* RESPONSIVE: Drastically reduced padding on mobile */}
            <div className="relative z-10 text-left text-white p-8 md:p-16 lg:p-[148px]">
              <div className="mb-4">
                {/* RESPONSIVE: Adjusted font size */}
                <h2 className="text-3xl md:text-[40px] font-medium">
                  Unlocking Limitless
                </h2>
                <h2 className="text-3xl md:text-[40px] font-medium">
                  Human Productivity
                </h2>
              </div>
              <Link
                href="/get-started"
                className="mt-4 inline-flex items-center gap-2 border-white border hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-base transition-colors"
              >
                Learn More
                <span className="font-bold text-xl">&rarr;</span>
              </Link>
            </div>
            <div className="absolute bottom-10  translate-x-1/2 z-10 text-center w-full">
              <Image
                src={chevronDown}
                alt="Chevron down"
                width={50}
                height={50}
              />
            </div>
          </div>

          <div
            className="scrollOver2 relative lg:absolute top-0 w-full bg-no-repeat bg-center flex justify-start z-10"
            style={{
              backgroundImage:
                "url('https://ews-app-s3.s3.us-east-1.amazonaws.com/website/missionImageChip.jpg')",
              height: '100vh',
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
            <div className="absolute bottom-0 z-10 text-left text-white p-8 md:p-16 lg:p-[148px]">
              <div className="mb-4">
                <h2 className="text-3xl md:text-[40px] font-medium">Through</h2>
                <h2 className="text-3xl md:text-[40px] font-medium">
                  Intelligent Energy
                </h2>
              </div>
              <Link
                href="/get-started"
                className="mt-4 inline-flex items-center gap-2 border-white border hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-base transition-colors"
              >
                Learn More
                <span className="font-bold text-xl">&rarr;</span>
              </Link>
            </div>
            <div className="absolute bottom-10 translate-x-1/2 z-10 text-center w-full">
              <Image
                src={chevronDown}
                alt="Chevron down"
                width={50}
                height={50}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
