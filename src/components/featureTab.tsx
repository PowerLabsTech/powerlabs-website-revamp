'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export interface TabData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

// --- MAIN COMPONENT ---
export default function FeatureTabs({
  tabsData,
  titleColor = 'primary',
}: {
  tabsData: TabData[];
  titleColor?: string;
}) {
  const [activeTabId, setActiveTabId] = useState<number>(1);
  const [isFading, setIsFading] = useState<boolean>(false);

  const activeTabData = tabsData.find((tab) => tab.id === activeTabId);

  const handleTabClick = (id: number) => {
    if (id === activeTabId) return;

    setIsFading(true);

    setTimeout(() => {
      setActiveTabId(id);
      setIsFading(false);
    }, 150);
  };

  return (
    <div className="w-full p-8 md:p-16 rounded-2xl text-white">
      {/* Changed from lg:grid-cols-2 to lg:grid-cols-5 */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        {/* Left Column: Tabs - Spans 2 of 5 columns */}
        <div className="space-y-8 lg:col-span-2">
          {tabsData.map((tab) => (
            <div
              key={tab.id}
              className={
                activeTabId === tab.id
                  ? 'bg-gray-800/50 p-6 rounded-lg w-full md:w-3/4 transition-all duration-300'
                  : ''
              }
            >
              <button
                onClick={() => handleTabClick(tab.id)}
                className={`w-full text-left text-base font-semibold transition-colors duration-200 ${
                  activeTabId === tab.id
                    ? titleColor === 'primary'
                      ? 'text-blue-500'
                      : 'text-green-500'
                    : 'text-gray-300 hover:text-gray-400'
                }`}
              >
                {tab.title}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeTabId === tab.id
                    ? 'max-h-96 mt-4 w-full md:w-3/4'
                    : 'max-h-0'
                }`}
              >
                <div>
                  <p className="text-gray-300">{tab.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Image - Spans 3 of 5 columns, making it wider */}
        <div className="w-full h-80 md:h-[450px]  rounded-xl flex items-center justify-center lg:col-span-3">
          {activeTabData && (
            <div className="relative w-full h-full">
              <Image
                src={activeTabData.imageUrl}
                alt={activeTabData.title}
                layout="fill"
                objectFit="contain" // Consider changing to 'cover' or 'contain' depending on your image aspect ratio
                className={`rounded-xl transition-opacity duration-150 ${
                  isFading ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const tabsData: TabData[] = [
  {
    id: 1,
    title: 'Point Detections',
    description:
      'This feature allows users to set up notifications for specific "points" or channels when their energy consumption falls outside defined lower and upper limits.',
    imageUrl:
      'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/optOverview.png',
  },
  {
    id: 2,
    title: 'Energy and Cost Detections',
    description:
      'This feature enables users to set up notifications for energy use and cost anomalies based on a defined threshold over a specified period.',
    imageUrl:
      'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/optRecommendedSources.png',
  },
  {
    id: 3,
    title: 'Calculated Detections',
    description:
      'This feature allows for more advanced notifications based on calculated ratios or percentages between different parameters.',
    imageUrl:
      'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/optEconomicResults.png',
  },
];

export function AnomalyDetectionTabs() {
  const [activeTabId, setActiveTabId] = useState<number>(1);
  const [, setIsFading] = useState<boolean>(false);

  const handleTabClick = (id: number) => {
    if (id === activeTabId) return;

    setIsFading(true);

    setTimeout(() => {
      setActiveTabId(id);
      setIsFading(false);
    }, 150);
  };

  const anomalyDetections = [
    {
      title: 'Power Anomaly',
      description: `Power Anomaly Detected on Line1 @ PowerlabsHq. Expected Range:
                  [5kW-7kW]`,
    },
    {
      title: 'Cost Anomaly',
      description: `Cost Anomaly Detected on Grid @ PowerlabsHq. Expected Range:
                  [5,000 NGN - 10,000 NGN]`,
    },
    {
      title: 'Calculated Anomaly',
      description: `Source-Load Imbalance Has Been Detected on Generator Usage @ PowerlabsHq.`,
    },
  ];

  const hanldeWidthOfTabs = (index: number) => {
    switch (index) {
      case 0: {
        return activeTabId === index + 1 ? 'w-full' : 'w-2/5';
      }
      case 1: {
        return activeTabId === index + 1 ? 'w-full' : 'w-4/5';
      }
      case 2: {
        return activeTabId === index + 1 ? 'w-full' : 'w-3/5';
      }
    }
  };
  return (
    <div className="w-full p-8 md:p-16 rounded-2xl text-white bg-[#161922]">
      {/* Changed from lg:grid-cols-2 to lg:grid-cols-5 */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        {/* Left Column: Tabs - Spans 2 of 5 columns */}
        <div className="space-y-8 lg:col-span-2">
          {tabsData.map((tab) => (
            <div
              key={tab.id}
              className={
                activeTabId === tab.id
                  ? ' border-l-2 border-l-[#F6762C] p-6  w-full md:w-3/4 transition-all duration-300'
                  : ''
              }
            >
              <button
                onClick={() => handleTabClick(tab.id)}
                className={`w-full text-left text-base font-semibold transition-colors duration-200 ${
                  activeTabId === tab.id
                    ? 'text-white'
                    : 'text-gray-300 hover:text-gray-400'
                }`}
              >
                {tab.title}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeTabId === tab.id ? 'max-h-96 mt-4 w-full ' : 'max-h-0'
                }`}
              >
                <div>
                  <p className="text-gray-300">{tab.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Image - Spans 3 of 5 columns, making it wider */}
        <div className="w-full h-80 md:h-[450px]  rounded-xl flex flex-col gap-4 items-end justify-center lg:col-span-3">
          {anomalyDetections.map((detection, index) => (
            <>
              <div
                className={`bg-[#15171E] ${hanldeWidthOfTabs(
                  index
                )} h-25 p-10  ${
                  activeTabId === index + 1
                    ? 'border-l-2  border-l-[#F6762C] opacity-100'
                    : 'opacity-50'
                } flex flex-col justify-center transition-all`}
              >
                <p className="text-base font-semibold mb-1">
                  {detection.title}
                </p>
                <p className="text-gray-500 text-sm">{detection.description}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
