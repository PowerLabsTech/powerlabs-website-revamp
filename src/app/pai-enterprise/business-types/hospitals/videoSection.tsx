import Container from '@/components/container';

export default function VideoSection() {
  return (
    <>
      <div className="w-full h-[900px] bg-[#161922] ">
        <Container>
          <div className="space-y-4 mb-4">
            <div>
              <div
                className="p-1 w-[215px]"
                style={{
                  background: 'linear-gradient(to right, #031936, #1570EF)',
                  borderRadius: '8px',
                }}
              >
                <div
                  className="bg-[#0F1114] w-full h-full p-3"
                  style={{
                    border: 'none',

                    borderRadius: '4px',
                  }}
                >
                  Real-Time Uptime Alerts
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-white text-4xl">
                The ICU Can’t Wait. Neither Should You.
              </h2>
              <p className="text-sm font-light text-gray-200">
                Get instant alerts when power shifts, voltage dips, or backup
                systems kick in. The ICU, the labs, surgery suites; no
                surprises. You know first. You act fast. Pai keeps every
                life-critical room ready
              </p>
            </div>
          </div>

          <div
            className="relative w-full h-[500px]"
            style={{ paddingTop: '56.25%' }}
          >
            {/* The iframe is positioned absolutely within the container */}
            <iframe
              className="absolute top-10 left-0 w-full h-[500px] rounded-lg"
              //   src={`https://www.youtube.com/embed/CQHvWqYXI5s`}
              src={undefined}
              title={'Pai for hospitals'}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Container>
      </div>
    </>
  );
}
