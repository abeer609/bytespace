export default function CourseMeta({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="whitespace-nowrap rounded-full bg-white/40 px-3 py-1 text-xs text-slate-700 backdrop-blur-sm">
      {children}
    </span>
  );
}
