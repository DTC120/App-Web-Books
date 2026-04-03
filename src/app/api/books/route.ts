export const dynamic = 'force-dynamic';
import { NextRequest, NextResponse } from 'next/server'
import { getBooks, createBook } from '@/lib/books'
import { revalidatePath } from 'next/cache'

export async function GET() {
  try {
    const books = await getBooks()
    return NextResponse.json(books)
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching books' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, author, description, imageUrl } = body
    if (!title || !author) {
      return NextResponse.json({ error: 'Title and author are required' }, { status: 400 })
    }
    const book = await createBook({ title, author, description, imageUrl })
    revalidatePath('/')
    return NextResponse.json(book, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Error creating book' }, { status: 500 })
  }
}