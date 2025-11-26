import FeatureTabs, { TabData } from '@/components/featureTab';

const tabsData: TabData[] = [
  {
    id: 1,
    title: 'Overview',
    description:
      'Sizing Optimisation analyses your load profile and existing energy capacity to recommend the best energy mix for optimal business output.',
    imageUrl:
      'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/optOverview.png',
  },
  {
    id: 2,
    title: 'Recommended sources',
    description:
      'Energy isn’t one-size-fits-all.  Pai Enterprise doesn’t just size your systems, it recommends the energy blend your business actually needs.',
    imageUrl:
      'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/optRecommendedSources.png',
  },
  {
    id: 3,
    title: 'Economic Results',
    description:
      'By right-sizing in real time, Pai Enterprise turns operational excess into measurable savings, boosting efficiency while extending asset life.',
    imageUrl:
      'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/optEconomicResults.png',
  },
];

export default function Optimization() {
  return (
    <>
      <div className="space-y-8 md:space-y-12 p-4">
        <div className="text-center">
          <h3 className="text-[#82C936] font-semibold text-lg mb-2">
            Sizing Optimisation
          </h3>
          <h2 className="metallic-text-long text-subheading ">
            Accurately size future energy sources
          </h2>
          <p className="text-gray-300 text-secondary max-w-3xl mx-auto mt-2">
            Determine the most optimal combination of power sources to reduce
            your total power costs to their lowest levels possible, based on
            your energy demand per time.
          </p>
        </div>
        <FeatureTabs tabsData={tabsData} titleColor="green" />
      </div>
    </>
  );
}
