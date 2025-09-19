import Image from 'next/image';

export default function FirstSection() {
  return (
    <>
      <div
        className="p-1 w-full"
        style={{
          background: 'linear-gradient(to right, #031936, #1570EF)',
          borderRadius: '8px',
        }}
      >
        <div
          className="bg-[#0F1114] w-full p-6 md:p-10 flex flex-col lg:flex-row"
          style={{
            border: 'none',
            borderRadius: '4px',
          }}
        >
          <div className="w-full lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0 lg:pr-8">
            <div className="w-full">
              <h3 className="text-3xl md:text-4xl metallic-text mb-4">
                This is not a safe job.
              </h3>

              <p className="font-extralight space-y-4">
                <span>It&apos;s not a place to hide, coast, or clock in.</span>
                <br />
                <br />
                <span>
                  At PowerLabs, we build with urgency, think with clarity,{' '}
                  <br className="hidden sm:block" /> and demand excellence, from
                  ourselves and each other.
                </span>
                <br />
                <br />
                <span>
                  We hire people who take ownership, obsess over excellence, and{' '}
                  <br className="hidden sm:block" />
                  bring their full weight to the work. We move fast, we hold the
                  bar high, and <br className="hidden sm:block" /> we don&apos;t
                  apologise for expecting your best, every time. If you&apos;re
                  looking for <br /> comfort, look elsewhere. Still reading?
                  Good.
                </span>
                <span>
                  Maybe you&apos;re one of us.
                  <br />
                  <br /> BREAK THINGS. RESPONSIBLY.
                </span>
              </p>
            </div>
          </div>

          {/* Increased the height on small and medium screens */}
          <div className="w-full lg:w-1/2 relative h-80 md:h-96 rounded-lg overflow-hidden">
            <Image
              src="https://ews-app-s3.s3.us-east-1.amazonaws.com/website/studioRoom.png"
              alt="Studio room"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
