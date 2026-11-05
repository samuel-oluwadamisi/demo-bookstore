import { Suspense } from "react";
import SearchResultsPage from "@/features/website/pages/SearchResultPage";
import { getBooksByCategory, searchBooks } from "@/data/mockData";

type SearchParams = Promise<{ q?: string; category?: string }>;

// Reads the URL. This is the part that waits for the request, so it sits inside <Suspense>.
async function Results({ searchParams }: { searchParams: SearchParams }) {
  // /search?q=achebe  or  /search?category=fiction  (only one is ever sent)
  const { q = "", category = "" } = await searchParams;

  const results = category ? getBooksByCategory(category) : searchBooks(q);

  return (
    <SearchResultsPage
      query={q}
      category={category}
      books={results}
      total={results.length}
    />
  );
}

export default function SearchPage({ searchParams }: { searchParams: SearchParams }) {
  return (
    <Suspense
      fallback={
        <p className="px-4 py-20 text-center text-sm text-[#45464c]">Finding books…</p>
      }
    >
      <Results searchParams={searchParams} />
    </Suspense>
  );
}