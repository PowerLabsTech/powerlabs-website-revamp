'use client';

import React from 'react';
import { Carousel, IconButton, Typography } from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';

export default function UseCases() {
  return (
    <>
      <div className="space-y-10">
        <div className="text-left">
          <h3 className="text-[#1570EF] font-semibold text-lg mb-2">
            Use Cases
          </h3>
          <h2 className="metallic-text-long text-5xl">
            How Pai helps businesses stay productive
          </h2>
        </div>
        <div>
          <UseCaseCarousel />
        </div>
      </div>
    </>
  );
}

const carouselData = [
  {
    title: 'Pai for Gyms',
    description:
      'Pai Enterprise keeps your gym powered, optimized, and cost-efficient—so the lights stay on, the AC stays cool, and no treadmill ever stops mid-sprint.',
    image:
      'https://ews-app-landing-page.s3.us-east-1.amazonaws.com/website/gymBackground.png',
    link: '/use-cases/gyms',
  },
  {
    title: 'Pai for Hospitals',
    description:
      'In healthcare, uninterrupted power is critical. Pai ensures that essential medical equipment, lighting, and climate control systems are always running reliably and efficiently, safeguarding patient care.',
    image:
      'https://ews-app-landing-page.s3.us-east-1.amazonaws.com/website/hospitalsBackground.png',
    link: '/use-cases/hospitals',
  },

  {
    title: 'Pai for Factories',
    description:
      'Maximize productivity and minimize operational costs in your manufacturing facility. Pai provides the insights to optimize heavy machinery usage and prevent costly downtime from power irregularities.',
    image:
      'https://ews-app-landing-page.s3.us-east-1.amazonaws.com/website/factoriesBackground.png',
    link: '/use-cases/factories',
  },
];

// --- The Main Carousel Component ---
function UseCaseCarousel() {
  return (
    <div className="w-full py-12 ">
      <Carousel
        className="rounded-xl"
        // Custom navigation arrows
        prevArrow={({ handlePrev }) => (
          <></>
          //   <IconButton
          //     variant="text"
          //     color="white"
          //     size="lg"
          //     onClick={handlePrev}
          //     className="!absolute top-2/4 left-4 -translate-y-2/4 bg-black/50 hover:bg-black/75 rounded-full"
          //     placeholder={undefined}
          //     onResize={undefined}
          //     onResizeCapture={undefined}
          //   >
          //     <svg
          //       xmlns="http://www.w3.org/2000/svg"
          //       fill="none"
          //       viewBox="0 0 24 24"
          //       strokeWidth={2}
          //       stroke="currentColor"
          //       className="h-6 w-6"
          //     >
          //       <path
          //         strokeLinecap="round"
          //         strokeLinejoin="round"
          //         d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          //       />
          //     </svg>
          //   </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <></>
          //   <IconButton
          //     variant="text"
          //     color="white"
          //     size="lg"
          //     onClick={handleNext}
          //     className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-black/50 hover:bg-black/75 rounded-full"
          //     placeholder={undefined}
          //     onResize={undefined}
          //     onResizeCapture={undefined}
          //     onPointerEnterCapture={undefined}
          //     onPointerLeaveCapture={undefined}
          //   >
          //     <svg
          //       xmlns="http://www.w3.org/2000/svg"
          //       fill="none"
          //       viewBox="0 0 24 24"
          //       strokeWidth={2}
          //       stroke="currentColor"
          //       className="h-6 w-6"
          //     >
          //       <path
          //         strokeLinecap="round"
          //         strokeLinejoin="round"
          //         d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          //       />
          //     </svg>
          //   </IconButton>
        )}
        // Custom navigation dots
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {/* {new Array(length).fill('').map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? 'w-8 bg-white' : 'w-4 bg-white/50'
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))} */}
          </div>
        )}
        placeholder={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {carouselData.map((item, index) => (
          <div
            key={index}
            className="relative h-[600px] w-[500px] rounded-xl overflow-hidden"
          >
            {/* Background Image */}
            <Image
              src={item.image}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="h-full w-full"
            />
            <div className="absolute inset-0 h-full w-full bg-black/40"></div>
            <div className="absolute inset-x-0 bottom-0 grid h-1/2 w-full items-end bg-white/10">
              <div className="w-full  p-8 md:p-12 h-80 flex flex-col ">
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-white mb-4 h-8">
                    {item.title}
                  </h3>

                  <p className="text-xl text-white opacity-80 mb-8 h-28">
                    {item.description}
                  </p>
                </div>
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-white hover:text-[#1570EF] font-bold"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
