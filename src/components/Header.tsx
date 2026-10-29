"use client";
import Link from "next/link";
import { BookOpen, Search, ShoppingBag, User } from "lucide-react";
import { site } from "@/config/site";
import { useCart } from "@/context/CartContext";
import SearchBar from "./SearchBar";

export default function Header() {
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-30 bg-[var(--bg)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <BookOpen size={22} /> {site.name}
        </Link>

        <SearchBar className="hidden max-w-xl flex-1 lg:flex" />

        <nav className="flex items-center gap-3">
          <button aria-label="Search" className="p-2 lg:hidden"><Search size={20} /></button>
          <button aria-label="Cart" className="relative p-2">
            <ShoppingBag size={20} />
            {count > 0 && (
              <span className="absolute right-0 top-0 grid h-4 min-w-4 place-items-center rounded-full bg-[var(--accent)] px-1 text-[10px] font-semibold text-white">
                {count}
              </span>
            )}
          </button>
          <button aria-label="Account" className="grid h-9 w-9 place-items-center rounded-full bg-black text-white">
            <User size={18} />
          </button>
        </nav>
      </div>
    </header>
  );
}