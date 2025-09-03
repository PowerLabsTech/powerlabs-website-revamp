import { pathsRoute } from '@/app/routes';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className=" w-[90%] mx-auto">
      <div className="lg:flex mt-12 gap-[5rem] justify-between">
        <div>
          <img
            src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/logoIcon.png"
            alt="Powerlab logo"
          />
        </div>
        <div className="flex w-full lg:gap-[10rem] gap-[2rem] lg:mt-0 mt-[2rem]">
          {/* <div>
							<p className="text-[#FFFFFFA3] text-[0.875rem] font-semibold">
								COMPANY
							</p>
							<ul className="text-white text-[1rem] font-normal mt-4 flex flex-col gap-2">
								<>
									<li>Who we are</li>
								</>
								<>
									<li>Our mission</li>
								</>
								<>
									<li>Article and research</li>
								</>
							</ul>
						</div> */}
          <div className="grow">
            <div>
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
            </div>
          </div>
          <div className="grow">
            <div>
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
          </div>
          <div className="grow">
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
          <div className="grow">
            <p className="text-[#FFFFFFA3] text-[0.875rem] font-semibold">
              SUPPORT
            </p>
            <>
              <Link
                href="mailto:hello@powerlabstech.com"
                className="text-white text-[1rem] font-normal mt-4"
              >
                Contact
              </Link>
            </>
          </div>
        </div>
      </div>
      <div className="lg:flex justify-between  text-[#B8CADB] font-normal  text-[1rem] lg:text-[1rem] mb-12 mt-12 border-t border-t-[#FAFAFA]/[12%]">
        <div className="mt-[3rem]">
          <p>
            &copy; {new Date().getFullYear()} PowerLabs Technologies, Inc. All
            rights reserved.
          </p>
        </div>
        <div className="flex gap-4 mt-[3rem]">
          <Link href={pathsRoute.terms}>
            <p>Terms</p>
          </Link>
          <Link href={pathsRoute.privacyPolicy}>
            <p>Privacy</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
