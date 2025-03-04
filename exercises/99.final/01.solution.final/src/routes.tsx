import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	useRouteError,
} from 'react-router'
import { NotFoundRoute } from './routes/404.tsx'
import { AppLayout } from './routes/app/layout.tsx'
import { AboutRoute } from './routes/app/marketing/about.tsx'
import { HomepageRoute } from './routes/app/marketing/homepage.tsx'
import { MarketingLayout } from './routes/app/marketing/layout.tsx'
import { NewRecipientRoute } from './routes/app/new-recipient.tsx'
import {
	RecipientErrorBoundary,
	RecipientRoute,
} from './routes/app/recipient.tsx'
import { RecipientsRoute } from './routes/app/recipients.tsx'
import { SignupRoute } from './routes/signup.tsx'

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route errorElement={<UnknownErrorBoundary />}>
			<Route element={<AppLayout />}>
				<Route element={<MarketingLayout />}>
					<Route index element={<HomepageRoute />} />
					<Route path="about" element={<AboutRoute />} />
				</Route>
				<Route path="recipients" element={<RecipientsRoute />} />
				<Route path="recipients/new" element={<NewRecipientRoute />} />
				<Route
					path="recipients/:id"
					element={<RecipientRoute />}
					errorElement={<RecipientErrorBoundary />}
				/>
			</Route>
			<Route path="/signup" element={<SignupRoute />} />
			<Route path="*" element={<NotFoundRoute />} />
		</Route>,
	),
)

function UnknownErrorBoundary() {
	const error = useRouteError()

	return (
		<div className="bg-danger-background text-danger-foreground mt-20 flex h-full flex-col items-center justify-center px-8 py-12">
			<h1 className="text-2xl font-bold">Unknown error</h1>
			<p className="text-danger-foreground/80 text-sm">
				An unknown error occurred. Please try again later.
			</p>
			<pre className="text-danger-foreground/80 bg-danger-foreground/10 mt-4 max-h-[50vh] overflow-auto rounded-lg p-4 text-sm break-all whitespace-break-spaces">
				{error instanceof Error ? error.message : 'Unknown error'}
			</pre>
		</div>
	)
}
