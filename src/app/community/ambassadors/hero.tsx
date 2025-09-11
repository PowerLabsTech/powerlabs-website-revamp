import Button from '@/components/button';

export default function HeroAmbassadors() {
  return (
    <div className="w-full flex flex-col items-center justify-center space-y-8 md:space-y-12 p-4">
      <div className="text-center">
        <h3 className="metallic-text hero-text-heading">
          Be the spark on your campus.
        </h3>
      </div>

      <div className="text-secondary w-full max-w-3xl">
        <p className="text-center">
          The PowerLabs Campus Ambassadors Program is for students who want to
          lead real change — not just hold a title. You’ll drive on-campus
          innovation, gather insight from the field, and work directly with
          PowerLabs teams shaping the future of energy. If you’re ready to
          build, influence, and be seen, this is where you start.
        </p>
      </div>
      <div>
        <Button variant="amber">Apply Now</Button>
      </div>

      <div className="relative w-full max-w-4xl mx-auto aspect-video">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/SKzuF__cEpQ`}
          title={'Campus Ambassadors Program'}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
