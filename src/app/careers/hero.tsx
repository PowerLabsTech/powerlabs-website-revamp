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
        >
          <source
            src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/energy.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}
