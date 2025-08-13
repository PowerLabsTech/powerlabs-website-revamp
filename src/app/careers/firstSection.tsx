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
          className="bg-[#0F1114] w-full h-[462px] p-10 flex"
          style={{
            border: 'none',

            borderRadius: '4px',
          }}
        >
          <div className="w-full h-full flex items-center justify-center ">
            <div className="w-2/3">
              <h3 className="text-4xl metallic-text mb-2">
                This is not a safe job.
              </h3>
              <p className="font-extralight">
                It’s not a place to hide, coast, or clock in. <br />
                <br /> At PowerLabs, we build with urgency, think with clarity,
                and demand excellence, from ourselves and each other. <br />
                <br /> We hire people who take ownership, obsess over
                excellence, and bring their full weight to the work. We move
                fast, we hold the bar high, and we don't apologise for expecting
                your best, every time. If you're looking for comfort, look
                elsewhere. Still reading? Good. <br /> <br /> Maybe you’re one
                of us. BREAK THINGS. RESPONSIBLY.
              </p>
            </div>
          </div>
          <div className="w-full h-full relative">
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
