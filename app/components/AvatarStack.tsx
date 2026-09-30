type Props = { avatars: string[]; extra: number };

export default function AvatarStack({ avatars, extra }: Props) {
  return (
    <div className="flex items-center">
      {avatars.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`h-8 w-8 rounded-full border-2 border-white object-cover ${i > 0 ? "-ml-2" : ""}`}
        />
      ))}
      <span className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-lime-300 text-[11px] font-medium text-slate-900">
        {extra}+
      </span>
    </div>
  );
}
