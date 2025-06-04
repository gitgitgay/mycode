import SnippetEditForm from "@/components/snippet-edit-form";
import { db } from "@/db";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  if (isNaN(id)) return notFound();

  const snippet = await db.snippet.findFirst({
    where: { id },
  });
  console.log("🚀 ~ file: page.tsx:11 ~ snippet:", snippet);

  if (!snippet) {
    return notFound();
  }

  return <SnippetEditForm snippet={snippet} />;
}
