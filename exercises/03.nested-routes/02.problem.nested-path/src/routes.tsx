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
		// 🐨 set the path for the MarketingLayout to "/"
		// 💯 play around with setting the path to "/app" and see how that affects things
		<Route element={<MarketingLayout />}>
			{/* 🐨 remove the path from the HomepageRoute and add the index prop */}
			<Route path="/" element={<HomepageRoute />} />
			{/* 🐨 remove the "/" from about to make it relative to the parent route */}
			<Route path="/about" element={<AboutRoute />} />
		</Route>,
	),
)
