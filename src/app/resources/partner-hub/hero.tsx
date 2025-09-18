export default function HeroPatnerHub() {
  return (
    <>
      <div className="w-full flex flex-col items-center space-y-8 md:space-y-12  text-center pt-10  md:pt-20">
        <div>
          {/* Responsive font size for the heading */}
          <h2 className=" metallic-text hero-text-heading mb-2">Partner Hub</h2>
        </div>

        <div>
          {/* Added max-width for better readability on large screens */}
          <p className="text-secondary max-w-3xl mx-auto">
            The Partner Hub is a dedicated resource center designed to provide
            our partners with premium sales materials and industry-specific
            insights. Within the hub, you’ll find tailored sales sheets that
            highlight how Pai Enterprise delivers measurable value across
            different industries.
          </p>
        </div>
      </div>
    </>
  );
}
