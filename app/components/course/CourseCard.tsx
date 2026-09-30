import { Course } from "@/app/lib/types/course";
import AvatarStack from "@/app/components/AvatarStack";
import CourseMeta from "./CourseMeta";
import Rating from "@/app/components/Rating";
import LevelBadge from "@/app/components/LevelBadge";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-4">
      <div className="relative h-[175px] overflow-hidden rounded-2xl bg-slate-100">
        <img src={course.image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2">
          <CourseMeta>{course.lessons} Lessons</CourseMeta>
          <CourseMeta>{course.duration}</CourseMeta>
          <CourseMeta>{course.comments} Comments</CourseMeta>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 className="text-xl font-semibold text-slate-900">{course.title}</h3>
        <Rating value={course.rating} />
      </div>
      <p className="mt-1 text-xs text-slate-500">
        by <span className="text-blue-600">{course.author}</span>
      </p>

      <div className="mt-4 flex items-center gap-3">
        <LevelBadge level={course.level} />
        <AvatarStack avatars={course.learners} extra={course.extraLearners} />
      </div>

      <p className="mt-3 flex items-baseline gap-2">
        <span className="text-xl font-bold text-blue-700">${course.price}</span>
        <span className="text-xs text-slate-500">/lifetime</span>
      </p>
    </article>
  );
}
