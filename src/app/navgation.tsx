'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { paths } from './routes';

export function Navigation() {
  const pathname = usePathname();

  return (
    <>
      <div className="flex justify-between items-center pt-[24px] pr-[80px] pb-[24px] pl-[88px]">
        <div>
          <Image
            src={
              'https://ews-app-landing-page.s3.us-east-1.amazonaws.com/website/PowerLogo.png'
            }
            width={115}
            height={26.16}
            alt={'Powerlabs_logo'}
          />
        </div>

        {/* nav */}
        <div className="grow max-w-[624px]">
          <ul className="flex justify-between w-full">
            {paths.map((path, index) => (
              <Link
                href={path.path}
                className={`p-[8px] hover:bg-white hover:text-black hover:rounded ${
                  path.path === pathname && 'border-b-2 border-b-blue-500'
                }`}
                key={index}
              >
                {path.name}
              </Link>
            ))}
          </ul>
        </div>

        <div>
          <button className="p-[8px] bg-blue-500 rounded text-sm cursor-pointer">
            Book a Demo
          </button>
        </div>
      </div>
    </>
  );
}
