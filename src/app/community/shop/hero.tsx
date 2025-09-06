import Button from '@/components/button';
import Image from 'next/image';
import Categories from './categories';
import Container from '@/components/container';
import { IShop } from '@/interfaces';
import { useRouter } from 'next/navigation';
import { createRouteFromTitle } from '@/utils/stringUtils';

export default function HeroShop({ props }: { props: IShop[] }) {
  const recentCollection = props[0];
  return (
    <>
      {/* main hero section */}
      <CollectionDisplay prop={recentCollection} />
      <Container>
        <Categories />
      </Container>
    </>
  );
}

function CollectionDisplay({ prop }: { prop: IShop }) {
  const router = useRouter();
  const navigateToPost = (title: string, postId: number) => {
    router.push(`shop/${createRouteFromTitle(title)}?id=${postId}`);
  };
  return (
    <>
      {prop?.attributes && (
        <>
          <div className="relative w-full min-h-screen text-white rounded-xl overflow-hidden flex flex-col items-center justify-center">
            <Image
              src={prop.attributes.coverImage.data.attributes.url ?? ''}
              layout="fill"
              objectFit="cover"
              alt="solar panels"
              className="z-0"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>

            {/* Content Container */}
            <div className="relative z-20 flex flex-col items-center space-y-6 md:space-y-8 p-6 text-center">
              {/* Announcement Banner */}
              {prop.attributes.announcement && (
                <>
                  <div className="px-5 py-3 bg-[#1570EF4D] border border-solid border-[#006AFF75] rounded-md">
                    <p>{prop.attributes.announcement}</p>
                  </div>
                </>
              )}
              <div>
                <h3 className="font-semibold text-3xl sm:text-4xl md:text-5xl max-w-3xl">
                  {prop.attributes.collectionName}
                </h3>
              </div>
              <div className="flex items-center justify-center gap-4 md:gap-6">
                <Button
                  onClick={() =>
                    navigateToPost(prop.attributes.collectionName, prop.id)
                  }
                >
                  View More
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
