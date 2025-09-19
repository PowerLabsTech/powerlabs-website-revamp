export const JoinBlueList = () => {
  return (
    <div
      className="scrollOver2 relative w-full bg-no-repeat bg-center flex items-center justify-center px-4 py-20"
      style={{
        backgroundImage:
          "url('https://ews-app-s3.s3.us-east-1.amazonaws.com/website/spiral.png')",
        backgroundSize: 'cover',
      }}
    >
      <div className="w-full max-w-2xl text-center text-white space-y-6">
        <div>
          <h2 className="text-3xl md:text-[40px] font-medium metallic-text">
            Break Things. Responsibly
          </h2>
          <p className="font-normal text-base mt-2">
            Don’t see any role that interests you? Join the Blue List and be the
            first to know about open roles.
          </p>
        </div>
        <div>
          <button className="btn-primary">Subscribe</button>
        </div>
        <div className="w-full flex justify-center">
          <p className="text-xs max-w-md">
            *This information may be transcribed, used, and stored by third
            parties in accordance with our{' '}
            <a
              href="/privacy-policy"
              className="underline decoration-solid text-blue-500 decoration-blue-500 italic"
            >
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
