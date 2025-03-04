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
						{/* 🐨 link "Kent C. Dodds" to https://kentcdodds.com */}
						{/* 🐨 link "gratitext.app" to https://gratitext.app */}
						Gratitext is actually a real product by Kent C. Dodds which you can
						find and use at gratitext.app, but the version you're looking at now
						is for workshop purposes only.
					</p>
					<p>
						{/* 🐨 link "github.com/epicweb-dev/get-started-with-react-router" to https://github.com/epicweb-dev/get-started-with-react-router */}
						You can find the source code for this workshop at
						github.com/epicweb-dev/get-started-with-react-router
					</p>
					<p>Have a lovely day!</p>
				</div>
				<div className="flex flex-grow items-end">
					{/* 🐨 link this to "/" */}
					<Icon name="ArrowLeft">Go home</Icon>
				</div>
			</div>
		</Layout>
	)
}
