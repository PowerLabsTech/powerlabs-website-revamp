import Image from 'next/image';

export default function Analytics() {
  return (
    <>
      <div className="space-y-8 md:space-y-12 p-4">
        <div className="text-center">
          <h3 className="text-[#1570EF] font-semibold text-lg mb-2">
            Analytics
          </h3>
          <h2 className="metallic-text-long text-3xl md:text-5xl">
            Take Control of Your Data
          </h2>
          <p className="font-extralight max-w-2xl mx-auto mt-2">
            Plan Ahead, Minimise Disruptions: Power Outage Insights at Your
            Fingertips.
          </p>
        </div>
        <DashboardGrid />
      </div>
    </>
  );
}

export function DashboardCard({
  title,
  description,
  children,
  className = '',
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-[#161922] p-6 rounded-xl border border-gray-700/50 flex flex-col relative ${className} h-[500px]`}
    >
      <h3 className="text-lg font-semibold text-gray-200">{title}</h3>
      <p className="text-sm text-gray-500 mt-1 mb-6">{description}</p>
      <div className="flex-grow flex flex-col">{children}</div>
    </div>
  );
}

export const CO2Metric = () => (
  <div className="absolute right-0 bottom-6  h-auto flex flex-col items-center">
    <Image
      src={`https://ews-app-s3.s3.us-east-1.amazonaws.com/website/avoidedCoEmissions.png`}
      alt="Avoided CO2 Emissions"
      width={400} // Adjusted width for better fit, adjust as needed
      height={180} // Adjusted height, adjust as needed
      // objectFit="contain" // Use objectFit if you want to ensure the whole image is visible
    />
  </div>
);

export const LineChartPlaceholder = () => (
  <div className="absolute left-0 right-0 bottom-8 h-auto flex justify-center">
    <Image
      src={`https://ews-app-s3.s3.us-east-1.amazonaws.com/website/powerDeliverySources.png`}
      alt="Power Delivery Sources"
      width={600} // Adjusted width for better fit, adjust as needed
      height={180} // Adjusted height, adjust as needed
      // objectFit="contain" // Use objectFit if you want to ensure the whole image is visible
    />
  </div>
);

export const DonutChartPlaceholder = () => (
  <div className="absolute left-0 right-0 bottom-8 h-auto flex justify-center">
    <Image
      src={`https://ews-app-s3.s3.us-east-1.amazonaws.com/website/loadDistributionAnalysis.png`}
      alt="Load Distribution Analysis"
      width={600} // Adjusted width for better fit, adjust as needed
      height={180} // Adjusted height, adjust as needed
      // objectFit="contain" // Use objectFit if you want to ensure the whole image is visible
    />
  </div>
);

export function DashboardGrid() {
  return (
    <section className=" p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          {/* Card 1: Monitor your CO2 Emissions */}
          <DashboardCard
            title="Monitor your CO2 Emissions"
            description="Check the positive environmental impact of every kWh of solar power consumed over a time period."
          >
            <CO2Metric />
          </DashboardCard>
        </div>

        <div className="lg:col-span-2 ">
          {/* Card 2: Track Energy Usage (Taller Card) */}
          <DashboardCard
            title="Track Energy Usage and Availability Patterns"
            description="Understand your historical power supply patterns, see them change in real-time, and proactively manage your energy consumption."
            className="lg:row-span-2" // This makes the card taller on large screens
          >
            <LineChartPlaceholder />
          </DashboardCard>
        </div>

        <div className="lg:col-span-2">
          {/* Card 3: Understand your Load Distribution */}
          <DashboardCard
            title="Understand your Load Distribution"
            description="View proportion of contribution of several energy consumption profiles to an overall total energy consumption profile over time."
          >
            <DonutChartPlaceholder />
          </DashboardCard>
        </div>

        <div className="lg:col-span-1">
          <DashboardCard
            title="Monitor your CO2 Emissions"
            description="Check the positive environmental impact of every kWh of solar power consumed over a time period."
          >
            <CO2Metric />
          </DashboardCard>
        </div>
      </div>
    </section>
  );
}
