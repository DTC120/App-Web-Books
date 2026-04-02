import Link from 'next/link'
import { getBooks } from '@/lib/books'
import DeleteBookButton from '@/components/DeleteBookButton'

export const dynamic = 'force-dynamic'

export default async function Home() {
  const books = await getBooks()

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Gestión de Libros</h1>
      <Link href="/books/add" className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block">
        Agregar Libro
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <div key={book.id} className="border p-4 rounded">
            {book.imageUrl && (
              <img src={book.imageUrl} alt={`Portada de ${book.title}`} className="w-20 h-30 object-cover rounded mb-2" />
            )}
            <h2 className="text-xl font-semibold">{book.title}</h2>
            <p className="text-gray-600">{book.author}</p>
            <div className="mt-2">
              <Link href={`/books/${book.id}`} className="text-blue-500 mr-2">Ver</Link>
              <Link href={`/books/${book.id}/edit`} className="text-green-500 mr-2">Editar</Link>
              <DeleteBookButton id={book.id} />
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}