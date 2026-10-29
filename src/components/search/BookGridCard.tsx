"use client";
import Image from "next/image";
import { Plus } from "lucide-react";
import type { Book } from "@/types/book";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/context/CartContext";

export default function BookGridCard({ book }: { book: Book }) {
  const { add } = useCart();
  return (
    <article className={`rounded-2xl bg-white p-2.5 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md sm:p-3 ${book.inStock ? "" : "opacity-60"}`}>
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-100">
        <Image src={book.image} alt={`${book.title} cover`} fill sizes="(min-width:1280px) 20vw, (min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw" className="object-cover" />
        {book.tag && (
          <span className="absolute left-2 top-2 rounded-full bg-black px-2.5 py-1 text-[11px] font-semibold text-white">{book.tag}</span>
        )}
      </div>

      <div className="px-1 pb-1 pt-3">
        <p className="flex items-center gap-1.5 text-xs text-neutral-600">
          {book.inStock && <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" aria-hidden />}
          {book.inStock ? `In Stock · ${book.format}` : "Out of stock"}
        </p>
        <h3 className="mt-1 line-clamp-2 min-h-[2.75rem] text-base font-semibold leading-snug">{book.title}</h3>
        <p className="truncate text-sm text-neutral-600">{book.author}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className={`text-sm font-semibold ${book.inStock ? "" : "line-through"}`}>{formatPrice(book.price)}</span>
          <button
            onClick={() => add(book)}
            disabled={!book.inStock}
            aria-label={`Add ${book.title} to cart`}
            className="grid h-9 w-9 place-items-center rounded-full bg-black text-white transition-transform active:scale-90 disabled:bg-neutral-400"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}