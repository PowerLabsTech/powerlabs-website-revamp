import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <div className="relative w-full h-[80vh] text-white rounded-xl overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/energy.gif"
          alt="Energy animation"
          layout="fill"
          objectFit="cover"
          unoptimized
          className="z-0"
        />
      </div>
    </>
  );
}
