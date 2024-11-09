import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Page Not Found</h1>
      <p className="text-accent-foreground">
        Go back to the{' '}
        <Link className="text-sky-500 dark:text-sky-400" to="/">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
