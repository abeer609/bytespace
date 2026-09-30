type Props = { stats: { value: string; label: string }[] };

export default function StatsRow({ stats }: Props) {
  return (
    <dl className="mt-12 flex flex-wrap gap-x-14 gap-y-6">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-4xl font-medium text-persian-blue-800">
            {stat.value}
          </p>
          <p className="mt-1 text-base text-shuttle-gray-700">{stat.label}</p>
        </div>
      ))}
    </dl>
  );
}
