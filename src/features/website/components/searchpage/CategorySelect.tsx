"use client";

import { useRouter } from "next/navigation";
import { categories } from "@/data/categories";
import { ChevronDownIcon } from "../Icons";

type CategorySelectProps = {
  value?: string;
};

export default function CategorySelect({ value = "" }: CategorySelectProps) {
  const router = useRouter();

  return (
    <div className="flex w-full flex-col gap-1.5 md:w-72 md:shrink-0">
      <label
        htmlFor="category"
        className="font-['Outfit',sans-serif] text-[13px] font-medium text-[#45464c]"
      >
        Pick a category
      </label>
      <div className="relative">
        {/* key={value} resets the dropdown whenever the URL's category changes (e.g. after Clear) */}
        <select
          key={value}
          id="category"
          defaultValue={value}
          onChange={(e) =>
            router.push(
              e.target.value ? `/search?category=${e.target.value}` : "/search"
            )
          }
          className="h-12 w-full cursor-pointer appearance-none rounded-xl border-2 border-[#c6c6cd] bg-white pl-4 pr-11 font-['Outfit',sans-serif] text-base font-medium text-[#151c27] shadow-sm outline-none transition-colors hover:border-[#004085] focus:border-[#004085]"
        >
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
        <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#004085]" />
      </div>
    </div>
  );
}