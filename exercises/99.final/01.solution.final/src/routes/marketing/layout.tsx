import { Outlet, Link } from 'react-router'

export function MarketingLayout() {
	return (
		<div className="flex h-full flex-grow flex-col">
			<main className="flex-1">
				<Outlet />
			</main>

			<footer className="bg-white px-4 py-8">
				<div className="container mx-auto max-w-6xl">
					<div className="mb-8 flex items-center justify-between">
						<Link to="/" className="text-xl font-bold text-slate-800">
							gratitext
						</Link>
						<nav className="flex space-x-8">
							<Link
								to="/contact"
								className="text-slate-600 hover:text-slate-800"
							>
								Contact
							</Link>
							<Link to="/about" className="text-slate-600 hover:text-slate-800">
								About
							</Link>
						</nav>
					</div>
					<div className="flex items-center justify-between border-t border-slate-200 pt-8 text-sm text-slate-500">
						<div>All Rights Reserved</div>
						<div className="flex space-x-6">
							<Link to="/terms" className="hover:text-slate-700">
								Terms and Conditions
							</Link>
							<Link to="/privacy" className="hover:text-slate-700">
								Privacy Policy
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
