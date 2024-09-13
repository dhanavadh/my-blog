import Link from 'next/link'

export default function NotFound() {
  return <div>
      <div className="grid grid-rows min-h-screen items-center justify-items-center">
      <main className="flex flex-col items-center mx-6">
      <div className="grid">
        <div className="grid">          
        </div>
      </div>
        <div className="mx-2 sm:w-64">
          <h1 className="sm:text-5xl text-4xl font-mono font-medium">404</h1>
          <h1 className="mb-3 text-3xl font-mono font-medium">Page Not Found</h1>
          <Link href='/' className='underline-thickness-1 underline-offset-4 hover:underline font-mono'>&gt;Go back to home</Link>
        </div>
      </main>
        </div>
  </div>
}