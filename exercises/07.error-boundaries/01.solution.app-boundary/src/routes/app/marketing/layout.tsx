import { Outlet, Link } from 'react-router'

export function MarketingLayout() {
	return (
		<div className="flex h-full flex-grow flex-col">
			<main className="container mx-auto max-w-6xl flex-1 px-4 py-8">
				<Outlet />
			</main>

			<footer className="bg-background-alt px-4 py-8">
				<div className="container mx-auto max-w-6xl">
					<div className="mb-8 flex items-center justify-between">
						<Link
							to="/"
							className="text-foreground-alt text-xl font-bold hover:no-underline focus:no-underline"
						>
							gratitext
						</Link>
						<nav className="flex gap-8">
							<Link to="/contact">Contact</Link>
							<Link to="/about">About</Link>
						</nav>
					</div>
					<div className="border-border flex items-center justify-between border-t pt-8 text-sm">
						<div>All Rights Reserved</div>
						<div className="flex gap-6">
							<Link to="/terms">Terms and Conditions</Link>
							<Link to="/privacy">Privacy Policy</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
