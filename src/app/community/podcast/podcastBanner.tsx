import Image from 'next/image';

export default function PodcastBanner() {
  return (
    <>
      <div
        className="scrollOver2 relative  w-full bg-no-repeat bg-center flex h-[370px]  justify-center text-center"
        style={{
          backgroundImage:
            "url('https://ews-app-s3.s3.us-east-1.amazonaws.com/website/spiral.png')",
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute translate-y-1/2 z-10 text-left text-white space-y-4">
          <div className="text-center">
            <h2 className="md:text-[40px] font-medium metallic-text">
              Catch up on all episodes of The Blue Couch Podcast
            </h2>
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
          <div className="w-full flex items-center text-center justify-center">
            <p className="text-xs ">
              *This information may be transcribed, used, and stored by third
              parties in accordance with our{' '}
              <span className="underline decoration-solid text-blue-500 decoration-blue-500 italic">
                privacy policy
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
