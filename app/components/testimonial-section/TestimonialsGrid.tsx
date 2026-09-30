import { Testimonial } from "./TestiMonialSection";

export default function TestimonialsGrid({ items }: { items: Testimonial[] }) {
  return (
    <figure className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-sm"
        >
          <img
            src={item.avatar}
            alt={`Portrait of ${item.name}`}
            className="h-[87px] w-[87px] rounded-full bg-slate-200 object-cover"
          />{" "}
          <figcaption className="mt-8">
            <p className="text-xl font-semibold text-black">{item.name}</p>
            <p className="mt-1 text-lg text-persian-blue-800">{item.role}</p>
          </figcaption>
          <blockquote className="mt-6 text-lg leading-relaxed text-slate-700">
            &ldquo;{item.quote}&rdquo;
          </blockquote>
        </div>
      ))}
    </figure>
  );
}
