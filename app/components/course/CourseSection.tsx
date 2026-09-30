"use client";
import { Course } from "@/app/lib/types/course";
import CourseGrid from "./CourseGrid";
// import CategoryFilter from "./CategoryFilter";
import { useEffect, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import CourseNotFound from "./CourseNotFound";

export default function CoursesSection() {
  const [active, setActive] = useState("");
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);

  // Wire real filtering here once courses carry a `category` field.
  const learners = [
    "/images/avatars/1.png",
    "/images/avatars/2.png",
    "/images/avatars/3.png",
    "/images/avatars/4.png",
  ];

  const base = {
    author: "purepearl studio",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    level: "Beginner" as const,
    price: 25,
    learners,
    extraLearners: 26,
  };

  const [courses, setCourses] = useState([
    {
      ...base,
      id: "figma",
      title: "Learn Figma from Basic",
      image: "/images/courses/figma.png",
      categories: [
        "Featured",
        "Graphic Design",
        "Drawing & Painting",
        "UI/UX Design",
        "Digital Illustration",
      ],
    },
    {
      ...base,
      id: "icons",
      title: "Build Digital Icon Sets",
      image: "/images/courses/digital.png",
      categories: [
        "Drawing & Painting",
        "Graphic Design",
        "Crafts",
        "Creative Marketing",
        "Digital Illustration",
        "Animation",
      ],
    },
    {
      ...base,
      id: "big-data",
      title: "The Power of Big Data",
      image: "/images/courses/bigdata.png",
      categories: ["Data Science", "Featured", "Web Development"],
    },
    {
      ...base,
      id: "productivity",
      title: "Balancing Productivity and Focus",
      image: "/images/courses/productivity.png",
      categories: ["Productivity"],
    },
    {
      ...base,
      id: "money",
      title: "Mastering Money Management",
      image: "/images/courses/money.png",
      categories: ["Social Media", "Productivity", "Marketing"],
    },
    {
      ...base,
      id: "startup",
      title: "From Idea to Startup Success",
      image: "/images/courses/startup.png",
      categories: [
        "Music",
        "Cooking",
        "Photography",
        "Film & Video",
        "Marketing",
      ],
    },
  ]);

  useEffect(() => {
    if (active == "") {
      setFilteredCourses([...courses]);
    } else {
      setFilteredCourses(
        courses.filter((course) => course.categories.includes(active)),
      );
    }
  }, [active]);

  const categories: string[] = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography",
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking",
  ];

  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="whitespace-pre-line max-w-lg mx-auto font-poppins text-heading-m font-bold leading-tight text-slate-900 md:text-[40px]">
          Discover Your Passion, Build Your Skills
        </h2>
        <p className="mt-6 text-base leading-relaxed text-shuttle-gray-400">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>
      </div>
      <CategoryFilter
        categories={categories}
        active={active}
        onChange={setActive}
      />

      {filteredCourses.length > 0 ? (
        <CourseGrid courses={filteredCourses} />
      ) : (
        <CourseNotFound />
      )}
    </section>
  );
}
