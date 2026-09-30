const categories = [
  {
    title: "Design",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        className="w-9 h-9 fill-shuttle-gray-950"
      >
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <g />
          <g>
            <path d="M20.97,7.27c0.39-0.39,0.39-1.02,0-1.41l-2.83-2.83c-0.39-0.39-1.02-0.39-1.41,0l-4.49,4.49L8.35,3.63 c-0.78-0.78-2.05-0.78-2.83,0l-1.9,1.9c-0.78,0.78-0.78,2.05,0,2.83l3.89,3.89L3,16.76V21h4.24l4.52-4.52l3.89,3.89 c0.95,0.95,2.23,0.6,2.83,0l1.9-1.9c0.78-0.78,0.78-2.05,0-2.83l-3.89-3.89L20.97,7.27z M5.04,6.94l1.89-1.9c0,0,0,0,0,0 l1.27,1.27L7.02,7.5l1.41,1.41l1.19-1.19l1.2,1.2l-1.9,1.9L5.04,6.94z M16.27,14.38l-1.19,1.19l1.41,1.41l1.19-1.19l1.27,1.27 l-1.9,1.9l-3.89-3.89l1.9-1.9L16.27,14.38z M6.41,19H5v-1.41l9.61-9.61l1.3,1.3l0.11,0.11L6.41,19z M16.02,6.56l1.41-1.41 l1.41,1.41l-1.41,1.41L16.02,6.56z" />
          </g>
        </g>
      </svg>
    ),
  },
  {
    title: "Development",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-9 h-9 fill-shuttle-gray-950"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z" />
      </svg>
    ),
  },
  {
    title: "IT & Software",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-9 h-9 fill-shuttle-gray-950"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" />
      </svg>
    ),
  },
  {
    title: "Business",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-9 h-9 fill-shuttle-gray-950"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
      </svg>
    ),
  },
  {
    title: "Marketing",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        className="w-9 h-9 fill-shuttle-gray-950"
      >
        <rect fill="none" height="24" width="24" />
        <path d="M11,14H9c0-4.97,4.03-9,9-9v2C14.13,7,11,10.13,11,14z M18,11V9c-2.76,0-5,2.24-5,5h2C15,12.34,16.34,11,18,11z M7,4 c0-1.11-0.89-2-2-2S3,2.89,3,4s0.89,2,2,2S7,5.11,7,4z M11.45,4.5h-2C9.21,5.92,7.99,7,6.5,7h-3C2.67,7,2,7.67,2,8.5V11h6V8.74 C9.86,8.15,11.25,6.51,11.45,4.5z M19,17c1.11,0,2-0.89,2-2s-0.89-2-2-2s-2,0.89-2,2S17.89,17,19,17z M20.5,18h-3 c-1.49,0-2.71-1.08-2.95-2.5h-2c0.2,2.01,1.59,3.65,3.45,4.24V22h6v-2.5C22,18.67,21.33,18,20.5,18z" />
      </svg>
    ),
  },
  {
    title: "Photography",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        className="w-9 h-9 fill-shuttle-gray-950"
      >
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <g>
            <path d="M20,5h-3.17L15,3H9L7.17,5H4C2.9,5,2,5.9,2,7v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V7C22,5.9,21.1,5,20,5z M20,19H4V7 h4.05l1.83-2h4.24l1.83,2H20V19z" />
            <circle cx="12" cy="11" r="2" />
            <path d="M14.78,14.58C13.93,14.21,12.99,14,12,14s-1.93,0.21-2.78,0.58C8.48,14.9,8,15.62,8,16.43V17h8v-0.57 C16,15.62,15.52,14.9,14.78,14.58z" />
          </g>
        </g>
      </svg>
    ),
  },
];

export default function LearningCategories() {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-heading-s font-poppins font-semibold tracking-tight text-shuttle-gray-950 sm:text-4xl">
            Explore Diverse Learning Paths at Bytespace
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-shuttle-gray-400 sm:text-base">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-8">
          {categories.map(({ title, icon }) => (
            <button
              key={title}
              className="group flex h-[167px] w-[167px]  flex-col items-center justify-center rounded-[22px] border border-[#d6d7db] bg-white px-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#c6ff00] hover:shadow-lg"
            >
              <div className="flex w-15 h-15 items-center justify-center rounded-full bg-electric-lime-400">
                {icon}
              </div>

              <span className="mt-3 text-xl font-medium text-[#252525]">
                {title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
