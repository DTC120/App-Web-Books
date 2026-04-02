# App Web Books

Una aplicación web para gestionar libros construida con Next.js, Prisma y PostgreSQL (Neon).

## Características

- Consultar todos los registros de libros
- Consultar los registros de manera individual
- Editar los registros
- Eliminar registros
- Agregar registros
- Agregar URL de imagen para portada del libro

## Tecnologías

- **Frontend**: Next.js 14 con App Router, TypeScript, Tailwind CSS
- **Backend**: API Routes de Next.js
- **Base de datos**: PostgreSQL en Neon
- **ORM**: Prisma

## Instalación

1. Clona el repositorio
2. Instala las dependencias: `npm install`
3. Configura la base de datos en `.env.local` con tu URL de Neon
4. Genera el cliente de Prisma: `npx prisma generate`
5. Sincroniza la base de datos: `npx prisma db push`
6. Ejecuta el servidor de desarrollo: `npm run dev`

## Despliegue en Vercel

1. Conecta tu repositorio a Vercel
2. Configura las variables de entorno en Vercel (DATABASE_URL)
3. Despliega

## Uso

- Visita `http://localhost:3000` para ver la lista de libros
- Usa los enlaces para agregar, editar o eliminar libros