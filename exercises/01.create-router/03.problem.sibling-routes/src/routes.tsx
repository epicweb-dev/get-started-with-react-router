import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router'

export const router = createBrowserRouter(
	createRoutesFromElements(
		// 🐨 create a fragment to contain both sibling routes
		<Route path="/" element={<div>Hello World!</div>} />,
		// 🐨 create a sibling route for the about page (just a div that says "About" with the path "/about")
	),
)
