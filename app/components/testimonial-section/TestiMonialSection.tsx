import TestimonialsGrid from "./TestimonialsGrid";
export type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: "sarah",
      name: "Sarah M.",
      role: "Enthusiastic Learner",
      avatar: "/images/avatars/sara.png",
      quote:
        "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    },
    {
      id: "james",
      name: "James L.",
      role: "Lifelong Learner",
      avatar: "/images/avatars/james.png",
      quote:
        "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    },
    {
      id: "alex",
      name: "Alex B.",
      role: "Inspired Creator",
      avatar: "/images/avatars/alex.png",
      quote:
        "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    },
  ];
  return (
    <section className="relative px-6 py-20 md:px-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-slate-50"
      >
        <div className="absolute -right-24 top-0 h-[520px] w-[720px] rounded-full bg-lime-200/70 blur-3xl" />
        <div className="absolute left-[45%] top-10 h-[260px] w-[260px] rounded-full bg-lime-300/60 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-[420px] w-[520px] rounded-full bg-indigo-200/70 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 className="whitespace-pre-line font-poppins text-heading-m font-semibold leading-[1.2] text-black md:text-5xl">
            Discover What Our Community Is Saying
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>
        <TestimonialsGrid items={testimonials} />
      </div>
    </section>
  );
}
