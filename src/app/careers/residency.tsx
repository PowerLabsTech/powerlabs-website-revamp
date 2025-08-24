import Link from 'next/link';

export default function ResidensidencyProgram() {
  return (
    <>
      <section className="relative w-full">
        <div
          className="relative w-full bg-no-repeat bg-center bg-cover 
                   flex flex-col justify-center items-center lg:justify-end lg:items-start 
                   h-[70vh] lg:h-screen 
                   text-center lg:text-left"
          style={{
            backgroundImage:
              "url('https://ews-app-s3.s3.us-east-1.amazonaws.com/website/residencyImage.jpg')",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent z-10"></div>

          {/* Content */}
          <div className="relative z-20 text-white p-8 md:p-16 lg:p-24 max-w-3xl">
            <div className="mb-4">
              <h2 className="text-3xl md:text-[40px] font-medium">
                Register For Our 6-Months Residency Program
              </h2>
            </div>
            <Link
              href="/get-started"
              className="mt-4 inline-flex items-center gap-2 border-white border hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-base transition-colors"
            >
              Learn More
              <span className="font-bold text-xl">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
