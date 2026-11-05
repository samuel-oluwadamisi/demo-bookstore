import Link from "next/link";
import { categories } from "@/data/categories";
import CategorySelect from "../components/searchpage/CategorySelect";
import type { Book } from "../components/BookCard";
import SearchResultCard from "../components/searchpage/SearchResultCard";
import { BookOpenIcon, CloseIcon, SearchIcon } from "../components/Icons";

type SearchResultsPageProps = {
  query?: string; // what is in the search box (title or author)
  category?: string; // category value, e.g. "fiction"
  books: Book[]; // the books to show right now
  total: number; // how many books matched in total
};

export default function SearchResultsPage({
  query = "",
  category = "",
  books,
  total,
}: SearchResultsPageProps) {
  const categoryLabel =
    categories.find((item) => item.value === category)?.label ?? "All Books";

  // A search shows its own heading. The category name only shows when no search is active.
  const heading = query ? `Results for “${query}”` : categoryLabel;

  return (
    <div className="mx-auto w-full max-w-[1360px] px-4 pb-10 pt-4 md:px-8 md:pt-8 lg:px-16">
      <div className="flex flex-col gap-6 md:gap-8">
        {/* Search + category dropdown */}
        <section className="flex flex-col gap-4 md:flex-row md:items-end md:gap-6">
          <form action="/search" className="flex w-full flex-1 flex-col gap-1.5">
            <label
              htmlFor="book-search"
              className="font-['Outfit',sans-serif] text-[13px] font-medium text-[#45464c]"
            >
              Search for a book or author
            </label>
            <div className="flex h-12 items-center overflow-hidden rounded-xl border-2 border-[#004085] bg-white shadow-sm">
              <SearchIcon
                className="ml-3.5 mr-2 h-5 w-5 shrink-0 text-[#004085]"
                strokeWidth={2.2}
              />
              <input
                id="book-search"
                name="q"
                type="text"
                required
                defaultValue={query}
                placeholder="Type a title or author"
                className="h-full min-w-0 flex-1 border-0 bg-transparent pr-2 text-base text-neutral-800 outline-none placeholder:text-neutral-500"
              />
              {query && (
                <Link
                  href="/search"
                  aria-label="Clear search"
                  className="mr-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#45464c] transition-colors hover:bg-[#f0f3ff]"
                >
                  <CloseIcon className="h-5 w-5" />
                </Link>
              )}
              <button
                type="submit"
                className="h-full shrink-0 bg-[#004085] px-5 text-base font-semibold text-white transition-colors hover:bg-[#082b54] active:bg-[#072447] md:px-8"
              >
                Search
              </button>
            </div>
          </form>

          <CategorySelect value={category} />
        </section>

        {/* What you're looking at */}
        <section className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h1 className="break-words font-['Outfit',sans-serif] text-2xl font-semibold tracking-tight text-[#151c27] md:text-3xl">
            {heading}
          </h1>
          <span className="text-sm text-[#45464c]">
            {total} {total === 1 ? "book" : "books"} found
          </span>
        </section>

        {/* Results */}
        {books.length > 0 ? (
          <section
            aria-label="Book search results"
            className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-6 lg:grid-cols-4 xl:grid-cols-5"
          >
            {books.map((book) => (
              <SearchResultCard key={book.title} {...book} />
            ))}
          </section>
        ) : (
          <section className="flex flex-col items-center gap-3 rounded-2xl border border-[#e5e7eb] bg-white px-6 py-14 text-center">
            <BookOpenIcon className="h-14 w-14 text-[#004098]/30" strokeWidth={1.2} />
            <h2 className="font-['Outfit',sans-serif] text-xl font-semibold text-[#151c27]">
              No books found
            </h2>
            <p className="max-w-xs text-sm text-[#45464c]">
              Try a different title or author, or pick another category.
            </p>
          </section>
        )}
      </div>
    </div>
  );
}