// "use client"

import { createPost } from "@/src/actions/posts"

const AddPostForm = () => {
  return (
    <div className="pt-32 px-5 mx-auto  ">
      <div className=" p-5 m-5  border-solid border-2    border-green-600/50 rounded-2xl">
        <h3 className="text-2xl font-bold">Create Post Form</h3>

        <form
          action={createPost}
          className="flex flex-col rounded max-w-[500px] mb-10 mx-auto space-y-2"
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="border rounded h-10 px-3"
            required
          />
          <textarea
            name="body"
            placeholder="Body"
            className="border rounded p-3"
            rows={5}
            required
          />
          <button
            className="px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddPostForm
