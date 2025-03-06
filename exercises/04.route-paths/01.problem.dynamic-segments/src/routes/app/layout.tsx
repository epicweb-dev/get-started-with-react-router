import { Link, Outlet } from 'react-router'
import { ButtonLink } from '#src/components/button.tsx'

export function AppLayout() {
	return (
		<div className="bg-background flex h-screen min-h-[700px] flex-col">
			<header className="bg-background-alt px-4 py-3">
				<div className="container mx-auto flex max-w-6xl items-center justify-between">
					<Link
						to="/"
						className="text-foreground text-2xl font-bold hover:no-underline focus:no-underline"
					>
						gratitext
					</Link>
					<nav>
						<ButtonLink to="/recipients">Recipients</ButtonLink>
					</nav>
				</div>
			</header>

			<div className="flex min-h-0 flex-1 flex-col">
				<Outlet />
			</div>
		</div>
	)
}
