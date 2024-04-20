import PostsList from "@/src/components/PostsList"
import AddPostForm from "@/src/components/posts/AddPostForm"

import { getAllPost } from "@/src/actions/posts"

import Link from "next/link"

type PostType = {
  id: number | string
  name: string
}

export default async function Posts() {
  const response = await fetch("https://dummyjson.com/posts?limit=10")
  const data = await response.json()

  const posts = await getAllPost()

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
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/posts/${post.id}`}
              className="block m-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {post.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {post.body}
              </p>
            </Link>
          </li>
        ))}
      </ul>

      {/* 
      <div>This is not data fom bd</div>
      <div>
        <PostsList posts={data.posts} />
      </div> */}
    </main>
  )
}
