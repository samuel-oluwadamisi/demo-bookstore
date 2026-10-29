import { ArrowDown, BookOpen } from "lucide-react";
import { site } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[var(--surface)] p-6 sm:p-10 lg:p-14">
      <BookOpen className="absolute -bottom-6 right-4 text-black/5" size={160} strokeWidth={1} aria-hidden />
      <div className="relative max-w-xl">
        <h1 className="text-3xl font-semibold sm:text-4xl lg:text-5xl">{site.name}</h1>
        <p className="mt-3 text-base text-neutral-700 lg:text-lg">{site.tagline}</p>
        <a href="#shelves" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-medium text-white">
          Browse Shelves <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
