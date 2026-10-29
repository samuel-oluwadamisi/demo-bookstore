import Header from "../../components/Header";
import Footer from "../../components//Footer";
import SearchBar from "../../components/SearchBar";
import ActiveFilter from "../../components/search/ActiveFilter";
import SearchResults from "../../components/search/SearchResults";
import RequestCard from "../../components/search/RequestCard";
import { books } from "@/data/books";
import { searchBooks } from "../../lib/filterBooks";

type Props = { searchParams: Promise<{ q?: string; category?: string }> };

export default async function SearchPage({ searchParams }: Props) {
  const { q, category } = await searchParams;
  const matches = searchBooks(books, q, category);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl space-y-6 px-4 pb-4 sm:px-6 lg:px-8">
        <SearchBar className="lg:hidden" defaultValue={q} />
        <ActiveFilter category={category} query={q} count={matches.length} />
        {/* key resets filters and pagination whenever the search changes */}
        <SearchResults key={`${q}|${category}`} books={matches} />
        <div className="pt-6"><RequestCard /></div>
      </main>
      <Footer />
    </>
  );
}