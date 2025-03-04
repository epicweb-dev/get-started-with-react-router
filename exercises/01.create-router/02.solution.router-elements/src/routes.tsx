import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router'

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<div>Hello World!</div>} />,
	),
)
