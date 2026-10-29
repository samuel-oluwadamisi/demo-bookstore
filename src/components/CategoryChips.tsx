import Link from "next/link";

type Props = { categories: string[]; active?: string };

export default function CategoryChips({ categories, active = "All" }: Props) {
  return (
    <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:px-0">
      {categories.map((c) => (
        <Link
          key={c}
          href={c === "All" ? "/search" : `/search?category=${encodeURIComponent(c)}`}
          className={`shrink-0 rounded-full px-4 py-2 text-sm transition-colors ${
            active === c ? "bg-black text-white" : "bg-white text-neutral-800 ring-1 ring-black/5"
          }`}
        >
          {c}
        </Link>
      ))}
    </div>
  );
}