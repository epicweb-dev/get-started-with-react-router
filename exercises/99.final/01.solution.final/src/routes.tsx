import { Routes, Route } from 'react-router'
import { Layout } from './routes/layout.tsx'
import { AboutRoute } from './routes/marketing/about.tsx'
import { HomepageRoute } from './routes/marketing/homepage.tsx'
import { MarketingLayout } from './routes/marketing/layout.tsx'
import { RecipientRoute } from './routes/recipient.tsx'
import { RecipientsRoute } from './routes/recipients.tsx'

export function AppRoutes() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<MarketingLayout />}>
					<Route index element={<HomepageRoute />} />
					<Route path="about" element={<AboutRoute />} />
				</Route>
				<Route path="/recipients" element={<RecipientsRoute />} />
				<Route path="/recipients/:id" element={<RecipientRoute />} />
			</Route>
		</Routes>
	)
}
