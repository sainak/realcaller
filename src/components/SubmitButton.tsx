'use client'
 
import { useFormStatus } from 'react-dom'
 
export function SubmitButton() {
  const { pending } = useFormStatus()
 
  return (
    <button className="rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 bg-black text-white dark:border-slate-100 border-1 hover:bg-black/90 h-10 px-4 py-2 dark:bg-zinc-800 dark:hover:bg-zinc-800/90 dark:text-gray-50"
    type="submit" disabled={pending}>
      Search
    </button>
  )
}