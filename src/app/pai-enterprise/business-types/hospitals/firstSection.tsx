import Image from 'next/image';

export default function FirstSection() {
  return (
    <div className="space-y-8 md:space-y-12 p-4">
      <div className="text-center">
        <h2 className="metallic-text-long text-3xl md:text-5xl">
          When Power Fails, Patients Wait. Or Worse.
        </h2>
        <p className="font-extralight max-w-4xl mx-auto mt-2">
          Every beep, scan, and heartbeat monitor in your hospital depends on
          energy. Pai Enterprise gives you a clear, live view of where energy
          flows, leaks, or threatens to fail—before it costs lives or millions.
        </p>
      </div>
      <div className="relative w-full max-w-5xl mx-auto aspect-video">
        <Image
          src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/hospitalSection.png"
          layout="fill"
          objectFit="contain"
          alt="pai-data-dashboard"
        />
      </div>
    </div>
  );
}
