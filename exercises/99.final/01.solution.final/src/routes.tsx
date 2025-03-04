import { createBrowserRouter } from 'react-router'
import { AppLayout } from './routes/app/layout.tsx'
import { AboutRoute } from './routes/app/marketing/about.tsx'
import { HomepageRoute } from './routes/app/marketing/homepage.tsx'
import { MarketingLayout } from './routes/app/marketing/layout.tsx'
import { RecipientRoute } from './routes/app/recipient.tsx'
import { RecipientsRoute } from './routes/app/recipients.tsx'
import { SignupRoute } from './routes/signup.tsx'

export const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				element: <MarketingLayout />,
				children: [
					{
						index: true,
						element: <HomepageRoute />,
					},
					{
						path: 'about',
						element: <AboutRoute />,
					},
				],
			},
			{
				path: 'recipients',
				element: <RecipientsRoute />,
			},
			{
				path: 'recipients/:id',
				element: <RecipientRoute />,
			},
		],
	},
	{
		path: '/signup',
		element: <SignupRoute />,
	},
])
