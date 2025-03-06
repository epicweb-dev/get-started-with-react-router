import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router'
// 🐨 import the MarketingLayout from ./routes/app/marketing/layout.tsx
import { AboutRoute } from './routes/app/marketing/about.tsx'
import { HomepageRoute } from './routes/app/marketing/homepage.tsx'

export const router = createBrowserRouter(
	createRoutesFromElements(
		// 🐨 turn this fragment into a <Route> element with the element prop
		// set to <MarketingLayout />
		<>
			<Route path="/" Component={HomepageRoute} />
			<Route path="/about" Component={AboutRoute} />
		</>,
	),
)
