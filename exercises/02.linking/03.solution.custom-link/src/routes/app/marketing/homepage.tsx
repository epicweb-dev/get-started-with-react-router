import { ButtonLink } from '#src/components/button.tsx'
import { Layout } from './layout.tsx'

export function HomepageRoute() {
	return (
		<Layout>
			<div className="flex flex-col gap-8 md:flex-row md:gap-16">
				<div className="order-2 flex flex-col justify-center gap-8 md:order-1">
					<h1 className="font-serif text-6xl font-bold text-balance">
						Thoughtful Connections Made Simple
					</h1>
					<p className="text-xl">
						Strengthen your relationships with regular personalized messages of
						love and gratitude.
					</p>
					<div>
						<ButtonLink to="/signup" variant="secondary">
							Get Started
						</ButtonLink>
					</div>
				</div>
				<div className="order-1 mx-16 flex justify-center md:order-2 md:mx-0">
					<img
						src="/images/woman-smiling-at-text.jpg"
						alt="Woman smiling"
						className="aspect-[8/5] max-h-[300px] w-full rounded-lg object-cover md:aspect-[4/5] md:max-h-[800px]"
					/>
				</div>
			</div>
		</Layout>
	)
}
