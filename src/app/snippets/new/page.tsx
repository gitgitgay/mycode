"use client";
import { createSnippet } from "@/actions";
import { db } from "@/db";
import { redirect } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";

const initState = {
  message: "",
};

export default function Page() {
  const [state, formAction] = useFormState(createSnippet, initState);

  return (
    <form action={formAction}>
      <h3 className="font-bold m-3 text-center">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        {/* Title */}
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border border-teal-500 p-2 rounded w-full"
            type="text"
            id="title"
          />
        </div>
        {/* Code */}
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <input
            name="code"
            className="border border-teal-500 p-2 rounded w-full"
            type="text"
            id="code"
          />
        </div>
        {state.message && (
          <div className="my-2 p-2 bg-red-200 border rounded border-red-500">
            {state.message}
          </div>
        )}
        <button className="rounded p-2 bg-blue-200" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}
