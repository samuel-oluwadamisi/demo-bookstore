import { MessageCircle, Store } from "lucide-react";
import { site } from "@/config/site";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-[var(--surface)] p-6 sm:p-8 lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-semibold"><Store size={20} /> {site.name}</h2>
          <p className="mt-2 text-sm text-neutral-600">Independent stockist & literary salon</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 text-sm lg:mt-0">
          <div>
            <h3 className="font-semibold">Store hours</h3>
            <p className="mt-1 text-neutral-600">{site.hours}</p>
            <p className="text-neutral-600">{site.closed}</p>
          </div>
          <div>
            <h3 className="font-semibold">Visit us</h3>
            <p className="mt-1 text-neutral-600">{site.address}</p>
          </div>
        </div>

        <a
          href={`https://wa.me/${site.whatsapp}`}
          className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-medium shadow-sm ring-1 ring-black/5 lg:mt-0"
        >
          <MessageCircle size={18} /> Inquire via WhatsApp ({site.whatsappLabel})
        </a>
      </div>
      <p className="mt-6 text-center text-xs text-neutral-500">
        {site.delivery}<br /> © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
