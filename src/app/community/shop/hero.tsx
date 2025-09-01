import Button from '@/components/button';
import Image from 'next/image';
import Categories from './categories';

export default function HeroShop() {
  return (
    <>
      <div className="relative w-full min-h-screen text-white rounded-xl overflow-hidden flex flex-col items-center justify-center">
        <Image
          src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/podcastImage.jpg"
          layout="fill"
          objectFit="cover"
          alt="solar panels"
          className="z-0"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Content Container */}
        <div className="relative z-20 flex flex-col items-center space-y-6 md:space-y-8 p-6 text-center">
          <div className="px-5 py-3 bg-[#1570EF4D] border border-solid border-[#006AFF75] rounded-md">
            <p>Discount offer ends in: 02hours : 30mins : 45secs</p>
          </div>
          <div>
            <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl max-w-3xl">
              Raindrop Collection
            </h3>
          </div>
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <Button
              onClick={() =>
                window.open('https://powerlabstech.com/get-started', '_blank')
              }
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>
      <Categories />
    </>
  );
}
