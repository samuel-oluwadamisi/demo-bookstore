import Image from "next/image";
import Link from "next/link";
import { toSlug } from "@/data/slug";
import type { Book } from "../BookCard";
import { ShoppingBagIcon } from "../Icons";

export default function SearchResultCard({ title, author, price, src }: Book) {
  return (
    <article className="flex flex-col gap-3 rounded-2xl border border-[#e5e7eb] bg-white p-2.5 transition-shadow hover:shadow-[0_8px_24px_-4px_rgba(17,24,39,0.08)] md:p-3">
      {/* Picture, title and author open the book page */}
      <Link href={`/books/${toSlug(title)}`} className="group flex flex-1 flex-col gap-3">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-[#f3f4f6] ring-1 ring-black/5">
          <Image
            src={src}
            alt={`${title} cover`}
            fill
            sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-1 px-0.5">
          <h2 className="line-clamp-2 min-h-10 font-['Outfit',sans-serif] text-base font-semibold leading-5 text-[#151c27] group-hover:underline md:min-h-12 md:text-lg md:leading-6">
            {title}
          </h2>
          <p className="truncate text-sm text-[#6b7280]">{author}</p>
        </div>
      </Link>

      {/* Add to Cart is NOT inside the link */}
      <div className="flex flex-col gap-2 px-0.5 pb-0.5">
        <span className="font-['Outfit',sans-serif] text-lg font-semibold text-[#151c27]">
          {price}
        </span>
        <button
          type="button"
          className="flex h-10 w-full items-center justify-center gap-1.5 rounded-lg bg-[#004098] font-['Outfit',sans-serif] text-sm font-semibold text-white transition-colors hover:bg-[#082b54] active:bg-[#072447] md:h-11"
        >
          <ShoppingBagIcon className="h-4 w-4" />
          Add to Cart
        </button>
      </div>
    </article>
  );
}