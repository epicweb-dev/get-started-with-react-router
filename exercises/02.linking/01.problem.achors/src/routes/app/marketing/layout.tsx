export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-background flex h-screen flex-col">
			<header className="bg-background-alt px-4 py-3">
				<div className="container mx-auto flex max-w-6xl items-center justify-between">
					{/* 🐨 change this to an anchor element and link this to "/" */}
					<span className="text-foreground text-2xl font-bold hover:no-underline focus:no-underline">
						gratitext
					</span>
					<nav>
						{/* 🐨 link this to /recipients */}
						Recipients
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
								{/* 🐨 change this to an anchor element and link this to "/" */}
								<span className="text-foreground-alt text-xl font-bold hover:no-underline focus:no-underline">
									gratitext
								</span>
								<nav className="flex gap-8">
									{/* 🐨 link this to /contact */}
									<span>Contact</span>
									{/* 🐨 link this to /about */}
									<span>About</span>
								</nav>
							</div>
							<div className="border-border flex items-center justify-between border-t pt-8 text-sm">
								<div>All Rights Reserved</div>
								<div className="flex gap-6">
									{/* 🐨 link this to /terms */}
									<span>Terms and Conditions</span>
									{/* 🐨 link this to /privacy */}
									<span>Privacy Policy</span>
								</div>
							</div>
						</div>
					</footer>
				</div>
			</div>
		</div>
	)
}
