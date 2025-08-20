import Image from 'next/image';

const internshipInfos = [
  {
    title: 'Paid internship opportunities at PowerLabs',
    text: 'As a PowerLabs Ambassador, you’ll learn by doing—solving real problems, leading high-impact projects, and building your voice as a changemaker on campus. ',
  },
  {
    title: 'Branded PowerLabs merch and collateral',
    text: 'As a PowerLabs Ambassador, you’ll learn by doing—solving real problems, leading high-impact projects, and building your voice as a changemaker on campus. ',
  },
  {
    title: 'Exclusive access to PowerLabs events ',
    text: 'As a PowerLabs Ambassador, you’ll learn by doing—solving real problems, leading high-impact projects, and building your voice as a changemaker on campus. ',
  },
  {
    title: 'Exclusive networking with fellow ambassadors ',
    text: 'As a PowerLabs Ambassador, you’ll learn by doing—solving real problems, leading high-impact projects, and building your voice as a changemaker on campus. ',
  },
  {
    title: 'Free access to PowerLabs University ',
    text: 'As a PowerLabs Ambassador, you’ll learn by doing—solving real problems, leading high-impact projects, and building your voice as a changemaker on campus. ',
  },
  {
    title: 'Work on research projects, hackathons & More',
    text: 'As a PowerLabs Ambassador, you’ll learn by doing—solving real problems, leading high-impact projects, and building your voice as a changemaker on campus. ',
  },
];

export default function FirstSection() {
  return (
    <>
      <div className="w-full bg-[#161922] p-20 space-y-20">
        <div className="w-full flex items-center justify-center">
          <h3 className="metallic-text text-4xl">What’s In It For You?</h3>
        </div>

        <div className="w-full flex justify-center">
          <div className="grid grid-cols-3 gap-20">
            {internshipInfos.map((info) => (
              <div className="w-96 space-y-5 mb-10">
                <Image
                  src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/intershipIcon.png"
                  alt="internshipIcon"
                  width={70}
                  height={70}
                />
                <h3 className="font-semibold text-2xl">{info.title}</h3>
                <div className="border border-[0.5px] bg-gray-200 w-96 opacity-35"></div>
                <p className="text-[#FAFAFAB2]">{info.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
