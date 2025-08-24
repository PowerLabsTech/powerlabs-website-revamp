'use client';
import { SubscribeFormBlog } from '@/app/subscribe';
import Image from 'next/image';

export default function HeroOutlet() {
  return (
    <div className="space-y-10 grid place-content-center p-4">
      <div className="text-center">
        <h2 className="font-medium metallic-text text-4xl md:text-6xl mb-2">
          The Outlet
        </h2>
        <p className="text-base font-light">Not the science. Just the story.</p>
      </div>
      <SubscribeFormBlog />
      <FeaturedCard />
    </div>
  );
}

function FeaturedCard() {
  return (
    <div className="bg-[#1570EF14] w-full lg:w-7xl  mx-auto p-6 md:p-10 flex flex-col lg:flex-row rounded-lg items-center gap-8">
      <div className="w-full lg:w-1/2 h-64 md:h-80 lg:h-full relative rounded-lg overflow-hidden">
        <Image
          src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/studioRoom.png"
          alt="Studio room"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="w-full space-y-6">
          <h3 className="text-[#1570EF]">Featured Blog</h3>

          <h3 className="text-white font-semiBold text-2xl md:text-4xl">
            Inside PowerLabs: The Intern
          </h3>
          <p className="font-extralight">Tawhid Aderinto</p>

          <div className="border-[0.5px] border-[#FAFAFA1F]"></div>

          <div className="flex gap-5 items-center">
            <div>
              <Image
                src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/pLogoIcon.png"
                alt="logo"
                width={25}
                height={25}
              />
            </div>
            <div>
              <p className="font-extralight">Inside PowerLabs</p>
              <div className="flex flex-wrap gap-x-2 items-center">
                <p className="font-extralight">Mar 22,2024</p>
                <div className="rounded-full h-1.5 bg-white w-1.5"></div>
                <p className="font-extralight">5 mins read</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
