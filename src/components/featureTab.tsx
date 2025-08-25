'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export interface TabData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

// --- MAIN COMPONENT ---
export default function FeatureTabs({ tabsData }: { tabsData: TabData[] }) {
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
    <div className="w-full  p-8 md:p-16 rounded-2xl text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Tabs */}
        <div className="space-y-8">
          {tabsData.map((tab) => (
            <div
              key={tab.id}
              className={
                activeTabId === tab.id
                  ? 'bg-gray-800/50 p-6 rounded-lg w-3/4 transition-all duration-300'
                  : ''
              }
            >
              <button
                onClick={() => handleTabClick(tab.id)}
                className={`w-full text-left text-2xl md:text-3xl font-semibold transition-colors duration-200 ${
                  activeTabId === tab.id
                    ? 'text-blue-500'
                    : 'text-gray-600 hover:text-gray-400'
                }`}
              >
                {tab.title}
              </button>
              {/* Active Tab Description */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeTabId === tab.id ? 'max-h-96 mt-4 w-3/4' : 'max-h-0'
                }`}
              >
                <div>
                  <p className="text-gray-300">{tab.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Image */}
        <div className="w-full h-80 md:h-[450px] bg-gray-900/50 rounded-xl flex items-center justify-center">
          {activeTabData && (
            <div className="relative w-full h-full">
              <Image
                src={activeTabData.imageUrl}
                alt={activeTabData.title}
                layout="fill"
                objectFit="cover"
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
