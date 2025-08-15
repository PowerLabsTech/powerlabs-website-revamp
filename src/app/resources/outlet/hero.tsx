'use client';
import { SubscribeFormBlog } from '@/app/subscribe';
import Image from 'next/image';

export default function HeroOutlet() {
  return (
    <>
      <div className="space-y-10 grid place-content-center">
        <div className="text-center">
          <h2 className="font-medium metallic-text text-6xl mb-2">
            The Outlet
          </h2>
          <p className="text-base font-light">
            Not the science. Just the story.
          </p>
        </div>
        <SubscribeFormBlog />
        <FeaturedCard />
      </div>
    </>
  );
}

function FeaturedCard() {
  return (
    <>
      <div className="bg-[#1570EF14] w-7xl h-[462px] p-10 flex rounded-lg">
        <div className="w-full h-full relative">
          <Image
            src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/studioRoom.png"
            alt="Studio room"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full flex items-center justify-center ">
          <div className="w-2/3 space-y-10">
            <h3 className=" text-[#1570EF] mb-2">Featured Blog</h3>
            <h3 className=" text-white mb-2 font-semiBold text-4xl">
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
                <div className="flex gap-2 items-center">
                  <p className="font-extralight">Mar 22,2024</p>
                  <div className="rounded-full h-2 bg-white w-2"></div>
                  <p className="font-extralight">5 mins read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
