import Image from "next/image";
import Link from "next/link";
import { toSlug } from "@/data/slug";
import { ShoppingBagIcon } from "./Icons";

export type Book = {
  title: string;
  author: string;
  price: string;
  src: string;
};

export default function BookCard({ title, author, price, src }: Book) {
  return (
    <article className="flex w-36 shrink-0 snap-start flex-col gap-2 md:w-auto">
      {/* Picture, title, author and price open the book page */}
      <Link href={`/books/${toSlug(title)}`} className="group flex flex-col gap-2">
        <div className="relative h-48 w-full overflow-hidden rounded-lg bg-[#dce2f3] shadow-sm transition-shadow md:h-auto md:aspect-[3/4] md:group-hover:shadow-[0_8px_24px_-4px_rgba(17,24,39,0.12)]">
          <Image
            src={src}
            alt={`${title} cover`}
            fill
            sizes="(min-width: 768px) 25vw, 144px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-1">
          <h4 className="truncate font-['Outfit',sans-serif] text-[15px] font-semibold leading-5 text-[#151c27] group-hover:underline md:text-lg md:leading-6">
            {title}
          </h4>
          <span className="truncate text-xs text-[#45464c] md:text-sm">{author}</span>
          <span className="font-['Outfit',sans-serif] text-[13px] font-semibold text-[#151c27] md:text-[15px]">
            {price}
          </span>
        </div>
      </Link>

      {/* Add to Cart is NOT inside the link, so it works without opening the book */}
      <button
        type="button"
        className="flex h-8 w-full items-center justify-center gap-1 rounded-lg bg-[#004085] font-['Outfit',sans-serif] text-[11px] font-semibold text-white transition-colors hover:bg-[#082b54] active:bg-[#072447] md:h-10 md:gap-2 md:text-sm"
      >
        <ShoppingBagIcon className="h-4 w-4" />
        Add to Cart
      </button>
    </article>
  );
}