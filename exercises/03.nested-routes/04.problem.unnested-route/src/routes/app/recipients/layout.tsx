import { Link, Outlet } from 'react-router'
import { ButtonLink } from '#src/components/button.tsx'
import { Icon } from '#src/components/icon.tsx'

export function RecipientsLayout() {
	return (
		<div className="container mx-auto flex min-h-0 flex-grow flex-col px-4 pt-4 md:px-8 md:pt-8">
			<div className="mb-8 flex items-center justify-between">
				<h1 className="text-4xl font-bold">
					<Link
						to="/recipients"
						className="text-foreground hover:no-underline focus:no-underline"
					>
						Recipients
					</Link>
				</h1>
				<ButtonLink
					to="/recipients/new"
					className="hidden items-center gap-2 md:flex"
				>
					<Icon name="Plus">Add New Recipient</Icon>
				</ButtonLink>
				<ButtonLink icon to="/recipients/new" className="md:hidden">
					<Icon name="Plus" />
				</ButtonLink>
			</div>

			<div className="bg-background-alt flex min-h-0 flex-1 flex-col">
				<div className="flex flex-1 overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>
	)
}
