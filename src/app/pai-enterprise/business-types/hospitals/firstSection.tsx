import Image from 'next/image';

export default function FirstSection() {
  return (
    <div className="space-y-10">
      <div className="text-center">
        <h2 className="metallic-text-long text-5xl">
          When Power Fails, Patients Wait. Or Worse.
        </h2>
        <p className="font-extralight">
          Every beep, scan, and heartbeat monitor in your hospital depends on
          energy. Pai Enterprise gives you <br /> a clear, live view of where
          energy flows, leaks, or threatens to fail—before it costs lives or
          millions.
        </p>
      </div>
      <div className="relative w-full flex items-center w-full h-[500px]">
        <Image
          src="https://ews-app-landing-page.s3.us-east-1.amazonaws.com/website/hospitalSection.png"
          layout="fill"
          objectFit="contain"
          alt="pai-data-dashboard"
        />
      </div>
    </div>
  );
}
