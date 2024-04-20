import { PrismaClient } from "@prisma/client"

// https://youtu.be/qLoHEtwNuCE?si=bs8UJR0BNqzIN5ZV
// lik to lesson

const prisma = new PrismaClient()

const initPosts = [
  {
    title: "super title",
    body: " description"
  },
  {
    title: "tango",
    body: "a dance with argentinian expression"
  },
  {
    title: "salsa",
    body: "salsa it's a dance for people with strong heart"
  },
  {
    title: "bachata",
    body: " its a hot dance"
  }
]

const seed = async () => {
  await prisma.post.deleteMany()

  for (const post of initPosts) {
    await prisma.post.create({
      data: post
    })
  }
}

seed()

//  npm run prisma-seed
// to see result npx prisma studio
