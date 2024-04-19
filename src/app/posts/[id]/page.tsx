import { deletePost, getPostById } from "@/src/actions/posts"
// import { useRouter, usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"

export default async function Post({ params }: { params: { id: string } }) {
  // const router = useRouter()
  // const pathname = usePathname()
  // const searchParams = useSearchParams()

  const { id } = params

  const post = await getPostById(id)

  if (!post) return <div className="py-20">Post not found </div>


  return (
    <main className="text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">
        post id page
        <span>{id}</span>
      </h1>

      <div className="card-of-post">
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <form action={deletePost.bind(null, id)}>
          <input type="submit" value="Delete Post" />
        </form>
        <Link href={`/posts/${id}/edit`}>Edit</Link>
      </div>
    </main>
  )
}
