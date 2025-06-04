'use client'
import { deleteSnippet } from '@/actions'
import React, { startTransition } from 'react'

export default function SnippetDelButton(props: { id: number }) {
  const handleDelete= () => {
    startTransition(async () => {
      await deleteSnippet(props.id)
    })
  }
  return (
    <button onClick={handleDelete} className="p-2 border border-teal-500 rounded">Delete</button>
  )
}
