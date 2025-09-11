import Image from 'next/image';

const internshipInfos = [
  {
    title: 'Paid internship opportunities at PowerLabs',
    text: 'As a PowerLabs Ambassador, you’ll learn by doing—solving real problems, leading high-impact projects, and building your voice as a changemaker on campus. ',
    url: 'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/paidPartnership.png',
  },
  {
    title: 'Branded PowerLabs merch and collateral',
    text: 'As a PowerLabs Ambassador, you’ll learn by doing—solving real problems, leading high-impact projects, and building your voice as a changemaker on campus. ',
    url: 'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/giftBox.png',
  },
  {
    title: 'Exclusive access to PowerLabs events ',
    text: 'As a PowerLabs Ambassador, you’ll learn by doing—solving real problems, leading high-impact projects, and building your voice as a changemaker on campus. ',
    url: 'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/key.png',
  },
  {
    title: 'Exclusive networking with fellow ambassadors ',
    text: 'As a PowerLabs Ambassador, you’ll learn by doing—solving real problems, leading high-impact projects, and building your voice as a changemaker on campus. ',
    url: 'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/networking.png',
  },
  {
    title: 'Free access to PowerLabs University ',
    text: 'As a PowerLabs Ambassador, you’ll learn by doing—solving real problems, leading high-impact projects, and building your voice as a changemaker on campus. ',
    url: 'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/graduation.png',
  },
  {
    title: 'Work on research projects, hackathons & More',
    text: 'As a PowerLabs Ambassador, you’ll learn by doing—solving real problems, leading high-impact projects, and building your voice as a changemaker on campus. ',
    url: 'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/lightBulb.png',
  },
];

export default function FirstSection() {
  return (
    <>
      <div className="w-full bg-[#161922] p-8 md:p-16 lg:p-20 space-y-12 md:space-y-20">
        <div className="w-full flex items-center justify-center text-center">
          <h3 className="metallic-text text-subheading">
            What’s In It For You?
          </h3>
        </div>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
            {internshipInfos.map((info, index) => (
              <div key={index} className="w-full max-w-sm space-y-5">
                <Image
                  src={info.url}
                  alt="internshipIcon"
                  width={70}
                  height={70}
                />
                <h3 className="font-semibold text-2xl">{info.title}</h3>
                <div className="border border-[0.5px] bg-gray-200 w-full opacity-35"></div>
                <p className="text-[#FAFAFAB2]">{info.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
