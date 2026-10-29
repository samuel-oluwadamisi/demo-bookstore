export type Book = {
  id: string;
  title: string;
  author: string;
  price: number;
  category: string;
  image: string;
  format: "Paperback" | "Hardcover";
  inStock: boolean;
  tag?: string; // e.g. "Bestseller", "Staff Pick"
  isNew?: boolean;
};

export type Shelf = {
  id: string;
  title: string;
  subtitle: string;
  href: string; // where "See all" goes
  books: Book[];
};