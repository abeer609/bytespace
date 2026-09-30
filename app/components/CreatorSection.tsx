import Link from "next/link";

export default function CreatorCtaSection() {
  return (
    <section className="bg-grid relative overflow-hidden bg-blue-700 px-6 py-24 md:py-28">
      <img
        src="/images/shapes/spring-green.svg"
        alt=""
        aria-hidden
        className={`pointer-events-none absolute h-auto select-none -left-10 -top-6 w-44 md:w-56`}
      />
      <img
        src="/images/shapes/cone.svg"
        alt=""
        aria-hidden
        className={`pointer-events-none absolute h-auto select-none -left-6 top-[48%] hidden w-32 md:block`}
      />
      <img
        src="/images/shapes/spring-white.svg"
        alt=""
        aria-hidden
        className={`pointer-events-none absolute h-auto select-none left-[16%] top-4 hidden w-24 md:block`}
      />
      <img
        src="/images/shapes/circle.svg"
        alt=""
        aria-hidden
        className={`pointer-events-none absolute h-auto select-none -bottom-16 left-[5%] hidden w-64 md:block`}
      />
      <img
        src="/images/shapes/pyramid.svg"
        alt=""
        aria-hidden
        className={`pointer-events-none absolute h-auto select-none right-[13%] top-2 hidden w-28 md:block`}
      />
      <img
        src="/images/shapes/cylinder.svg"
        alt=""
        aria-hidden
        className={`pointer-events-none absolute h-auto select-none -right-10 -top-4 w-40 md:w-56`}
      />
      <img
        src="/images/shapes/spring-2-white.svg"
        alt=""
        aria-hidden
        className={`pointer-events-none absolute h-auto select-none -bottom-10 right-[2%] hidden w-44 md:block`}
      />

      <div className="relative mx-auto max-w-3xl text-center text-white">
        <h2 className="text-heading-m text-shuttle-gray-50 font-poppins font-semibold leading-tight md:text-5xl">
          Unlock Your Potential as a Creator with ByteSpace
        </h2>
        <p className="mx-auto mt-14 max-w-2xl text-base leading-relaxed text-white/90">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <div className="mt-12">
          <Link
            href="/creators/join"
            className="inline-block rounded-full bg-electric-lime-400 px-6 py-3 text-base font-medium text-slate-900 transition-colors hover:bg-lime-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}
