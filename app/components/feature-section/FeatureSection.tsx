import MetricCard from "../MetricCard";
import MiniCourseCard from "../MiniCourseCard";
import ProgressCard from "../Progresscard";
import StudentsCard from "../StudentsCard";
import StatsRow from "./Stats";

export default function FeaturesSection() {
  const growthStats = [
    { value: "12K", label: "Students" },
    { value: "70+", label: "Courses" },
    { value: "16", label: "Creators" },
  ];
  return (
    <section className="relative px-6 py-20 md:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-slate-50"
      >
        <div className="absolute -left-20 -top-10 h-130 w-160 rounded-full bg-lime-200/70 blur-3xl" />
        <div className="absolute -left-32 top-[38%] h-75 w-75 rounded-full bg-indigo-200/50 blur-3xl" />
        <div className="absolute -left-24 bottom-[10%] h-80 w-[320px] rounded-full bg-lime-200/70 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-105 w-130 rounded-full bg-indigo-200/60 blur-3xl" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="whitespace-pre-line font-poppins text-heading-m font-semibold leading-[1.2] text-shuttle-gray-950 md:text-5xl">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-10 max-w-lg text-lg leading-relaxed text-slate-600">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <StatsRow stats={growthStats} />
          </div>
          <div>
            <div className="relative mx-auto h-[520px] w-full max-w-[560px]">
              <div className="absolute left-0 top-0">
                <MiniCourseCard />
              </div>
              <img
                src="/images/hero.png"
                alt="Smiling student wearing headphones and holding a laptop"
                className="absolute bottom-0 right-0 w-full h-auto drop-shadow-2xl"
              />
              <img
                src="/images/shapes/spring-2-green.svg"
                alt=""
                aria-hidden
                className="absolute right-0 top-20 w-[215px] z-10"
              />
              <div className="absolute right-10 top-[195px]">
                <ProgressCard value={55} />
              </div>
            </div>
          </div>
          {/* <div className={visualFirst ? "lg:order-1" : ""}>{visual}</div> */}
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <div className="relative mx-auto h-130 w-full max-w-140">
              <img
                src="/images/hero-girl.png"
                alt="Smiling course creator wearing a headset and holding a tablet"
                className="absolute bottom-0 left-[60px] top-0 w-full drop-shadow-2xl z-10"
              />
              <MetricCard
                className="absolute left-0 top-0 w-[230px]"
                label="Total Revenue"
                period="July 1-28"
                value="$120.29"
                progress={50}
              />
              <MetricCard
                className="absolute left-0 top-[145px]"
                label="Year to Date"
                period="2023"
                value="$1,200.38"
                badge="+12$"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/shapes/spring-green.svg"
                alt=""
                aria-hidden
                className="absolute right-0 top-0 w-54 z-40"
              />
              <div className="absolute bottom-[60px] right-0 z-20">
                <StudentsCard />
              </div>
            </div>
          </div>
          <div>
            <h2 className="whitespace-pre-line font-poppins text-heading-m font-semibold leading-[1.2] text-shuttle-gray-950 md:text-5xl">
              Create & Manage Courses Easily.
            </h2>
            <p className="mt-10 max-w-xl text-base leading-loose text-slate-600">
              <strong className="font-semibold text-slate-900">
                ByteSpace
              </strong>{" "}
              supports individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>
            <ul className="mt-10 space-y-4">
              <li className="flex items-center gap-3 text-lg text-slate-800">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="shrink-0"
                >
                  <circle cx="12" cy="12" r="11" fill="#1d3ed8" />
                  <path
                    d="M7 12.5l3.2 3.2L17 9"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Share Your Expertise
              </li>
              <li className="flex items-center gap-3 text-lg text-slate-800">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="shrink-0"
                >
                  <circle cx="12" cy="12" r="11" fill="#1d3ed8" />
                  <path
                    d="M7 12.5l3.2 3.2L17 9"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Monetize Your Passion
              </li>
              <li className="flex items-center gap-3 text-lg text-slate-800">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="shrink-0"
                >
                  <circle cx="12" cy="12" r="11" fill="#1d3ed8" />
                  <path
                    d="M7 12.5l3.2 3.2L17 9"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Flexibility and Autonomy
              </li>
              <li className="flex items-center gap-3 text-lg text-slate-800">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  aria-hidden
                  className="shrink-0"
                >
                  <circle cx="12" cy="12" r="11" fill="#1d3ed8" />
                  <path
                    d="M7 12.5l3.2 3.2L17 9"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Build a Community
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
