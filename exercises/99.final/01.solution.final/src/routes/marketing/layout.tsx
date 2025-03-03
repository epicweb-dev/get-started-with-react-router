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
							<Link to="/contact" className="text-link hover:text-link-hover">
								Contact
							</Link>
							<Link to="/about" className="text-link hover:text-link-hover">
								About
							</Link>
						</nav>
					</div>
					<div className="border-border flex items-center justify-between border-t pt-8 text-sm">
						<div>All Rights Reserved</div>
						<div className="flex gap-6">
							<Link to="/terms" className="text-link hover:text-link-hover">
								Terms and Conditions
							</Link>
							<Link to="/privacy" className="text-link hover:text-link-hover">
								Privacy Policy
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
