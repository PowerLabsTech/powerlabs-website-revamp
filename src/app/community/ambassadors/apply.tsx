import { ambassadorApplicationLink } from '@/utils/constants';
import Link from 'next/link';

export default function ApplyAmbassador() {
  return (
    <>
      <div className="w-full  p-8 md:p-16 lg:p-20 flex flex-col lg:flex-row justify-between items-start gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-start lg:text-left">
          <h3 className="text-subheading ">
            Why become a <br /> PowerLabs Ambassador?
          </h3>
        </div>

        <div className="w-full lg:w-2/5 space-y-8 text-center lg:text-left">
          <h3 className="font-semibold text-lg">
            Because you want more than just classroom knowledge.
          </h3>

          <p className="font-extralight space-y-4">
            <span>
              As a PowerLabs Ambassador, you’ll learn by doing—solving real
              problems, leading high-impact projects, and building your voice as
              a changemaker on campus.
            </span>
            <span>
              You’ll sharpen skills in leadership, communication, tech, and
              research while joining a community that’s reimagining the future
              of energy in Africa. If you want to be known for action, not just
              ambition, this is where you start.
            </span>
          </p>
          <Link
            href={ambassadorApplicationLink}
            className="text-amber-500 cursor-pointer underline hover:text-amber-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </>
  );
}
