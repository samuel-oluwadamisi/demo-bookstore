import type { Book } from "@/features/website/components/BookCard";

// These match the dropdown values and the "See all" links on the home page.
export type Category = "new-arrivals" | "fiction" | "history" | "non-fiction";

export type CatalogBook = Book & { category: Category };

// THE DATABASE: one array, every book in one place.
export const allBooks: CatalogBook[] = [
  // New Arrivals
  { title: "The Details", author: "Ia Genberg", price: "₦7,500", src: "/images/the-details.jpeg", category: "new-arrivals" },
  { title: "Western Lane", author: "Chetna Maroo", price: "₦6,800", src: "/images/western-lane.jpeg", category: "new-arrivals" },
  { title: "Kairos", author: "Jenny Erpenbeck", price: "₦8,200", src: "/images/kairos.jpeg", category: "new-arrivals" },
  { title: "Prophet Song", author: "Paul Lynch", price: "₦9,500", src: "/images/prophet-song.png", category: "new-arrivals" },

  // Fiction
  { title: "Things Fall Apart", author: "Chinua Achebe", price: "₦5,200", src: "/images/things-fall-apart.jpeg", category: "fiction" },
  { title: "Klara and the Sun", author: "Kazuo Ishiguro", price: "₦7,800", src: "/images/klara-and-the-sun.jpeg", category: "fiction" },
  { title: "The Famished Road", author: "Ben Okri", price: "₦6,500", src: "/images/the-famished-road.jpeg", category: "fiction" },
  { title: "Norwegian Wood", author: "Haruki Murakami", price: "₦5,800", src: "/images/norwegian-wood.jpeg", category: "fiction" },

  // History
  { title: "Sapiens", author: "Yuval Noah Harari", price: "₦8,500", src: "/images/sapiens.jpeg", category: "history" },
  { title: "African Modernism", author: "Manuel Herz et al.", price: "₦14,200", src: "/images/african-modernism.jpeg", category: "history" },
  { title: "Dawn of Everything", author: "David Graeber", price: "₦9,800", src: "/images/dawn-of-everything.jpeg", category: "history" },
  { title: "The Silk Roads", author: "Peter Frankopan", price: "₦8,900", src: "/images/the-silk-roads.jpeg", category: "history" },

  // Non-Fiction & Essays
  { title: "In Praise of Shadows", author: "Jun'ichirō Tanizaki", price: "₦4,500", src: "/images/in-praise-of-shadows.jpeg", category: "non-fiction" },
  { title: "Wabi-Sabi for Artists", author: "Leonard Koren", price: "₦5,400", src: "/images/wabi-sabi.jpeg", category: "non-fiction" },
  { title: "Meditations", author: "Marcus Aurelius", price: "₦4,800", src: "/images/meditations.jpeg", category: "non-fiction" },
  { title: "Notes from Underground", author: "Fyodor Dostoevsky", price: "₦4,200", src: "/images/notes-from-underground.jpeg", category: "non-fiction" },
];

// Books in one category (used by "See all" and the dropdown).
export function getBooksByCategory(category: string): CatalogBook[] {
  return allBooks.filter((book) => book.category === category);
}

// Books whose title or author contains what the user typed.
// An empty search matches everything, so it returns every book.
export function searchBooks(q: string): CatalogBook[] {
  const text = q.trim().toLowerCase();
  return allBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(text) ||
      book.author.toLowerCase().includes(text)
  );
}

// The home page shelves are just the database filtered by category.
export const newArrivals = getBooksByCategory("new-arrivals");
export const fiction = getBooksByCategory("fiction");
export const history = getBooksByCategory("history");
export const nonFiction = getBooksByCategory("non-fiction");