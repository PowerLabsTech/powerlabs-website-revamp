import FeatureTabs, { TabData } from '@/components/featureTab';

const tabsData: TabData[] = [
  {
    id: 1,
    title: 'Overview',
    description:
      'Concise metrics outlining sources, load and cost implications we recommend for your facility upgrade',
    imageUrl:
      'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/optOverview.png',
  },
  {
    id: 2,
    title: 'Recommended sources',
    description: '',
    imageUrl:
      'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/optRecommendedSources.png',
  },
  {
    id: 3,
    title: 'Economic Results',
    description: '',
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
            Sizing Optimization
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
