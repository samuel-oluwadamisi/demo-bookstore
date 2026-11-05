import { allBooks, type CatalogBook } from "@/data/mockData";
import { toSlug } from "@/data/slug";

// .find() gives back ONE book (or undefined if the slug matches nothing).
export function getBookBySlug(slug: string): CatalogBook | undefined {
  return allBooks.find((book) => toSlug(book.title) === slug);
}

// Other books from the same category, for "You May Also Like".
export function getRelatedBooks(book: CatalogBook): CatalogBook[] {
  return allBooks
    .filter((item) => item.category === book.category && item.title !== book.title)
    .slice(0, 4);
}