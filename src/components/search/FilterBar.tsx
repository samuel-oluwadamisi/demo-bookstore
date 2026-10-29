"use client";
import { priceRanges, type Sort } from "../../lib/filterBooks";

type Props = {
  sort: Sort;
  onSort: (s: Sort) => void;
  inStock: boolean;
  onInStock: () => void;
  range: number | null;
  onRange: (i: number | null) => void;
};

const chip = (on: boolean) =>
  `flex shrink-0 items-center gap-2 rounded-full px-3.5 py-2 text-sm transition-colors ${on ? "bg-black text-white" : "bg-white ring-1 ring-black/5"}`;

export default function FilterBar({ sort, onSort, inStock, onInStock, range, onRange }: Props) {
  return (
    <div className="-mx-4 flex items-center gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
      <select
        value={sort}
        onChange={(e) => onSort(e.target.value as Sort)}
        aria-label="Sort books"
        className="shrink-0 rounded-full bg-black px-3.5 py-2 text-sm font-medium text-white outline-none"
      >
        <option value="newest">Sort: Newest</option>
        <option value="price-asc">Sort: Price, low to high</option>
        <option value="price-desc">Sort: Price, high to low</option>
      </select>

      <button onClick={onInStock} aria-pressed={inStock} className={chip(inStock)}>
        <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden /> In Stock Only
      </button>

      {priceRanges.map((r, i) => (
        <button key={r.label} onClick={() => onRange(range === i ? null : i)} aria-pressed={range === i} className={chip(range === i)}>
          {r.label}
        </button>
      ))}
    </div>
  );
}