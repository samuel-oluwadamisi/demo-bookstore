"use client";
import { createContext, useContext, useState, type ReactNode } from "react";
import type { Book } from "@/types/book";

type CartItem = { book: Book; qty: number };
type CartValue = { items: CartItem[]; count: number; add: (book: Book) => void };

const CartContext = createContext<CartValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const add = (book: Book) =>
    setItems((prev) => {
      const found = prev.find((i) => i.book.id === book.id);
      return found
        ? prev.map((i) => (i.book.id === book.id ? { ...i, qty: i.qty + 1 } : i))
        : [...prev, { book, qty: 1 }];
    });

  const count = items.reduce((sum, i) => sum + i.qty, 0);
  return <CartContext.Provider value={{ items, count, add }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
