"use client";

import Image from "next/image";

const logos = [
  {
    src: "/images/partners/1.png",
    alt: "Logoipsum",
  },
  {
    src: "/images/partners/2.png",
    alt: "Logoipsum",
  },
  {
    src: "/images/partners/3.png",
    alt: "Logoipsum",
  },
  {
    src: "/images/partners/4.png",
    alt: "Logoipsum",
  },
  {
    src: "/images/partners/5.png",
    alt: "Logoipsum",
  },
];

export default function Partners() {
  return (
    <section className="w-full overflow-hidden border-y bg-shuttle-gray-50 border-gray-200 py-20">
      <div className="flex w-max animate-marquee">
        {/* First set */}
        <div className="flex shrink-0 items-center gap-16 px-8 md:gap-24 md:px-12">
          {logos.map((logo, index) => (
            <Image
              key={`first-${index}`}
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={42}
              className="h-8 w-auto object-contain opacity-60 md:h-9"
            />
          ))}
        </div>

        {/* Duplicate set for infinite scrolling */}
        <div className="flex shrink-0 items-center gap-16 px-8 md:gap-24 md:px-12">
          {logos.map((logo, index) => (
            <Image
              key={`second-${index}`}
              src={logo.src}
              alt={logo.alt}
              width={140}
              height={42}
              className="h-8 w-auto object-contain opacity-60 md:h-9"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
