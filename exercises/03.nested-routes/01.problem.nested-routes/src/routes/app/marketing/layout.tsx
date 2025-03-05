import { Link } from 'react-router'
import { ButtonLink } from '#src/components/button.tsx'

// 🐨 remove the children prop
export function MarketingLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-background flex h-screen flex-col">
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

			<div className="flex min-h-0 flex-1 flex-grow flex-col">
				<div className="flex h-full flex-grow flex-col">
					<main className="container mx-auto max-w-6xl flex-1 px-4 py-8">
						{/* 🐨 use the Outlet component here */}
						{children}
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
			</div>
		</div>
	)
}
