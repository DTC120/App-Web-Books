import Link from 'next/link'
import AddBookForm from '@/components/AddBookForm'

export default function AddBookPage() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Agregar Libro</h1>
      <AddBookForm />
      <Link href="/" className="bg-gray-500 text-white px-4 py-2 rounded mt-4 inline-block">
        Cancelar
      </Link>
    </main>
  )
}