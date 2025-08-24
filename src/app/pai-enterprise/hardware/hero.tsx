import Image from 'next/image';

export default function Hero() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center space-y-6 md:space-y-10 p-4">
        <div className="text-center">
          <p className="text-lg md:text-xl text-[#E6F0FF] text-shadow-[0_5px_20px_#E6F0FF]">
            Introducing
          </p>
          <h3 className="font-semibold text-4xl md:text-6xl">
            Pai Enterprise Sensor
          </h3>
        </div>
        <Image
          src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/pai_board.png"
          width={420}
          height={270}
          alt="pai_board"
          className="w-full max-w-md"
        />
      </div>
    </>
  );
}
