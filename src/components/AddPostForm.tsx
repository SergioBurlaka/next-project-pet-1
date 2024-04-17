// "use client"

const AddPostForm = () => {
  const addPost = async (formData: FormData) => {
    "use server"
    await prisma.post.create({
      data: {
        title: formData.get("title") as string,
        body: formData.get("body") as string
      }
    })
  }

  return (
    <div className="mx-auto  px-4">
      <div className=" p-5 m-5  border-solid border-2    border-green-600/50 rounded-2xl">
        <h3 className="text-2xl font-bold">Create Post Form</h3>

        <form
          action={addPost}
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
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddPostForm
