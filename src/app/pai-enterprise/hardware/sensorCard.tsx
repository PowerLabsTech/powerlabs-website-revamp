import Image from 'next/image';

export default function SensorCard({
  index,
  title,
  subtext,
}: {
  index: number;
  title: string;
  subtext: string;
}) {
  const imageUrl =
    'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/pai_board.png';
  const isEven = index % 2 === 0;

  return (
    <div className="relative w-[626px] h-[578px] bg-[#0F1114] rounded-2xl overflow-hidden p-8 text-white">
      <div className="relative z-10 max-w-lg">
        <p className="text-blue-500 font-bold text-lg mb-4">{index}</p>
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-400 text-lg">{subtext}</p>
      </div>

      <div
        className={`
          absolute w-[550px] h-[550px] 
          -bottom-[275px] -right-[100px] 
          transition-transform duration-500 ease-in-out
          ${isEven ? 'rotate-180' : ''}
        `}
      >
        <Image
          src={imageUrl}
          alt={`Sensor board for ${title}`}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}
