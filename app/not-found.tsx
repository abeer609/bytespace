import Link from "next/link";

const NotFound = () => {
  return (
    <section className="bg-grid bg-persian-blue-800 text-white -mt-20 md:-mt-30 pt-20 md:pt-30">
      <div className="flex flex-col items-center px-4 pt-16 pb-24 md:pt-24 md:pb-32 text-center">
        <h1
          aria-label="404"
          className="font-poppins font-semibold leading-none select-none text-[140px] sm:text-[240px] md:text-[360px] bg-gradient-to-b from-electric-lime-400 to-transparent bg-clip-text text-transparent"
        >
          404
        </h1>

        <h2 className="font-poppins text-heading-m font-semibold text-white max-w-3xl -mt-10 sm:-mt-14 md:-mt-26">
          The page you are looking for doesn&rsquo;t exist
        </h2>

        <p className="mt-8 text-sm md:text-base text-white/90">
          Try to use a correct url or go back to homepage to start again
        </p>

        <Link
          href="/"
          className="mt-10 rounded-full bg-electric-lime-400 px-6 py-3 text-sm md:text-base font-medium text-black transition hover:brightness-95"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
