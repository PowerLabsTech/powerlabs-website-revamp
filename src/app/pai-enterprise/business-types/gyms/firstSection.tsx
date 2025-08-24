import Image from 'next/image';

export default function FirstSection() {
  return (
    <div className="space-y-8 md:space-y-12 p-4">
      <div className="text-center">
        <h2 className="metallic-text-long text-3xl md:text-5xl">
          Your Members Can’t Flex if the Power Flops.
        </h2>
        <p className="font-extralight max-w-4xl mx-auto mt-2">
          From running treadmills to blasting beats, your gym runs on serious
          energy. Pai shows you where you’re burning power, where you’re wasting
          it, and how to keep your space lean, and always-on—without draining
          your wallet.
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
