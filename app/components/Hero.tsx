import { Search } from "lucide-react";
import ProgressCard from "./Progresscard";
import StudentsCard from "./StudentsCard";

const Hero = () => {
  return (
    <main className="text-shuttle-gray-50 mt-12">
      <div className="space-y-8 px-4 max-w-5xl mx-auto">
        <h1 className="text-heading-m font-poppins lg:text-heading-l font-bold text-center leading-[120%]">
          Get Access to Hundreds Courses Available
        </h1>
        <p className="text-center text-base">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>
      </div>

      {/* search */}

      <div className="flex justify-center gap-4 mt-15 px-2">
        <div className="flex flex-1 md:flex-0">
          <div className="bg-white pl-6 p-2 flex items-center rounded-tl-3xl rounded-bl-3xl">
            <Search className="w-6 h-6 text-shuttle-gray-400 " />
          </div>
          <input
            type="text"
            placeholder="Course, topic, creator"
            className="py-3 pe-6 w-full md:w-115 bg-white placeholder:shadow-shuttle-gray-400 text-sm xl:text-base  text-shuttle-gray-400 outline-0 focus:outline-shuttle-gray-200 rounded-tr-3xl rounded-br-3xl group-focus:outline-2"
          />
        </div>
        <button
          className="py-3 px-6
         bg-electric-lime-400 
         text-shuttle-gray-950 
         text-sm
         xl:text-lg 
         font-medium rounded-full cursor-pointer hover:bg-electric-lime-500"
        >
          Search
        </button>
      </div>

      {/* hero image */}
      <div className="banner relative overflow-hidden max-w-6xl mx-auto w-full">
        {/* card */}
        <div
          className="absolute hidden xl:block
              card w-[216px] rounded-2xl 
              space-y-2 p-4 bg-white 
              text-shuttle-gray-950
              top-30 left-70 z-10
              
              "
        >
          <h5 className="font-medium text-base">UI/UX Design</h5>
          <div className="flex items-center text-xs gap-3">
            <p>200 courses</p>
            <p>1000+ students</p>
          </div>
        </div>
        <ProgressCard
          className="absolute top-50 right-25 z-10 hidden xl:block"
          value={55}
        />
        <StudentsCard className="absolute bottom-20 left-50 z-20 hidden xl:block" />

        <div className="border-electric-lime-400 bg-transparent h-[550px] border-75 sm:border-250 sm:h-285 w-full top-30 rounded-full absolute"></div>
        <div className="flex justify-center relative z-10 left-10">
          <img
            src="/images/hero-banner.png"
            alt=""
            className="max-w-180 w-full"
          />
        </div>
        {/* <div className="bg-electric-lime-400 aspect-square w-[120%] md:h-285 md:w-285 absolute top-20 rounded-full transform -translate-x-1/2 left-1/2"></div> */}
      </div>

      {/* props */}

      <img
        alt="prop"
        src="/images/shapes/spring-green.svg"
        className="absolute h-22 w-22 top-56 -left-4 md:top-64 lg:top-56 lg:-left-15 xl:-left-[118px] lg:h-48 lg:w-48 xl:h-[385px] xl:w-[385px]"
        height={385}
        width={385}
      />

      <img
        alt="prop"
        src="/images/shapes/spring-white.svg"
        className="absolute top-158 -left-4 h-30 w-30 xl:top-[477px] xl:left-[183px] xl:h-[175px] xl:w-[175px]"
        height={175}
        width={175}
      />
      <img
        alt="prop"
        src="/images/shapes/circle.svg"
        className="hidden xl:block absolute top-[682px] left-[18px] h-[342px] w-[342px] object-contain"
        height={342}
        width={342}
      />
      <img
        alt="prop"
        src="/images/shapes/cylinder.svg"
        className="absolute top-[24%] -right-18 xl:top-[15%] xl:-right-31 h-44 w-44 xl:h-[370px] xl:w-[370px] object-contain"
        height={370}
        width={370}
      />
      <img
        alt="prop"
        src="/images/shapes/pyramid.svg"
        className="absolute top-154 right-0 h-30 w-30 xl:top-[464px] xl:right-50 xl:h-[188px] xl:w-[188px] object-contain"
        height={188}
        width={188}
      />

      <img
        alt="prop"
        src="/images/shapes/spring-2-white.svg"
        className="absolute hidden xl:block bottom-7 -right-3 h-[330px] w-[330px] object-contain"
        height={330}
        width={330}
      />
    </main>
  );
};

export default Hero;
