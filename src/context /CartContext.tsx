"use client";

import { createContext, useContext, useSyncExternalStore, type ReactNode } from "react";
import type { Book } from "@/features/website/components/BookCard";
import { priceToNumber } from "@/data/price";


export type CartItem = Book & { quantity: number };
 
type CartContextValue = {
  items: CartItem[];
  isReady: boolean; // false on the server and during the first render in the browser
  totalItems: number; // number of books in the bag (quantities added up)
  totalPrice: number; // in naira
  addToCart: (book: Book) => void;
  increase: (title: string) => void;
  decrease: (title: string) => void;
  removeItem: (title: string) => void;
  clearCart: () => void;
};
 
const CartContext = createContext<CartContextValue | null>(null);
 
// ---- The saved cart lives in localStorage; React just subscribes to it. ----
const STORAGE_KEY = "demo-bookstore-cart";
const EMPTY: CartItem[] = []; // one stable empty array (also used on the server)
 
let cachedRaw: string | null = null;
let cachedItems: CartItem[] = EMPTY;
const listeners = new Set<() => void>();
 
// Returns the same array until the saved cart actually changes.
function getSnapshot(): CartItem[] {
  let raw: string | null = null;
  try {
    raw = localStorage.getItem(STORAGE_KEY);
  } catch {
    // storage blocked: behave like an empty cart
  }
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    try {
      cachedItems = raw ? JSON.parse(raw) : EMPTY;
    } catch {
      cachedItems = EMPTY; // ignore a broken saved cart
    }
  }
  return cachedItems;
}
 
function getServerSnapshot(): CartItem[] {
  return EMPTY;
}
 
function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener); // another tab changed the cart
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}
 
function saveCart(items: CartItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore (e.g. storage full or blocked)
  }
  listeners.forEach((listener) => listener());
}
 
// true in the browser, false on the server and while hydrating.
const subscribeNever = () => () => {};
 
export function CartProvider({ children }: { children: ReactNode }) {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isReady = useSyncExternalStore(subscribeNever, () => true, () => false);
 
  function addToCart(book: Book) {
    const current = getSnapshot();
    const exists = current.some((item) => item.title === book.title);
    saveCart(
      exists
        ? current.map((item) =>
            item.title === book.title ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...current, { ...book, quantity: 1 }]
    );
  }
 
  function increase(title: string) {
    saveCart(
      getSnapshot().map((item) =>
        item.title === title ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }
 
  // Stops at 1. Removing a book is done with removeItem.
  function decrease(title: string) {
    saveCart(
      getSnapshot().map((item) =>
        item.title === title && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }
 
  function removeItem(title: string) {
    saveCart(getSnapshot().filter((item) => item.title !== title));
  }
 
  function clearCart() {
    saveCart([]);
  }
 
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + priceToNumber(item.price) * item.quantity,
    0
  );
 
  return (
    <CartContext.Provider
      value={{
        items,
        isReady,
        totalItems,
        totalPrice,
        addToCart,
        increase,
        decrease,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
 
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside <CartProvider>");
  return context;
}
 