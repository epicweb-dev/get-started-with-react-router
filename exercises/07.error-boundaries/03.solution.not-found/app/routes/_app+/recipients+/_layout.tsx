import clsx from 'clsx'
import { Link, NavLink, Outlet } from 'react-router'
import { ButtonLink } from '#app/components/button.tsx'
import { Icon } from '#app/components/icon.tsx'
import { recipients } from '#app/data.ts'

export function RecipientsLayout() {
	return (
		<div className="container mx-auto flex min-h-0 flex-grow flex-col px-4 pt-4 md:px-8 md:pt-8">
			<div className="mb-8 flex items-center justify-between">
				<h1 className="text-4xl font-bold">
					<Link
						to="."
						className="text-foreground hover:no-underline focus:no-underline"
					>
						Recipients
					</Link>
				</h1>
				<ButtonLink to="new" className="hidden items-center gap-2 md:flex">
					<Icon name="Plus">Add New Recipient</Icon>
				</ButtonLink>
				<ButtonLink icon to="new" className="md:hidden">
					<Icon name="Plus" />
				</ButtonLink>
			</div>

			<div className="bg-background-alt flex min-h-0 flex-1 flex-col">
				<div className="flex flex-col gap-4 overflow-visible border-b-2 py-4 pr-4 pl-1">
					<details
						className="relative"
						onBlur={(e) => {
							const relatedTarget = e.relatedTarget
							if (!e.currentTarget.contains(relatedTarget)) {
								const el = e.currentTarget
								// seems to cause the browser to crash if relatedTarget is null
								// (like clicking within the details, but not on anything in particular)
								// so we wrap it in a requestAnimationFrame and it closes fine.
								requestAnimationFrame(() => {
									el.removeAttribute('open')
								})
							}
						}}
						onKeyDown={(e) => {
							if (e.key === 'Escape') {
								e.currentTarget.removeAttribute('open')
							}
						}}
					>
						<summary className="hover:bg-background-alt-hover cursor-pointer px-2 py-1">
							Select recipient
						</summary>
						<div className="bg-background-alt absolute top-full left-0 z-10 mt-1 max-w-full min-w-64 border p-2 shadow-lg">
							{recipients.map((recipient) => (
								<NavLink
									key={recipient.id}
									to={recipient.id}
									className={({ isActive }) =>
										clsx(
											'hover:bg-background flex items-center gap-2 overflow-x-auto text-xl',
											isActive ? 'underline' : '',
										)
									}
									onClick={(e) => {
										e.currentTarget.closest('details')?.removeAttribute('open')
									}}
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
									)}
								</NavLink>
							))}
							{recipients.length === 0 && (
								<div className="bg-warning-background text-warning-foreground px-4 py-2 text-sm">
									No recipients found. Add one to get started.
								</div>
							)}
						</div>
					</details>
				</div>
				<div className="flex flex-1 overflow-auto">
					<Outlet />
				</div>
			</div>
		</div>
	)
}
