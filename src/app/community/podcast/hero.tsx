'use client';
import { IPod } from '@/interfaces';
import { fetchPodcasts } from '@/services/cms';
import Image from 'next/image';
import React from 'react';
import { useEffect } from 'react';

export default function HeroPodcast() {
  const [, setIsLoading] = React.useState<boolean>(false);
  const [pods, setPods] = React.useState<IPod[]>([]);

  const fetchPods = async () => {
    try {
      setIsLoading(true);

      const response = await fetchPodcasts();
      if (!!response && response.data.length > 0) {
        setPods(response.data);
      }
    } finally {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPods();
  }, []);
  return (
    <>
      {pods.map((pod, index) => (
        <PodCards key={index} prop={pod} />
      ))}
    </>
  );
}

function PodCards({ prop }: { prop: IPod }) {
  return (
    <>
      <div className="relative w-full min-h-screen text-white rounded-xl overflow-hidden flex flex-col items-center justify-center">
        <Image
          src={prop.attributes.coverImage.data.attributes.url}
          layout="fill"
          objectFit="cover"
          alt="solar panels"
          className="z-0"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Content Container */}
        <div className="relative z-20 flex flex-col items-center space-y-6 md:space-y-8 p-6 text-center">
          {prop.attributes.announcement && (
            <div className="px-5 py-3 bg-[#1570EF4D] border border-solid border-[#006AFF75] rounded-md">
              <p>{prop.attributes.announcement}</p>
            </div>
          )}
          <div>
            <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl max-w-3xl">
              {prop.attributes.title}
            </h3>
          </div>
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <Image
              src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/spotifyIcon.png"
              width={80}
              height={80}
              alt="Spotify icon"
              className="z-0 cursor-pointer w-16 h-16 md:w-20 md:h-20"
              onClick={() =>
                window.open(
                  prop.attributes.spotify,
                  '_blank',
                  'noopener,noreferrer'
                )
              }
            />
            <Image
              src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/amazonIcon.png"
              width={80}
              height={80}
              alt="Amazon Music icon"
              className="z-0 cursor-pointer w-16 h-16 md:w-20 md:h-20"
              onClick={() =>
                window.open(
                  prop.attributes.applePod,
                  '_blank',
                  'noopener,noreferrer'
                )
              }
            />
            <Image
              src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/audiomackIcon.png"
              width={80}
              height={80}
              alt="Audiomack icon"
              className="z-0 cursor-pointer w-16 h-16 md:w-20 md:h-20"
              onClick={() =>
                window.open(
                  prop.attributes.audiomack,
                  '_blank',
                  'noopener,noreferrer'
                )
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}
