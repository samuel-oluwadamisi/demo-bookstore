"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { Book } from "@/types/book";
import { priceRanges, sortBooks, type Sort } from "../../lib/filterBooks";
import BookGridCard from "../../components/search/BookGridCard";
import FilterBar from "./FilterBar";

const PAGE_SIZE = 8;

export default function SearchResults({ books }: { books: Book[] }) {
  const [sort, setSort] = useState<Sort>("newest");
  const [inStock, setInStock] = useState(false);
  const [range, setRange] = useState<number | null>(null);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const results = useMemo(() => {
    let list = books;
    if (inStock) list = list.filter((b) => b.inStock);
    if (range !== null) list = list.filter((b) => b.price >= priceRanges[range].min && b.price <= priceRanges[range].max);
    return sortBooks(list, sort);
  }, [books, sort, inStock, range]);

  const shown = results.slice(0, visible);

  return (
    <div className="space-y-6">
      <FilterBar sort={sort} onSort={setSort} inStock={inStock} onInStock={() => setInStock((v) => !v)} range={range} onRange={setRange} />

      {results.length === 0 ? (
        <div className="rounded-2xl bg-white p-10 text-center ring-1 ring-black/5">
          <h2 className="text-lg font-semibold">No books found</h2>
          <p className="mt-1 text-sm text-neutral-600">Try a different title, author, or category.</p>
          <Link href="/search" className="mt-5 inline-block rounded-xl bg-black px-5 py-3 text-sm font-medium text-white">Browse all books</Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
            {shown.map((book) => <BookGridCard key={book.id} book={book} />)}
          </div>

          <div className="mx-auto max-w-md space-y-4 text-center">
            <p className="text-xs text-neutral-600">Showing {shown.length} of {results.length} titles</p>
            <div className="h-1 overflow-hidden rounded-full bg-black/10">
              <div className="h-full bg-black" style={{ width: `${(shown.length / results.length) * 100}%` }} />
            </div>
            {shown.length < results.length && (
              <button onClick={() => setVisible((v) => v + PAGE_SIZE)} className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-medium ring-1 ring-black/5">
                Load more titles <ChevronDown size={16} />
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}