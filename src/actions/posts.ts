"use server"

// посилання на урок з призмою та базою даних
// https://youtu.be/qLoHEtwNuCE?si=FWNwHbRtkIUkk0cR

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import type { Post } from "@prisma/client"

import { prisma } from "../db/prisma"

export const createPost = async (params: FormData) => {
  const { title, body } = Object.fromEntries(params) as Omit<Post, "id">
  const post = await prisma.post.create({ data: { title, body } })
  redirect(`/posts/${post.id}`)
}

export const updatePost = async (params: FormData) => {
  const { title, body, id } = Object.fromEntries(params) as Post

  const post = await prisma.post.update({
    where: { id },
    data: {
      title,
      body
    }
  })

  revalidatePath(`/posts/${post.id}`)
  redirect(`/posts/${post.id}`)
}

export const deletePost = async (id: string) => {
  await prisma.post.delete({ where: { id } })
  revalidatePath("/posts")
  redirect("/posts")
}

export const getPostById = async (id: string) =>
  prisma.post.findUnique({
    where: {
      id
    }
  })

export const getAllPost = async () => prisma.post.findMany()
