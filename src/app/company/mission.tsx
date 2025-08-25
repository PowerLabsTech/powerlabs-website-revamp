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
    <div className="space-y-8 md:space-y-12 p-4">
      <div className="text-center">
        <h2 className="metallic-text-long text-3xl md:text-5xl">Our Mission</h2>

        <p className="font-extralight max-w-3xl mx-auto mt-2">
          At PowerLabs, we&apos;re on a mission to create a planet with
          limitless human productivity through intelligent energy. To achieve
          this, we strive to:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {missionStatements.map((statement, index) => (
          <Card
            title={statement.title}
            subText={statement.text}
            index={index}
            key={index}
            totalItems={missionStatements.length}
          />
        ))}
      </div>
    </div>
  );
}

function Card({
  title,
  subText,
  index,
  totalItems,
}: {
  title: string;
  subText: string;
  index: number;
  totalItems: number;
}) {
  return (
    <div
      className={`
        w-full flex flex-col item-center justify-center 
        p-8 md:p-10
        border-b border-[#4C4C4C] 
        lg:border-b-0 lg:border-r
        ${index === totalItems - 1 ? 'lg:border-r-0 border-b-0' : ''}
      `}
    >
      <h2 className="font-semiBold text-2xl md:text-3xl mb-6 md:mb-10">
        {title}
      </h2>
      <p className="text-base text-gray-400">{subText}</p>
    </div>
  );
}
