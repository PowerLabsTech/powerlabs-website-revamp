import Image from 'next/image';

export default function Analytics() {
  return (
    <>
      <div className="space-y-10">
        <div className="text-center">
          <h3 className="text-[#1570EF] font-semibold text-lg mb-2">
            Analytics
          </h3>
          <h2 className="metallic-text-long text-5xl">
            Take Control of Your Data
          </h2>
          <p className="font-extralight">
            Plan Ahead, Minimise Disruptions: Power Outage Insights at Your
            Fingertips.
          </p>
        </div>
        <div className="relative w-full flex items-center w-full h-[900px]">
          <Image
            src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/dataImage.png"
            layout="fill"
            objectFit="contain"
            alt="pai-data-dashboard"
          />
        </div>

        {/* <div className="grid grid-cols-5 gap-3">
          <div className="grid col-span-2 bg-[#0F1114] rounded-2xl overflow-hidden p-8 text-white relative h-[523px]">
            <div className="relative z-10 max-w-lg">
              <h2 className="text-2xl font-semibold mb-4">
                Monitor your CO2 Emissions
              </h2>
              <p className="text-gray-400  ">
                Check the positive environmental impact of every kWh of solar
                power consumed over a time period.
              </p>
            </div>

            <div
              className={`
                      absolute w-[550px] h-[320px] 
                      bottom-2 -right-[100px] 
                      transition-transform duration-500 ease-in-out
                    `}
            >
              <Image
                src="https://ews-app-landing-page.s3.us-east-1.amazonaws.com/website/avoidedCoEmissions.png"
                alt="CO2 Emissions"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div> */}
        {/* column2 */}
        {/* <div className="grid col-span-3 bg-[#0F1114] rounded-2xl overflow-hidden p-8 text-white relative h-[523px]">
            <div className="relative z-10 max-w-lg">
              <h2 className="text-2xl font-semibold mb-4">
                Track Energy Usage and Availability Patterns
              </h2>
              <p className="text-gray-400  ">
                Understand your historical power supply patterns, see them
                change in real-time, and proactively manage your energy
                consumption.
              </p>
            </div>

            <div
              className={`
                      absolute w-[550px] h-[320px] lg:w-[750px] 
                      bottom-0 left-10 
                      transition-transform duration-500 ease-in-out
                    `}
            >
              <Image
                src="https://ews-app-landing-page.s3.us-east-1.amazonaws.com/website/powerDeliverySources.png"
                alt="CO2 Emissions"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
