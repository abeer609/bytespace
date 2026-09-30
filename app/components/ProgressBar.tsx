type Props = { value: number; trackClassName?: string };

export default function ProgressBar({
  value,
  trackClassName = "bg-slate-100",
}: Props) {
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={`h-1.5 w-full overflow-hidden rounded-full ${trackClassName}`}
    >
      <div
        className="h-full rounded-full bg-lime-300"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
