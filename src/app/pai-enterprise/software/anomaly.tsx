import Image from 'next/image';
export default function Anomaly() {
  return (
    <>
      <div className="space-y-8 md:space-y-12 p-4">
        <div className="text-center">
          <h3 className="text-[#F6762C] font-semibold text-lg mb-2">
            Anomaly Detections
          </h3>
          <h2 className="metallic-text-long text-subheading ">
            Set custom notifications for alerts that matter
          </h2>
          <p className="text-gray-300 text-secondary max-w-3xl mx-auto mt-2">
            Determine the most optimal combination of power sources to reduce
            your total power costs to their lowest levels possible, based on
            your energy demand per time.
          </p>
        </div>
        <div className="relative w-full max-w-5xl mx-auto aspect-video">
          <Image
            src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/anomalyDetection.png"
            layout="fill"
            objectFit="contain"
            alt="pai-data-dashboard"
          />
        </div>
      </div>
    </>
  );
}
