import ProgressBar from "./ProgressBar";

type Props = {
  label: string;
  period: string;
  value: string;
  progress?: number;
  badge?: string;
  className?: string;
};

export default function MetricCard({
  label,
  period,
  value,
  progress,
  badge,
  className = "",
}: Props) {
  return (
    <div
      className={`rounded-xl bg-persian-blue-800 p-3.5 text-shuttle-gray-50 shadow-lg ${className}`}
    >
      <p className="font-medium">{label}</p>
      <p className="text-[10px] text-white/70">{period}</p>
      <p className="mt-2 text-2xl font-poppins font-bold">{value}</p>
      {progress !== undefined && (
        <div className="mt-2">
          <ProgressBar value={progress} trackClassName="bg-white" />
        </div>
      )}
      {badge && (
        <span className="mt-2 inline-block rounded-full bg-electric-lime-400 px-2 py-0.5 text-[10px] font-medium text-slate-900">
          {badge}
        </span>
      )}
    </div>
  );
}
