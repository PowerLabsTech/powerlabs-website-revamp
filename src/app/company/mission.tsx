const missionStatements = [
  {
    title: 'Build an inclusive energy platform',
    text: `Develop energy intelligence through cutting-edge data and technologies, creating an inclusive platform that harnesses diverse data sources 
and is accessible to everyone.`,
  },
  {
    title: 'Create a personalized energy experience',
    text: 'Enable users to personalise their power journey, liberating them from conventional billing models and empowering them with control.',
  },
  {
    title: 'Give users a stake in the renewable future',
    text: `Make energy a digital object seamlessly integrated into software and devices, igniting innovation, collaboration, and sustainable practices.

Together, we redefine the relationship between individuals and energy, unlocking untapped human productivity and empowered power experiences for everyone.`,
  },
];

export default function Mission() {
  return (
    <>
      <div className="space-y-10">
        <div className="text-center">
          <h2 className="metallic-text-long text-5xl">Our Mission</h2>
          <p className="font-extralight">
            At PowerLabs, we're on a mission to create a planet with limitless
            human productivity through <br /> intelligent energy. To achieve
            this, we strive to:
          </p>
        </div>
        <div className="relative w-full flex items-center justify-center ">
          {missionStatements.map((statement, index) => (
            <Card
              title={statement.title}
              subText={statement.text}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function Card({
  title,
  subText,
  index,
}: {
  title: string;
  subText: string;
  index: number;
}) {
  return (
    <>
      <div
        className={`w-[425px] h-[481px] flex flex-col item-center justify-center py-[76px] px-[30px] border-[0.5px] border-[#4C4C4C] ${
          index === 2 ? 'border-r-0' : ''
        }`}
      >
        <h2 className="font-semiBold text-3xl mb-[40px]">{title}</h2>
        <p className="text-base text-gray-400">{subText}</p>
      </div>
    </>
  );
}
