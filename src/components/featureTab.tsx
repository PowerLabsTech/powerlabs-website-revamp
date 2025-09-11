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
        <div className="w-full h-80 md:h-[450px] bg-gray-900/50 rounded-xl flex items-center justify-center lg:col-span-3">
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
