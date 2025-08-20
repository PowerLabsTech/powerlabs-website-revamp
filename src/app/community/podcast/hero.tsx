import Image from 'next/image';

export default function HeroPodcast() {
  return (
    <div className="relative w-full h-[100vh] text-white rounded-xl overflow-hidden">
      {/* Background Image */}
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

      <div className="relative z-20 h-full flex items-center px-8 md:px-16 lg:px-24 w-full">
        <div className="absolute bottom-30 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 w-full space-y-5">
          <div className="px-5 py-3 bg-[#1570EF4D] border border-solid border-[#006AFF75]">
            <p>Latest Episode</p>
          </div>
          <div>
            <h3 className="font-semibold text-4xl md:text-5xl lg:text-5xl">
              Why is Renewable Energy Still Expensive in Nigeria
            </h3>
          </div>
          <div className="flex  items-center justify-center gap-4">
            <Image
              src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/spotifyIcon.png"
              width={100}
              height={100}
              alt="amazon icon"
              className="z-0 cursor-pointer"
            />
            <Image
              src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/amazonIcon.png"
              width={100}
              height={100}
              alt="amazon icon"
              className="z-0 cursor-pointer"
            />
            <Image
              src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/audiomackIcon.png"
              width={100}
              height={100}
              alt="amazon icon"
              className="z-0 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
