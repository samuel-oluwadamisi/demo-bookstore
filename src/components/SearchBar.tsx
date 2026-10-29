import Link from "next/link";
import { Search, X } from "lucide-react";

type Props = { className?: string; defaultValue?: string };

// Plain GET form: submitting goes to /search?q=... with no client JS.
export default function SearchBar({ className = "", defaultValue = "" }: Props) {
  return (
    <form action="/search" role="search" className={`flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 shadow-sm ring-1 ring-black/5 focus-within:ring-black ${className}`}>
      <Search size={18} className="shrink-0 text-neutral-500" />
      <input
        name="q"
        type="search"
        defaultValue={defaultValue}
        placeholder="Search by title, author, or ISBN..."
        className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-500 [&::-webkit-search-cancel-button]:hidden"
      />
      {defaultValue ? (
        <Link href="/search" aria-label="Clear search"><X size={16} className="text-neutral-500" /></Link>
      ) : (
        <kbd className="hidden rounded-md bg-neutral-100 px-2 py-0.5 text-xs text-neutral-500 sm:block">⌘K</kbd>
      )}
    </form>
  );
}