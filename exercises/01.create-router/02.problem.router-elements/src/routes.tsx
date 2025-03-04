import {
	createBrowserRouter,
	// 🐨 import the createRoutesFromElements function from react-router
	// 🐨 import the Route component from react-router
} from 'react-router'

// 🐨 instead of using the array, use createRoutesFromElements to create a router
// with the Route component.
export const router = createBrowserRouter([
	{
		element: <div>Hello World!</div>,
		path: '/',
	},
])
