import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router'
import { AppLayout } from './routes/app/layout.tsx'
import { AboutRoute } from './routes/app/marketing/about.tsx'
import { HomepageRoute } from './routes/app/marketing/homepage.tsx'
import { MarketingLayout } from './routes/app/marketing/layout.tsx'
import { NewRecipientRoute } from './routes/app/new-recipient.tsx'
import { RecipientsRoute } from './routes/app/recipients.tsx'

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<AppLayout />}>
			<Route element={<MarketingLayout />}>
				<Route index element={<HomepageRoute />} />
				<Route path="about" element={<AboutRoute />} />
			</Route>
			<Route path="recipients" element={<RecipientsRoute />} />
			<Route path="recipients/new" element={<NewRecipientRoute />} />
		</Route>,
	),
)
