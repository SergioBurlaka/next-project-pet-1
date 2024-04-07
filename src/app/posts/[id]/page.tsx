"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation"

export default function PostId({ params }: { params: { id: string } }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  console.log("router", router)
  console.log("pathname", pathname)
  console.log("searchParams", searchParams)

  const { id } = params

  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">
        post id page
        <span>{id}</span>
      </h1>
      <p className="max-w-[750px] mx-auto">Lorem ipsum dolor sit amet.</p>
    </main>
  )
}
