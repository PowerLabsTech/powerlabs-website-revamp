import Image from 'next/image';

const brochures = [
  {
    title: 'Chain Businesses',
    link: '/salesDocs/Pai_Enterprise_Chain_Business.pdf',
    src: 'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/salesBrochureChainBusinesses.png',
  },
  {
    title: 'Hospitals',
    link: '/salesDocs/Pai_Enterprise_Hospitals.pdf',
    src: 'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/salesBrochureHospitals.png',
  },
  {
    title: 'Gyms',
    link: '/salesDocs/Pai_Enterprise_Chain_Business.pdf',
    src: 'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/salesBrochureGyms.png',
  },
  {
    title: 'Factories',
    link: '/salesDocs/Pai_Enterprise_Factories.pdf',
    src: 'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/salesBrochureFactories.png',
  },
  {
    title: 'Schools',
    link: '/salesDocs/Pai_Enterprise_Schools.pdf',
    src: 'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/salesBrochureSchools.png',
  },
  {
    title: 'Data Centers',
    link: '/salesDocs/Pai_Enterprise_Data_Center.pdf',
    src: 'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/salesBrochureDataCenters.png',
  },
  {
    title: 'Tower Companies',
    link: '/salesDocs/Pai_Enterprise_Tower_Companies.pdf',
    src: 'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/salesBrochureTowerCompanies.png',
  },
];

export default function Brochure() {
  return (
    <>
      <div className="w-full flex items-center justify-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {brochures.map((brochure, index) => (
            <a key={index} href={brochure.link} download>
              <div className="space-y-4 cursor-pointer hover:opacity-75">
                {/* Image wrapper */}
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={brochure.src}
                    alt="sales brochure"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text */}
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg sm:text-xl">
                    {brochure.title}
                  </h3>
                  <p className="text-sm opacity-75">Product Overview</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
