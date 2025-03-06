import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router'

function HomepageRoute() {
	return <div>Hello World!</div>
}

// 🐨 create an AboutRoute component that returns a div that says "About"

export const router = createBrowserRouter(
	createRoutesFromElements(
		// 🐨 create a fragment to contain both sibling routes
		<Route path="/" Component={HomepageRoute} />,
		// 🐨 create a sibling route for the about page with the path "/about"
	),
)
