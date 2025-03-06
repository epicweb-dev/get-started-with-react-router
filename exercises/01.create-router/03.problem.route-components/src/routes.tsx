import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router'

// 🐨 create a HomepageRoute component that returns a div that says "Hello World!"
export const router = createBrowserRouter(
	createRoutesFromElements(
		// 🐨 update this to use the Component prop
		<Route path="/" element={<div>Hello World!</div>} />,
	),
)
