import { Button } from '@material-tailwind/react';

export default function HeroAmbassadors() {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-10">
      <div>
        <h3 className="metallic-text text-6xl font-semibold">
          Be the spark on your campus.
        </h3>
      </div>
      <div className="w-1/2">
        <p className="text-center">
          The PowerLabs Campus Ambassadors Program is for students who want to
          lead real change — not just hold a title. You’ll drive on-campus
          innovation, gather insight from the field, and work directly with
          PowerLabs teams shaping the future of energy. If you’re ready to
          build, influence, and be seen, this is where you start.
        </p>
      </div>
      <div>
        <button className="px-4 py-2 bg-amber-600 hover:bg-amber-500 rounded-lg text-base transition-colors">
          Apply Now
        </button>
      </div>
      <div className="relative w-1/2 " style={{ paddingTop: '48.26%' }}>
        {/* The iframe is positioned absolutely within the container */}
        <iframe
          className="absolute top-10 left-0 w-full h-[500px] rounded-lg"
          src={`https://www.youtube.com/embed/SKzuF__cEpQ`}
          //   src={undefined}
          title={'Pai for hospitals'}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
