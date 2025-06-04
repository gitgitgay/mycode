"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });
  revalidatePath('/')
  redirect("/");
}

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  revalidatePath(`/snippets/${id}`)
  redirect("/snippets/" + id);
}

export async function createSnippet(
  prevState: { message: string },
  formData: FormData
) {
  try {
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    if (typeof title !== "string" || title.length < 3) {
      return {
        ...prevState,
        message: "Title must be longer than 3 characters",
      };
    }
    if (typeof code !== "string" || code.length < 3) {
      return {
        ...prevState,
        message: "Code must be longer than 3 characters",
      };
    }

    // throw new Error("🤣");

    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (err) {
    if (err instanceof Error) {
      return {
        message: err.message,
      };
    } else {
      return {
        message: "Something went wrong!",
      };
    }
  }
  revalidatePath('/')
  redirect("/");
}
