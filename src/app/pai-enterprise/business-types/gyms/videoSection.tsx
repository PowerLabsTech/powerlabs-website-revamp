import Container from '@/components/container';

export default function VideoSection() {
  return (
    <>
      <div className="w-full bg-[#161922] py-16 md:py-24">
        <Container>
          <div className="space-y-6 md:space-y-8 mb-8">
            <div>
              <div
                className="p-1 w-full max-w-[215px]"
                style={{
                  background: 'linear-gradient(to right, #031936, #1570EF)',
                  borderRadius: '8px',
                }}
              >
                <div
                  className="bg-[#0F1114] w-full h-full p-3 text-center"
                  style={{
                    border: 'none',
                    borderRadius: '4px',
                  }}
                >
                  Real-Time Uptime Alerts
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h2 className="text-white text-subheading ">
                Treadmills, lights, sound system — all running, always.
              </h2>
              <p className="text-secondary max-w-3xl">
                Pai sends live alerts if power drops anywhere in your gym. No
                interruptions. No angry members. No refunds.
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-4xl mx-auto aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              // src={`https://www.youtube.com/embed/CQHvWqYXI5s`}
              src={undefined}
              title={'Pai for gyms'}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Container>
      </div>
    </>
  );
}
