import { BookOpenIcon } from "./Icons";

const linkGroups = [
  {
    heading: "Information",
    links: ["About Us", "Help & Support", "Shipping & Delivery"],
  },
  {
    heading: "Policies",
    links: ["Terms of Service", "Privacy Policy", "Return Policy"],
  },
];

export default function Footer() {
  return (
    <div className="mx-auto w-full max-w-[1360px] px-4 pb-6 pt-4 md:px-8 md:pt-8 lg:px-16">
      <footer className="flex flex-col gap-4 rounded-2xl bg-[#f0f3ff] p-4 shadow-sm md:gap-8 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-1 md:max-w-xs">
            <div className="flex items-center gap-2">
              <BookOpenIcon className="h-5 w-5 text-black" />
              <span className="font-['Outfit',sans-serif] text-lg font-semibold text-[#151c27]">
                Demo Bookstore
              </span>
            </div>
            <p className="text-xs text-[#45464c] md:text-sm">
              The Home of Affordable and In-Demand Books
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-2 pt-1 text-xs md:gap-16 md:pt-0 md:text-sm">
            {linkGroups.map((group) => (
              <div key={group.heading} className="flex flex-col gap-1.5 md:gap-2.5">
                <span className="font-['Outfit',sans-serif] text-[11px] font-semibold uppercase tracking-wider text-[#45464c]">
                  {group.heading}
                </span>
                {group.links.map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="text-[#151c27] transition-colors hover:text-black hover:underline"
                  >
                    {label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-1 pt-2 text-center font-['Outfit',sans-serif] text-[11px] font-semibold text-[#45464c]/70 sm:flex-row md:border-t md:border-[#c6c6cd]/60 md:pt-6">
          <span>Delivering nationwide across Nigeria</span>
          {/* <span>© {new Date().getFullYear()} Demo Bookstore. All rights reserved.</span> */}
           <span>© 2026 Demo Bookstore. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}