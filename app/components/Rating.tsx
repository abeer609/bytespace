export default function Rating({ value }: { value: number }) {
  return (
    <div
      className="flex shrink-0 items-center gap-1 text-slate-400"
      aria-label={`Rated ${value} out of 5`}
    >
      <span className="text-base">{value}</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-slate-300"
        aria-hidden
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    </div>
  );
}
