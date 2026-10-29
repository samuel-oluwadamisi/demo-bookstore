import type { Book } from "@/types/book";

export type Sort = "newest" | "price-asc" | "price-desc";
export type PriceRange = { label: string; min: number; max: number };

export const priceRanges: PriceRange[] = [
  { label: "Under ₦5,000", min: 0, max: 4999 },
  { label: "₦5,000 – ₦10,000", min: 5000, max: 10000 },
  { label: "Over ₦10,000", min: 10001, max: Number.MAX_SAFE_INTEGER },
];

export function searchBooks(books: Book[], q?: string, category?: string) {
  const term = q?.trim().toLowerCase();
  return books.filter(
    (b) => (!category || b.category === category) && (!term || `${b.title} ${b.author}`.toLowerCase().includes(term)),
  );
}

export function sortBooks(books: Book[], sort: Sort) {
  if (sort === "price-asc") return [...books].sort((a, b) => a.price - b.price);
  if (sort === "price-desc") return [...books].sort((a, b) => b.price - a.price);
  return books;
}