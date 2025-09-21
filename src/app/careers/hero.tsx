import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <div className="relative w-full h-[80vh] text-white rounded-xl overflow-hidden">
        {/* Background Image */}

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          poster="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/energyThumbnail.jpg"
        >
          <source
            src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/energy.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-20 h-full flex items-center px-8 md:px-16 lg:px-24 block sm:hidden">
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
            <Image
              src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/scrollDown.png"
              width={20}
              height={24}
              alt="Scroll down icon"
              className="animate-bounce"
            />
            <p className="mt-2 text-sm font-semibold">Scroll Down</p>
          </div>
        </div>
      </div>
    </>
  );
}
