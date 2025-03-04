// 🐨 bring in Link from react-router

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-background flex h-screen flex-col">
			<header className="bg-background-alt px-4 py-3">
				<div className="container mx-auto flex max-w-6xl items-center justify-between">
					{/* 🐨 change this to a Link */}
					<a
						href="/"
						className="text-foreground text-2xl font-bold hover:no-underline focus:no-underline"
					>
						gratitext
					</a>
					<nav>
						{/* 🐨 change this to a Link */}
						<a href="/recipients">Recipients</a>
					</nav>
				</div>
			</header>

			<div className="flex min-h-0 flex-1 flex-grow flex-col">
				<div className="flex h-full flex-grow flex-col">
					<main className="container mx-auto max-w-6xl flex-1 px-4 py-8">
						{children}
					</main>

					<footer className="bg-background-alt px-4 py-8">
						<div className="container mx-auto max-w-6xl">
							<div className="mb-8 flex items-center justify-between">
								{/* 🐨 change this to a Link */}
								<a
									href="/"
									className="text-foreground-alt text-xl font-bold hover:no-underline focus:no-underline"
								>
									gratitext
								</a>
								<nav className="flex gap-8">
									{/* 🐨 change this to a Link */}
									<a href="/contact">Contact</a>
									{/* 🐨 change this to a Link */}
									<a href="/about">About</a>
								</nav>
							</div>
							<div className="border-border flex items-center justify-between border-t pt-8 text-sm">
								<div>All Rights Reserved</div>
								<div className="flex gap-6">
									{/* 🐨 change this to a Link */}
									<a href="/terms">Terms and Conditions</a>
									{/* 🐨 change this to a Link */}
									<a href="/privacy">Privacy Policy</a>
								</div>
							</div>
						</div>
					</footer>
				</div>
			</div>
		</div>
	)
}
