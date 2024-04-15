import PostsList from "@/src/components/PostsList"

type PostType = {
  id: number | string
  name: string
}

export default async function Posts() {
  const response = await fetch("https://dummyjson.com/posts?limit=10")
  const data = await response.json()

  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Posts page</h1>
      <p className="max-w-[750px] mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum,
        similique.
      </p>
      <div>
        <PostsList posts={data.posts} />
      </div>
    </main>
  )
}
