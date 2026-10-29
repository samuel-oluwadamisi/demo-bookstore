"use client";
import Image from "next/image";
import { Plus } from "lucide-react";
import type { Book } from "@/types/book";
import { formatPrice } from "@/lib/format";
import { useCart } from "@/context/CartContext";

export default function BookCard({ book }: { book: Book }) {
  const { add } = useCart();
  return (
    <article className="w-[42%] shrink-0 snap-start sm:w-44 lg:w-52">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
        <Image src={book.image} alt={`${book.title} cover`} fill sizes="(min-width:1024px) 208px, (min-width:640px) 176px, 42vw" className="object-cover" />
        <button
          onClick={() => add(book)}
          aria-label={`Add ${book.title} to cart`}
          className="absolute bottom-2 right-2 grid h-9 w-9 place-items-center rounded-full bg-black text-white transition-transform active:scale-90"
        >
          <Plus size={18} />
        </button>
      </div>
      <h3 className="mt-3 truncate text-sm font-semibold lg:text-base">{book.title}</h3>
      <p className="truncate text-sm text-neutral-600">{book.author}</p>
      <p className="mt-0.5 text-sm font-semibold">{formatPrice(book.price)}</p>
    </article>
  );
}
