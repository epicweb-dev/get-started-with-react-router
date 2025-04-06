import { Outlet, useRouteError } from 'react-router'
import styles from './styles/index.css?url'

export default function Root() {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="stylesheet" href={styles} />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>GratiText</title>
			</head>
			<body>
				<Outlet />
			</body>
		</html>
	)
}

export function ErrorBoundary() {
	const error = useRouteError()

	return (
		<div className="bg-danger-background text-danger-foreground mt-20 flex h-full flex-col items-center justify-center px-8 py-12">
			<h1 className="text-2xl font-bold">Unknown error</h1>
			<p className="text-danger-foreground/80 text-sm">
				An unknown error occurred. Please try again later.
			</p>
			<pre className="text-danger-foreground/80 bg-danger-foreground/10 mt-4 max-h-[50vh] overflow-auto rounded-lg p-4 text-sm break-all whitespace-break-spaces">
				{error instanceof Error ? error.message : 'Unknown error'}
			</pre>
		</div>
	)
}
