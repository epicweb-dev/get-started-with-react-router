export function HomepageRoute() {
	return (
		<div className="homepage">
			{/* Hero Section */}
			<section className="bg-background px-4 py-16">
				<div className="container mx-auto flex max-w-6xl items-center justify-between">
					<div className="max-w-xl">
						<h1 className="text-text mb-4 font-serif text-5xl font-bold">
							Thoughtful Connections Made Simple
						</h1>
						<p className="text-text-secondary mb-8 text-lg">
							Strengthen your relationships with regular personalized messages
							of love and gratitude
						</p>
						<button className="bg-primary hover:bg-primary-hover rounded-full px-8 py-3 font-medium text-white">
							Get Started
						</button>
					</div>
					<div className="relative">
						{/* Decorative elements */}
						<div className="absolute -top-4 -left-4 text-4xl">⭐️</div>
						<div className="absolute top-1/4 -right-2 text-4xl">⭐️</div>
						<div className="absolute -right-8 bottom-1/4 text-4xl">⭐️</div>
						<div className="absolute bottom-1/3 -left-6 text-4xl">🧡</div>
						<div className="absolute -right-4 -bottom-4 text-4xl">✨</div>
						{/* Main image */}
						<div className="bg-accent-blue relative h-[500px] w-[400px] overflow-hidden rounded-[40px]">
							<img
								src="/images/woman-smiling-at-text.jpg"
								alt="Woman smiling at her phone while holding flowers"
								className="h-full w-full object-cover"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Message by You Section */}
			<section className="bg-secondary px-4 py-16 text-white">
				<div className="container mx-auto max-w-2xl text-center">
					<h2 className="mb-6 text-4xl font-bold">
						Messages written by you... Not by AI.
					</h2>
					<p className="text-lg">
						Our platform schedules and delivers personal heartfelt messages from
						you, making it easy to stay connected and nurture your most
						important relationships.
					</p>
				</div>
			</section>

			{/* How it Works Section */}
			<section className="bg-background px-4 py-16">
				<div className="container mx-auto max-w-4xl">
					<h2 className="text-text mb-12 text-center font-serif text-4xl font-bold">
						How does gratitext work?
					</h2>
					<div className="grid grid-cols-2 gap-8">
						<div className="space-y-4 text-center">
							<div className="text-primary text-4xl font-bold">01</div>
							<h3 className="text-text text-xl font-bold">Sign Up</h3>
							<p className="text-text-secondary">
								Create an account and start sending thoughtful messages to your
								loved ones
							</p>
						</div>
						<div className="space-y-4 text-center">
							<div className="text-primary text-4xl font-bold">02</div>
							<h3 className="text-text text-xl font-bold">Add a Loved One</h3>
							<p className="text-text-secondary">
								Add the phone number of your loved one to get you started
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section className="bg-background-alt px-4 py-16">
				<div className="container mx-auto max-w-4xl">
					<h2 className="text-text mb-12 text-center font-serif text-4xl font-bold">
						Affordable pricing plans
					</h2>
					<div className="grid grid-cols-2 gap-8">
						<div className="bg-background rounded-lg p-8 shadow-lg">
							<h3 className="text-text mb-4 text-xl font-bold">Basic</h3>
							<p className="text-text-secondary mb-4 text-sm">
								1 message per day
							</p>
							<div className="mb-6">
								<span className="text-text text-3xl font-bold">$4</span>
								<span className="text-text-secondary">/mo</span>
							</div>
							<button className="border-primary text-primary hover:bg-primary w-full rounded-full border px-6 py-2 hover:text-white">
								Get started
							</button>
						</div>
						<div className="bg-background rounded-lg p-8 shadow-lg">
							<h3 className="text-text mb-4 text-xl font-bold">Premium</h3>
							<p className="text-text-secondary mb-4 text-sm">
								10 messages per day
							</p>
							<div className="mb-6">
								<span className="text-text text-3xl font-bold">$14</span>
								<span className="text-text-secondary">/mo</span>
							</div>
							<button className="bg-primary hover:bg-primary-hover w-full rounded-full px-6 py-2 text-white">
								Get started
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="bg-accent-peach px-4 py-16">
				<div className="container mx-auto max-w-2xl text-center">
					<h2 className="text-text mb-6 font-serif text-2xl font-bold">
						Create your account today and get 2 weeks for free!
					</h2>
					<div className="flex justify-center space-x-4">
						<input
							type="email"
							placeholder="Enter your email"
							className="bg-background text-text placeholder:text-text-secondary rounded-full px-6 py-2"
						/>
						<button className="bg-secondary hover:bg-secondary-hover rounded-full px-6 py-2 text-white">
							Get started
						</button>
					</div>
				</div>
			</section>
		</div>
	)
}
