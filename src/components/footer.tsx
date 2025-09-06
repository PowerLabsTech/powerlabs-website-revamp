import { pathsRoute } from '@/app/routes';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex flex-col lg:flex-row mt-12 gap-8 lg:gap-[5rem] justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/logoIcon.png"
            alt="Powerlab logo"
          />
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row w-full flex-wrap lg:flex-nowrap lg:gap-[5rem] gap-8 mt-8 lg:mt-0">
          {/* Company */}
          {/* <div className="w-full sm:w-auto">
            <p className="text-[#FFFFFFA3] text-[0.875rem] font-semibold">
              COMPANY
            </p>
            <ul className="text-white text-[1rem] font-normal mt-4 flex flex-col gap-2">
              <Link href={pathsRoute.company}>
                <li>Our Mission</li>
              </Link>
              <Link href={pathsRoute.outlet}>
                <li>The Outlet</li>
              </Link>
              <Link href={pathsRoute.careers}>
                <li>Careers</li>
              </Link>
              <Link href={pathsRoute.ambassadors}>
                <li>Community</li>
              </Link>
            </ul>
          </div> */}

          {/* Pai Enterprise */}
          <div className="w-full sm:w-auto">
            <p className="text-[#FFFFFFA3] text-[0.875rem] font-semibold">
              PAI ENTERPRISE
            </p>
            <ul className="text-white text-[1rem] font-normal mt-4 flex flex-col gap-2">
              <Link href={pathsRoute.hardware}>
                <li>Hardware</li>
              </Link>
              <Link href={pathsRoute.software}>
                <li>Software</li>
              </Link>
            </ul>
          </div>

          {/* Social */}
          <div className="w-full sm:w-auto">
            <p className="text-[#FFFFFFA3] text-[0.875rem] font-semibold">
              SOCIAL
            </p>
            <ul className="text-white text-[1rem] font-normal mt-4 flex flex-col gap-2">
              <Link href="https://www.instagram.com/powerlabshq/">
                <li>Instagram</li>
              </Link>
              <Link href="https://x.com/Powerlabshq">
                <li>Twitter</li>
              </Link>
              <Link href="https://www.linkedin.com/company/powerlabstech/">
                <li>Linkedin</li>
              </Link>
              <Link href="https://www.youtube.com/@PowerLabsTech">
                <li>Youtube</li>
              </Link>
            </ul>
          </div>

          {/* Support */}
          <div className="w-full sm:w-auto">
            <p className="text-[#FFFFFFA3] text-[0.875rem] font-semibold">
              SUPPORT
            </p>
            <Link
              href="mailto:hello@powerlabstech.com"
              className="text-white text-[1rem] font-normal mt-4 block"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col lg:flex-row justify-between text-[#B8CADB] font-normal text-[0.875rem] lg:text-[1rem] mb-12 mt-12 border-t border-t-[#FAFAFA]/[12%]">
        <div className="mt-[2rem] lg:mt-[3rem]">
          <p>
            &copy; {new Date().getFullYear()} PowerLabs Technologies, Inc. All
            rights reserved.
          </p>
        </div>
        <div className="flex gap-4 mt-[2rem] lg:mt-[3rem]">
          <Link href={pathsRoute.terms}>
            <p>Terms</p>
          </Link>
          <Link href={pathsRoute.privacyPolicy}>
            <p>Privacy</p>
          </Link>
          <Link href={pathsRoute.cookies}>
            <p>Cookies</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
