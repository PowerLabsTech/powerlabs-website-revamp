export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-center sm:pt-10">
      <div className="w-full p-4 sm:p-10 lg:p-20 space-y-20 pt-12 lg:space-y-40">
        {children}
      </div>
    </div>
  );
}
