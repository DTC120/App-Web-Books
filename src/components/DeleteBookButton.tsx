'use client'

import { useRouter } from 'next/navigation'

export default function DeleteBookButton({ id }: { id: number }) {
  const router = useRouter()

  const handleDelete = async () => {
    if (!confirm('¿Eliminar este libro?')) return

    const response = await fetch(`/api/books/${id}`, {
      method: 'DELETE',
    })

    if (response.ok) {
      router.refresh()
    } else {
      const data = await response.json().catch(() => null)
      alert(data?.error || 'Error al eliminar el libro')
    }
  }

  return (
    <button onClick={handleDelete} className="text-red-500">
      Eliminar
    </button>
  )
}
