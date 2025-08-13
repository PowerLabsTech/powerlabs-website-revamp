const beliefs = [
  {
    title: 'Trust',
    text: 'We believe the world’s most valuable resource is neither oil nor data, but trust. The trust of everyone who interacts directly or indirectly with our solutions is our most valuable commodity and it is on us to build high quality and reliable products that our users and partners trust.',
  },
  {
    title: 'Resilience',
    text: 'The Grid has to be resilient, so do the teams, technologies and businesses that harness them. We are building a team that develops best-in-class technologies that enable businesses, and the people employed by those businesses, to thrive and succeed … all while making the planet and world better. We believe in continuous improvement and this starts from day zero - at every stage of our product development.',
  },
  {
    title: 'Transparency',
    text: 'Today, the grid is plagued with siloed data, systems and players which is limiting the ability to accelerate decarbonization across the world. Transparency is crucial to speeding the energy transition and that is the same for the way we operate as a lab. We commit to collaborating with institutions with a shared mission to develop responsible energy solutions for the future and an inclusive energy ecosystem for everyone. We believe that this is critical to how we ensure we are building the right products, in the right way, for those who urgently need them.',
  },
  {
    title: 'Equity',
    text: `Reliable electricity today is as basic a necessity as water and is ingrained in so many facets of life that it fulfils all five levels of Maslow's hierarchy of needs. Electricity is for everyone and our solutions are built from the ground up to be accessible and reliable for everyone at the quantity they need and at an affordable rate.`,
  },
  {
    title: 'Privacy and Security',
    text: `Privacy and security are inflexible constraints for PowerLabs. We will optimise our solutions to this constraint as opposed to optimising the constraint to our solution.`,
  },
  {
    title: 'Less is More',
    text: `This is a mindset that ensures that we always think about and solve problems with the barest necessities without which the problem will remain unsolved. Nothing more. This tenet is tied to reality with real constraints that must be obeyed while solving problems - we must optimise the solution to the constraints.`,
  },
  {
    title: 'Relentless',
    text: 'Show excellence; Demand excellence - be relentless in your desire to learn new things, improve yourself and the people and community around you. Humility is a core characteristic required to learn - the self awareness to know that you … nobody, knows it all! Continuous growth and learning is the DNA of Powerlabs - fail to learn, fail to progress. Accept Mediocrity; Be consumed by it.',
  },
  {
    title: 'Ubuntu',
    text: `Diverse groups of people create better products in safe environments. In the spirit of ubuntu we say “I am because we are”. There is a collective responsibility that we all have to each other as a part of the human ecosystem. Promoting the rights of traditionally marginalised groups is a part of creating a safe environment not just at work but in society. Promoting respect, regardless of personal, political or religious views is a key part of everyone having a seat at the table & that their voice will be listened to. This is a non-negotiable at Powerlabs. \n

The stakeholder model of the future will be one where each stakeholder must have an honest conversation with themselves & the other to ask: \n

What is my responsibility?
What is your responsibility?
What is our shared responsibility as a collective?`,
  },
];

export default function SharedBelief() {
  return (
    <>
      <div className="space-y-10">
        <div className="text-center">
          <h2 className="metallic-text-long text-5xl">Our shared beliefs</h2>
          <p className="font-extralight">
            At PowerLabs, our shared beliefs represent the foundation that
            brings our diverse team of <br /> experts together on a single
            mission.
          </p>
        </div>
        <div className="relative w-full flex flex-col items-center justify-center  border-t border-t-[#4C4C4C] ">
          {beliefs.map((b, index) => (
            <BeliefCards
              title={b.title}
              subText={b.text}
              lastIndex={index + 1 === beliefs.length}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function BeliefCards({
  title,
  subText,
  lastIndex,
}: {
  title: string;
  subText: string;
  lastIndex: boolean;
}) {
  return (
    <>
      <div
        className={`${
          lastIndex ? 'min-h-[400px]' : ''
        } min-h-[291px]  flex items-center justify-center w-full border-b border-b-[#4C4C4C]`}
      >
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-5xl metallic-text-long">{title}</p>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <p className="font-extralight whitespace-pre-line">{subText}</p>
        </div>
      </div>
    </>
  );
}
