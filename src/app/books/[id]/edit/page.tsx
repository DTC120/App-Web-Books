import Link from 'next/link'
import { getBook } from '@/lib/books'
import { notFound } from 'next/navigation'
import EditBookForm from '@/components/EditBookForm'

export const dynamic = 'force-dynamic'

export default async function EditBookPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const book = await getBook(id)

  if (!book) {
    notFound()
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Editar Libro</h1>
      <EditBookForm book={book} />
      <Link href={`/books/${book.id}`} className="bg-gray-500 text-white px-4 py-2 rounded mt-4 inline-block">
        Cancelar
      </Link>
    </main>
  )
}