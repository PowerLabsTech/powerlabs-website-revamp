import Button from '@/components/button';
import { IEvents } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';

export default function InvestorsCard({ event }: { event: IEvents }) {
  const imageUrl = event?.attributes?.coverImage?.data?.attributes?.url ?? '';

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden flex flex-col items-center justify-center">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={event.attributes.title}
          fill
          priority
          className="object-cover z-0"
        />
      )}

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="absolute bottom-20 z-20 flex flex-col items-center space-y-6 md:space-y-8 p-6 text-center">
        <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl max-w-3xl">
          {event.attributes.title}
        </h3>

        <Link href={`/community/events/${event.attributes.slug}`}>
          <Button>Learn More</Button>
        </Link>
      </div>
    </div>
  );
}
