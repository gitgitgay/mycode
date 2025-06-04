// export const revalidate = 0
// export const dynamic = 'force-dynamic'

// export const revalidate = 5

import { db } from "@/db";
import Link from "next/link";

export default async function Page() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet:any) => (
    <Link
      key={snippet.id}
      href={`/snippets/${snippet.id}`}
      className="flex items-center justify-between border border-teal-500 p-2 rounded"
    >
      <span>{snippet.title}</span>
      <span>View</span>
    </Link>
  ));
  return (
    <>
      <div className="flex items-center justify-between mt-5">
        <h1 className="font-bold text-lg">Snippets</h1>
        <Link
          className="p-2 border border-teal-500 rounded"
          href="/snippets/new"
        >
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2 mt-5">{renderedSnippets}</div>
    </>
  );
}
