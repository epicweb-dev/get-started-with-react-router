import { Link, Outlet } from 'react-router'
import { LinkButton } from '../components/Button.tsx'

export function Layout() {
	return (
		<div className="bg-background flex min-h-screen flex-col">
			<header className="bg-background-alt px-4 py-3">
				<div className="container mx-auto flex max-w-6xl items-center justify-between">
					<Link
						to="/"
						className="text-foreground text-2xl font-bold hover:no-underline focus:no-underline"
					>
						gratitext
					</Link>
					<nav className="flex items-center space-x-6">
						<Link to="/login">Log in</Link>
						<LinkButton to="/signup">Start 14-day trial</LinkButton>
					</nav>
				</div>
			</header>

			<div className="flex flex-1 flex-col">
				<Outlet />
			</div>
		</div>
	)
}
