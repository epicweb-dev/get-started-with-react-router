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
		<Route path="/" element={<MarketingLayout />}>
			<Route index element={<HomepageRoute />} />
			<Route path="about" element={<AboutRoute />} />
		</Route>,
	),
)
