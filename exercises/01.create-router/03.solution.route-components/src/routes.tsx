import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router'

function HomepageRoute() {
	return <div>Hello World!</div>
}

export const router = createBrowserRouter(
	createRoutesFromElements(<Route path="/" Component={HomepageRoute} />),
)
