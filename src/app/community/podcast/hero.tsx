import Image from 'next/image';

export default function HeroPodcast() {
  return (
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
          <p>Latest Episode</p>
        </div>
        <div>
          <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl max-w-3xl">
            Why is Renewable Energy Still Expensive in Nigeria
          </h3>
        </div>
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <Image
            src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/spotifyIcon.png"
            width={80}
            height={80}
            alt="Spotify icon"
            className="z-0 cursor-pointer w-16 h-16 md:w-20 md:h-20"
          />
          <Image
            src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/amazonIcon.png"
            width={80}
            height={80}
            alt="Amazon Music icon"
            className="z-0 cursor-pointer w-16 h-16 md:w-20 md:h-20"
          />
          <Image
            src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/audiomackIcon.png"
            width={80}
            height={80}
            alt="Audiomack icon"
            className="z-0 cursor-pointer w-16 h-16 md:w-20 md:h-20"
          />
        </div>
      </div>
    </div>
  );
}
