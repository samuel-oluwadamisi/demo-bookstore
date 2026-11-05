import { Suspense } from "react";
import { notFound } from "next/navigation";
import BookDetailPage from "@/features/website/pages/BookDetailPage";
import { getBookBySlug, getRelatedBooks } from "@/data/bookHelpers";

type Params = Promise<{ slug: string }>;

// Reads the URL (/books/things-fall-apart), so it sits inside <Suspense>.
async function BookLoader({ params }: { params: Params }) {
  const { slug } = await params;

  const book = getBookBySlug(slug);
  if (!book) notFound();

  return <BookDetailPage book={book} related={getRelatedBooks(book)} />;
}

export default function BookPage({ params }: { params: Params }) {
  return (
    <Suspense
      fallback={
        <p className="px-4 py-20 text-center text-sm text-[#45464c]">Opening book…</p>
      }
    >
      <BookLoader params={params} />
    </Suspense>
  );
}