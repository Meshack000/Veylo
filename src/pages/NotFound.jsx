import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-page px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.08em] text-brand">
        404
      </p>
      <h1 className="mt-3 font-heading text-4xl font-bold text-ink">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base text-body">
        The page you’re looking for doesn’t exist or may have moved.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-xl bg-brand px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-dark"
      >
        Back to home
      </Link>
    </main>
  )
}

export default NotFound
