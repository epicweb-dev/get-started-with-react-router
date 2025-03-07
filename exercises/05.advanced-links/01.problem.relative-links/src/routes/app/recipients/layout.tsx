import { Link, Outlet } from 'react-router'
import { ButtonLink } from '#src/components/button.tsx'
import { Icon } from '#src/components/icon.tsx'
import { recipients } from '#src/data.ts'

export function RecipientsLayout() {
	return (
		<div className="container mx-auto flex min-h-0 flex-grow flex-col px-4 pt-4 md:px-8 md:pt-8">
			<div className="mb-8 flex items-center justify-between">
				<h1 className="text-4xl font-bold">
					<Link
						// 🐨 make this relative to the current route
						to="/recipients"
						className="text-foreground hover:no-underline focus:no-underline"
					>
						Recipients
					</Link>
				</h1>
				<ButtonLink
					// 🐨 make this relative to the current route
					to="/recipients/new"
					className="hidden items-center gap-2 md:flex"
				>
					<Icon name="Plus">Add New Recipient</Icon>
				</ButtonLink>
				<ButtonLink
					icon
					// 🐨 make this relative to the current route
					to="/recipients/new"
					className="md:hidden"
				>
					<Icon name="Plus" />
				</ButtonLink>
			</div>

			<div className="bg-background-alt flex min-h-0 flex-1 flex-col md:flex-row md:pr-4">
				<div className="flex flex-col border-b-2 p-4 md:border-r-2 md:border-b-0">
					{recipients.slice(0, 3).map((recipient) => (
						<Link
							key={recipient.id}
							// 🐨 make this relative to the current route
							to={`/recipients/${recipient.id}`}
							className="hover:bg-background flex items-center gap-2 overflow-x-auto text-xl md:px-2"
						>
							<div className="flex items-center gap-1">
								{recipient.name}
								{recipient.messages.some(
									(m) => m.status === 'scheduled',
								) ? null : (
									<Icon
										name="ExclamationCircle"
										className="text-danger-foreground"
										title="no messages scheduled"
									/>
								)}
							</div>
						</Link>
					))}
					{recipients.length === 0 && (
						<div className="bg-warning-background text-warning-foreground px-4 py-2 text-sm">
							No recipients found. Add one to get started.
						</div>
					)}
				</div>
				<div className="flex flex-1 overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>
	)
}
