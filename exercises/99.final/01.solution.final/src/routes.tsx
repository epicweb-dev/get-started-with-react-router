import { Routes, Route } from 'react-router'
import { AppLayout } from './routes/app/layout.tsx'
import { RecipientRoute } from './routes/app/recipient.tsx'
import { RecipientsRoute } from './routes/app/recipients.tsx'
import { AboutRoute } from './routes/marketing/about.tsx'
import { HomepageRoute } from './routes/marketing/homepage.tsx'
import { MarketingLayout } from './routes/marketing/layout.tsx'
import { SignupRoute } from './routes/signup.tsx'

export function AppRoutes() {
	return (
		<Routes>
			<Route element={<AppLayout />}>
				<Route path="/" element={<MarketingLayout />}>
					<Route index element={<HomepageRoute />} />
					<Route path="about" element={<AboutRoute />} />
				</Route>
				<Route path="recipients" element={<RecipientsRoute />} />
				<Route path="recipients/:id" element={<RecipientRoute />} />
			</Route>
			<Route path="/signup" element={<SignupRoute />} />
		</Routes>
	)
}
