import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router'
import { NotFoundRoute } from './routes/404.tsx'
import { AppLayout } from './routes/app/layout.tsx'
import { AboutRoute } from './routes/app/marketing/about.tsx'
import { HomepageRoute } from './routes/app/marketing/homepage.tsx'
import { MarketingLayout } from './routes/app/marketing/layout.tsx'
import { RecipientEditRoute } from './routes/app/recipients/$id.edit.tsx'
import {
	RecipientErrorBoundary,
	RecipientRoute,
} from './routes/app/recipients/$id.tsx'
import { RecipientIndexRoute } from './routes/app/recipients/index.tsx'
import { RecipientsLayout } from './routes/app/recipients/layout.tsx'
import { NewRecipientRoute } from './routes/app/recipients/new.tsx'
import { UnknownErrorBoundary } from './routes/error-boundary.tsx'
import { SignupRoute } from './routes/signup.tsx'

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route errorElement={<UnknownErrorBoundary />}>
			<Route path="/" element={<AppLayout />}>
				<Route element={<MarketingLayout />}>
					<Route index element={<HomepageRoute />} />
					<Route path="about" element={<AboutRoute />} />
				</Route>
				<Route path="recipients" element={<RecipientsLayout />}>
					<Route index element={<RecipientIndexRoute />} />
					<Route path="new" element={<NewRecipientRoute />} />
					<Route
						path=":id"
						element={<RecipientRoute />}
						errorElement={<RecipientErrorBoundary />}
					/>
					<Route
						path=":id/edit"
						element={<RecipientEditRoute />}
						errorElement={<RecipientErrorBoundary />}
					/>
				</Route>
			</Route>
			<Route path="/signup" element={<SignupRoute />} />
			<Route path="*" element={<NotFoundRoute />} />
		</Route>,
	),
)
