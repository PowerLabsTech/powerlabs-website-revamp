export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button onClick={onClick} className="btn-ghost">
      {children} <span className=" text-xl">&rarr;</span>
    </button>
  );
}
