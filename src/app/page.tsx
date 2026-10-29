import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import Hero from "@/components/Hero";
import CategoryChips from "../components/CategoryChips";
import BookShelf from "../components/BookShelf";
import { categories, shelves } from "@/data/books";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl space-y-8 px-4 pb-4 sm:px-6 lg:px-8">
        <SearchBar className="lg:hidden" />
        <CategoryChips categories={categories} />
        <Hero />
        <div id="shelves" className="space-y-10 pt-2 lg:space-y-14">
          {shelves.map((shelf) => <BookShelf key={shelf.id} shelf={shelf} />)}
        </div>
      </main>
      <Footer />
    </>
  );
}
