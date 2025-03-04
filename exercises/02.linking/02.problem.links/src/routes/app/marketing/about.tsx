// 🐨 bring in Link from react-router
import { Icon } from '#src/components/icon.tsx'
import { Layout } from './layout.tsx'

export function AboutRoute() {
	return (
		<Layout>
			<div className="flex h-full flex-col gap-4">
				<h1 className="text-3xl font-bold">About Us</h1>
				<div className="flex flex-col gap-4">
					<p>
						Gratitext is a platform that allows you to send text messages to
						your friends and family.
					</p>
					<p>
						Gratitext is actually a real product by{' '}
						<a href="https://kentcdodds.com" target="_blank">
							Kent C. Dodds
						</a>{' '}
						which you can find and use at{' '}
						<a href="https://gratitext.app" target="_blank">
							gratitext.app
						</a>
						, but the version you're looking at now is for workshop purposes
						only.
					</p>
					<p>
						You can find the source code for this workshop at{' '}
						<a
							href="https://github.com/epicweb-dev/get-started-with-react-router"
							target="_blank"
						>
							github.com/epicweb-dev/get-started-with-react-router
						</a>
					</p>
					<p>Have a lovely day!</p>
				</div>
				<div className="flex flex-grow items-end">
					{/* 🐨 change this to a Link */}
					<a href="/">
						<Icon name="ArrowLeft">Go home</Icon>
					</a>
				</div>
			</div>
		</Layout>
	)
}
