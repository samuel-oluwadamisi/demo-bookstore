"use client";

import { useState } from "react";
import { useCart } from "@/context /CartContext";
import type { Book } from "../BookCard";
import { CheckIcon, ShoppingBagIcon } from "../Icons";

type AddToCartButtonProps = {
  book: Book;
  label?: string;
  className?: string;
  iconClassName?: string;
};

export default function AddToCartButton({
  book,
  label = "Add to Cart",
  className = "",
  iconClassName = "h-4 w-4",
}: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addToCart({ title: book.title, author: book.author, price: book.price, src: book.src });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <button type="button" onClick={handleClick} className={className}>
      {added ? (
        <CheckIcon className={iconClassName} />
      ) : (
        <ShoppingBagIcon className={iconClassName} />
      )}
      {added ? "Added" : label}
    </button>
  );
}