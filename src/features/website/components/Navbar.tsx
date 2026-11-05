import Link from "next/link";
import { BookOpenIcon, SearchIcon, ShoppingBagIcon, UserIcon } from "./Icons";

const navLinks = [
  { label: "New Arrivals", href: "#new-arrivals" },
  { label: "Fiction", href: "#fiction" },
  { label: "History", href: "#history" },
  { label: "Non-Fiction & Essays", href: "#non-fiction" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#f9f9ff]/85 shadow-[0_1px_8px_rgba(0,0,0,0.03)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[1360px] items-center justify-between gap-2 px-4 md:px-8 lg:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <BookOpenIcon className="h-[22px] w-[22px] text-black" />
          <span className="font-['Outfit',sans-serif] text-lg font-semibold leading-none tracking-tight text-[#151c27]">
            Demo Bookstore
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-['Outfit',sans-serif] text-[15px] font-medium text-[#45464c] transition-colors hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <a
            href="#"
            aria-label="Search"
            className="flex h-11 w-11 items-center justify-center rounded-full text-[#151c27] transition-colors hover:text-black"
          >
            <SearchIcon className="h-5 w-5" />
          </a>

          <a
            href="#"
            aria-label="Bag"
            className="relative flex h-11 w-11 items-center justify-center rounded-full text-[#151c27] transition-colors hover:text-black"
          >
            <ShoppingBagIcon className="h-5 w-5" />
            <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#fe932c] font-['Outfit',sans-serif] text-[10px] font-bold text-white">
              2
            </span>
          </a>

          <a
            href="#"
            aria-label="Account"
            className="ml-1 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white"
          >
            <UserIcon className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </header>
  );
}