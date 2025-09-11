import FeatureTabs, { TabData } from '@/components/featureTab';

const tabsData: TabData[] = [
  {
    id: 1,
    title: 'Grid? Generator? Solar? You Know.',
    description:
      'No guessing where the power’s coming from—or going. Pai tracks it all, so you control the costs, not the electric company.',
    imageUrl:
      'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/energySourceContribution.png',
  },
  {
    id: 2,
    title: 'Catch What Doesn’t Add Up.',
    description:
      'Why power cardio zones when they’re empty at 2AM? Pai shows where energy’s wasted—so you only spend where it counts.',
    imageUrl:
      'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/powerDeliverySource.png',
  },
  {
    id: 3,
    title: 'Right-Sized. Right-Priced.',
    description:
      'Overpaying for backup generators you don’t need—or risking downtime when you do? Pai sizes your backup perfectly, no sweat.',
    imageUrl:
      'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/sourceCards.png',
  },
];

export default function FirstSection() {
  return (
    <div className="space-y-8 md:space-y-12 p-4">
      <div className="text-center">
        <h2 className="metallic-text-long text-subheading">
          Your Members Can&apos;t Flex if the Power Flops.
        </h2>
        <p className="text-secondary max-w-4xl mx-auto mt-2">
          From running treadmills to blasting beats, your gym runs on serious
          energy. Pai shows you where you&apos;re burning power, where
          you&apos;re wasting it, and how to keep your space lean, and
          always-on—without draining your wallet.
        </p>
      </div>
      <FeatureTabs tabsData={tabsData} />
    </div>
  );
}
