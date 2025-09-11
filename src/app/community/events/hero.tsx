'use client';
import Button from '@/components/button';
import { IEvents } from '@/interfaces';
import { fetchEvents } from '@/services/cms';
import { createRouteFromTitle } from '@/utils/stringUtils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useEffect } from 'react';

export default function HeroEvents() {
  const [events, setEvents] = React.useState<IEvents[]>([]);

  const init = async () => {
    try {
      const response = await fetchEvents();
      if (response.data.length) {
        setEvents(response.data);
      }
    } catch (err) {
      console.log('Events:', err);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      {events.length > 0 &&
        events.map((event) => <InvestorsCards key={event.id} event={event} />)}
    </>
  );
}

function InvestorsCards({ event }: { event: IEvents }) {
  const router = useRouter();
  const navigateToPost = (title: string, postId: number) => {
    router.push(`events/${createRouteFromTitle(title)}?id=${postId}`);
  };
  return (
    <>
      <div className="relative w-full min-h-screen text-white  overflow-hidden flex flex-col items-center justify-center">
        {/* Background Image */}
        <Image
          src={event.attributes.coverImage.data.attributes.url}
          layout="fill"
          objectFit="cover"
          alt="investor brunch"
          className="z-0"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Content Container */}

        <div className="absolute bottom-30 z-20 flex flex-col items-center space-y-6 md:space-y-8 p-6 text-center">
          <div>
            <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl max-w-3xl">
              {event.attributes.title}
            </h3>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Button
              onClick={() => navigateToPost(event.attributes.title, event.id)}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
