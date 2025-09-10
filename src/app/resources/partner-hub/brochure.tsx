import Image from 'next/image';

const brochures = [
  {
    title: 'Chain Businesses',
    link: '/salesDocs/Pai_Enterprise_Chain_Business.pdf',
  },
  {
    title: 'Hospitals',
    link: '/salesDocs/Pai_Enterprise_Hospitals.pdf',
  },
  {
    title: 'Gyms',
    link: '/salesDocs/Pai_Enterprise_Chain_Business.pdf',
  },
  {
    title: 'Factories',
    link: '/salesDocs/Pai_Enterprise_Factories.pdf',
  },
  {
    title: 'Schools',
    link: '/salesDocs/Pai_Enterprise_Schools.pdf',
  },
  {
    title: 'Data Centers',
    link: '/salesDocs/Pai_Enterprise_Data_Center.pdf',
  },
];

export default function Brochure() {
  return (
    <>
      <div className="w-full flex items-center justify-center">
        <div className="grid md:grid-cols-3 gap-5  ">
          {brochures.map((brochure, index) => (
            <a key={index} href={brochure.link} download>
              <div className="space-y-5 cursor-pointer hover:opacity-75">
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
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
