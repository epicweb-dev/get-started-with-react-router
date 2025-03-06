import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router'
import { AppLayout } from './routes/app/layout.tsx'
import { AboutRoute } from './routes/app/marketing/about.tsx'
import { HomepageRoute } from './routes/app/marketing/homepage.tsx'
import { MarketingLayout } from './routes/app/marketing/layout.tsx'
import { RecipientIndexRoute } from './routes/app/recipients/index.tsx'
import { RecipientsLayout } from './routes/app/recipients/layout.tsx'
import { NewRecipientRoute } from './routes/app/recipients/new.tsx'
// 🐨 add an import for the SignupRoute

export const router = createBrowserRouter(
	createRoutesFromElements(
		// 🐨 wrap all the routes in a fragment
		<Route path="/" Component={AppLayout}>
			<Route Component={MarketingLayout}>
				<Route index Component={HomepageRoute} />
				<Route path="about" Component={AboutRoute} />
			</Route>
			<Route path="recipients" Component={RecipientsLayout}>
				<Route index Component={RecipientIndexRoute} />
				<Route path="new" Component={NewRecipientRoute} />
			</Route>
		</Route>,
		// 🐨 add a Route with a path of "/signup" that renders the SignupRoute
		// 💰 The SignupRoute should be a sibling of the AppLayout, not a child
	),
)
