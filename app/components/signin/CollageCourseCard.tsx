import AvatarStack from "../AvatarStack";
import CourseMeta from "../course/CourseMeta";
import LevelBadge from "../LevelBadge";

type Props = {
  title: string;
  image: string;
  className?: string;
};

const avatars = [1, 2, 3, 4].map((n) => `images/avatars/${n}.png`);

export default function CollageCourseCard({
  title,
  image,
  className = "",
}: Props) {
  return (
    <article
      className={`h-[446px] w-[433px] rounded-[28px] border border-slate-200 bg-white p-[18px] shadow-xl ${className}`}
    >
      <div className="relative h-[228px] overflow-hidden rounded-2xl bg-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-x-3 bottom-3 flex gap-2">
          <CourseMeta>17 Lessons</CourseMeta>
          <CourseMeta>2 hours 16 mins</CourseMeta>
          <CourseMeta>59 Comments</CourseMeta>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 className="truncate text-2xl font-semibold text-slate-900">
          {title}
        </h3>
        <span className="flex shrink-0 items-center gap-1 text-lg text-slate-500">
          4.5
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="#d9f94a"
            aria-hidden
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </span>
      </div>
      <p className="mt-1 text-sm text-slate-500">
        by <span className="text-blue-600">purepearl studio</span>
      </p>

      <div className="mt-4 flex items-center gap-3">
        <LevelBadge level="Beginner" />
        <AvatarStack avatars={avatars} extra={26} />
      </div>

      <p className="mt-4 flex items-baseline gap-1">
        <span className="text-2xl font-bold text-blue-700">$25</span>
        <span className="text-sm text-slate-500">/lifetime</span>
      </p>
    </article>
  );
}
