import { NextRequest, NextResponse } from 'next/server'
import { getBook, updateBook, deleteBook } from '@/lib/books'
import { revalidatePath } from 'next/cache'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    const book = await getBook(id)
    if (!book) {
      return NextResponse.json({ error: 'Book not found' }, { status: 404 })
    }
    return NextResponse.json(book)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching book' }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    const body = await request.json()
    const { title, author, description, imageUrl } = body
    const book = await updateBook(id, { title, author, description, imageUrl })
    revalidatePath('/')
    revalidatePath(`/books/${id}`)
    return NextResponse.json(book)
  } catch (error) {
    return NextResponse.json({ error: 'Error updating book' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    await deleteBook(id)
    revalidatePath('/')
    return NextResponse.json({ message: 'Book deleted' })
  } catch (error) {
    return NextResponse.json({ error: 'Error deleting book' }, { status: 500 })
  }
}