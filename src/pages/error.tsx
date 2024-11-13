import { Link, useRouteError } from 'react-router-dom'

export default function Error() {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Whoops, something happened...</h1>
      <p className="text-accent-foreground">
        An error occured in the application. You can find more details bellow.
      </p>
      <pre>{error?.message || JSON.stringify(error)}</pre>
      <pre className="text-accent-foreground">
        Go back to the{' '}
        <Link className="text-sky-500 dark:text-sky-400" to="/">
          Dashboard
        </Link>
      </pre>
    </div>
  )
}
