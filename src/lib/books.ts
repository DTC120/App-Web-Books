import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getBooks() {
  return await prisma.book.findMany()
}

export async function getBook(id: number) {
  return await prisma.book.findUnique({
    where: { id }
  })
}

export async function createBook(data: { title: string; author: string; description?: string; imageUrl?: string }) {
  return await prisma.book.create({
    data
  })
}

export async function updateBook(id: number, data: { title?: string; author?: string; description?: string; imageUrl?: string }) {
  return await prisma.book.update({
    where: { id },
    data
  })
}

export async function deleteBook(id: number) {
  return await prisma.book.delete({
    where: { id }
  })
}