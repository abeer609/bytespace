import CourseMeta from "./course/CourseMeta";
import LevelBadge from "./LevelBadge";

export default function MiniCourseCard() {
  return (
    <article className="w-85 rounded-3xl border border-slate-200 bg-white p-3.5">
      <div className="relative h-45 overflow-hidden rounded-2xl bg-slate-100">
        <img
          src="images/courses/figma.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-x-3 bottom-3 flex gap-2">
          <CourseMeta>17 Lessons</CourseMeta>
          <CourseMeta>2 hours 16 mins</CourseMeta>
        </div>
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">
        Learn Figma from Basic
      </h3>
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
