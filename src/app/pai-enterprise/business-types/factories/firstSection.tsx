import FeatureTabs, { TabData } from '@/components/featureTab';

const tabsData: TabData[] = [
  {
    id: 1,
    title: 'Know Where Every Kilowatt Goes',
    description:
      'From the welding bay to the final packing zone, you will see exactly what’s using energy, how much, and when. Grid, gen, solar, nothing slips by.',
    imageUrl:
      'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/energySourceContribution.png',
  },
  {
    id: 2,
    title: 'Stop guessing. Spot the problem.',
    description:
      'Idle machines pulling phantom power? Pai catches them all and turns silent energy drains into real savings you can reinvest in your factory.',
    imageUrl:
      'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/powerDeliverySource.png',
  },
  {
    id: 3,
    title: 'Energy Mix, Made Personal',
    description:
      'Whether it’s grid supply, solar, batteries, or generators, Pai measures your real energy needs and recommends the perfect mix and size.',
    imageUrl:
      'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/sourceCards.png',
  },
];

export default function FirstSection() {
  return (
    <div className="space-y-8 md:space-y-12 p-4">
      <div className="text-center">
        <h2 className="metallic-text-long text-subheading">
          When the Line Moves, Everything Wins.
        </h2>
        <p className="text-secondary max-w-4xl mx-auto mt-2">
          In a factory, energy is the heartbeat of the floor. Pai Enterprise
          helps you spot trouble before it happens, cut hidden waste, and keep
          your machines running from the first shift to the last.
        </p>
      </div>
      <FeatureTabs tabsData={tabsData} />
    </div>
  );
}
