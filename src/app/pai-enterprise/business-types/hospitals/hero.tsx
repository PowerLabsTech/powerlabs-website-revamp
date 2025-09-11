'use client';
import HeroButtons from '@/components/heroButtons';
import Image from 'next/image';

export default function HeroHospitals() {
  return (
    <div className="relative w-full h-[80vh] text-white rounded-xl overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/hospitalWard.jpg"
        layout="fill"
        objectFit="cover"
        alt="Hospital ward background"
        className="z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content Container */}
      {/* On mobile, content is centered. On large screens, it's aligned to the start. */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center lg:items-start p-6 sm:p-8 md:px-16 lg:px-24">
        {/* Added text-center for mobile and text-left for large screens */}
        <div className="max-w-5xl space-y-8 text-center lg:text-left">
          {/* Text Content */}
          <div>
            <h2 className=" metallic-text-long text-subheading mb-4">
              Smarter Energy for Hospitals
            </h2>
            <p className="text-gray-300 text-secondary max-w-3xl mx-auto lg:mx-0">
              Pai Enterprise helps hospitals reduce energy costs, prevent
              downtime, and optimize power usage—so critical healthcare services
              stay uninterrupted, efficient, and cost-effective.
            </p>
          </div>

          {/* Buttons */}
          {/* This flex container already handles responsiveness well: stacks on mobile, row on larger screens. */}
          <HeroButtons />
        </div>
      </div>
    </div>
  );
}
