import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router'
import { AboutRoute } from './routes/app/marketing/about.tsx'
import { HomepageRoute } from './routes/app/marketing/homepage.tsx'
import { MarketingLayout } from './routes/app/marketing/layout.tsx'

export const router = createBrowserRouter(
	createRoutesFromElements(
		// 🐨 wrap all the routes in a new Route that uses the AppLayout component as its element
		// 💯 experiment a bit with adding a path to this Route. What happens if you add a path like "/app"?
		<Route element={<MarketingLayout />}>
			<Route path="/" element={<HomepageRoute />} />
			<Route path="/about" element={<AboutRoute />} />
		</Route>,
		// 🐨 add a Route for recipients (/recipients) and new recipient (/recipients/new)
	),
)
