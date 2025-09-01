'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function UseCases() {
  return (
    <div className="space-y-8 md:space-y-10 p-4">
      <div className="text-left">
        <h3 className="text-[#1570EF] font-semibold text-lg mb-2">Use Cases</h3>
        <h2 className="metallic-text-long text-3xl md:text-5xl">
          How Pai helps businesses stay productive
        </h2>
      </div>
      <div>
        <MultiItemCarousel />
      </div>
    </div>
  );
}

const carouselData = [
  {
    title: 'Pai for Gyms',
    description:
      'Pai Enterprise keeps your gym powered, optimized, and cost-efficient—so the lights stay on, the AC stays cool, and no treadmill ever stops mid-sprint.',
    image:
      'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/gymBackground.png',
    link: '/use-cases/gyms',
  },
  {
    title: 'Pai for Hospitals',
    description:
      'In healthcare, uninterrupted power is critical. Pai ensures that essential medical equipment, lighting, and climate control systems are always running reliably and efficiently, safeguarding patient care.',
    image:
      'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/hospitalsBackground.png',
    link: '/use-cases/hospitals',
  },

  {
    title: 'Pai for Factories',
    description:
      'Maximize productivity and minimize operational costs in your manufacturing facility. Pai provides the insights to optimize heavy machinery usage and prevent costly downtime from power irregularities.',
    image:
      'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/factoriesBackground.png',
    link: '/use-cases/factories',
  },
];

export function MultiItemCarousel() {
  return (
    <div className="w-full px-4 py-8">
      <Swiper
        // Install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1} // Default slides per view for mobile
        navigation // Enables navigation arrows
        pagination={{ clickable: true }} // Enables pagination dots
        // Responsive breakpoints
        breakpoints={{
          // when window width is >= 768px (tablet)
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 1024px (desktop)
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper" // Optional: for custom styling
      >
        {carouselData.map((item) => (
          <SwiperSlide key={item.title} className="rounded-xl overflow-hidden">
            {/* You can reuse your card-style layout here */}
            <div className="relative h-[450px] w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white opacity-80 mb-4">{item.description}</p>
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-white hover:text-[#1570EF] font-bold self-start"
                >
                  Read More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
