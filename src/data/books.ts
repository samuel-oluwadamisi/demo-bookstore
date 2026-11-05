// import { site } from "@/config/site";
// import type { Book, Shelf } from "@/types/book";

// const b = (id: string, title: string, author: string, price: number, category: string, o: Partial<Book> = {}): Book => ({
//   id, title, author, price, category,
//   image: site.placeholderImage,
//   format: "Paperback",
//   inStock: true,
//   ...o,
// });

// export const categories = ["All", "Fiction", "History", "Non-Fiction", "African Lit", "Children", "Academic"];

// // Ordered newest first, so "Newest" sort needs no extra field.
// export const books: Book[] = [
//   b("1", "Americanah", "Chimamanda Ngozi Adichie", 7500, "Fiction", { isNew: true }),
//   b("2", "Stay With Me", "Ayobami Adebayo", 6800, "Fiction", { isNew: true }),
//   b("3", "The Fishermen", "Chigozie Obioma", 8200, "Fiction", { isNew: true }),
//   b("4", "Born a Crime", "Trevor Noah", 7200, "Non-Fiction", { isNew: true }),
//   b("5", "Things Fall Apart", "Chinua Achebe", 5200, "Fiction", { tag: "Bestseller" }),
//   b("6", "Klara and the Sun", "Kazuo Ishiguro", 7800, "Fiction", { format: "Hardcover" }),
//   b("7", "The Famished Road", "Ben Okri", 6500, "Fiction", { tag: "Staff Pick" }),
//   b("8", "Half of a Yellow Sun", "Chimamanda Ngozi Adichie", 5800, "Fiction"),
//   b("9", "The Overstory", "Richard Powers", 7400, "Fiction"),
//   b("10", "Western Lane", "Chetna Maroo", 6800, "Fiction", { inStock: false }),
//   b("11", "The Details", "Ia Genberg", 7500, "Fiction"),
//   b("12", "Purple Hibiscus", "Chimamanda Ngozi Adichie", 5600, "African Lit"),
//   b("13", "Sapiens", "Yuval Noah Harari", 8500, "History"),
//   b("14", "Guns, Germs, and Steel", "Jared Diamond", 9200, "History"),
//   b("15", "The Trouble with Nigeria", "Chinua Achebe", 4200, "History"),
//   b("16", "Atomic Habits", "James Clear", 6900, "Non-Fiction"),
//   b("17", "The Almanack of Naval Ravikant", "Eric Jorgenson", 5400, "Non-Fiction"),
//   b("18", "Meditations", "Marcus Aurelius", 4800, "Non-Fiction"),
// ];

// const byCategory = (c: string) => books.filter((x) => x.category === c);
// const cat = (c: string) => `/search?category=${encodeURIComponent(c)}`;

// export const shelves: Shelf[] = [
//   { id: "new", title: "New Arrivals", subtitle: "Freshly stocked titles & contemporary reads", href: "/search", books: books.filter((x) => x.isNew) },
//   { id: "fiction", title: "Fiction", subtitle: "Timeless prose & celebrated masterworks", href: cat("Fiction"), books: byCategory("Fiction").slice(0, 6) },
//   { id: "history", title: "History", subtitle: "Archival chronicles, civilizations & ideas", href: cat("History"), books: byCategory("History") },
//   { id: "non-fiction", title: "Non-Fiction & Essays", subtitle: "Philosophy, habits & intimate observations", href: cat("Non-Fiction"), books: byCategory("Non-Fiction") },
// ];