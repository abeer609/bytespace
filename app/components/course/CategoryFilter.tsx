"use client";

import CategoryPill from "./CategoryPill";

type Props = {
  categories: string[];
  active: string;
  onChange: (category: string) => void;
};

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: Props) {
  return (
    <div className="mx-auto mt-12 flex max-w-5xl flex-wrap items-center justify-center gap-x-3 gap-y-4">
      {categories.map((category) => (
        <CategoryPill
          key={category}
          label={category}
          active={category === active}
          onClick={() => {
            if (category == active) {
              onChange("");
            } else {
              onChange(category);
            }
          }}
        />
      ))}
      <button
        type="button"
        className="px-2 text-[15px] font-medium text-persian-blue-800 hover:underline"
      >
        + More
      </button>
    </div>
  );
}
