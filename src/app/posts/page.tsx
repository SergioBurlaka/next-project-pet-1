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
      <Link href="/posts/new">Add new post</Link>
      <h1>blog posts</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
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
