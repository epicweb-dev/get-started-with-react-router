import { NavLink, Outlet } from 'react-router'
import { ButtonLink } from '#src/components/button.tsx'
import { Icon } from '#src/components/icon.tsx'
import { recipients } from '#src/data.json'

export function RecipientsLayout() {
	return (
		<div className="container mx-auto flex min-h-0 flex-grow flex-col p-4 md:p-8">
			<div className="mb-8 flex items-center justify-between">
				<h1 className="text-4xl font-bold">Recipients</h1>
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

			<div className="bg-background-alt flex min-h-0 flex-1 flex-col md:flex-row">
				<div className="flex max-h-32 min-h-32 flex-col gap-4 overflow-auto border-b-2 px-8 py-4 md:max-h-none md:min-w-32 md:border-r md:border-b-0">
					{recipients.map((recipient) => (
						<NavLink
							key={recipient.id}
							to={`/recipients/${recipient.id}`}
							className={({ isActive }) =>
								isActive
									? 'flex items-center gap-2 text-xl underline'
									: 'text-xl'
							}
						>
							{({ isActive }) => (
								<div className="flex items-center gap-2">
									<Icon
										name="ArrowRight"
										size="sm"
										className={isActive ? 'opacity-100' : 'opacity-0'}
									/>
									{recipient.name}
								</div>
							)}
						</NavLink>
					))}
				</div>
				<div className="flex flex-1">
					<Outlet />
				</div>
			</div>
		</div>
	)
}
