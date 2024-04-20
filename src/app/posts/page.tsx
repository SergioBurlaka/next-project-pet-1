import PostsList from "@/src/components/posts/PostsList"
import AddPostForm from "@/src/components/posts/AddPostForm"

import { getAllPost } from "@/src/actions/posts"

import { Suspense } from "react"

import Link from "next/link"

type PostType = {
  id: number | string
  name: string
}

export default async function Posts() {
  const response = await fetch("https://dummyjson.com/posts?limit=10")
  const data = await response.json()

  const posts = await getAllPost()

  //Зробимо затримку

  await new Promise((res) => setTimeout(res, 2000))

  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Posts page</h1>
      {/* <AddPostForm /> */}
      <Link
        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        href="/posts/new"
      >
        Add new post
      </Link>
      <h1>blog posts</h1>

      <Suspense fallback="Loading posts ...">
        <PostsList />
      </Suspense>

      {/* 
      <div>This is not data fom bd</div>
      <div>
        <PostsList posts={data.posts} />
      </div> */}
    </main>
  )
}
