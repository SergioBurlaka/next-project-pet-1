"use server"

// посилання на урок з призмою та базою даних
// https://youtu.be/qLoHEtwNuCE?si=FWNwHbRtkIUkk0cR

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { prisma } from "../db/prisma"

export async function createPost(params: FormData) {
  const { title, body } = Object.fromEntries(params)
  redirect("/posts/...")
}

export async function updatePost(params: FormData) {
  const { title, body, id } = Object.fromEntries(params)

  revalidatePath("/posts/...")
  redirect("/posts/...")
}

export async function deletePost(id: string) {
  revalidatePath("/posts/...")
  redirect("/posts/...")
}

export async function getPostById(id: string) {
  return prisma.post.findUnique({
    where: {
      id
    }
  })
}
export async function getAllPost() {
  return prisma.post.findMany()
}
