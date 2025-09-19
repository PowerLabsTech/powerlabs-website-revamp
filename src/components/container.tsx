export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-12 space-y-20 lg:space-y-40">{children}</div>
    </div>
  );
}

export const HeroContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex  flex-col items-center ">
      <div className="w-full p-4 pb-0 sm:pb-0 lg:pb-0 sm:p-10 lg:p-20 lg:pt-12 pt-12">
        {children}
      </div>
    </div>
  );
};
