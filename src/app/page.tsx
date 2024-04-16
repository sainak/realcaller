"use client"

import { useFormState, useFormStatus } from "react-dom"
import { findName } from "@/app/actions"
import { SubmitButton } from "@/components/SubmitButton"

export default function Home() {
  const [state, formAction] = useFormState(findName, { name: "", error: "" })

  return (
    <div className="flex items-center justify-center h-screen dark:bg-zinc-900">
      <div
        className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-[350px] dark:bg-zinc-900 dark:text-gray-50"
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6 pb-0">
          <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
            Real Caller
          </h3>
          <p className="text-sm text-muted-foreground">
            Enter the phone number to find the name
          </p>
        </div>
        <div className="p-6 flex justify-center">
          <form className="grid w-full gap-4" action={formAction}>
            <div className="flex">
              <input
                id="number"
                name="number"
                className="flex h-10 w-full rounded-md border px-3 py-2 text-sm dark:bg-zinc-900 dark:text-gray-50"
                placeholder="Enter Phone"
                type="text"
                minLength={10}
                maxLength={10}
                required
              />
            </div>
            <p>
              {state.name && (
                 <span className="font-semibold capitalize">
                  Name: {state.name}
                </span>
              )}
              {state.error && (
                <span className="text-red-500">{state.error}</span>
              )}
            </p>
            <SubmitButton />
          </form>
        </div>
      </div>
    </div>
  )
}
