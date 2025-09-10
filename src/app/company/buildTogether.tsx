import { pathsRoute } from '../routes';
import Button from '@/components/button';
import { useRouter } from 'next/navigation';

export default function BuildTogether() {
  const router = useRouter();
  return (
    <>
      <section className="relative w-full">
        <div
          className="relative w-full bg-no-repeat bg-center bg-cover 
                   flex flex-col justify-center items-center lg:items-start 
                   h-[60vh] lg:h-screen text-center lg:text-left"
          style={{
            backgroundImage:
              "url('https://ews-app-s3.s3.us-east-1.amazonaws.com/website/buildTogether.png')",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

          <div className="relative z-20 text-white p-8 md:p-16 lg:p-24 max-w-2xl">
            <div className="mb-4">
              <h2 className="text-subheading ">Let’s build together</h2>
            </div>
            <Button
              variant="outline"
              onClick={() => router.push(pathsRoute.careers)}
              icon={<span className="font-bold text-xl">&rarr;</span>}
            >
              View Careers
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
