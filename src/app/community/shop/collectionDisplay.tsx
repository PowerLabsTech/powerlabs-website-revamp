'use client';

import Button from '@/components/button';
import Image from 'next/image';
import { IShop } from '@/interfaces';
import Link from 'next/link';

export default function CollectionDisplayClient({ prop }: { prop: IShop }) {
  if (!prop?.attributes) return null;

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden flex flex-col items-center justify-center">
      <Image
        src={prop.attributes.coverImage.data.attributes.url ?? ''}
        fill
        style={{ objectFit: 'cover' }}
        alt={prop.attributes.collectionName}
        className="z-0"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 100vw"
      />

      <div className="absolute inset-0 bg-black/50 z-10"></div>

      <div className="absolute bottom-30 z-20 flex flex-col items-center space-y-6 md:space-y-8 p-6 text-center">
        {prop.attributes.announcement && (
          <div className="px-5 py-3 bg-[#1570EF4D] border border-[#006AFF75] rounded-md">
            <p>{prop.attributes.announcement}</p>
          </div>
        )}

        <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl max-w-3xl">
          {prop.attributes.collectionName}
        </h3>

        <div className="flex items-center justify-center gap-4 md:gap-6">
          <Link href={`/community/shop/${prop.attributes.slug}`}>
            <Button>View More</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
