import BookShelf from "../components/BookShelf";
import { ArrowDownIcon, BookOpenIcon, SearchIcon } from "../components/Icons";
import { newArrivals, fiction, history, nonFiction } from "@/data/mockData";

export default function LandingPage() {
  return (
    <div className="mx-auto w-full max-w-[1360px] md:px-8 lg:px-16">
      {/* Search bar: submitting sends the user to /search?q=... */}
      <section className="px-4 pb-1 pt-2 md:px-0 md:pb-2 md:pt-6">
        <form
          action="/search"
          className="mx-auto flex w-full max-w-3xl items-center overflow-hidden rounded-md border-2 border-[#004085] bg-white shadow-sm"
        >
          <div className="pointer-events-none flex shrink-0 items-center pl-3.5 pr-2 text-[#004085]">
            <SearchIcon className="h-5 w-5" strokeWidth={2.2} />
          </div>
          <input
            type="search"
            name="q"
            required
            aria-label="Search books"
            placeholder="Search Title, Author, ISBN, or Keyword"
            className="h-11 min-w-0 flex-1 border-0 bg-transparent pr-2 text-sm text-neutral-800 outline-none placeholder:text-neutral-500 md:h-12 md:text-base"
          />
          <button
            type="submit"
            className="h-11 shrink-0 bg-[#004085] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#082b54] active:bg-[#072447] md:h-12 md:px-8 md:text-base"
          >
            Search
          </button>
        </form>
      </section>

      {/* Hero */}
      <section className="px-4 py-2 md:px-0 md:py-4">
        <div className="relative flex flex-col items-start gap-3 overflow-hidden rounded-2xl border border-slate-100/80 bg-gradient-to-br from-blue-50/80 via-white to-slate-50 p-6 shadow-sm md:gap-5 md:p-12 lg:p-16">
          <div className="z-10 flex max-w-[280px] flex-col gap-1.5 md:max-w-xl lg:max-w-2xl">
            <h1 className="pt-1 font-['Outfit',sans-serif] text-2xl font-bold tracking-tight text-[#151c27] md:text-4xl lg:text-5xl">
              Demo Bookstore
            </h1>
            <p className="text-sm leading-relaxed text-[#45464c] md:text-base lg:text-lg">
              The Home of Affordable and In-Demand Books
            </p>
          </div>

          <div className="z-10 pt-2">
            <a
              href="#new-arrivals"
              className="inline-flex items-center gap-2 rounded-xl bg-[#004098] px-5 py-2.5 font-['Outfit',sans-serif] text-[13px] font-medium text-white shadow-sm transition-all hover:opacity-95 active:scale-95 md:px-7 md:py-3 md:text-[15px]"
            >
              Browse Shelves
              <ArrowDownIcon className="h-[18px] w-[18px]" />
            </a>
          </div>

          {/* Decorative book */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-6 -right-6 flex select-none items-center justify-center md:-bottom-10 md:-right-4"
          >
            <div className="absolute h-40 w-40 rounded-full bg-blue-100/40 blur-2xl md:h-72 md:w-72" />
            <BookOpenIcon
              className="relative h-32 w-32 text-[#004098]/10 md:h-64 md:w-64"
              strokeWidth={1}
            />
          </div>
        </div>
      </section>

      {/* Shelves */}
      <div className="pt-2 md:pt-6">
        <BookShelf
          id="new-arrivals"
          title="New Arrivals"
          subtitle="Freshly stocked titles & contemporary translations"
          books={newArrivals}
        />
        <BookShelf
          id="fiction"
          title="Fiction"
          subtitle="Timeless prose & celebrated masterworks"
          books={fiction}
        />
        <BookShelf
          id="history"
          title="History"
          subtitle="Archival chronicles, civilizations & ideas"
          books={history}
        />
        <BookShelf
          id="non-fiction"
          title="Non-Fiction & Essays"
          subtitle="Philosophy, aesthetics & intimate observations"
          books={nonFiction}
        />
      </div>
    </div>
  );
}