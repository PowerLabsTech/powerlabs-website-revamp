import FeatureTabs, { TabData } from '@/components/featureTab';

const tabsData: TabData[] = [
  {
    id: 1,
    title: 'Grid. Gen. Solar. Battery. You See It All.',
    description:
      'No more surprises. Track every source your hospital runs on, whether it’s grid, diesel generator, solar, or backup battery. Know what is powering your wards right now and switch smartly when needed.',
    imageUrl:
      'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/energySourceContribution.png',
  },
  {
    id: 2,
    title: 'Stop Guessing. Pai Enterprise is Watching.',
    description:
      'Pai Enterprise doesn’t throw data at you, it gives you clarity. Where’s the theatre’s HVAC wasting energy overnight? Which floor runs machines when no one’s around? You get simple, action-ready answers.',
    imageUrl:
      'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/powerDeliverySource.png',
  },
  {
    id: 3,
    title: 'Not Too Big. Not Too Small. Just Right.',
    description:
      'Oversized generators burn cash. Undersized ones risk blackout panic. Pai Enterprise uses real hospital load data to right-size your power systems. Perfect balance. No drama.',
    imageUrl:
      'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/sourceCards.png',
  },
];

export default function FirstSection() {
  return (
    <div className="space-y-8 md:space-y-12 p-4">
      <div className="text-center">
        <h2 className="metallic-text-long text-subheading">
          When Power Fails, Patients Wait. Or Worse.
        </h2>
        <p className="text-secondary text-gray-300 max-w-4xl mx-auto mt-2">
          Every beep, scan, and heartbeat monitor in your hospital depends on
          energy. Pai Enterprise gives you a clear, live view of where energy
          flows, leaks, or threatens to fail—before it costs lives or millions.
        </p>
      </div>

      <FeatureTabs tabsData={tabsData} />
    </div>
  );
}
