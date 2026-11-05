import Link from "next/link";
import { ChatIcon, CheckIcon } from "../Icons";

type OrderSentDialogProps = {
  whatsappLink: string; // the same link as the Send button, so the order can be sent again
  onContinue: () => void; // clears the bag; the link then takes the user to the homepage
};

export default function OrderSentDialog({ whatsappLink, onContinue }: OrderSentDialogProps) {
  return (
    <div className="fixed inset-0 z-[60] flex overflow-y-auto overscroll-contain bg-black/50 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-sent-title"
        className="m-auto flex w-full max-w-md flex-col gap-3 rounded-2xl bg-[#f9f9ff] p-4 shadow-2xl"
      >
        {/* Message */}
        <div className="relative flex flex-col items-center overflow-hidden rounded-xl bg-white p-5 text-center shadow-sm">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#f0f3ff] opacity-60"
          />
          <div className="relative mb-3.5 flex h-14 w-14 items-center justify-center rounded-full bg-[#e7eefe] text-black">
            <CheckIcon className="h-7 w-7" strokeWidth={2.2} />
            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-[#fe932c]" />
          </div>

          <span className="mb-1 font-['Outfit',sans-serif] text-[11px] font-semibold uppercase tracking-widest text-[#904d00]">
            Transmission Received
          </span>
          <h2
            id="order-sent-title"
            className="font-['Outfit',sans-serif] text-2xl font-semibold leading-tight tracking-tight text-[#151c27]"
          >
            Order Transferred to WhatsApp
          </h2>
          <p className="mt-1.5 text-xs text-[#45464c]">Lagos Courier Dispatch</p>

          <div className="mt-5 flex w-full flex-wrap items-center justify-between gap-x-3 gap-y-1 rounded-lg bg-[#f0f3ff]/60 p-3 text-left">
            <span className="flex items-center gap-2 font-['Outfit',sans-serif] text-[13px] font-medium text-[#151c27]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#904d00]" />
              Boutique Desk Connected
            </span>
            <span className="font-['Outfit',sans-serif] text-[13px] text-[#45464c]">
              Est. Reply: ~10 mins
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 pt-1">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-xl bg-black px-4 py-3 text-center font-['Outfit',sans-serif] text-base font-medium text-white shadow-md transition-all hover:bg-[#2a313d] active:scale-[0.99]"
          >
            <ChatIcon className="h-5 w-5 shrink-0" />
            Reopen WhatsApp Conversation
          </a>
          <Link
            href="/"
            onClick={onContinue}
            className="flex min-h-[52px] w-full items-center justify-center rounded-xl bg-white px-4 py-3 text-center font-['Outfit',sans-serif] text-base font-medium text-[#151c27] shadow-sm transition-colors hover:bg-[#f0f3ff]"
          >
            Continue Browsing Books
          </Link>
        </div>

        <p className="flex items-center justify-center gap-2 pt-1 text-center text-xs text-[#45464c]">
          Need help? WhatsApp concierge desk active until 8:00 PM
        </p>
      </div>
    </div>
  );
}