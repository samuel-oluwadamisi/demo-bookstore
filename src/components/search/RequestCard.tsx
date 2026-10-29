import Link from "next/link";
import { Compass } from "lucide-react";

const links = ["History", "Non-Fiction", "African Lit", "Children"];

export default function RequestCard() {
  return (
    <section className="rounded-3xl bg-[var(--surface)] p-5 sm:p-8">
      <div className="flex items-start gap-3">
        <Compass size={22} className="mt-0.5 shrink-0" />
        <div>
          <h2 className="text-lg font-semibold">Looking for something else?</h2>
          <p className="mt-1 max-w-xl text-sm text-neutral-600">
            Can&apos;t find a particular edition? Explore by collection below.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {links.map((c) => (
              <Link key={c} href={`/search?category=${encodeURIComponent(c)}`} className="rounded-full bg-white px-4 py-2 text-sm ring-1 ring-black/5">{c}</Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}