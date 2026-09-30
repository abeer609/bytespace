type Props = { level: string };

export default function LevelBadge({ level }: Props) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-600">
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="currentColor"
        aria-hidden
      >
        <rect x="1" y="8" width="3" height="5" rx="0.5" />
        <rect x="5.5" y="5" width="3" height="8" rx="0.5" opacity="0.35" />
        <rect x="10" y="2" width="3" height="11" rx="0.5" opacity="0.35" />
      </svg>
      {level}
    </span>
  );
}
