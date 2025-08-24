import Image from 'next/image';

export default function Analytics() {
  return (
    <>
      <div className="space-y-8 md:space-y-12 p-4">
        <div className="text-center">
          <h3 className="text-[#1570EF] font-semibold text-lg mb-2">
            Analytics
          </h3>
          <h2 className="metallic-text-long text-3xl md:text-5xl">
            Take Control of Your Data
          </h2>
          <p className="font-extralight max-w-2xl mx-auto mt-2">
            Plan Ahead, Minimise Disruptions: Power Outage Insights at Your
            Fingertips.
          </p>
        </div>
        <div className="relative w-full max-w-6xl mx-auto aspect-square md:aspect-video">
          <Image
            src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/dataImage.png"
            layout="fill"
            objectFit="contain"
            alt="pai-data-dashboard"
          />
        </div>
      </div>
    </>
  );
}
