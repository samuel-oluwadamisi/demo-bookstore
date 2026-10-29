"use client";
import { useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Shelf } from "@/types/book";
import BookCard from "./BookCard";

export default function BookShelf({ shelf }: { shelf: Shelf }) {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) =>
    track.current?.scrollBy({ left: dir * track.current.clientWidth * 0.8, behavior: "smooth" });

  return (
    <section aria-labelledby={shelf.id}>
      <div className="flex items-end justify-between">
        <div>
          <h2 id={shelf.id} className="text-xl font-semibold lg:text-2xl">{shelf.title}</h2>
          <p className="text-sm text-neutral-600">{shelf.subtitle}</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href={shelf.href} className="flex items-center text-sm font-medium">
            See all <ChevronRight size={16} />
          </Link>
          <div className="hidden gap-1 lg:flex">
            <button onClick={() => scroll(-1)} aria-label="Scroll left" className="rounded-full bg-white p-2 ring-1 ring-black/5"><ChevronLeft size={16} /></button>
            <button onClick={() => scroll(1)} aria-label="Scroll right" className="rounded-full bg-white p-2 ring-1 ring-black/5"><ChevronRight size={16} /></button>
          </div>
        </div>
      </div>

      <div ref={track} className="-mx-4 mt-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:px-0 lg:gap-6">
        {shelf.books.map((book) => <BookCard key={book.id} book={book} />)}
      </div>
    </section>
  );
}