import Image from 'next/image';

export default function FirstSection() {
  return (
    <div className="space-y-10">
      <div className="text-center">
        <h2 className="metallic-text-long text-5xl">
          Your Members Can’t Flex if the Power Flops.
        </h2>
        <p className="font-extralight">
          From running treadmills to blasting beats, your gym runs on serious
          energy. Pai shows you where you’re burning <br /> power, where you’re
          wasting it, and how to keep your space lean, and always-on—without
          draining your wallet.
        </p>
      </div>
      <div className="relative w-full flex items-center w-full h-[500px]">
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
