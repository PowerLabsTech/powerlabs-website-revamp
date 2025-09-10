export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="no-bg min-h-screen w-full bg-black">{children}</div>;
}
