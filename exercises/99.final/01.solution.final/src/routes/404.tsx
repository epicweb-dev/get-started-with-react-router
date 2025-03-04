import { ButtonLink } from '#src/components/button.tsx'

export function NotFoundRoute() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-4">
			<h1 className="text-4xl font-bold">404 - Page Not Found</h1>
			<p className="text-lg opacity-80">
				Sorry, we couldn't find the page you're looking for.
			</p>
			<ButtonLink to="/">Go back home</ButtonLink>
		</div>
	)
}
