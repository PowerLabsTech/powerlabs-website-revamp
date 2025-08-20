import Image from 'next/image';

const brochures = [
  {
    title: 'Chain Businesses',
    link: '',
  },
  {
    title: 'Hospitals',
    link: '',
  },
  {
    title: 'Gyms',
    link: '',
  },
  {
    title: 'Factories',
    link: '',
  },
  {
    title: 'Schools',
    link: '',
  },
  {
    title: 'Data Centers',
    link: '',
  },
];

export default function Brochure() {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="grid md:grid-cols-3 gap-5  ">
          {brochures.map((brochure, index) => (
            <div
              className="space-y-5 cursor-pointer hover:opacity-75"
              key={index}
            >
              <div className="w-[401px] h-[334px] relative">
                <Image
                  src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/salesBrochure.png"
                  layout="fill"
                  objectFit="cover"
                  alt="sales brochure"
                />
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-xl">Product Overview</h3>
                <p className="text-sm opacity-75">{brochure.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
