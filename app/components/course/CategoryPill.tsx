type Props = { label: string; active: boolean; onClick: () => void };

export default function CategoryPill({ label, active, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full font-medium px-4 py-3 transition-colors focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
        active
          ? "bg-electric-lime-400 font-medium text-slate-900"
          : "bg-shuttle-gray-50 text-shuttle-gray-700 hover:bg-shuttle-gray-100"
      }`}
    >
      {label}
    </button>
  );
}
