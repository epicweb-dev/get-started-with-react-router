import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router'
import { AppLayout } from './routes/app/layout.tsx'
import { AboutRoute } from './routes/app/marketing/about.tsx'
import { HomepageRoute } from './routes/app/marketing/homepage.tsx'
import { MarketingLayout } from './routes/app/marketing/layout.tsx'

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" Component={AppLayout}>
			<Route Component={MarketingLayout}>
				<Route index Component={HomepageRoute} />
				<Route path="about" Component={AboutRoute} />
			</Route>
		</Route>,
	),
)
