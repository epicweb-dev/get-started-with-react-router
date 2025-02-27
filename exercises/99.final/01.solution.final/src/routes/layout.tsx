import { Link, Outlet } from 'react-router'

export function Layout() {
	return (
		<div className="bg-background flex min-h-screen flex-col">
			<header className="bg-background-alt px-4 py-3">
				<div className="container mx-auto flex max-w-6xl items-center justify-between">
					<Link to="/" className="text-text text-2xl font-bold">
						gratitext
					</Link>
					<nav className="flex items-center space-x-6">
						<Link to="/login" className="text-text-secondary hover:text-text">
							Log in
						</Link>
						<Link
							to="/signup"
							className="bg-secondary hover:bg-secondary-hover rounded-full px-6 py-2 text-white"
						>
							Start 14-day trial
						</Link>
					</nav>
				</div>
			</header>

			<div className="flex flex-1 flex-col">
				<Outlet />
			</div>
		</div>
	)
}
