"use client";

import Link from "next/link";
import { useCart } from "@/context /CartContext";
import { ShoppingBagIcon } from "../Icons";

export default function CartLink() {
  const { totalItems } = useCart();

  return (
    <Link
      href="/cart"
      aria-label={`Bag, ${totalItems} ${totalItems === 1 ? "book" : "books"}`}
      className="relative flex h-11 w-11 items-center justify-center rounded-full text-[#151c27] transition-colors hover:text-black"
    >
      <ShoppingBagIcon className="h-5 w-5" />
      {totalItems > 0 && (
        <span className="absolute right-0.5 top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#fe932c] px-1 font-['Outfit',sans-serif] text-[10px] font-bold text-white">
          {totalItems > 99 ? "99+" : totalItems}
        </span>
      )}
    </Link>
  );
}