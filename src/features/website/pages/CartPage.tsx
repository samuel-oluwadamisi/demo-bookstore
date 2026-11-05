"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context /CartContext";
import { formatPrice, priceToNumber } from "@/data/price";
import { toSlug } from "@/data/slug";
import OrderSentDialog from "../components/cartpage/OrderSentDialogue";
import {
  ArrowLeftIcon,
  BuildingLibraryIcon,
  ChatIcon,
  CheckIcon,
  InfoIcon,
  MinusIcon,
  PlusIcon,
  ShoppingBagIcon,
  TrashIcon,
  TruckIcon,
} from "../components/Icons";

// Replace with the shop's WhatsApp number (country code first, no + or spaces).
const WHATSAPP_NUMBER = "08144325263"; // Demo Bookstore's number

const assurances = [
  { icon: ChatIcon, title: "Direct Conversation", text: "Chat with our resident bookseller in real-time" },
  { icon: BuildingLibraryIcon, title: "Zero Pre-Payment Stress", text: "Pay via bank transfer only after stock confirmation" },
  { icon: TruckIcon, title: "Same-Day Dispatch", text: "Lagos courier deliveries dispatched daily at 2:00 PM" },
];

export default function CartPage() {
  const { items, isReady, totalItems, totalPrice, increase, decrease, removeItem, clearCart } =
    useCart();
  const [orderSent, setOrderSent] = useState(false);

  // The same lines are shown in the preview and sent to WhatsApp.
  const orderLines = items.map(
    (item) =>
      `• ${item.quantity}x ${item.title} (${formatPrice(priceToNumber(item.price) * item.quantity)})`
  );
  const message = [
    "Hello Demo Bookstore! 📚 I would like to place an order:",
    ...orderLines,
    `Total: ${formatPrice(totalPrice)}`,
  ].join("\n");
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  // Shown after the Send button is tapped. "Continue Browsing Books" clears the bag.
  const orderDialog = orderSent ? (
    <OrderSentDialog whatsappLink={whatsappLink} onContinue={clearCart} />
  ) : null;

  // Wait for the saved cart to load, so the empty message doesn't flash.
  if (!isReady) {
    return <p className="px-4 py-20 text-center text-sm text-[#45464c]">Opening your bag…</p>;
  }

  if (items.length === 0) {
    return (
      <>
        <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-3 px-4 py-20 text-center">
          <ShoppingBagIcon className="h-14 w-14 text-[#004098]/30" strokeWidth={1.2} />
          <h1 className="font-['Outfit',sans-serif] text-2xl font-semibold text-[#151c27]">
            Your bag is empty
          </h1>
          <p className="text-sm text-[#45464c]">Pick a few books and they will show up here.</p>
          <Link
            href="/"
            className="mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-[#004098] px-8 font-['Outfit',sans-serif] text-[15px] font-semibold text-white transition-opacity hover:opacity-95"
          >
            Browse books
          </Link>
        </div>
        {orderDialog}
      </>
    );
  }

  return (
    <div className="mx-auto w-full max-w-[1360px] px-4 pb-10 pt-3 md:px-8 md:pt-6 lg:px-16">
      {/* Back */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#45464c] transition-colors hover:text-black"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Continue Browsing
      </Link>

      {/* Header */}
      <div className="mt-3 flex flex-col gap-1 md:mt-5">
        <h1 className="font-['Outfit',sans-serif] text-2xl font-semibold tracking-tight text-[#151c27] md:text-3xl">
          Review Bag &amp; Order
        </h1>
        <p className="text-sm text-[#45464c]">
          {totalItems} curated {totalItems === 1 ? "volume" : "volumes"} prepared for Lagos courier
          dispatch
        </p>
      </div>

      <div className="mt-5 flex flex-col gap-4 md:mt-8 lg:grid lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start lg:gap-10">
        {/* Items */}
        <ul className="flex min-w-0 flex-col gap-3">
          {items.map((item) => (
            <li
              key={item.title}
              className="flex gap-3 rounded-xl bg-white p-3 shadow-sm md:gap-5 md:p-4"
            >
              <Link
                href={`/books/${toSlug(item.title)}`}
                className="relative h-28 w-20 shrink-0 overflow-hidden rounded-md bg-[#f3f4f6] ring-1 ring-black/5 md:h-36 md:w-28"
              >
                <Image
                  src={item.src}
                  alt={`${item.title} cover`}
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </Link>

              <div className="flex min-w-0 flex-1 flex-col justify-between gap-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <Link href={`/books/${toSlug(item.title)}`}>
                      <h3 className="break-words font-['Outfit',sans-serif] text-lg font-semibold leading-6 text-[#151c27] hover:underline md:text-xl">
                        {item.title}
                      </h3>
                    </Link>
                    <p className="truncate text-sm text-[#45464c]">{item.author}</p>
                  </div>
                  <button
                    type="button"
                    aria-label={`Remove ${item.title}`}
                    onClick={() => removeItem(item.title)}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#76777d] transition-colors hover:bg-[#ffdad6] hover:text-[#ba1a1a]"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-2">
                  <span className="font-['Outfit',sans-serif] text-lg font-bold text-[#151c27]">
                    {formatPrice(priceToNumber(item.price) * item.quantity)}
                  </span>
                  <div className="flex items-center gap-1 rounded-lg bg-[#e7eefe] p-1">
                    <button
                      type="button"
                      aria-label={`Fewer copies of ${item.title}`}
                      disabled={item.quantity === 1}
                      onClick={() => decrease(item.title)}
                      className="flex h-8 w-8 items-center justify-center rounded-md text-[#151c27] transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent"
                    >
                      <MinusIcon className="h-4 w-4" />
                    </button>
                    <span className="w-6 text-center font-['Outfit',sans-serif] text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      aria-label={`More copies of ${item.title}`}
                      onClick={() => increase(item.title)}
                      className="flex h-8 w-8 items-center justify-center rounded-md text-[#151c27] transition-colors hover:bg-white"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Summary: every card is full width and uses the same padding, so they line up */}
        <aside className="flex min-w-0 flex-col gap-4 lg:sticky lg:top-24">
          {/* Total */}
          <div className="flex flex-col gap-1 rounded-xl bg-white p-4 shadow-sm md:p-5">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-['Outfit',sans-serif] text-lg font-semibold text-[#151c27]">
                Total
              </span>
              <span className="font-['Outfit',sans-serif] text-2xl font-bold tracking-tight text-[#151c27] md:text-3xl">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <span className="text-sm text-[#45464c]">Payable by bank transfer on confirmation</span>
          </div>

          {/* WhatsApp preview */}
          <div className="flex flex-col gap-3 rounded-xl bg-[#f0f3ff] p-4 md:p-5">
            <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-2">
              <div className="flex min-w-0 items-center gap-2">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#151c27]">
                  <ChatIcon className="h-4 w-4" />
                </span>
                <h2 className="font-['Outfit',sans-serif] text-base font-semibold text-[#151c27]">
                  WhatsApp Message Preview
                </h2>
              </div>
              <span className="rounded bg-[#e2e8f8] px-2 py-1 font-['Outfit',sans-serif] text-[10px] font-semibold uppercase tracking-wide text-[#45464c]">
                Auto-generated
              </span>
            </div>

            <div className="flex min-w-0 flex-col gap-2 rounded-lg bg-white p-4 text-sm text-[#151c27] shadow-sm">
              <p className="break-words font-medium">
                Hello Demo Bookstore! 📚 I would like to place an order:
              </p>
              <div className="flex flex-col gap-1">
                {orderLines.map((line) => (
                  <p key={line} className="break-words">
                    {line}
                  </p>
                ))}
              </div>
              <p className="font-semibold">Total: {formatPrice(totalPrice)}</p>
              <div className="flex items-center justify-end gap-1 text-[11px] text-[#76777d]">
                Ready to send
                <span className="flex -space-x-1.5 text-[#904d00]">
                  <CheckIcon className="h-3.5 w-3.5" />
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
              </div>
            </div>

            <p className="flex items-start gap-1.5 text-xs text-[#45464c]">
              <InfoIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#904d00]" />
              Tapping checkout opens WhatsApp with this order pre-formatted for direct seller review.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOrderSent(true)}
              className="flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#004098] px-4 py-3 text-center font-['Outfit',sans-serif] text-[15px] font-semibold leading-snug text-white shadow-md transition-all hover:opacity-95 active:scale-[0.99]"
            >
              <ChatIcon className="h-5 w-5 shrink-0" />
              <span className="min-w-0">
                Send Order via WhatsApp{" "}
                <span className="whitespace-nowrap">({formatPrice(totalPrice)})</span>
              </span>
            </a>
            <button
              type="button"
              onClick={clearCart}
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#e7eefe] px-4 py-3 font-['Outfit',sans-serif] text-[15px] font-medium text-[#151c27] transition-colors hover:bg-[#dce2f3]"
            >
              <TrashIcon className="h-5 w-5 shrink-0" />
              Clear Bag
            </button>
          </div>
        </aside>
      </div>

      {/* Assurances */}
      <section className="mt-8 grid gap-3 md:grid-cols-3">
        {assurances.map(({ icon: AssuranceIcon, title, text }) => (
          <div key={title} className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e7eefe] text-[#151c27]">
              <AssuranceIcon className="h-5 w-5" />
            </span>
            <div className="flex min-w-0 flex-col">
              <span className="font-['Outfit',sans-serif] text-[15px] font-semibold text-[#151c27]">
                {title}
              </span>
              <span className="text-sm text-[#45464c]">{text}</span>
            </div>
          </div>
        ))}
      </section>

      {orderDialog}
    </div>
  );
}