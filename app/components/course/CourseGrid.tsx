// import type { Course } from "@/types/course";
import { Course } from "@/app/lib/types/course";
import CourseCard from "./CourseCard";

export default function CourseGrid({ courses }: { courses: Course[] }) {
  return (
    <div className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
