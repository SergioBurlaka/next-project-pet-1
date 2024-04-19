import React from "react"

import { getPostById } from "@/src/actions/posts"

import { updatePost } from "@/src/actions/posts"

const EditPost = async ({ params }: { params: { id: string } }) => {
  const post = await getPostById(params.id)

  if (!post) return <div className="py-20">Post not found </div>

  return (
    <div className=" pt-32 px-5 mx-auto ">
      <div className=" p-5 m-5  border-solid border-2    border-green-600/50 rounded-2xl">
        <h3 className="text-2xl font-bold">Edit Post Form</h3>

        <form
          action={updatePost}
          className="flex flex-col rounded max-w-[500px] mb-10 mx-auto space-y-2"
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="border rounded h-10 px-3"
            defaultValue={post.title}
            required
          />
          <textarea
            name="body"
            placeholder="content"
            className="border rounded p-3"
            rows={5}
            defaultValue={post.body}
            required
          />
          <input type="hidden" name="id" value={post.id} />
          <div>
            <input type="submit" value="Update post" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditPost
