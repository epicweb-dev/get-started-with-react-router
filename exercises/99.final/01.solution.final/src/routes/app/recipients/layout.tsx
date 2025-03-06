import clsx from 'clsx'
import { NavLink, Outlet } from 'react-router'
import { ButtonLink } from '#src/components/button.tsx'
import { Icon } from '#src/components/icon.tsx'
import { recipients } from '#src/data.ts'

export function RecipientsLayout() {
	return (
		<div className="container mx-auto flex min-h-0 flex-grow flex-col px-4 pt-4 md:px-8 md:pt-8">
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
				<div className="flex max-h-32 min-h-32 flex-col gap-4 overflow-auto border-b-2 py-4 pr-4 pl-1 md:max-h-none md:min-w-32 md:border-r md:border-b-0">
					{recipients.map((recipient) => (
						<div key={recipient.id} className="flex items-center gap-2">
							<NavLink
								to={`/recipients/${recipient.id}`}
								className={({ isActive }) =>
									clsx('text-xl', isActive ? 'underline' : '')
								}
							>
								{({ isActive }) => (
									<div className="flex items-center gap-1">
										<Icon
											name="ArrowRight"
											size="sm"
											className={clsx(
												isActive ? 'opacity-100' : 'opacity-0',
												'transition-opacity',
											)}
										/>
										{recipient.name}
									</div>
								)}
							</NavLink>
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
					))}
				</div>
				<div className="flex flex-1 overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>
	)
}
