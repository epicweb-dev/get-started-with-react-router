import {
	// 🐨 you'll need this
	// Link,
	Outlet,
} from 'react-router'
// 🐨 you'll need this
// import { ButtonLink } from '#src/components/button.tsx'

export function AppLayout() {
	// 🦉 this is actually the default layout for a Route.
	// If you don't give it an element prop, it'll just render an <Outlet />
	// 🐨 Bring in UI from the MarketingLayout component
	return <Outlet />
}
