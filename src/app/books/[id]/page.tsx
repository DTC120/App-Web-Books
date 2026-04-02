import Link from 'next/link'
import { getBook } from '@/lib/books'
import { notFound } from 'next/navigation'

export const dynamic = 'force-dynamic'

export default async function BookPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const book = await getBook(id)

  if (!book) {
    notFound()
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
      <p className="text-xl mb-2">Autor: {book.author}</p>
      {book.description && <p className="mb-4">{book.description}</p>}
      {book.imageUrl && (
        <div className="mb-4">
          <img src={book.imageUrl} alt={`Portada de ${book.title}`} className="max-w-xs rounded shadow" />
        </div>
      )}
      <div>
        <Link href={`/books/${book.id}/edit`} className="bg-green-500 text-white px-4 py-2 rounded mr-2">
          Editar
        </Link>
        <Link href="/" className="bg-gray-500 text-white px-4 py-2 rounded">
          Volver
        </Link>
      </div>
    </main>
  )
}