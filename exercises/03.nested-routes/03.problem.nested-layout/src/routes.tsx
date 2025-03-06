import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router'
// 🐨 bring in the AppLayout from ./routes/app/layout.tsx
import { AboutRoute } from './routes/app/marketing/about.tsx'
import { HomepageRoute } from './routes/app/marketing/homepage.tsx'
import { MarketingLayout } from './routes/app/marketing/layout.tsx'

export const router = createBrowserRouter(
	createRoutesFromElements(
		// 🐨 wrap all the routes in a new Route that uses the AppLayout component as its element
		// 💯 experiment a bit with adding a path to this Route. What happens if you add a path like "/app"?
		<Route path="/" Component={MarketingLayout}>
			<Route index Component={HomepageRoute} />
			<Route path="about" Component={AboutRoute} />
		</Route>,
		// 🧝‍♂️ Once you get the header in an AppLayout component, then I'll be able
		// to add the routes for the recipients. Thanks!
	),
)
