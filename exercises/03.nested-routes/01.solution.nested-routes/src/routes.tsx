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
		<Route Component={MarketingLayout}>
			<Route path="/" Component={HomepageRoute} />
			<Route path="/about" Component={AboutRoute} />
		</Route>,
	),
)
