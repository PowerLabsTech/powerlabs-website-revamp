const ambassadorQualifications = [
  'You are above 16',
  'You are a qualified student in any department of UNILAG, YABATECH, UI, Covenant University, UNN, UNILORIN, UNIBEN.',
  'You maintain a strong, engaged social media presence.',
  'You are committed to active learning and personal development.',
  'Curious, focused, collaborative, and never afraid to test',
];

export default function BecomeAmbassador() {
  return (
    <>
      <div className="w-full bg-[#161922] p-8 md:p-16 lg:p-20 flex justify-center">
        <div className="w-full max-w-3xl space-y-10">
          <div className="text-center lg:text-left">
            <h3 className="metallic-text text-3xl md:text-4xl">
              You Can Be An Ambassador If:
            </h3>
          </div>

          <div className="space-y-8">
            {ambassadorQualifications.map((text, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="border-3 border-amber-600 rounded-full w-5 h-5 flex-shrink-0 mt-1"></div>
                <div>
                  <p className="text-xl">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
