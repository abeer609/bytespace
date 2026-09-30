type Props = { level: string };

export default function LevelBadge({ level }: Props) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-600">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#1f1f1f"
        className="w-5 h-5"
      >
        <path d="M200-160v-240h120v240H200Zm240 0v-440h120v440H440Zm240 0v-640h120v640H680Z" />
      </svg>
      {level}
    </span>
  );
}
