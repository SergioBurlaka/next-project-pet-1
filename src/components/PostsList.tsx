"use client"
import { FC, ReactElement } from "react"

type PostType = {
  body: string
  id: number
  reactions: number
  tags: string[]
  title: string
  userId: number
}
type PostsType = {
  posts: PostType[]
}

const PostsList = ({ posts }: PostsType) => {
  return (
    <div className=" mx-auto px-4">
      <ul>
        {posts &&
          posts?.map((item) => {
            return (
              <li key={item.id}>
                <div className="p-5 border-solid border-2 m-5 border-indigo-500/50 rounded-2xl shadow hover:shadow-lg">
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="text-left	 py-8">{item.body}</p>

                  <div  className="flex justify-start">
                    {item.tags &&
                      item.tags.map((tag, index) => (
                        <span
                          key={index}
                          className=" hover:transition-all  ease-in-out delay-150 cursor-pointer shadow-2xl hover:shadow-lg py-1 px-2  m-2 text-white rounded-lg bg-slate-500 hover:bg-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default PostsList
