export default function ProgressCard({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  return (
    <div className={`w-58 rounded-2xl bg-white p-4 shadow-lg ${className}`}>
      <p className="text-sm font-medium text-slate-700">Learning Progress</p>
      <p className="mt-2 text-5xl font-semibold text-slate-900">{value}%</p>
      <div className="mt-3">
        <div
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
          className={`h-1.5 w-full overflow-hidden rounded-full bg-slate-100`}
        >
          <div
            className="h-full rounded-full bg-lime-300"
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    </div>
  );
}
