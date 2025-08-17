import Link from 'next/link';

export default function BuildTogether() {
  return (
    <>
      <section className=" h-auto lg:h-[100vh] relative overflow-hidden">
        <div
          className="relative lg:absolute top-0 w-full bg-no-repeat bg-center flex justify-start z-20"
          style={{
            backgroundImage:
              "url('https://ews-app-s3.s3.us-east-1.amazonaws.com/website/buildTogether.png')",
            height: '100vh',
            backgroundSize: 'cover',
            alignItems: 'flex-end',
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
          {/* RESPONSIVE: Drastically reduced padding on mobile */}
          <div className="relative z-10 text-left text-white p-8 md:p-16 lg:p-[148px]">
            <div className="mb-4">
              {/* RESPONSIVE: Adjusted font size */}
              <h2 className="text-3xl md:text-[40px] font-medium">
                Let’s build together
              </h2>
            </div>
            <Link
              href="/get-started"
              className="mt-4 inline-flex items-center gap-2 border-white border hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-base transition-colors"
            >
              View Careers
              <span className="font-bold text-xl">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
