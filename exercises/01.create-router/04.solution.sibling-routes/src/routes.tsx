import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router'

function HomepageRoute() {
	return <div>Hello World!</div>
}

function AboutRoute() {
	return <div>About</div>
}

export const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" Component={HomepageRoute} />
			<Route path="/about" Component={AboutRoute} />
		</>,
	),
)
