import Link from "next/link";
import { X } from "lucide-react";

type Props = { category?: string; query?: string; count: number };

export default function ActiveFilter({ category, query, count }: Props) {
  const label = `${category ?? "All books"}${query ? ` matching “${query}”` : ""}`;
  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="flex items-center gap-2 rounded-full bg-[var(--surface)] px-3 py-1.5 font-medium">
        <span className="h-2 w-2 rounded-full bg-[var(--accent)]" aria-hidden />
        {label} ({count} found)
      </span>
      {(category || query) && (
        <Link href="/search" aria-label="Clear filters" className="rounded-full p-1.5 text-neutral-500 hover:bg-white"><X size={16} /></Link>
      )}
    </div>
  );
}