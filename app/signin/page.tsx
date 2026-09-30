import CollageCourseCard from "../components/signin/CollageCourseCard";
import LoginCard from "../components/signin/LoginCard";
import StudentsCard from "../components/StudentsCard";

const SigninPage = () => {
  return (
    <main className="bg-grid relative min-h-screen overflow-hidden bg-persian-blue-800 px-6 py-10 md:px-16">
      <div className="relative mx-auto grid max-w-[1400px] items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="text-white">
          {/* <LogoMark /> */}
          <div className="mt-14 min-h-[150px]">
            <h2 className="text-heading-xs font-poppins font-semibold">
              Sign in with ease
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/90">
              Experience a seamless and efficient sign-in process that grants
              you instant access to a world of knowledge.
            </p>
          </div>
          <div className="mt-16">
            <div
              aria-hidden
              className="relative hidden h-[650px] w-[576px] lg:block"
            >
              <CollageCourseCard
                title="Build Digital Icon Sets"
                image="/images/courses/digital.png"
                className="absolute left-0 top-[104px] w-[433px] rounded-[28px] border border-slate-200 bg-white p-[18px] shadow-xl"
              />
              <CollageCourseCard
                title="The Power of Big Data"
                image="/images/courses/bigdata.png"
                className="absolute left-[130px] top-0 w-[433px] rounded-[28px] border border-slate-200 bg-white p-[18px] shadow-xl"

                // className="absolute left-[130px] top-0"
              />
              <StudentsCard className="absolute bottom-10 shadow-md left-[263px]" />

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/shapes/circle-lime.png"
                alt=""
                className="absolute left-[58px] top-[46px] w-37"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/shapes/pyramid-lime.png"
                alt=""
                className="absolute bottom-0 left-0 w-47"
              />
              <img
                src="images/shapes/spring-white.svg"
                alt=""
                className="absolute right-0 top-[405px] w-[135px]"
              />
            </div>
          </div>
        </div>

        <div className="lg:mt-25">
          <LoginCard />
        </div>
      </div>
    </main>

    // <AuthLayout
    //   heroTitle="Sign in with ease"
    //   heroDescription=""
    // >
    //   <LoginCard />
    // </AuthLayout>
  );
};

export default SigninPage;
