import { useRouteError } from 'react-router'

export function UnknownErrorBoundary() {
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
