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
    <main className="flex items-center flex-col text-center pt-32 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">
        post id page
        <span>{id}</span>
      </h1>

      <div className="block m-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {post.body}
        </p>
        <div className="mt-6 flex justify-between items-center">
        <form action={deletePost.bind(null, id)}>
          <input
            className="mr-6 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
            value="Delete Post"
          />
        </form>
        <Link
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          href={`/posts/${id}/edit`}
        >
          Edit
        </Link>
        </div>
      
      </div>
    </main>
  )
}
