export default function CourseNotFound() {
  return (
    <main className="flex min-h-125 w-full items-center justify-center px-6 py-16">
      <div className="flex max-w-xl flex-col items-center text-center">
        <div className="relative mb-8">
          <div className="flex h-32 w-32 items-center justify-center rounded-full border-10 border-lime-300">
            <div className="flex flex-col items-center">
              <div className="mb-5 flex gap-8">
                <span className="h-4 w-4 rounded-full bg-lime-300" />
                <span className="h-4 w-4 rounded-full bg-lime-300" />
              </div>

              <div className="h-7 w-14 rounded-t-full border-t-8 border-lime-400" />
            </div>
          </div>

          <span className="absolute -right-7 top-1 h-8 w-2 rotate-12 rounded-full bg-lime-300" />
          <span className="absolute -right-5 top-10 h-7 w-2 -rotate-45 rounded-full bg-lime-300" />
          <span className="absolute -right-2 top-18 h-2 w-8 rounded-full bg-lime-300" />

          <div className="absolute -bottom-4 left-1/2 -z-10 h-5 w-36 -translate-x-1/2 rounded-[50%] bg-lime-100" />
        </div>

        <h2 className="text-heading-m font-poppins font-bold tracking-tight text-slate-900 sm:text-4xl">
          No Course Available
        </h2>

        <p className="mt-4 max-w-md text-base leading-7 text-slate-500 sm:text-lg">
          It looks like there are no courses here right now.
          <br className="hidden sm:block" />
          Check back later or explore other sections.
        </p>
      </div>
    </main>
  );
}
