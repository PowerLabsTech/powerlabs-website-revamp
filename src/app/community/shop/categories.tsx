import Image from 'next/image';
import Link from 'next/link';

const categoriesItem = [
  {
    title: 'Clothing',
    description: 'Description for category 1',
    image:
      'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/factoriesBackground.jpg',
    link: 'https://via.placehold.co/600x800/808080/FFFFFF?text=Clothing',
  },
  {
    title: 'Plug Bags',
    description: 'Description for category 2',
    image:
      'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/factoriesBackground.jpg',
    link: 'https://placehold.co/600x800/808080/FFFFFF?text=Clothing',
  },
  {
    title: 'Accessories',
    description: 'Description for category 3',
    image:
      'https://ews-app-s3.s3.us-east-1.amazonaws.com/website/factoriesBackground.jpg',
    link: 'https://via.placehold.co/600x800/808080/FFFFFF?text=Clothing',
  },
];

export default function Categories() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categoriesItem.map((item, index) => (
          <CategoryCard
            key={index}
            title={item.title}
            imageUrl={item.image}
            // linkHref={item.link}
            altText={item.title}
          />
        ))}
      </div>
    </section>
  );
}

export function CategoryCard({
  title,
  imageUrl,
  //   linkHref,
  altText,
}: {
  title: string;
  imageUrl: string;
  //   linkHref: string;
  altText: string;
}) {
  return (
    <Link
      href={'/community/shop/clothing'}
      className="relative block h-[500px] md:h-[600px] overflow-hidden group"
    >
      {/* Image */}
      <Image
        src={imageUrl}
        alt={altText}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        priority
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* Content Overlay */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white z-10 ">
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-semibold mb-2">{title}</h3>
          <button className="flex items-center space-x-2 text-white border border-white px-4 py-2 rounded-sm hover:bg-white hover:text-black transition-colors">
            <span>Shop Now</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
}
