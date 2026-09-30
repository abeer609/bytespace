import { cn } from "../lib/utils";
import CourseMeta from "./course/CourseMeta";
import LevelBadge from "./LevelBadge";

type Props = {
  title?: string;
  image?: string;
  className?: string;
};

export default function MiniCourseCard({
  title = "Learn Figma from Basic",
  image = "images/courses/figma.png",
  className,
}: Props) {
  return (
    <article
      className={cn(
        "w-85 rounded-3xl border border-slate-200 bg-white p-3.5",
        className,
      )}
    >
      <div className="relative h-45 overflow-hidden rounded-2xl bg-slate-100">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-x-3 bottom-3 flex gap-2">
          <CourseMeta>17 Lessons</CourseMeta>
          <CourseMeta>2 hours 16 mins</CourseMeta>
          <CourseMeta>59 comments</CourseMeta>
        </div>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-xs text-slate-500">
        by <span className="text-blue-600">purepearl studio</span>
      </p>
      <div className="mt-4">
        <LevelBadge level="Beginner" />
      </div>
      <p className="mt-3 flex items-baseline gap-1">
        <span className="text-lg font-bold text-blue-700">$25</span>
        <span className="text-[11px] text-slate-500">/lifetime</span>
      </p>
    </article>
  );
}
