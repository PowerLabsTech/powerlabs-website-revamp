import Image from 'next/image';
export default function Anomaly() {
  return (
    <>
      <div className="space-y-10">
        <div className="text-center">
          <h3 className="text-[#F6762C] font-semibold text-lg mb-2">
            Anomaly Detections
          </h3>
          <h2 className="metallic-text-long text-5xl">
            Set custom notifications for alerts that matter
          </h2>
          <p className="font-extralight">
            Determine the most optimal combination of power sources <br />
            to reduce your total power costs to their lowest levels possible,
            based on your energy demand per time.
          </p>
        </div>
        <div className="relative w-full flex items-center w-full h-[500px]">
          <Image
            src="https://ews-app-landing-page.s3.us-east-1.amazonaws.com/website/anomalyDetection.png"
            layout="fill"
            objectFit="contain"
            alt="pai-data-dashboard"
          />
        </div>
      </div>
    </>
  );
}
